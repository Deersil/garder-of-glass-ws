const Sequelize = require('sequelize');
import userModal from './user.model';
const {
  DB_HOST,
  DB_HOST_PORT,
  DB_USER,
  DB_PASS,
  DB_NAME,
} = process.env;

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: 'postgres',
  operatorsAliases: false,
  port: DB_HOST_PORT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});
sequelize.authenticate();
const getModel = (file: any) => file(sequelize, Sequelize.DataTypes);

export const User = getModel(userModal);
export default {
  sequelize,
  user: User,
};
