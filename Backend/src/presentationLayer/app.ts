import { NextHandleFunction } from 'connect';
import { Express } from 'express';
import { IHttpRouter, RequestHandler } from './interface';

class Server {
  constructor(private app: IHttpRouter) {}

  get GetServerInstance(): IHttpRouter {
    return this.app;
  }

  Post(url: string, handler: RequestHandler): void {
    this.app.Post(url, handler);
  }

  Get(url: string, handler: RequestHandler): void {
    this.app.Get(url, handler);
  }

  Use(handler: NextHandleFunction, url?: string | undefined): void {
    if (url) {
      this.app.Use(handler, url);
    }
    this.app.Use(handler);
  }

  Serve(port: number): Server {
    this.app.Serve(port);
    return this;
  }
}

export default Server;
