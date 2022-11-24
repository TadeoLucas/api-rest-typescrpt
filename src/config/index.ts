import pathLib from 'path';
import dotenv from 'dotenv';
import configSchema from '../schemas/config.schema';

const { CONFIG_FILE } = process.env;
const path = CONFIG_FILE || pathLib.join(process.cwd(), '.env');

dotenv.config({ path });

const { error, value: envVars } = configSchema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  serverPort: envVars.SERVER_PORT,
  nodeEnv: envVars.NODE_ENV,

  external: {
    patientHost: envVars.PATIENT_HOST,
    clinicHistoryHost: envVars.CLINIC_HISTORY_V2_HOST
  }
};

export default config;
