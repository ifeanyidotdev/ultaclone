import express, { Router } from "express";
import UserController from "./user.controller";


const router: Router = express.Router();

router.get("/register", UserController.get)
router.post("/register", UserController.post)

export default router;
