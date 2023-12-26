const express = require("express");
const router = express.Router();
const { getHat_saatleri } = require("../controllers/api_controller");

router.get("/hat_saat", getHat_saatleri);

module.exports = router;
