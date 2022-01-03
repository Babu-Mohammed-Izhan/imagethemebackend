/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express, { Request, Response } from "express";
import noteService from "../service/noteservice";

const router = express.Router();

router.get("/", (_req: Request, res: Response) => {
  res.status(200).send(noteService.getNotes());
});

router.get("/:title", (req: Request, res: Response) => {
  const title = req.params.title;

  res.status(200).send(noteService.getOneNote(title));
});

router.post("/", (req: Request, res: Response) => {
  const note = {
    title: req.body.title,
    body: req.body.body,
    author: req.body.author,
  };

  const newNote = noteService.addOneNote(note);

  res.status(200).send(newNote);
});

router.delete("/", (req: Request, res: Response) => {
  const note = {
    title: req.body.title,
    body: req.body.body,
    author: req.body.author,
  };

  res.status(200).send(noteService.deleteNote(note));
});

router.patch("/", (req: Request, res: Response) => {
  const note = {
    title: req.body.title,
    body: req.body.body,
    author: req.body.author,
  };

  const newNote = noteService.updateNote(note);

  res.status(200).send(newNote);
});

export default router;
