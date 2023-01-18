const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Ingredient = require("../models/ingredient");

//get all ingredients
exports.getAllIngredients = catchAsyncErrors(async (req, res) => {
  const datas = await Ingredient.find({ recipe_id: req.params.recipe_id });
  res.status(200).json(datas);
});
