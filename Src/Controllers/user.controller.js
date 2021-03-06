const { userService } = require("../services");

const getAll = async (req, res) => {
  const users = await userService.getAll();

  res.status(200).json({
    message: "Success",
    data: users.map((item) => {
      const response = { id: item._id.toString(), ...item };

      delete response._id;
      delete response.__v;

      return response;
    }),
  });
};

const getOne = async (req, res) => {
  const { id } = req.params;

  const user = await userService.getOne(id);

  if (!user) {
    res.status(404).send({
      message: "Not found",
      error: "User not found",
    });

    return;
  }

  const response = createResponse(user);

  res.send({
    message: "Success",
    data: response,
  });
};

const create = async (req, res) => {
  const user = req.body;

  await userService.create(user)
    .then(data => {
      res.status(201).json({
        message: "Success",
        data: data,
      });

      return;
    })
    .catch(error => {
      if (error.code && error.code == 11000) {
        const field = Object.keys(error.keyValue);

        res.status(409).json({
          message: "error",
          error: `A user with that ${field} already exists.`
        });

        return;
      }

      res.status(500).json({
        message: "error",
        error: JSON.stringify(error).toString(),
      });
    });
};

const update = async (req, res) => {
  const { id } = req.params;

  const user = await userService.update(id, req.body);

  if (!user) {
    res.status(404).send({
      message: "Not found",
      error: "User not found",
    });
    return;
  }

  const response = createResponse(user._doc);

  res.send({
    message: "Success",
    data: response,
  });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  const user = await userService.delete(id);

  if (!user) {
    res.status(404).send({
      message: "Not found",
      error: "User not found",
    });

    return;
  }

  const response = createResponse(user._doc);

  res.send({
    message: "Success",
    data: response,
  });
};

module.exports = {
  create,
  getAll,
  getOne,
  delete: deleteUser,
  update,
};

function createResponse(user) {
  const response = {
    id: user._id.toString(),
    ...user,
  };

  delete response._id;
  delete response.__v;

  return response;
}
