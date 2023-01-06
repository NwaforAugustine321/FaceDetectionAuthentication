import { NextHandleFunction } from 'connect';
import express, { Router, Express } from 'express';
import cors from 'cors';
import { IHttpRouter, RequestHandler } from '../../presentationLayer/interface';

class ExpressHttpRouter implements IHttpRouter {
  private router: Router;
  private app: Express;
  private corsOptions = {
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PATCH', 'OPTIONS', 'PUT', 'DELETE'],
    optionsSuccessStatus: 200,
  };

  constructor() {
    this.app = express();
    this.router = express.Router();
  }

  GetServerInstance(): Express {
    return this.app;
  }

  Post(url: string, handler: RequestHandler): void {
    this.app.post(url, handler);
  }

  Get(url: string, handler: RequestHandler): void {
    this.app.post(url, handler);
  }

  Use(handler: NextHandleFunction, url?: string | undefined): void {
    if (url) {
      this.app.use(url, handler);
    }
    this.app.use(handler);
  }

  private ServerSettings(): void {
    this.Use(express.json());
    this.Use(cors(this.corsOptions));
    this.app.options('*', cors(this.corsOptions));
  }

  Serve(port: number): void {
    this.ServerSettings();
    this.app.listen(port, () => {
      console.log('FACE DETECTION STARTED SUCCESSFULLY');
    });
  }
}

export default ExpressHttpRouter;
