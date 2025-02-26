import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import cors from "cors";
import movieRouter from "./routes/movieRoute.js";
import userRouter from "./routes/userRoute.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json()); 
app.use(cors());

app.use("/api/movies", movieRouter);
app.use("/api/users", userRouter);

app.listen(3000, () => {
  connectDb();
  console.log(`Server is running on http://localhost:${PORT}`);
});
