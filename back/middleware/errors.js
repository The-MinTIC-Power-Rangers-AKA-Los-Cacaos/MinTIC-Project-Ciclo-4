const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    res.status(err.statusCode).json({
        success: false,
        message: err.stack
    })

    if(err.code === 11000){
        const msg = `duplicated key ${Object.keys(err.keyValue)}`;
        error = new ErrorHandler(msg, 400);
    }

    if(err.name === "JsonWebTokenError"){
        const msg = "Json Web Token invalid, try again";
        error = new ErrorHandler(msg, 400);
    }

    if(err.name = "TokenExpiredError"){
        const msg = "Json Web Token has expired, sign in again to renew it";
        error = new ErrorHandler(msg, 400);
    }
}