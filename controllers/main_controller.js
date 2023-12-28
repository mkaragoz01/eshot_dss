const dbConn = require("../db/mysql_connect");

exports.postHat = (req, res) => {
  const hatNumarasi = req.body.hatNumarasi;
  const hatIsmi = req.body.hatIsmi;
  const ilceId = req.body.ilceId;

  // MySQL sorgusu
  const sql = "INSERT INTO hatlar (h_id, h_ad, ilce_id) VALUES (?, ?, ?)";
  const values = [hatNumarasi, hatIsmi, ilceId];

  // Sorguyu çalıştır
  dbConn.query(sql, values, (err, result) => {
    if (err) {
      console.error("MySQL hatası: " + err.message);
      res.status(500).send("Veri kaydetme hatası");
      return;
    }
    res.redirect("/table");
  });
};
