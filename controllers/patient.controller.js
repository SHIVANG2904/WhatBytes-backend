import { db } from "../models/index.js";

const { Patient } = db;

export const createPatient = async (req, res) => {
  try {
    const { name, age, disease } = req.body;

 
    const userId = req.user.id;

    const patient = await Patient.create({ name, age, disease, userId });
    res.status(201).json({ message: "Patient created ✅", patient });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating patient ❌", error: error.message });
  }
};

export const getPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll({
      where: { userId: req.user.id },
    });
    res.json({ patients });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching patients ❌", error: error.message });
  }
};

export const getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findOne({
      where: { id: req.params.id, userId: req.user.id },
    });

    if (!patient)
      return res.status(404).json({ message: "Patient not found ❌" });

    res.json({ patient });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching patient ❌", error: error.message });
  }
};

export const updatePatient = async (req, res) => {
  try {
    const { name, age, disease } = req.body;

    const patient = await Patient.findOne({
      where: { id: req.params.id, userId: req.user.id },
    });

    if (!patient)
      return res.status(404).json({ message: "Patient not found ❌" });

    await patient.update({ name, age, disease });
    res.json({ message: "Patient updated ✅", patient });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating patient ❌", error: error.message });
  }
};

export const deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findOne({
      where: { id: req.params.id, userId: req.user.id },
    });

    if (!patient)
      return res.status(404).json({ message: "Patient not found ❌" });

    await patient.destroy();
    res.json({ message: "Patient deleted ✅" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting patient ❌", error: error.message });
  }
};
