import express, { Application } from 'express';
// import 'express-async-errors';
// import { json } from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import logger from './config/logger';
import swaggerUi from 'swagger-ui-express';
import swaggerSetup from './docs/swagger';
import i18next from 'i18next';
import backend from 'i18next-fs-backend';
import * as middleware from 'i18next-http-middleware';

import {userRoutes} from "./modules/user/users.routes";
import {roleRoutes} from './modules/role/role.routes';


i18next
.use(backend)
.use(middleware.LanguageDetector)
.init({
  fallbackLng: 'en', //we set english as default languaje
  backend: {
    loadPath: './locales/{{lng}}/translation.json' //we dinamically read translation file according {{lng}} (languaje) detected
  }
});


const app: Application = express();

app.use(middleware.handle(i18next)); //we set i18n middleware for all routes

app.set('trust proxy', true); 
/* If true, the client’s IP address is understood as the left-most entry 
in the X-Forwarded-For header.
When setting to true, it is important to ensure that the last reverse proxy 
trusted is removing/overwriting all of the following HTTP headers: X-Forwarded-For,
X-Forwarded-Host, and X-Forwarded-Proto otherwise it may be possible for the
client to provide any value. */

app.use(
  morgan('short', {
    stream: {
      write: (message) => logger.info(message.trim())
    }
  })
);

app.use(express.json());
app.use(express.urlencoded({extended: true})) 
app.use(cors());


app.use('/users', userRoutes);
app.use('/roles', roleRoutes);
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerSetup));
app.get('/', (_req, res) => {
  logger.info('hello word')
  return res.send('hello word')
})

export { app };
