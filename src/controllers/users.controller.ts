import { testFunc } from '../services/auth.service';;

export const test = async (ctx: any) => {
  try {
    ctx.body = 'One love!!!';
    testFunc();
  } catch (e) {
    ctx.status = 401;
    ctx.body = { kek: 'kek' };
  }
};
