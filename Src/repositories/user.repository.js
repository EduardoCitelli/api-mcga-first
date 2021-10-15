const { User } = require("./../models/index");

const UserRepository = {
  save: (user) => {
    console.log("repo: " + JSON.stringify(user));
    return User.create({...user});
  },
  findAll: (filters) => {
    return User.find(filters).lean();
  },
  findById: (id) => {
    return User.findById(id).lean();
  },
  update: (id, user) => {
    return User.updateOne({ _id: id }, user);
  },
  delete: (id) => {
    return User.findByIdAndDelete(id);
  },
};

module.exports = UserRepository;