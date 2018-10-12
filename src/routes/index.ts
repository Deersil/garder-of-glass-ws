import * as Router from 'koa-router';

import { adminPartRouter } from './user.routes';

import { checkGlobalAccessRights } from '../services/auth';

const baseApiRouter = new Router({ prefix: '/api/v1' });

baseApiRouter.use('*', checkGlobalAccessRights);


baseApiRouter.use('/admin', adminPartRouter.routes(), adminPartRouter.allowedMethods);

export default baseApiRouter;
