require('dotenv').config();
require('module-alias/register');

import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
import * as passport from 'koa-passport';
import * as models from './models';
import router from '@routes';
import initPassport from './config/passport';

const {
  API_PORT
} = process.env;

const app = new Koa();

app.use(async (ctx, next) => {
  console.log('Url:', ctx.url);
  console.log('Method: ', ctx.method);
  await next();
});

app.use(bodyParser());
app.use(passport.initialize());
app.use(passport.session()); 
app.use(router.routes());
initPassport(passport, models.User);
models.sequelize.sync()
  .then(() => {
    console.log('the db is synced');
  })
app.listen(API_PORT);

console.log(`Server running on port ${API_PORT}`);