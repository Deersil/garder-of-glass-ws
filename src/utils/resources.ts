import * as Router from 'koa-router';
import { routeWrapper as route } from './routeWrapper';
import {
  HTTP_POST_METHOD,
  HTTP_GET_METHOD,
  HTTP_PUT_METHOD,
  HTTP_DELETE_METHOD
} from '@constants';

export const resources = (controller: any, { only } = { only: false}) => {
  const resourceRouter = new Router({
    // mergeParams: true
  });
  const routes = [
    ['/', HTTP_GET_METHOD, 'listHandler'],
    ['/', HTTP_POST_METHOD, 'createHandler'],
    ['/:id', HTTP_GET_METHOD, 'getOneHandler'],
    ['/:id', HTTP_PUT_METHOD, 'updateHandler'],
    ['/:id', HTTP_DELETE_METHOD, 'deleteHandler'],
  ];

  routes
    .filter(([, , action]) => controller[action])
    // .filter(([, , action]) => (
    //   typeof only === 'object' || typeof only === 'string' ? only.includes(action) : true))
    .forEach(([pattern, method, action]) => {
      route(resourceRouter, method, pattern, controller, action);
    });

  return resourceRouter.routes();
};