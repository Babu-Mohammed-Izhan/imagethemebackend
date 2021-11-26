import express from "express";
import noteService from "../service/noteservice";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(noteService.getNotes());
});

router.post("/", (_req, res) => {
  res.send("Saving a note!");
});

export default router;
