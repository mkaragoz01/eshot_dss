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
