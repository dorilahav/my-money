declare namespace Express {
  export interface Request {
    context: Server.UserContext;
  }
}
