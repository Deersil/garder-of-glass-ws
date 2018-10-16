// import dtoWrapper from '@dto';
export default (
  router: any,
  method: any,
  pattern: any,
  controller: any,
  action: any,
  dtoMethod?: any,
) => {
  const { middleware = {} } = controller;
  const middlewares = middleware[action] || [];

  const dtoMiddleware = async (ctx: any, next: any) => {
    // ctx.dto = dtoWrapper(dtoMethod);
    await next();
  };

  router[method](pattern, ...[...middlewares, dtoMiddleware], controller[action]);
};