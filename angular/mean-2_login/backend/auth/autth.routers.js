const Users = require("./auth.controller");

module.exports = router => {
  router.post("/user/register", Users.createUser);
  router.post("/user/login", Users.loginUser);
};
