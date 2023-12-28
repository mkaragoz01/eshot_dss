const express = require("express");
const router = express.Router();
const {
  getHat_saatleri,
  getHat,
  getHat_sayi,
  getBoxChart1,
  getBoxChart2,
  getBoxChart3,
  getBoxChart4,
  getSehir_nufus,
  getTop_kullanim,
  getBaglantili,
} = require("../controllers/api_controller");

router.get("/hat_saat", getHat_saatleri);
router.get("/hat", getHat);
router.get("/hat_sayi", getHat_sayi);
router.get("/sehir_nufus", getSehir_nufus);
router.get("/top_kullanim", getTop_kullanim);
router.get("/baglantili", getBaglantili);

router.get("/box_chart", getBoxChart1);
router.get("/box_chart2", getBoxChart2);
router.get("/box_chart3", getBoxChart3);
router.get("/box_chart4", getBoxChart4);

module.exports = router;
