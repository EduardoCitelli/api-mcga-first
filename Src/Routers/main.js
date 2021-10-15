const { MainRoutes } = require("./routes");
const { getRoot } = require("./../controllers/index");
const mainRouter = require("express").Router();

mainRouter.get(MainRoutes.Main, getRoot);

module.exports = {
  mainRouter,
};
