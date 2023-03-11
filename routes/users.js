const express = require("express");
const router = express.Router();
const usersController = require("../controllers/userControllers");

// users
router.get("/users", usersController.findUsers);
router.get("/users/:id", usersController.findUserById);
router.post("/users", usersController.createUser);
router.put("/users/:id", usersController.updateUser);
router.delete("/users/:id", usersController.deleteUser);
module.exports = router;
