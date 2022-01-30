/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express, { Request, Response } from 'express';
import { getPaletteFromURL } from 'color-thief-node';
import { parseString, rgbToHex } from '../utils';
import imageService from '../service/uploadservice';

const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
  const newimages = imageService.getImages();
  newimages
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post('/', (req: Request, res: Response) => {
  const imgurl: string = parseString(req.body.url);

  void (async () => {
    const colorPallete = await getPaletteFromURL(imgurl, 5);
    const data = colorPallete.map((c) => {
      const hex = rgbToHex(c[0], c[1], c[2]);
      return hex;
    });

    const newImages = await imageService.addOneImage({
      title: req.body.title,
      imgurl: imgurl,
      colorScheme1: `${data[0]}`,
      colorScheme2: `${data[1]}`,
      colorScheme3: `${data[2]}`,
      colorScheme4: `${data[3]}`,
      colorScheme5: `${data[4]}`,
    });

    res.json(newImages);
  })();
});

export default router;
