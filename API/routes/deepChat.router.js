import express from "express";
import { chatWithDeepAI } from "../controller/deepchat.controller.js";

const router = express.Router();

router.post("/chat", chatWithDeepAI);

export default router;