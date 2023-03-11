const Users = require("../models/users");

class UserRepository {
  static findUsers = async (next) => {
    try {
      const data = await Users.getUsers(next);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static findUsersById = async (id, next) => {
    try {
      const data = await Users.getUsersById(id, next);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static createMovie = async (params, next) => {
    try {
      const data = await Users.createMovie(params, next);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static deleteUser = async (id, next) => {
    try {
      return Users.deleteUser(id, next);
    } catch (err) {
      next(err);
    }
  };


}

module.exports = UserRepository;
