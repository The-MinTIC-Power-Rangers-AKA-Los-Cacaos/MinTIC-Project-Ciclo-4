const User = require("../models/auth")
const jwt = require("jsonwebtoken")
const ErrorHandler = require("../utils/errorHandler")
const catchAsyncErrors = require("../middleware/catchAsyncErrors")

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies

    if (!token) {
        return next(new ErrorHandler("Debe inicar sesion para acceder a este recurso", 401))
    } else {
        const decodified = jwt.decode(token, process.env.JWT_SECRET);
        req.user = await User.findById(decodified.id);

        next();
    }
})

exports.authorizeRoles = (...roles) =>{
    return (req, res, next)=>{
        if(!roles.includes(req.user.role)){
            return next(new ErrorHandler(`Role (${req.user.role}) not authorized to be here`, 403));
        }
        next();
    }
}