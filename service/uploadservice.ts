import { Image } from '../models/imageModel';
import { ImageType } from '../types';
import { getRepository } from 'typeorm';

const getImages = async () => {
  const imageRepository = getRepository(Image);
  const images = await imageRepository.find();
  return images;
};

const getOneImage = async (title: string) => {
  const imageRepository = getRepository(Image);
  const image = await imageRepository.findOne({ title: title });
  if (!image) {
    throw Error('Image in not available');
  }
  return image;
};

const addOneImage = async (image: ImageType) => {
  const imageRepository = getRepository(Image);
  const imageTemp = new Image();
  imageTemp.title = image.title;
  imageTemp.imgurl = image.imgurl;
  imageTemp.colorScheme1 = image.colorScheme1;
  imageTemp.colorScheme2 = image.colorScheme2;
  imageTemp.colorScheme3 = image.colorScheme3;
  imageTemp.colorScheme4 = image.colorScheme4;
  imageTemp.colorScheme5 = image.colorScheme5;

  await imageRepository.save(imageTemp);
  console.log('Image has been saved');

  const newimages = await imageRepository.find();

  if (!newimages) {
    throw Error('Image in not available');
  }

  return newimages;
};

// const updateImage = async (image: ImageType) => {
//   const imageToUpdate = await imageRepository.findOne({ title: image.title });
//   imageToUpdate?.title = image.title;
//   imageToUpdate?.imgurl = image.imgurl;
//   imageToUpdate?.colorScheme1 = image.colorScheme1;
//   imageToUpdate?.colorScheme2 = image.colorScheme2;
//   imageToUpdate?.colorScheme3 = image.colorScheme3;
//   imageToUpdate?.colorScheme4 = image.colorScheme4;
//   imageToUpdate?.colorScheme5 = image.colorScheme5;

//   await imageRepository.save(imageToUpdate);
//   console.log('Image has been updated');

//   const newimages = await imageRepository.find();

//   if (!newimages) {
//     throw Error('Images in not available');
//   }

//   return newimages;
// };

const deleteImage = async (image: ImageType) => {
  const imageRepository = getRepository(Image);
  const imageToRemove = await imageRepository.findOne({ title: image.title });
  if (imageToRemove) {
    await imageRepository.remove(imageToRemove);
    console.log('Image has been deleted');
  } else {
    throw Error('Image not found');
  }

  const newimages = await imageRepository.find();

  if (!newimages) {
    throw Error('Images are not available');
  }

  return newimages;
};

export default {
  getImages,
  getOneImage,
  addOneImage,
  deleteImage,
};
