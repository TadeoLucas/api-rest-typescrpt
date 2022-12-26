import swaggerJSDoc, { OAS3Definition, OAS3Options } from 'swagger-jsdoc';
import config from '../config/config';
import {
  createUserDbConsultingOk,
  createUserDbConsulting400,
  loginUserDbConsultingOk,
  loginUserDbConsulting400,
  getUsersDataFromConsultinOk,
  getUsersDataFromConsultin400,
  getUserByIdFromConsultingOk,
  getUserByIdFromConsulting400,
  putUserByIdFromConsultingOk,
  putUserByIdFromConsulting400,
  putUserByAccountNameFromConsultingOk,
  putUserByAccountNameFromConsulting400,
  deleteUserByIdFromConsultingOk,
  deleteUserByIdFromConsulting400
} from '../modules/user/user.swagger';

const swaggerDefinition: OAS3Definition = {
  openapi: '3.0.0',
  info: {
    title: 'Consulting Micro Service Documentation',
    version: process.env.npm_package_version || '',
    description: 'Service Responsible for managing Consulting Info'
  },
  servers: [
    {
      url: `http://localhost:${config.serverPort}`
    }
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    },
    schemas: {
      //user data
      createUserDbConsultingOk: createUserDbConsultingOk,
      createUserDbConsulting400: createUserDbConsulting400,
      loginUserDbConsultingOk: loginUserDbConsultingOk,
      loginUserDbConsulting400: loginUserDbConsulting400,
      getUsersDataFromConsultinOk: getUsersDataFromConsultinOk,
      getUsersDataFromConsultin400: getUsersDataFromConsultin400,
      getUserByIdFromConsultingOk: getUserByIdFromConsultingOk,
      getUserByIdFromConsulting400: getUserByIdFromConsulting400,
      putUserByIdFromConsultingOk: putUserByIdFromConsultingOk,
      putUserByIdFromConsulting400: putUserByIdFromConsulting400,
      putUserByAccountNameFromConsultingOk: putUserByAccountNameFromConsultingOk,
      putUserByAccountNameFromConsulting400: putUserByAccountNameFromConsulting400,
      deleteUserByIdFromConsultingOk: deleteUserByIdFromConsultingOk,
      deleteUserByIdFromConsulting400: deleteUserByIdFromConsulting400
    }
  },
  security: [
    {
      bearerAuth: []
    }
  ]
};

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ['./src/modules/user/*.ts']
};

export default swaggerJSDoc(swaggerOptions);
