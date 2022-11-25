import Joi from 'joi';

const configSchema = Joi.object({
  NODE_ENV: Joi.string()
    .allow('development')
    .allow('testing')
    .allow('production')
    .default('development'),
  DB_HOST: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_PORT: Joi.string().required()
})
  .unknown()
  .required();

export default configSchema;
