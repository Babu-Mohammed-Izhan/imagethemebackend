/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from 'axios';
import express, { Request, Response } from 'express';
import { parseString } from '../utils';
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
  const apiKey = 'acc_3e5d16f9e4f3006';
  const apiSecret = '498e6d9f842f3eb8669809adffbff38a';

  const url =
    'https://api.imagga.com/v2/colors?image_url=' + encodeURIComponent(imgurl);

  void (async () => {
    try {
      const imgres = await axios.get(url, {
        auth: { username: apiKey, password: apiSecret },
      });
      const data = imgres.data.result.colors;

      const colormind = await axios.post('http://colormind.io/api/', {
        model: 'default',
        input: [
          [
            data.background_colors[0].r,
            data.background_colors[0].g,
            data.background_colors[0].b,
          ],
          [
            data.foreground_colors[0].r,
            data.foreground_colors[0].g,
            data.foreground_colors[0].b,
          ],
          [
            data.image_colors[0].r,
            data.image_colors[0].g,
            data.image_colors[0].b,
          ],
          'N',
          'N',
        ],
      });

      if (colormind.status == 200) {
        const newImages = await imageService.addOneImage({
          title: req.body.title,
          imgurl: imgurl,
          colorScheme1: `rgb(${colormind.data.result[0]})`,
          colorScheme2: `rgb(${colormind.data.result[1]})`,
          colorScheme3: `rgb(${colormind.data.result[2]})`,
          colorScheme4: `rgb(${colormind.data.result[3]})`,
          colorScheme5: `rgb(${colormind.data.result[4]})`,
        });

        res.json(newImages);
      }
    } catch (error) {
      res.send(Error(error.message));
    }
  })();
});

export default router;
