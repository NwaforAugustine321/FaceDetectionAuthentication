import { NextHandleFunction } from 'connect';
import express, { Router, Express } from 'express';
import { IHttpRouter, RequestHandler } from '../../presentationLayer/interface';

class ExpressHttpRouter implements IHttpRouter {
  private router: Router;
  private app: Express;

  constructor() {
    this.app = express();
    this.router = express.Router();
  }

  Post(url: string, handler: RequestHandler): void {
    this.app.post(url, handler);
  }

  Get(url: string, handler: RequestHandler): void {
    this.app.post(url, handler);
  }

  Use(handler: NextHandleFunction, url?: string | undefined): void {
    if (url) {
      this.router.use(url, handler);
    }
    this.router.use(handler);
  }

  private ServerSettings(): void {
    this.Use(express.json());
  }

  Serve(port: number): void {
    this.ServerSettings();
    this.app.listen(port, () => {
      console.log('FACE DETECTION STARTED SUCCESSFULLY');
    });
  }
}

export default ExpressHttpRouter;
