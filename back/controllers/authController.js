const User = require("../models/auth");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sentToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

exports.newUser = catchAsyncErrors( async (req, res, next) =>{
    const {name, email, password} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: '8jaiosgjasogjoapgjas',
            url: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png'
        }
    })

    sentToken(user, 201, res);
})

exports.loginUser = catchAsyncErrors( async (req, res, next) =>{
    const {email, password} = req.body;

    if(!email || !password){
        return next(new ErrorHandler("Por favor, ingrese un correo y contrasena", 400))
    }

    const user = await User.findOne({email}).select("+password")

    if(!user){
        return next(new ErrorHandler("Usuario no encontrado", 401))
    }

    const passwordOK = await user.comparePassword(password)

    if(!passwordOK){
        return next(new ErrorHandler("Contrasena invalida", 401))
    }

    sentToken(user, 200, res);
})

exports.logoutUser = catchAsyncErrors( async (req, res, next) =>{
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: "logged out correctly"
    })

})

exports.forgottenPassword = catchAsyncErrors( async (req, res, next) =>{
    const user = await User.findOne({email: req.body.email});

    if(!user){
        return next(new ErrorHandler("User non-existent"))
    } 
    const resetToken = user.generateResetPasswordToken();

    await user.save({validateBeforeSave: false})

    const resetUrl = `${req.protocol}://${req.get("host")}/api/usuarios/resetpassword/${resetToken}`;

    const msg = `This is your link to modify your account password:
        \n\n${resetUrl}\n\n
        If you didn't request it, please contact us at: cacaosfarmacy@outlook.com`;

    try{
        await sendEmail({
            email: user.email,
            subject: "Cacaos Company password recovery",
            msg
        })
        res.status(200).json({
            success: true,
            message: `Email sent to : ${user.email}`
        })
    }catch(error){
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({validateBeforeSave: false});
        return next(new ErrorHandler(error.message, 500));
    }
})

exports.resetPassword = catchAsyncErrors( async (req, res, next) => {
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");
    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: {$gt: Date.now()}
    })

    if(!user){
        return next(new ErrorHandler("Invalid token or already expired", 400));
    }
    if(req.body.password !== req.body.confirmPassword){
        return next(new ErrorHandler("Passwords doesn't match", 400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();
    sentToken(user, 200, res);
})

exports.getUserProfile = catchAsyncErrors( async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user
    })
})

exports.updatePassword = catchAsyncErrors( async (req, res, next) => {
    const user = await User.findById(req.user.id).select("+password");

    const isEqual = await user.comparePassword(req.body.oldPassword);

    if(!isEqual){
        return next(new ErrorHandler("The inserted password is not correct"), 401);
    }

    user.password = req.body.newPassword;
    await user.save();

    sentToken(user, 200, res);
})

exports.updateProfile = catchAsyncErrors( async (req, res, next) => {
    const newData = {
        name: req.body.name
    }

    const user = await User.findByIdAndUpdate(req.user.id, newData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        user
    })
})

//ADMIN SERVICES

exports.getAllUsers = catchAsyncErrors( async (req, res, next) => {
    const users = await User.find();

    res.status(200).json({
        success: true,
        users
    })
})

exports.getUserDetails = catchAsyncErrors( async (req, res, next) => {
    const user =  await User.findById(req.params.id);

    if(!user){
        return next(new ErrorHandler(`User with id: ${req.params.id} not found`));
    }

    res.status(200).json({
        success: true,
        user
    })
})

exports.updateUserDetails = catchAsyncErrors( async (req, res, next) => {
    const newData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role
    }

    const user = await User.findByIdAndUpdate(req.params.id, newData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        user
    })
})

exports.deleteUser = catchAsyncErrors( async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return next(new ErrorHandler("User not found", 404))
    } else {
        await user.remove();
        return res.status(200).json({
            success: true,
            message: "user deleted correctly"
        })
    }
})