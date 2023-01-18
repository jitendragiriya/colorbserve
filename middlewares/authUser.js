const ErrorHandler = require('../utils/errorhander')
const catchAsyncErrors = require('./catchAsyncErrors')

const jwt = require('jsonwebtoken')
const User = require('../models/User')

// user is logged in or not

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
    // const { token } = req.header.x-auth-token;
    console.log(req.header)
    return;
    
    if (!token) {
        return next(new ErrorHandler("Please Login to access this resource", 401));
    }
    const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = await User.findById(decodedData.id);

    next();
});
