import { Image } from '../models/imageModel';
import { ImageType } from '../types';
declare const _default: {
    getImages: () => Promise<Image[]>;
    getOneImage: (title: string) => Promise<Image>;
    addOneImage: (image: ImageType) => Promise<Image[]>;
    deleteImage: (image: ImageType) => Promise<Image[]>;
};
export default _default;
