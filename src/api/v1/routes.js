import { Router } from "express";
import { createUser, getName } from "./controllers/user.js";

const router = Router();

router.get("/users", getName);
router.post("/new-user", createUser);

export default router;
