const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    process: {
      type: String,
    },
    recipe_id: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Process", schema);
