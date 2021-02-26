import {LoginUserViewModel} from 'mymoney-common';
import {RequestHandler} from 'express';

export const login: RequestHandler<{}, {}, LoginUserViewModel> = (req, res) => {
  const {username, password} = req.body;
}