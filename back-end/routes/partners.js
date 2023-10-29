const express = require("express");
const router = express.Router();
const partnersController = require("../controllers").partners;
//const middleware = require("../controllers").middleware;


router.post("/addPartner",partnersController.addPartner);
router.get("/getPartners",partnersController.getAllPartners);
router.get("/getPartner/:id",partnersController.getPartnerByID);


module.exports = router;
