# WhatBytes Backend

A full-featured **Healthcare Management Backend** built with **Node.js, Express, Sequelize, PostgreSQL**, and **JWT-based authentication**.  

It supports user registration, patient management, doctor management, and patient-doctor mappings with secure authentication.

---

## Table of Contents

- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Installation](#installation)  
- [Environment Variables](#environment-variables)  
- [Running the Server](#running-the-server)  
- [API Endpoints](#api-endpoints)  
- [Database Structure](#database-structure)  


---

## Features

- **User Authentication**: Register and login with JWT authentication  
- **Patient Management**: Add, view, update, and delete patients  
- **Doctor Management**: Add, view, update, and delete doctors  
- **Patient-Doctor Mappings**: Assign doctors to patients  
- **Secure Routes**: Only authenticated users can create/update/delete resources  

---

## Technologies Used

- **Backend:** Node.js, Express.js  
- **Database:** PostgreSQL, Sequelize ORM  
- **Authentication:** JWT, bcrypt.js  
- **Environment Management:** dotenv  

---

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/<your-username>/whatbytes-backend.git
cd whatbytes-backend
## Installation & Running the Server

### 1. Install Dependencies
```bash
npm install

2. Set up PostgreSQL Database
Create a database in pgAdmin or via psql.

Make sure the PostgreSQL server is running.

3. Configure Environment Variables
Create a .env file in the root directory with the following content:

env

PORT=5000
DB_NAME=whatbytes
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_HOST=localhost
JWT_SECRET=yourSecretKey

4. Running the Server
Development Mode (with nodemon):


npm run dev

Production Mode:


npm start
The server will run on http://localhost:5000 by default.



