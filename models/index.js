import { Sequelize, DataTypes } from "sequelize";
import dotenv from "dotenv";

import UserModel from "./user.js";
import PatientModel from "./patient.js";
import DoctorModel from "./doctor.js";
import MappingModel from "./mapping.js";

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: false,
  }
);

export const User = UserModel(sequelize, DataTypes);
export const Patient = PatientModel(sequelize, DataTypes);
export const Doctor = DoctorModel(sequelize, DataTypes);
export const Mapping = MappingModel(sequelize, DataTypes);

const models = { User, Patient, Doctor, Mapping };

Object.values(models).forEach((model) => {
  if (model.associate) model.associate(models);
});

export const db = { sequelize, ...models };

export default db;
