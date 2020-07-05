import { Router } from "express";
const router = Router();

router.get("/api", function(req, res) {
  res.send(`The API documentation`);
});

export default router;
