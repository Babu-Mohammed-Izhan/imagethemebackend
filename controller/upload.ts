import axios from "axios";
import express, { Request, Response } from "express";
import { parseString } from "../utils";
import imageService from "../service/uploadservice";

const router = express.Router();

router.get("/", (_req: Request, res: Response) => {
  res.status(200).send(imageService.getImages());
});

router.post("/", (req: Request, _res: Response) => {
  const imgurl: string = parseString(req.body.url);
  const apiKey = "&lt;replace-with-your-api-key&gt;";
  const apiSecret = "&lt;replace-with-your-api-secret&gt;";

  const url =
    "https://api.imagga.com/v2/colors?image_url=" + encodeURIComponent(imgurl);

  axios
    .post(url, { username: apiKey, password: apiSecret })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err.response.body);
    });
});

export default router;
