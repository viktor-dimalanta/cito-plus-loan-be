// @ts-ignore
import express from "express";
// @ts-ignore
import cors from "cors";
import dotenv from "dotenv";
import loanRoutes from "./routes/loan.routes"; // ✅ Correct import (default export)

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/loans", loanRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));