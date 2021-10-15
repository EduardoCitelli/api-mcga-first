const mongoose = require('./../connections/mongoose');

const User = mongoose.model('User', userModel);

module.exports = {
  User,
};
