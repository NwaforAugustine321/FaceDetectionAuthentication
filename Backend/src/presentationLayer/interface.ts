import { NextFunction, Request, Response } from 'express';
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
  Serve(port: number): void;
}
