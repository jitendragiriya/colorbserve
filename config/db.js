const mongoose = require("mongoose");
const { MONGO_URL } = require("../constants");

const connectDB = async () => {
  await mongoose
    .connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    })
    .then(() => console.log("Database connected successfully."))
    .catch((err) => {
      console.log(err);
    });
};
module.exports = connectDB;
