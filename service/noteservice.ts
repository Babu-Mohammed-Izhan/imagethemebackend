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

const addOneNote = async (note: Notes): Promise<Notes> => {
  const newNote = await NoteModel.create(note);

  if (!newNote) {
    throw Error("Note in not available");
  }

  return newNote;
};

const updateNote = async (note: Notes): Promise<Notes> => {
  const updatedNote = await NoteModel.findOneAndUpdate(
    { title: note.title },
    note
  );

  if (!updatedNote) {
    throw Error("Note in not available");
  }

  return updatedNote;
};

const deleteNote = async (note: Notes): Promise<Notes> => {
  const deletedNote = await NoteModel.findOneAndDelete({ title: note.title });

  if (!deletedNote) {
    throw Error("Note in not available");
  }

  return deletedNote;
};

export default {
  getNotes,
  getOneNote,
  addOneNote,
  updateNote,
  deleteNote,
};
