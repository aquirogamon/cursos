import { Router } from "express";
import passport from "passport";
const router = Router();

router.post("/login", function(req, res, next) {
  passport.authenticate("ldapauth", { session: false }, function(
    err,
    user,
    info
  ) {
    console.log("Error: ", err);
    console.log("User: ", user);
    console.log("Info: ", info);
    if (err) {
      return next(err); // will generate a 500 error
    }
    // Generate a JSON response reflecting authentication status
    if (!user) {
      return res.send({ success: false, message: "authentication failed" });
    }
    return res.send({ success: true, message: "authentication succeeded" });
  })(req, res, next);
});
export default router;
