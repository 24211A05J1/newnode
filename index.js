import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";    
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


dotenv.config();
const server = express();
server.use(express.static(path.join(__dirname, 'public')));
const port = process.env.PORT || 5000;
const mongoURI = process.env.mongoURI;

server.use(express.json());
server.use(morgan("dev"));
//cors is also a middleware
//server.use(middleware)
server.use(cors());

server.get("/", (req, res) => {
    res.json({ message: "Working" });
});

server.use("/users", userRoutes);

server.use((err, req, res, next) => {
    console.error("error");
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
});

mongoose.connect(mongoURI)
    .then(() => {
        console.log("db connected");
        server.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });


server.listen(3000,() => {
    console.log("Server running at port 3000");
});