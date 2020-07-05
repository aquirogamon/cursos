const express = require("express");
const ejsMate = require("ejs-mate");
const path = require("path");

// Initializations
const app = express();

// Settings
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);

// Routes
app.use("/", require("./routes/index"));

// Server in listenning
app.listen(app.get("port"), () => {
  console.log("Server on Port", app.get("port"));
});
