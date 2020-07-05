const express = require("express");
const morgan = require("morgan");
const app = express();

const routers = require("./routes");
const routersApi = require("./routers_api");

// MiddleWares
app.use(morgan("dev"));
app.use(morgan("short"));
app.use(morgan("combined"));
/*
app.use(function(req, res, next) {
  console.log("Request URL is:", req.url);
  next();
});

app.use((req, res, next) => {
  console.log("Otra Función");
  next();
});
*/

// Settings

app.set("appName", "Mi primer server nodjs");
app.set("views", __dirname + "/views");
//console.log(__dirname);
app.set("view engine", "ejs");

// Routes
app.use(routers);
app.use("/api", routersApi);

app.get("*", (req, res) => {
  res.end("No Found");
});

app.listen(3000, () => {
  console.log("Server Listening");
  console.log("Nombre de la APP: ", app.get("appName"));
});
