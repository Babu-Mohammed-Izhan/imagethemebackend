import { Image } from "../types";
import ImageModel from "../models/Image.model";

const getImages = async (): Promise<Image[]> => {
  const Images = await ImageModel.find({});
  return Images;
};

const getOneImage = async (title: string): Promise<Image> => {
  const Image = await ImageModel.findOne({ title: title });
  if (!Image) {
    throw Error("Image in not available");
  }
  return Image;
};

const addOneImage = async (Image: Image): Promise<Image> => {
  const newImage = await ImageModel.create(Image);

  if (!newImage) {
    throw Error("Image in not available");
  }

  return newImage;
};

const updateImage = async (image: Image): Promise<Image> => {
  const updatedImage = await ImageModel.findOneAndUpdate(
    { title: image.title },
    image
  );

  if (!updatedImage) {
    throw Error("Image in not available");
  }

  return updatedImage;
};

const deleteImage = async (image: Image): Promise<Image> => {
  const deletedImage = await ImageModel.findOneAndDelete({
    title: image.title,
  });

  if (!deletedImage) {
    throw Error("Image in not available");
  }

  return deletedImage;
};

export default {
  getImages,
  getOneImage,
  addOneImage,
  updateImage,
  deleteImage,
};
