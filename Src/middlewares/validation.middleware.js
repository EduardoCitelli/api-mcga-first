const validateEntity = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    res.status(400).send({
      message: "bad request",
      error: error.details.map((x) => x.message).toString(),
    });

    return;
  }

  req.body = value;
  next();
};

const validateParameter = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.params, { abortEarly: false });

  if (error) {
    res.status(400).send({
      message: "bad request",
      error: error.details.map((x) => x.message).toString(),
    });

    return;
  }

  req.params = value;
  next();
};

module.exports = {
  validateEntity,
  validateParameter
};
