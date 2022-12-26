import { Sequelize, Op } from 'sequelize';
import config from './config';

const db = {
  sequelize: new Sequelize(
    config.nodeEnv === 'testing' ? config.db.testName! : config.db.name!,
    config.db.user!,
    config.db.password!,
    {
      host: config.db.host!,
      dialect: 'mysql',
      port: Number.parseInt(config.db.port!),
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    }
  ),
  Sequelize: Sequelize,
  Op: Op
};

db.Sequelize = Sequelize;
db.Op = Op;

export { db };
