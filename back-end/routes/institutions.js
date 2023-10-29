const express = require("express");
const router = express.Router();
const institutionsController = require("../controllers").institutions;

router.post("/addInstitution",institutionsController.addInstitutions);
router.get("/getInstitutions",institutionsController.getAllInstitutions);
router.get("/getInstitution/:id",institutionsController.getInstitutionByID);


module.exports = router;
