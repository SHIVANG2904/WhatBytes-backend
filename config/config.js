import dotenv from "dotenv";

dotenv.config();

export const port = process.env.PORT || 5000;
export const jwtSecret = process.env.JWT_SECRET || "mySecretKey";
export const dbConfig = {
  name: process.env.DB_NAME || "healthcare",
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "password",
  host: process.env.DB_HOST || "localhost",
  dialect: "postgres",
};
