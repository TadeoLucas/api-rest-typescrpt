import pathLib from 'path';
import dotenv from 'dotenv';
// import Joi from 'joi';
import configSchema from '../schemas/config.schema';

// require and configure dotenv
const { CONFIG_FILE } = process.env;
const path = CONFIG_FILE || pathLib.join(process.cwd(), '.env');

dotenv.config({ path });

const { error, value: envVars } = configSchema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  nodeEnv: envVars.NODE_ENV,
  serverPort: envVars.DB_PORT,
  port: envVars.SERVER_PORT,
  sendgrid: envVars.SENDGRID_API_KEY,
  email: envVars.EMAIL,
  db: {
    dialect: envVars.DB_DIALECT,
    name: envVars.DB_NAME,
    host: envVars.DB_HOST,
    user: envVars.DB_USER,
    password: envVars.DB_PASS,
    port: envVars.DB_PORT,
    testName: envVars.DB_NAME_TEST || 'test'
  },
  aws: {
    accessKeyId: envVars.AWS_ACCESS_KEY_ID,
    secretAccessKey: envVars.AWS_SECRET_ACCESS_KEY,
    region: envVars.AWS_REGION,
    bucket_url: envVars.AWS_BUCKET_URL,
    prefix_service: envVars.AWS_PREFIX_SERVICE,
    url_base_path: envVars.AWS_SQS_BASE_PATH
  },
  es: {
    node: envVars.ES_NODE
  }
};

export default config;
