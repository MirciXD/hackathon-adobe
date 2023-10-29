const express = require("express");
const router = express.Router();
const UserRouter = require("./user")
const CommandsRouter = require("./commands")
const InstitutionsRouter = require("./institutions")
const PartnersRouter = require("./partners")
const ProductsRouter = require("./products")

router.use("/User", UserRouter)
router.use("/Commands", CommandsRouter)
router.use("/Institutions", InstitutionsRouter)
router.use("/Partners", PartnersRouter)
router.use("/Products", ProductsRouter)


module.exports = router;