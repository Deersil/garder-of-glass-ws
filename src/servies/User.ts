// import { User } from '../models';
import * as jwt from 'jsonwebtoken';
import config from '@config';


export const validateJWT = (token: any) => {
  try {
    return jwt.verify(token, config.secret);
  } catch (error) {
    return false;
  }
};


// export const findAll = ({ page = 1, perPage = 10}) => (

// )