import Joi from 'joi';

const configSchema = Joi.object({
  NODE_ENV: Joi.string()
    .allow('development')
    .allow('testing')
    .allow('production')
    .default('development'),
  DB_HOST: Joi.string().required(),
  DB_NAME: Joi.string().required(),
  DB_PASS: Joi.string().required(),
  DB_PORT: Joi.string().required(),
  SERVER_PORT: Joi.number().default(3000),
  JWT_SECRET: Joi.string().required(),
  ES_NODE: Joi.string().required(),
  DB_NAME_TEST: Joi.string(),
  EMAIL: Joi.string().required(),
  SENDGRID_API_KEY: Joi.string().required()
})
  .unknown()
  .required();

export default configSchema;
