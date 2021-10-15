const { model } = require("mongoose");
const userModel = require("./user");

const User = model("User", userModel);

module.exports = {
  User,
};
