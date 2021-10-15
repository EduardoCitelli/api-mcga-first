const { userRepository } = require("./../repositories/index");

const create = async (user) => {
  const entity = await userRepository.save(user);

  const response = { id: entity._id.toString(), ...entity._doc };

  delete response._id;
  delete response.__v;

  return response;
};

const getAll = async () => {
  const users = await userRepository.findAll();
  return users;
};

const getOne = async (id) => {
  const user = await userRepository.findById(id);
  return user;
};

const deleteInternal = async (id) => {
  const user = await userRepository.delete(id);
  return user;
};

const update = async (id, data) => {
  const user = await userRepository.update(id, data);
  return user;
};

module.exports = {
  create,
  getAll,
  getOne,
  delete: deleteInternal,
  update,
};