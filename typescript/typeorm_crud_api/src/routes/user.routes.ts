import { Router } from "express";

const router = Router();
import {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller";

router.get("/users", getUsers);
router.post("/user", createUser);
router.get("/users/:_id", getUser);
router.put("/users/:_id", updateUser);
router.delete("/users/:_id", deleteUser);
/* ;
 */

export default router;
