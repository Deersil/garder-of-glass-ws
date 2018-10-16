import * as Router from 'koa-router';

export default (routerExtendFunc: any) => {
  const router = new Router({
    // mergeParams: true  //unknown
  });
  routerExtendFunc(router);
  return router.routes();
};