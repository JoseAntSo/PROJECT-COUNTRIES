const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const {saveData}= require("./savedata")
const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
saveData()
server.use(router);

module.exports = server;
