const bodyParser = require("body-parser");
const morgan = require("morgan");
const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/rest-api-example", {
  useMongoClient: true
});.then

//		Settings
app.set("port", process.env.PORT || 3000);

//		MiddleWare
app.use(morgan("dev"));
app.use(bodyParser.json());

//		Start the Server
app.listen(app.get("port"), () => {
  console.log("Server on port ", app.get("port"));
});
