import { registration } from '../services/auth.service';

export const signUp = async (ctx: any) => {
  try {
    const { email, password } = ctx.request.body;
    await registration(email, password);
    ctx.status = 200;
  } catch (e) {
    console.log('error ', e);
    ctx.status = 401;
    ctx.body = { kek: e};
  }
};
