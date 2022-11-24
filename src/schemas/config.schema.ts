import Joi from 'joi';

const configSchema = Joi.object({
  NODE_ENV: Joi.string()
    .allow('development')
    .allow('testing')
    .allow('production')
    .default('development'),
  PRESCRIPTIONS_SERVICE_MONGO_USERNAME: Joi.string().required(),
  PRESCRIPTIONS_SERVICE_MONGO_PASSWORD: Joi.string().required(),
  SERVER_PORT: Joi.string().required()
})
  .unknown()
  .required();

export default configSchema;
