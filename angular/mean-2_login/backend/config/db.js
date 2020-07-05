const mongoose = require("mongoose");
const dbURL = require("./properties").DB;

module.exports = () => {
  mongoose
    .connect(dbURL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
    .then(() => console.log("Mongo Connected on ", dbURL))
    .catch(err => console.log("Connection has error ${err}"));

  process.on("SIGINT", () => {
    mongoose.connection.close(() => {
      console.log("Mongo is disconned");
      process.exit(0);
    });
  });
};
