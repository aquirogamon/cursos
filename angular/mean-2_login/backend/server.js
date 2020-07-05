"use strict";

const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./auth/autth.routers");
const properties = require("./config/properties");
const DB = require("./config/db");

// Start DataBase
DB();

const app = express();
const router = express.Router();

// Body Parser JSON
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

// Routes
app.use(cors());
app.use("/api", router);
authRoutes(router);
router.get("/", (req, res) => {
  res.send("Hello from home");
});
app.use(router);

// start the server
app.listen(properties.PORT, () => {
  console.log("server on port ", properties.PORT);
});
