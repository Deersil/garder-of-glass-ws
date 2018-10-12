const {
  MAILGUN_DOMAIN,
  MAILGUN_KEY,
  NODE_ENV = 'development',
  HOST = '0.0.0.0',
  DB_HOST = '0.0.0.0:5432',
  PORT = 3100,
} = process.env;

const common = {
  env: NODE_ENV,
  host: HOST,
  port: PORT,
  dbHost: DB_HOST,
  secret: 'superSecret',
  mailgun: {
    domain: MAILGUN_DOMAIN,
    apiKey: MAILGUN_KEY,
  },
};

const development = {
  ...common,
  mailSender: 'mail@mail.com',
};

const test = {
  ...common,
};

const production = {
  ...common,
};

const config: IConfig = {
  development,
  test,
  production,
};

export default config[NODE_ENV];
