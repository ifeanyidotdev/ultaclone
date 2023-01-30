import express, { Router } from "express";
import upload from "../utility/upload";
import ProductController from "./product.controller";

const router: Router = express.Router();

router.post("/newProduct", upload.single("file"), ProductController.post);

export default router;
