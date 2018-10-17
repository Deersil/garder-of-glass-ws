import * as Router from 'koa-router';
import * as passport from 'koa-passport';

import {
  BASE_API_URL,
  HTTP_POST_METHOD,
  HTTP_GET_METHOD,
  HTTP_PUT_METHOD,
} from '@constants';

import userRoutes from './user.routes';
import authRoutes from './auth.routes';

const router = new Router({
  prefix: BASE_API_URL,
});

router.post('/pipka', passport.authenticate('local-signup', {
  authInfo: true,
})); 
userRoutes(router);
authRoutes(router);

router.get('*', async (ctx) => {
  ctx.body = 'Not found';
});


export default router;
