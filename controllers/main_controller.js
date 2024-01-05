const dbConn = require("../db/mysql_connect");

exports.postHat = (req, res) => {
  const hatNumarasi = req.body.hatNumarasi;
  const hatIsmi = req.body.hatIsmi;
  const ilceId = req.body.ilceId;

  let mappedIlceId;

  switch (ilceId) {
    case "Aliağa":
      mappedIlceId = 1;
      break;
    case "Balçova":
      mappedIlceId = 2;
      break;
    case "Bayındır":
      mappedIlceId = 3;
      break;
    case "Bayraklı":
      mappedIlceId = 4;
      break;
    case "Bergama":
      mappedIlceId = 5;
      break;
    case "Beydağ":
      mappedIlceId = 6;
      break;
    case "Bornova":
      mappedIlceId = 7;
      break;
    case "Buca":
      mappedIlceId = 8;
      break;
    case "Çeşme":
      mappedIlceId = 9;
      break;
    case "Çiğli":
      mappedIlceId = 10;
      break;
    case "Dikili":
      mappedIlceId = 11;
      break;
    case "Foça":
      mappedIlceId = 12;
      break;
    case "Gaziemir":
      mappedIlceId = 13;
      break;
    case "Güzelbahçe":
      mappedIlceId = 14;
      break;
    case "Karabağlar":
      mappedIlceId = 15;
      break;
    case "Karaburun":
      mappedIlceId = 16;
      break;
    case "Karşıyaka":
      mappedIlceId = 17;
      break;
    case "Kemalpaşa":
      mappedIlceId = 18;
      break;
    case "Kınık":
      mappedIlceId = 19;
      break;
    case "Kiraz":
      mappedIlceId = 20;
      break;
    case "Konak":
      mappedIlceId = 21;
      break;
    case "Menderes":
      mappedIlceId = 22;
      break;
    case "Menemen":
      mappedIlceId = 23;
      break;
    case "Narlıdere":
      mappedIlceId = 24;
      break;
    case "Ödemiş":
      mappedIlceId = 25;
      break;
    case "Seferihisar":
      mappedIlceId = 26;
      break;
    case "Selçuk":
      mappedIlceId = 27;
      break;
    case "Tire":
      mappedIlceId = 28;
      break;
    case "Torbalı":
      mappedIlceId = 29;
      break;
    case "Urla":
      mappedIlceId = 30;
      break;
    default:
      mappedIlceId = null;
  }

  // Check if ilceId is not found
  if (mappedIlceId === null) {
    res.status(400).send("Invalid ilceId");
    return;
  }

  // MySQL sorgusu
  const sql = "INSERT INTO hatlar (h_id, h_ad, ilce_id) VALUES (?, ?, ?)";
  const values = [hatNumarasi, hatIsmi, mappedIlceId];

  // Sorguyu çalıştır
  dbConn.query(sql, values, (err, result) => {
    if (err) {
      console.error("MySQL hatası: " + err.message);
      res.status(500).send("Veri kaydetme hatası: " + err.sqlMessage);
      return;
    }
    res.redirect("/table");
  });
};
