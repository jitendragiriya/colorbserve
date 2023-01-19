const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Recipe = require("../models/recipe");

//get all recipe
exports.getAllRecipies = catchAsyncErrors(async (req, res) => {
  const datas = await Recipe.find({ creator_id: req.query.creator_id });
  res.status(200).json(datas);
});
