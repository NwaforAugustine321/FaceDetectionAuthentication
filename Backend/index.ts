import { Request, Response } from 'express';
import ExpressHttpRouter from './src/data-source/httpRouter/main';
import Server from './src/presentationLayer/app';
import LoginRoute from './src/presentationLayer/login';

const PORT = 4000;

const app = new Server(new ExpressHttpRouter()).Serve(PORT);

app.Use(LoginRoute(), '/login');
