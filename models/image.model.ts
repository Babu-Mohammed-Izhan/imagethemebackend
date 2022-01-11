import { Image } from "../types";
import { Schema, model } from "mongoose";

const imageSchema = new Schema<Image>({
  title: {
    type: String,
    required: true,
  },
  imgurl: {
    type: String,
    required: true,
  },
  colorScheme1: {
    type: String,
    required: true,
  },
  colorScheme2: {
    type: String,
    required: true,
  },
  colorScheme3: {
    type: String,
    required: true,
  },
  colorScheme4: {
    type: String,
    required: true,
  },
  colorScheme5: {
    type: String,
    required: true,
  },
});

const ImageModel = model<Image>("Image", imageSchema);

export default ImageModel;
