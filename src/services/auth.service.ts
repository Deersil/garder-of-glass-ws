// import _ from 'lodash';

import { User } from '../models';

export const registration = async (email: string, password: string) => {
  const hashedPassword = await User.generateHash(password);
  const result = await User.create({
    email,
    password: hashedPassword,
  });
  const { dataValues = {} } = result;

  const { password: newPass, id } = dataValues;
  const user = await User.findById(id);
  console.log('result ', user.checkPassword(newPass));
  return result;
}
