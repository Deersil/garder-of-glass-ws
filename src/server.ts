require('dotenv').config();
require('module-alias/register');

import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
import '@models';
import router from '@routes';

const app = new Koa();

app.use(async (ctx, next) => {
    console.log('Url:', ctx.url);
    console.log('Method: ', ctx.method);
    await next();
});

app.use(bodyParser());

app.use(router.routes());

app.listen(3000);

console.log('Server running on port 3000');