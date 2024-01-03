const express = require("express");
const router = express.Router();
const path = require("path");
const { postHat } = require("../controllers/main_controller");

router.get("", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "index.html"));
});

router.get("/table", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "table.html"));
});

router.post("/table/submit", postHat);

router.get("/calc", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "calc.html"));
});

router.post("/calc/submit");

module.exports = router;
