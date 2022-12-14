
import { Sequelize } from "sequelize";


const { DB_PASS, DB_HOST, DB_NAME } = process.env;
// console.log('process.env::::::::::', { DB_NAME, DB_PASS, DB_HOST })

const connection = new Sequelize(`${DB_NAME}`, 'root', DB_PASS, {
  host: DB_HOST,
  dialect: "mysql"
})


export default connection;
