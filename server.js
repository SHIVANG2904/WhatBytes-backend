import dotenv from "dotenv";
import express from "express";

import db from "./models/index.js";

import authRoutes from "./routes/auth.routes.js";
import patientRoutes from "./routes/patient.routes.js";
import doctorRoutes from "./routes/doctor.routes.js";
import mappingRoutes from "./routes/mapping.routes.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/mappings", mappingRoutes);

db.sequelize
  .sync()
  .then(() => {
    console.log("Database connected & synced ✅");
  })
  .catch((err) => {
    console.error("Error syncing database ❌", err);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
