const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    items: {
      type: String,
    },
    amount: {
      type: String,
    },
    unit: {
      type: String,
    },
    recipe_id: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ingredient", schema);
