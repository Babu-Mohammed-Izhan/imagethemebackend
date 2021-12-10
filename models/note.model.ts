import { Notes } from "../types";
import { Schema, model } from "mongoose";

const noteSchema = new Schema<Notes>({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

const NoteModel = model<Notes>("Note", noteSchema);

export default NoteModel;
