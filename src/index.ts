
import logger from "./config/logger"
import { app } from "./app"
import connection from "./config/db"
import http from 'http';
const server = http.createServer(app);


const PORT = process.env.PORT || 3001



connection.sync({force:true}).then(()=>{
  server.listen(PORT, () => logger.info(`it´s live XD:::PORT: ${PORT}`));
}).catch((error) => logger.error(`ERROR db.sync: __________ ${error}`));

/*
  npm ts-standard -D -E
  
-----  Es una libreria q usa eslint por detras y ayuda con las configuraciones
luego de la instalacion hacer un script ej::: 

  "lint": "ts-standard",

-----  y luego agregar al package.json::: 

  "eslintConfig": { 
    "project": "./tsconfig.json"
    },
    "extends": ["./node_modules/ts-standard/eslintrc.json"] 
  }

-----  y luego cerrar y volver abrir el proyecto para reiniciar el visual SC
*/ 