const app = require("./app");
const connectDB = require("./config/db");
const { PORT } = require("./constants");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

connectDB();

const ErrorHandler = require("./middlewares/error");

app.use(ErrorHandler);

const port =  PORT || 5000;

app.listen(port, () => {
  console.log(`server is running on port http://localhost:${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log(`error:${err.message}`);
  console.log("sutting down the server due to unhandled promis rejection.");
  server.close(() => {
    process.exit(1);
  });
});
