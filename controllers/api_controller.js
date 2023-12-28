const dbConn = require("../db/mysql_connect");

exports.getHat_saatleri = (req, res) => {
  try {
    dbConn.query("CALL `hat_saatleri`();", (error, results) => {
      if (error) {
        console.error("MySQL connection error:", error);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }
      res.json({ message: results });
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getHat = (req, res) => {
  try {
    dbConn.query("SELECT * FROM hatlar", (error, results) => {
      if (error) {
        console.error("MySQL connection error:", error);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }
      res.json({ message: results });
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getHat_sayi = (req, res) => {
  try {
    dbConn.query(
      "SELECT COUNT(hatlar.h_id) as hat FROM hatlar",
      (error, results) => {
        if (error) {
          console.error("MySQL connection error:", error);
          res.status(500).json({ error: "Internal Server Error" });
          return;
        }
        res.json({ message: results });
      }
    );
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getSehir_nufus = (req, res) => {
  try {
    dbConn.query(
      "SELECT SUM(ilce_nufuslari.n2021) as nufus FROM ilce_nufuslari",
      (error, results) => {
        if (error) {
          console.error("MySQL connection error:", error);
          res.status(500).json({ error: "Internal Server Error" });
          return;
        }
        res.json({ message: results });
      }
    );
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getTop_kullanim = (req, res) => {
  try {
    dbConn.query(
      "SELECT SUM(yillik_yolcu.y2021) as yolcu FROM yillik_yolcu",
      (error, results) => {
        if (error) {
          console.error("MySQL connection error:", error);
          res.status(500).json({ error: "Internal Server Error" });
          return;
        }
        res.json({ message: results });
      }
    );
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getBaglantili = (req, res) => {
  try {
    dbConn.query(
      "SELECT COUNT(hat_baglanti.hat_no)as baglantili FROM hat_baglanti",
      (error, results) => {
        if (error) {
          console.error("MySQL connection error:", error);
          res.status(500).json({ error: "Internal Server Error" });
          return;
        }
        res.json({ message: results });
      }
    );
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getBoxChart1 = (req, res) => {
  try {
    dbConn.query(
      "SELECT ilceler.ilce_ad ,COUNT(hatlar.h_id) as hat_sayi\
      FROM hatlar, ilceler\
      WHERE ilceler.ilce_id=hatlar.ilce_id\
      GROUP BY ilceler.ilce_id",
      (error, results) => {
        if (error) {
          console.error("MySQL connection error:", error);
          return res.status(500).json({ error: "Internal Server Error" });
        }

        const labels = results.map((result) => result.ilce_ad);
        const dataValues = results.map((result) => result.hat_sayi);

        const data = {
          labels: labels,
          datasets: [
            {
              label: "Hat Sayısı",
              data: dataValues,
              backgroundColor: "rgba(255,255,255,.1)",
              borderColor: "rgba(255,255,255,.55)",
            },
          ],
        };

        res.json(data);
      }
    );
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getBoxChart2 = (req, res) => {
  try {
    dbConn.query(
      "SELECT ilceler.ilce_ad as ilce,ilce_nufuslari.n2021 as nufus\
      FROM ilceler,ilce_nufuslari\
      WHERE ilce_nufuslari.ilce_id=ilceler.ilce_id\
      GROUP BY ilceler.ilce_id\
      ORDER BY ilce_nufuslari.n2021 ASC",
      (error, results) => {
        if (error) {
          console.error("MySQL connection error:", error);
          return res.status(500).json({ error: "Internal Server Error" });
        }

        const labels = results.map((result) => result.ilce);
        const dataValues = results.map((result) => result.nufus);

        const data = {
          labels: labels,
          datasets: [
            {
              label: "İlçe Nüfus",
              data: dataValues,
              backgroundColor: "rgba(255,255,255,.1)",
              borderColor: "rgba(255,255,255,.55)",
            },
          ],
        };

        res.json(data);
      }
    );
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getBoxChart3 = (req, res) => {
  try {
    dbConn.query(
      "SELECT hatlar.h_ad as hat,yillik_yolcu.y2021 as yolcu\
      FROM yillik_yolcu, hatlar WHERE hatlar.h_id=yillik_yolcu.h_id\
      GROUP BY yillik_yolcu.h_id\
      ORDER BY yolcu DESC LIMIT 6",
      (error, results) => {
        if (error) {
          console.error("MySQL connection error:", error);
          return res.status(500).json({ error: "Internal Server Error" });
        }

        const labels = results.map((result) => result.hat);
        const dataValues = results.map((result) => result.yolcu);

        const data = {
          labels: labels,
          datasets: [
            {
              label: "Toplam Kullanım",
              data: dataValues,
              backgroundColor: "rgba(255,255,255,.1)",
              borderColor: "rgba(255,255,255,.55)",
            },
          ],
        };

        res.json(data);
      }
    );
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getBoxChart4 = (req, res) => {
  try {
    dbConn.query(
      "SELECT baglanti_tip.tip_ad as tip,COUNT(hat_baglanti.hat_no) as sayi\
      FROM baglanti_tip,hat_baglanti\
      WHERE baglanti_tip.tip_id=hat_baglanti.tip_id\
      GROUP BY baglanti_tip.tip_id",
      (error, results) => {
        if (error) {
          console.error("MySQL connection error:", error);
          return res.status(500).json({ error: "Internal Server Error" });
        }

        const labels = results.map((result) => result.tip);
        const dataValues = results.map((result) => result.sayi);

        const data = {
          labels: labels,
          datasets: [
            {
              label: "Bağlantılı Hatlar",
              data: dataValues,
              backgroundColor: "rgba(255,255,255,.1)",
              borderColor: "rgba(255,255,255,.55)",
            },
          ],
        };

        res.json(data);
      }
    );
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
