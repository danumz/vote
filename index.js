const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const http = require("http");
const bodyParser = require("body-parser");
const router = require("./src/routers");

const path = require("path");
// const redis = require("./src/config/redis");

dotenv.config();

const app = express();
const port = process.env.PORT || 3100;

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

//app.use(cors(corsOptions));

app.set("views", path.join(__dirname, "/src/views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(bodyParser.json());
app.use(router);
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  console.log({ err });

  return res.status(500).json({ message: "Internal server error" });
});

server = http.createServer(app).listen(port, async function () {
  console.log(`Express server listening on port: ${port}`);
});
