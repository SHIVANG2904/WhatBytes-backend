import { db } from "../models/index.js";
const { Doctor } = db;

export const createDoctor = async (req, res) => {
  try {
    const { name, specialization } = req.body;

    const userId = req.user.id;

    const doctor = await Doctor.create({ name, specialization, userId });
    res.status(201).json({ message: "Doctor created ✅", doctor });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating doctor ❌", error: error.message });
  }
};

export const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.findAll({
      where: { userId: req.user.id },
    });
    res.json({ doctors });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching doctors ❌", error: error.message });
  }
};

export const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findOne({
      where: { id: req.params.id, userId: req.user.id },
    });

    if (!doctor)
      return res.status(404).json({ message: "Doctor not found ❌" });

    res.json({ doctor });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching doctor ❌", error: error.message });
  }
};

export const updateDoctor = async (req, res) => {
  try {
    const { name, specialization } = req.body;

    const doctor = await Doctor.findOne({
      where: { id: req.params.id, userId: req.user.id },
    });

    if (!doctor)
      return res.status(404).json({ message: "Doctor not found ❌" });

    await doctor.update({ name, specialization });
    res.json({ message: "Doctor updated ✅", doctor });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating doctor ❌", error: error.message });
  }
};

export const deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findOne({
      where: { id: req.params.id, userId: req.user.id },
    });

    if (!doctor)
      return res.status(404).json({ message: "Doctor not found ❌" });

    await doctor.destroy();
    res.json({ message: "Doctor deleted ✅" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting doctor ❌", error: error.message });
  }
};
