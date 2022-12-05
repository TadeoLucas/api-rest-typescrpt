import connection  from "./db";
import { DataType } from "sequelize-typescript";
import { Model, Optional, Sequelize } from "sequelize";
import { v4 as uuidv4} from 'uuid';

const sequelize: Sequelize = connection;
type ACCES_TYPES =  "SUDO" | "ADMIN" | "EDITOR" | "USER" | "VISITOR"

export interface RoleI{
  id?: string 
  acces: ACCES_TYPES
  createdAt?: Date
  updatedAt?: Date
}

export interface RoleInput extends Optional<RoleI, 'id'> {}
export interface RoleOuput extends Required<RoleI> {}

class Role extends Model<RoleI, RoleInput> implements RoleI {
  public id!: string
  public acces!: ACCES_TYPES

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Role.init({
  id:  {
    primaryKey: true,
    type: DataType.UUIDV4,
  },
  acces: { 
    type: DataType.ENUM("SUDO", "ADMIN", "EDITOR", "USER", "VISITOR"),
    allowNull: false,
    defaultValue: "VISITOR"
  }
  }, {
  timestamps: true,
  sequelize: sequelize
})

Role.beforeCreate((role)=>{
  role.id = uuidv4()
})


export default Role