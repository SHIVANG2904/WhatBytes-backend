import { db } from "../models/index.js";
const { Mapping } = db;

export const createMapping = async (req, res) => {
  try {
    const { patientId, doctorId } = req.body;
    const mapping = await Mapping.create({ patientId, doctorId });
    res.status(201).json({ message: "Mapping created ✅", mapping });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating mapping ❌", error: error.message });
  }
};

export const getMappings = async (req, res) => {
  try {
    const mappings = await Mapping.findAll();
    res.json({ mappings });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching mappings ❌", error: error.message });
  }
};

export const getMappingsByPatient = async (req, res) => {
  try {
    const patientId = req.params.patientId;
    const mappings = await Mapping.findAll({ where: { patientId } });
    res.json({ mappings });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error fetching patient mappings ❌",
        error: error.message,
      });
  }
};

export const deleteMapping = async (req, res) => {
  try {
    const mapping = await Mapping.findByPk(req.params.id);
    if (!mapping)
      return res.status(404).json({ message: "Mapping not found ❌" });
    await mapping.destroy();
    res.json({ message: "Mapping deleted ✅" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting mapping ❌", error: error.message });
  }
};
