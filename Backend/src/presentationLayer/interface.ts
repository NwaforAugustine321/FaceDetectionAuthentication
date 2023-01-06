import { NextFunction, Request, Response, Express } from 'express';
import { NextHandleFunction } from 'connect';

export type RequestHandler = (
  req: Request,
  res: Response,
  next?: NextFunction
) => void;

export interface IHttpRouter {
  Post(url: string, handler: RequestHandler): void;
  Get(url: string, handler: RequestHandler): void;
  Use(handler: NextHandleFunction, url?: string | undefined): void;
  GetServerInstance(): Express;
  Serve(port: number): void;
}
