
import { Sequelize } from "sequelize";
// import { Connection } from "sequelize/types/dialects/abstract/connection-manager";
// import User from "./user";
// import Role from "./role";
// import config from '../config/index';


const { DB_PASS, DB_HOST, DB_NAME} = process.env;
console.log('process.env::::::::::', { DB_NAME, DB_PASS, DB_HOST })

const connection = new Sequelize('consulting' , 'root', DB_PASS, {
  host: DB_HOST,
  dialect: "mysql"
})


// Role.hasMany(User);
// User.belongsTo(Role);

export default connection;
