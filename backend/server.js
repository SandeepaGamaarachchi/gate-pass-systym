import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import requestRoutes from "./routes/requestRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import itemRoutes from "./routes/itemRoutes.js";
import myReceiptRoutes from "./routes/myReceiptRoutes.js";
import approveRoutes from "./routes/approvalRoutes.js";
import verifyRoutes from "./routes/verifyRoutes.js";
import dispatchRoutes from "./routes/dispatchroutes.js";
import adminRouters from "./routes/adminRoutes.js";
import receiveRoutes from "./routes/receiveRoutes.js";
import emailRoutes from "./routes/emailRoutes.js";

mongoose.set('strictQuery', false);

dotenv.config();
connectDB();

// Initialize Express
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/users', userRoutes);
app.use('/api/item', itemRoutes);
app.use('/api/reicept', myReceiptRoutes);
app.use('/api/approve', approveRoutes);
app.use('/api/verify', verifyRoutes);
app.use('/api/dispatch', dispatchRoutes);
app.use('/api/admin', adminRouters);
app.use('/api/receive', receiveRoutes);
app.use('/api/email', emailRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
