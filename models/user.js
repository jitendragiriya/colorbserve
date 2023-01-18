const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    password: {
      type: String,
    },
    userId: {
      type: String,
    },
  },
  { timestamps: true }
);


UserSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY,
      { expiresIn: process.env.JWT_EXPIRES_IN * 24 * 60 * 60 * 1000 })

}


module.exports = mongoose.model("User", UserSchema);
