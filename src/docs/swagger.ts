import swaggerJSDoc, { OAS3Definition, OAS3Options } from 'swagger-jsdoc';
import config from '../config/index';
import { getUsersDataForConsultin400, getUsersDataForConsultinOk } from '../modules/user/prescription.swagger';

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
      //lens prescription
      getUsersDataForConsultinOk: getUsersDataForConsultinOk,
      getUsersDataForConsultin400: getUsersDataForConsultin400
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
