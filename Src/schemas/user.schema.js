const Joi = require("joi");

const userSchema = Joi.object({
  name: Joi.string().required(),
  surname: Joi.string().required(),
  phone: Joi.string(),
  email: Joi.string().email().required(),
  username: Joi.string().required(),
}).strict();

const userIdSchema = Joi.object({
  id: Joi.string().length(24).hex().required(),
});

module.exports = {
  userSchema,
  userIdSchema,
};