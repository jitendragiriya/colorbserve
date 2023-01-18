const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Process = require("../models/process");

//get all process
exports.getAllProcess = catchAsyncErrors(async (req, res) => {
  const datas = await Process.find({ recipe_id: req.params.recipe_id });
  res.status(200).json(datas);
});
