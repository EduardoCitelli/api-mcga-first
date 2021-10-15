const { Router } = require("express");
const { getRoot } = require("./../controllers/index");
const { MainRoutes } = require("./routes");

const mainRouter = Router();

mainRouter.get(MainRoutes.Main, getRoot);

module.exports = {
  mainRouter,
};
