import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });
import express from "express";
import cors from "cors";
import uploadRouter from "./controller/upload";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(`${process.env.MONGO_URL}`)
  .then(() => {
    console.log("connected to MongoDB database");
  })
  .catch((err) => {
    console.log("error connecting to MongoDB: ", err.message);
  });

const PORT = 3001;

app.use("/api/upload", uploadRouter);

app.get("/api/ping", (_req, res) => {
  res.send("pong");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
