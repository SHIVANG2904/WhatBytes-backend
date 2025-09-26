// routes/doctor.routes.js
import express from "express";
import {
  createDoctor,
  getDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
} from "../controllers/doctor.controller.js";

import { authMiddleware } from "../middleware/auth.js"; 

const router = express.Router();

router.post("/", authMiddleware, createDoctor);
router.get("/", authMiddleware, getDoctors);
router.get("/:id", authMiddleware, getDoctorById);
router.put("/:id", authMiddleware, updateDoctor);
router.delete("/:id", authMiddleware, deleteDoctor);

export default router;
