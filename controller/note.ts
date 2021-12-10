import express, { Request, Response } from "express";
import noteService from "../service/noteservice";

const router = express.Router();

router.get("/", (_req: Request, res: Response) => {
  res.send(noteService.getNotes());
});

router.get("/:title", (req: Request, res: Response) => {
  const title = req.params.title;

  res.send(noteService.getOneNote(title));
});

router.post("/", (_req: Request, res: Response) => {
  res.send("Saving a note!");
});

export default router;
