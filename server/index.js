import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./database/db.js";


import userRoutes from './routes/user.js';
import courseRoutes from './routes/course.js';
import adminRoutes from './routes/admin.js';

dotenv.config();
const app = express();

// Middlewares
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Server is working");
});


app.use("/api/users", userRoutes);     
app.use("/api/courses", courseRoutes);
app.use("/api/admin", adminRoutes);    

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
    connectDb();
});
