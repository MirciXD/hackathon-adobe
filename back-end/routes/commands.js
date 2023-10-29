const express = require("express");
const router = express.Router();
const commandsController = require("../controllers").commands;

router.post("/addCommand",commandsController.addCommands);
router.get("/getCommands",commandsController.getAllCommands);
router.get("/getCommand/:id",commandsController.getCommandsByID);

module.exports = router;
