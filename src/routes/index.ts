import * as Router from 'koa-router';
import {
  BASE_API_URL,
  HTTP_POST_METHOD,
  HTTP_GET_METHOD,
  HTTP_PUT_METHOD,
} from '@constants';

// import { routeWrapper } from '@utils';
// route(adminPartRouter, 'post', '/login', authHandlers, 'loginSystemUserHandler');

// import { adminPartRouter } from './user.routes';

// import { checkGlobalAccessRights } from '../services/auth';

const router = new Router({
  prefix: BASE_API_URL,
});
// routeWrapper(
//   clientPartRouter,
//   HTTP_POST_METHOD,
//   authorizationPathes.CLIENT_AUTHORIZATION,
//   authHandlers,
//   'clientAuthorizationHandler',
// )
// routeWrapper()

router.get('/pizda', async (ctx) => {
  ctx.body = ' asdasdasd World!';
});

router.get('/*', async (ctx) => {
  ctx.body = ' World!';
});
// baseApiRouter.use('*', checkGlobalAccessRights);


// router.use('/user', adminPartRouter.routes(), adminPartRouter.allowedMethods);
// 
export default router;
