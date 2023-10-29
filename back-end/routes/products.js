const express = require("express");
const router = express.Router();
const productsController = require("../controllers").products;

router.post("/addProduct",productsController.addProduct);
router.get("/getProducts",productsController.getAllProducts);
router.get("/getProduct/:id",productsController.getProductById);

module.exports = router;
