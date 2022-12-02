import Sequelize from "sequelize/types/sequelize";
import { DataType } from "sequelize-typescript";

module.exports = (sequelize: Sequelize) => {

    sequelize.define("user", {

        id: {
            type: DataType.STRING,
            defaultValue: DataType.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false
        },
        lastname: {
            type: DataType.STRING,
            allowNull: false
        },
        email: {
            type: DataType.STRING,
            unique: true,
            allowNull: false
        },
        type: {
            type: DataType.ENUM("sudo","admin","editor", "guest"),
            defaultValue: "guest"
        },
        active: {
            type: DataType.BOOLEAN,
            defaultValue: false
        }
    });
}