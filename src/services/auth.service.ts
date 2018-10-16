// import _ from 'lodash';

import { User } from '../models';

const saltRounds = 10;
export const testFunc = async () => {
  const test = await User.generateHash('228');
  console.log('bio musor', test);
}
