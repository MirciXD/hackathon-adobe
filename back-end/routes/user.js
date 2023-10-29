const express = require("express");
const router = express.Router();
const usersController = require("../controllers").user;

router.post("/Register",usersController.addUser);
router.post("/Login", usersController.login)
router.get("/getUsers",usersController.getAllUsers);
router.get("/getUser/:id",usersController.getUserById);

module.exports = router;
