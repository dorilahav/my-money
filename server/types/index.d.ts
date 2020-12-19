import {RequestHandler, ErrorRequestHandler} from 'express';

type DefaultParams = Record<string, string>;
type DefaultBody = any;
type DefaultResBody = any;
type DefaultQuery = Record<string, undefined | string | string[]>;

declare global {
  namespace Server {
    type ErrorHandlerRoute = ErrorRequestHandler;
    type Route<TParams = DefaultParams, TBody = DefaultBody, TQuery = DefaultQuery, TResBody = DefaultResBody>
      = RequestHandler<TParams, TResBody, TBody, TQuery>;
    type GetRoute<TResBody = DefaultResBody, TParams = DefaultParams, TQuery = DefaultQuery>
      = Route<TParams, DefaultBody, TQuery, TResBody>;
    type PostRoute<TBody = DefaultBody, TResBody = DefaultResBody, TParams = DefaultParams>
      = Route<TParams, TBody, DefaultQuery, TResBody>;
    type DeleteRoute<TParams = DefaultParams, TResBody = DefaultResBody, TQuery = DefaultQuery>
      = Route<TParams, DefaultBody, TQuery, TResBody>;
    type PutRoute<TBody = DefaultBody, TResBody = DefaultResBody, TParams = DefaultParams>
     = Route<TParams, TBody, DefaultQuery, TResBody>;
    interface UserContext {
      userId: string;
      profileId: string;
    }
  }
}