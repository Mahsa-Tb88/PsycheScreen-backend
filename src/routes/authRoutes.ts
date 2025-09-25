import express from "express";
import AuthController from "../controllers/AuthController.js";

const router = express.Router();

router.post("/activate", AuthController.activate);


export default router;
