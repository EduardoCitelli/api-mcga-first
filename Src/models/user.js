const { Schema, SchemaTypes } = require('mongoose')
require('mongoose-type-email');

const userModel = new Schema({
  name: {
      type: String,
      required: true
    },
  surname: {
    type: String,
    required: true
  },
  phone: String,
  email: {
    type: SchemaTypes.Email,
    required: true
  },
  username: {
    type: String,
    unique: true,
  },
});


module.exports = userModel;