const express = require("express");
const cors = require("cors");

const { mainRouter } = require("./routers/main");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(mainRouter);

module.exports = {
    app,
};