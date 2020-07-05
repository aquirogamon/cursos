const express = require("express");
const morgan = require("morgan");
const app = express();

function logger(req, res, next) {
  console.log("Request received");
  next();
}

// MiddleWares
app.use(express.json());
//app.use(logger);
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World");
});
/*
app.all("/*", (req, res, next) => {
  console.log("For here!!!");
  next();
});
*/
app.get("/user", (req, res) => {
  res.json({
    name: "Armando Miguel",
    lastname: "Quiroga Montero"
  });
});

app.post("/user/:id", (req, res) => {
  console.log(req.body);
  console.log(req.params);
  res.send("POST REQUEST RECEIVED");
});

app.put("/user/:id", (req, res) => {
  console.log(req.body);
  res.send("User ${req.params.id} updated");
});

app.delete("/user/:id", (req, res) => {
  res.send("User ${req.params} deleted!!!");
});

app.get("/about", (req, res) => {
  res.send("About me");
});

app.get("/contact", (req, res) => {
  res.send("For contact");
});

app.listen(3000, () => {
  console.log("Server on port 3000");
});
