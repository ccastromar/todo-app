import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log('Request:',req.headers);
    console.log('Request:',req.method);
    console.log("------RESPONSE-----------");
    console.log(res.statusCode);
    console.log("-------END----------");
    next();
  }
}
