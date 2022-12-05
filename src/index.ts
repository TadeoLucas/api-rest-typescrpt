
import logger from "./config/logger"
import { app } from "./app"
import connection from "./model/db"
import http from 'http';
const server = http.createServer(app);


const PORT = process.env.DB_PORT || 3001



connection.sync().then(()=>{
  server.listen(3001, () => logger.info(`it´s live XD:::PORT: ${PORT}`));
}).catch((error) => logger.error(`ERROR db.sync: __________ ${error}`));

/*
  npm ts-standard -D -E
Es una libreria q usa eslint por detras y ayuda con las configuraciones
luego de la instalacion hacer un script ej::: 
  "lint": "ts-standard",
y luego agregar al package.json::: 
  "eslintConfig":{ "extends": ["./node_modules/ts-standard/eslintrc.json"] }
*/ 