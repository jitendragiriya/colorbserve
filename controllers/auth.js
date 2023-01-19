
const ErrorHandler = require("../utils/errorhander");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const User = require("../models/user");

// 2. USER LOGIN 
exports.login = catchAsyncErrors(async (req, res, next) => {
  const { user_id, password , name} = req.body;

  if (!user_id || !password || !name) {
    return next(new ErrorHandler("Invalid credentials!"));
  }
  let data = await User.findOne({ user_id }).select("+password");

  if (!data) {
    return next(new ErrorHandler("Invalid credentials!", 401));
  }

  if (password !== data.password) {
    return next(new ErrorHandler("Invalid credentials!", 401));
  }

  sendToken(data, 200, res);
});



// GET USER DETAILS
exports.authUser = catchAsyncErrors(async (req, res, next) => {
  const data = await User.findById(req.user.id);

  res.status(200).json(data);
});
