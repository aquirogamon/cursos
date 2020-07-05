const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    name: "Armando",
    lastname: "Quiroga"
  });
});

module.exports = router;
