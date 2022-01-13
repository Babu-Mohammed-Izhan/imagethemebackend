/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from 'axios';
import express, { Request, Response } from 'express';
import { parseString } from '../utils';
import imageService from '../service/uploadservice';

const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
  res.status(200).send(imageService.getImages());
});

router.post('/', (req: Request, res: Response) => {
  const imgurl: string = parseString(req.body.url);
  const apiKey = 'acc_3e5d16f9e4f3006';
  const apiSecret = '498e6d9f842f3eb8669809adffbff38a';

  const url =
    'https://api.imagga.com/v2/colors?image_url=' + encodeURIComponent(imgurl);

  axios
    .post(url, { username: apiKey, password: apiSecret })
    .then((imgres) => {
      const data = imgres.data.result.colors;
      console.log(data);

      axios
        .post('http://colormind.io/api/', {
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
        })
        .then((coloRes) => {
          console.log(coloRes);
          res.send(200).send(coloRes);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

export default router;
