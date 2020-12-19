import express from 'express';

type DefaultParams = Record<string, string>;
type DefaultBody = any;
type DefaultResBody = any;
type DefaultQuery = Record<string, undefined | string | string[]>;

declare global {
  namespace Server {
    type Request<TParams = DefaultParams, TBody = DefaultBody, TQuery = DefaultQuery, TResBody = DefaultResBody>
      = express.Request<TParams, TResBody, TBody, TQuery>;
    type Response<TBody = DefaultResBody> = express.Response<TBody>;
    type Next = express.NextFunction;
    type Route<TParams = DefaultParams, TBody = DefaultBody, TQuery = DefaultQuery, TResBody = DefaultResBody>
      = (req: Request<TParams, TBody, TQuery, TResBody>, res: Response<TResBody>, next: Next) => any;
    type GetRoute<TParams = DefaultParams, TResBody = DefaultResBody, TQuery = DefaultQuery>
      = Route<TParams, DefaultBody, TQuery, TResBody>;
    type PostRoute<TBody = DefaultBody, TResBody = DefaultResBody, TParams = DefaultParams>
      = Route<TParams, TBody, DefaultQuery, TResBody>;
    type DeleteRoute<TParams = DefaultParams, TResBody = DefaultResBody, TQuery = DefaultQuery>
      = Route<TParams, DefaultBody, TQuery, TResBody>;
    type PutRoute<TBody = DefaultBody, TResBody = DefaultResBody, TParams = DefaultParams>
      = Route<TParams, TBody, DefaultQuery, TResBody>;
  }
}