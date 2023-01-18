const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    desc: {
      type: String,
    },
    image_url: {
      type: String,
    },
    creator_id: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipe", schema);
