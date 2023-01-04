
import logger from "./config/logger"
import { app } from "./app"
// import connection from "./config/db"
import { db } from "./config/db";
// import http from 'http';
import config from "./config/config";
import { defaultRoles } from "./modules/role/role.default.create";


const start = async () => {
  db.sequelize
    .authenticate()
    .then(async () => {
      await db.sequelize.sync();
      app.set('port', config.port || 3000);
      await defaultRoles();
      app.listen(config.port, () => {
        logger.info(`Listening on port ${config.port}!!!!`);
      });
    })
    .catch((err) => {
      logger.error(`Something went wrong with the database: ${err}`)
    });
};

start();
