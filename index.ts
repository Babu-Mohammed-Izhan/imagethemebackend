import dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });
import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import uploadRouter from './controller/upload';
import { createConnection } from 'typeorm';
import { Image } from './models/imageModel';

const app = express();
app.use(cors());
app.use(express.json());

createConnection({
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'izhan',
  database: process.env.POSTGRES_DB || 'postgres',
  entities: [Image],
  synchronize: true,
})
  .then((_conn) => {
    console.log('Database Running');
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = 3001;

app.use('/api/upload', uploadRouter);

app.get('/api/ping', (_req, res) => {
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
