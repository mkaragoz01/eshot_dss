const express = require("express");
const app = express();
const main_router = require("./routers/main_router");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();

app.use(express.static(path.join(__dirname, "/views")));

app.use("/", main_router);

const port = process.env.PORT;
app.listen(port);
