require("dotenv").config();
require("./connections/mongoose");
const express = require("express");
const cors = require("cors");

const { mainRouter, userRouter } = require("./routers/index");

const app = express();
app.use(express.json());
app.use(cors());
app.use(mainRouter, userRouter);

module.exports = {
  app,
};