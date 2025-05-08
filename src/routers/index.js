const express = require("express");
const { viewRefresh, vote } = require("../controllers/equipment-finder");

const router = express.Router();
require("dotenv").config();

router.get("/", viewRefresh);
router.post("/vote", vote);

module.exports = router;
