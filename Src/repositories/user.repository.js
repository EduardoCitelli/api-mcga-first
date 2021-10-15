const { User } = require("./../models/index");

const UserRepository = {
  save: (user) => {
    return User.create({ ...user });
  },
  findAll: (filters) => {
    return User.find(filters).lean();
  },
  findById: (id) => {
    return User.findById(id).lean();
  },
  update: (id, user) => {
    return User.findByIdAndUpdate(id, user, { new: true });
  },
  delete: (id) => {
    return User.findByIdAndDelete(id);
  },
};

module.exports = UserRepository;