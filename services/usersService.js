const UserRepository = require("../repositorys/userRepository");
class UserService {
  static findUsers = async (next) => {
    try {
      const data = await UserRepository.findUsers(next);
      return data;
    } catch (err) {
      next(err);
    }
  };
  static findUsersById = async (id, next) => {
    try {
      const data = await UserRepository.findUsersById(id, next);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static createUser = async (params, next) => {
    try {
      const data = await UserRepository.createUser(params, next);
      return data;
    } catch (err) {
      next(err);
    }
  };

  static deleteUsers = async (id, next) => {
    try {
      return UserRepository.deleteUsers(id, next);
    } catch (err) {
      next(err);
    }
  };
}
module.exports = UserService;
