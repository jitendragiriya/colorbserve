const express = require("express");
const app = express();
const cors = require("cors");
const { CORS_URL } = require("./constants");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: CORS_URL,
    credentials: true,
    optionSuccessStatus: 200,
  })
);

app.use("/api", require("./routes/allRoutes"));

app.get("/", (req, res) => {
  res.send("Be happy server is running...👍 ");
});

module.exports = app;
