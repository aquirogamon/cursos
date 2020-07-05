const User = require("./auth.dao");
const jsonwebtoken = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const SECRET_KEY = "secretkey_123_456!";

exports.createUser = (req, res, next) => {
  const newUser = {
    name: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email,
    username: req.body.username,
    password: bcryptjs.hashSync(req.body.password)
  };

  User.create(newUser, (err, user) => {
    console.log(err);
    if (err && err.code === 11000 && err.keyPattern.username)
      return res.status(409).send("Username already exists");
    if (err && err.code === 11000 && err.keyPattern.email)
      return res.status(409).send("Email already exists");
    if (err) return res.status(500).send("Server error!");
    const expiresIn = 24 * 60 * 60;
    const accessToken = jsonwebtoken.sign({ id: user.id }, SECRET_KEY, {
      expiresIn: expiresIn
    });
    const dataUser = {
      name: user.name,
      email: user.email,
      username: user.username,
      accessToken: accessToken,
      expiresIn: expiresIn
    };
    res.send({ dataUser });
  });
};

exports.loginUser = (req, res, next) => {
  const userData = {
    username: req.body.username,
    password: req.body.password
  };
  User.findOne({ username: userData.username }, (err, user) => {
    if (err) return res.status(500).send("Server error!");
    if (!user) {
      // email does not exist
      res.status(409).send({ message: "Something is wrong" });
    } else {
      const resultPassword = bcryptjs.compare(userData.password, user.password);
      if (resultPassword) {
        const expiresIn = 24 * 60 * 60;
        const accessToken = jsonwebtoken.sign({ id: userData.id }, SECRET_KEY, {
          expiresIn: expiresIn
        });
        const dataUser = {
          name: user.name,
          email: user.email,
          username: user.username,
          accessToken: accessToken,
          expiresIn: expiresIn
        };
        res.send({ dataUser });
      } else {
        // Password wrong
        res.status(409).send({ message: "Something is wrong" });
      }
    }
  });
};
