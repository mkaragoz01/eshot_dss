const express = require("express");
const router = express.Router();
const path = require("path");

router.get("", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "index.html"));
});

router.get("/table", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "table.html"));
});

router.get("/map", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "map.html"));
});

module.exports = router;
