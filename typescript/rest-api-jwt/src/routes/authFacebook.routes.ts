import { Router } from "express";
import passport from "passport";
const router = Router();

router.get("/api", function(req, res) {
  res.send(`The API documentation`);
});
router.get(
  "/auth/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);
router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/api" }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/api");
  }
);

router.get("/verify", (req, res) => {
  if (req.user) {
    console.log(req.user);
  } else {
    console.log("Not Auth");
  }
});
export default router;
