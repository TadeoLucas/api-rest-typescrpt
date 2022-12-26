
import { db } from '../config/db';

beforeAll(async () => {

  try {
    await db.sequelize.authenticate();
    console.log('Connection to TEST DB has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    throw error;
  }

  await db.sequelize.sync({ alter: true });
});