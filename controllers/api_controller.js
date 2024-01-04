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

exports.chart1 = (req, res) => {
  try {
    dbConn.query(
      "SELECT hatlar.h_id,yillik_yolcu.y2020 as y20, yillik_yolcu.y2021 as y21\
      FROM yillik_yolcu, hatlar\
      WHERE yillik_yolcu.h_id=hatlar.h_id\
      ORDER BY yillik_yolcu.y_artis_orani DESC\
      LIMIT 10",
      (error, results) => {
        if (error) {
          console.error("MySQL connection error:", error);
          return res.status(500).json({ error: "Internal Server Error" });
        }

        const labels = results.map((result) => result.h_id);
        const dataValues = results.map((result) => result.y20 / 100000);
        const dataValues2 = results.map((result) => result.y21 / 100000);
        const data = {
          labels: labels,
          datasets: [
            {
              label: "2020",
              data: dataValues,
              backgroundColor: "rgba(0,181,233,0.8)",
              borderColor: "rgba(0,173,95,0.8)",
              pointHoverBackgroundColor: "#fff",
              borderWidth: 0,
            },
            {
              label: "2021",
              data: dataValues2,
              backgroundColor: "rgba(0,220,233,0.8)",
              borderColor: "rgba(0,220,95,0.8)",
              pointHoverBackgroundColor: "#fff",
              borderWidth: 0,
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

exports.chart2 = (req, res) => {
  try {
    dbConn.query(
      "SELECT ilceler.ilce_ad as ad,ilce_nufuslari.n2021 as nufus \
      FROM ilce_nufuslari, ilceler\
      WHERE ilce_nufuslari.ilce_id=ilceler.ilce_id\
      ORDER BY nufus DESC \
      LIMIT 5",
      (error, results) => {
        if (error) {
          console.error("MySQL connection error:", error);
          return res.status(500).json({ error: "Internal Server Error" });
        }

        const labels = results.map((result) => result.ad);
        const dataValues = results.map((result) => result.nufus / 1000);
        const backgroundColors = [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(201, 203, 207)",
          "rgb(54, 162, 235)",
        ];
        const data = {
          labels: labels,
          datasets: [
            {
              label: "Bağlantılı Hat",
              data: dataValues,
              backgroundColor: backgroundColors,
              borderColor: "rgba(0,173,95,0.8)",
              pointHoverBackgroundColor: "#fff",
              borderWidth: 0,
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

exports.chart3 = (req, res) => {
  try {
    dbConn.query(
      "SELECT hat_hareket_saati.hat_no as hat ,COUNT(hat_hareket_saati.hat_no) as sayi \
      FROM hat_hareket_saati GROUP BY hat_hareket_saati.hat_no \
      ORDER BY COUNT(hat_hareket_saati.hat_no) DESC LIMIT 5 ",
      (error, results) => {
        if (error) {
          console.error("MySQL connection error:", error);
          return res.status(500).json({ error: "Internal Server Error" });
        }

        const labels = results.map((result) => result.hat);
        const dataValues = results.map((result) => result.sayi / 100);
        const backgroundColors = ["rgba(255, 127, 14, 0.8)"];
        const data = {
          labels: labels,
          datasets: [
            {
              label: "Hat Hareket Sayısı",
              data: dataValues,
              backgroundColor: backgroundColors,
              borderColor: "rgba(0,173,95,0.8)",
              pointHoverBackgroundColor: "#fff",
              borderWidth: 0,
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

exports.chart4 = (req, res) => {
  try {
    dbConn.query(
      "SELECT ilceler.ilce_ad as ad, ilce_nufuslari.n_artis_orani as artis FROM ilceler, ilce_nufuslari\
      WHERE ilce_nufuslari.ilce_id=ilceler.ilce_id\
      ORDER BY ilce_nufuslari.n_artis_orani DESC LIMIT 5",
      (error, results) => {
        if (error) {
          console.error("MySQL connection error:", error);
          return res.status(500).json({ error: "Internal Server Error" });
        }

        const labels = results.map((result) => result.ad);
        const dataValues = results.map((result) => result.artis);
        const data = {
          labels: labels,
          datasets: [
            {
              label: "%",
              data: dataValues,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 205, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(54, 162, 235, 0.2)",
              ],
              borderColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
              ],
              borderWidth: 1,
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

exports.chart5 = (req, res) => {
  try {
    dbConn.query(
      "SELECT ilceler.ilce_ad as ad, ilce_nufuslari.n_artis_orani as artis FROM ilceler, ilce_nufuslari\
      WHERE ilce_nufuslari.ilce_id=ilceler.ilce_id\
      ORDER BY ilce_nufuslari.n_artis_orani ASC LIMIT 5",
      (error, results) => {
        if (error) {
          console.error("MySQL connection error:", error);
          return res.status(500).json({ error: "Internal Server Error" });
        }

        const labels = results.map((result) => result.ad);
        const dataValues = results.map((result) => result.artis);
        const data = {
          labels: labels,
          datasets: [
            {
              label: "%",
              data: dataValues,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 205, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(54, 162, 235, 0.2)",
              ],
              borderColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
              ],
              borderWidth: 1,
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

exports.chart6 = (req, res) => {
  try {
    dbConn.query(
      "SELECT hat_hareket_saati.hat_no as hat ,COUNT(hat_hareket_saati.hat_no) as sayi \
      FROM hat_hareket_saati GROUP BY hat_hareket_saati.hat_no \
      ORDER BY COUNT(hat_hareket_saati.hat_no) ASC LIMIT 5",
      (error, results) => {
        if (error) {
          console.error("MySQL connection error:", error);
          return res.status(500).json({ error: "Internal Server Error" });
        }

        const labels = results.map((result) => result.hat);
        const dataValues = results.map((result) => result.sayi);
        const data = {
          labels: labels,
          datasets: [
            {
              data: dataValues,
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(75, 192, 192)",
                "rgb(255, 205, 86)",
                "rgb(201, 203, 207)",
                "rgb(54, 162, 235)",
              ],
              hoverOffset: 4,
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

exports.chart7 = (req, res) => {
  try {
    dbConn.query(
      "SELECT ilceler.ilce_ad as ad,AVG(yillik_yolcu.y2021) as nufus, count(hatlar.h_id) as hat_sayi\
      FROM ilceler,yillik_yolcu,hatlar\
      WHERE ilceler.ilce_id=hatlar.ilce_id AND yillik_yolcu.h_id=hatlar.h_id\
      GROUP BY ilceler.ilce_id",
      (error, results) => {
        if (error) {
          console.error("MySQL connection error:", error);
          return res.status(500).json({ error: "Internal Server Error" });
        }

        const labels = results.map((result) => result.ad);
        const dataValues = results.map((result) => result.nufus / 100000);
        const dataValues2 = results.map((result) => result.hat_sayi);
        const data = {
          labels: labels,
          datasets: [
            {
              data: dataValues,
              fill: true,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgb(255, 99, 132)",
              pointBackgroundColor: "rgb(255, 99, 132)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgb(255, 99, 132)",
            },
            {
              data: dataValues2,
              fill: true,
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgb(54, 162, 235)",
              pointBackgroundColor: "rgb(54, 162, 235)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgb(54, 162, 235)",
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
