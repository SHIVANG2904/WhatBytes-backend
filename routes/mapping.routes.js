import express from "express";
import {
  createMapping,
  getMappings,
  getMappingsByPatient,
  deleteMapping,
} from "../controllers/mapping.controller.js";

const router = express.Router();

router.post("/", createMapping);
router.get("/", getMappings);
router.get("/:patientId", getMappingsByPatient);
router.delete("/:id", deleteMapping);

export default router; 
