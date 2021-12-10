/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Notes } from "../types";
import NoteModel from "../models/note.model";

const getNotes = async (): Promise<Notes[]> => {
  const notes = await NoteModel.find({});
  return notes;
};

const getOneNote = async (title: string): Promise<Notes> => {
  const note = await NoteModel.findOne({ title: title });
  if (!note) {
    throw Error("Note in not available");
  }
  return note;
};

export default {
  getNotes,
  getOneNote,
};
