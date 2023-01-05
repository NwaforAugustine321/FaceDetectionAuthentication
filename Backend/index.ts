import { Request, Response } from 'express';
import ExpressHttpRouter from './src/data-source/httpRouter/main';
import Server from './src/presentationLayer/app';

const PORT = 4000;

const app = new Server(new ExpressHttpRouter()).Serve(PORT);

app.Post('/', (req: Request, res: Response): void => {
  res.send('ok');
});
