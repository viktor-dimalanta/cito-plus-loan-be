// @ts-ignore
import express from "express";
// @ts-ignore
import cors from "cors";
import loanRoutes from "./routes/loan.routes"; // ✅ Correct import (default export)

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/loans", loanRoutes);

// Default route
// @ts-ignore
app.get("/", (req, res) => {
  res.send("Loan Application API is running...");
});

export default app; // ✅ Ensure `app` is exported properly
