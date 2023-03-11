const UserService = require("../services/UsersService");

class UserController {
  static findUsers = async (req, res, next) => {
    try {
      const data = await UserService.findUsers(next);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  static findUserById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await UserService.findUsersById(id, next);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  static createUser = async (req, res, next) => {
    try {
      const data = await UserService.createUser(req.body, next);
      res.status(201).json(data);
    } catch (err) {
      next(err);
    }
  };

  static updateUser = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { title } = req.body;
      const data = await UserService.updateUser({ title }, id);
      res.status(200).json({
        massage: "masokk",
        data: data.rows[0],
      });
    } catch (err) {}
  };

  static deleteUser = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await UserService.deleteUsers(id, next);
      if (data) {
        res.status(200).json({
          message: "Delete succesfuly",
          data,
        });
      } else {
        next({ name: "ErrorNotFound" });
      }
    } catch (err) {
      next(err);
    }
  };
}
module.exports = UserController;
