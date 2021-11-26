import express from "express";
import cors from "cors";
import noteRouter from "./routes/note";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

app.use("/api/note", noteRouter);

app.get("/api/ping", (_req, res) => {
  res.send("pong");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
