import express from "express";
import AuthController from "../controllers/AuthController.js";

const router = express.Router();

router.post("/phone", AuthController.activate);


export default router;
