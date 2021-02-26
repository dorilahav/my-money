interface AuthDetails {
  userId: string;
  profileId: string;
}

declare namespace Express {
  export interface Request {
    auth: AuthDetails;
  }
}
