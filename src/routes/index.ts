import * as Router from 'koa-router';
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

userRoutes(router);
authRoutes(router);

router.get('*', async (ctx) => {
  ctx.body = 'Not found';
});


export default router;
