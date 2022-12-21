const express = require("express");
const familyController = require("../controllers/family.controller")
const router = express.Router();

router.post("/addFamily", familyController.addFamily)

module.exports = router;