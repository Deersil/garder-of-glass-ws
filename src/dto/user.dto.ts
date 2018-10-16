import * as R from 'ramda';

export const loginDto = (payload: any) => 
  R.pick([
    'username',
    'password',
  ], payload);


  export const dtoMapper = {
    loginDto: loginDto,
  };
  