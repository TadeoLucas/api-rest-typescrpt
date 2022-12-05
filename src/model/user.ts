import connection  from "./db";
import { DataType } from "sequelize-typescript";
import { Model, Optional } from "sequelize";
import { v4 as uuidv4} from 'uuid';


type STATUS_TYPES =  'PENDING' | "ACTIVE" | "INACTIVE"


export interface UserI{
  id?: string 
  account_name: string | undefined
  firstName: string | undefined
  lastName: string | undefined
  email: string
  status: STATUS_TYPES
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserInput extends Optional<UserI, 'id'> {}
export interface UserOuput extends Required<UserI> {}

class User extends Model<UserI, UserInput> {
  public id!: string
  public account_name!: string
  public firstName!: string
  public lastName!: string
  public email!: string
  public status!: STATUS_TYPES

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}


User.init(
  {
    id:  {
      primaryKey: true,
      type: DataType.UUID
    },
    account_name: {
      type: DataType.STRING,
      allowNull: true,
      validate: {
        is: ['/^[a-z0-9_-]{3,16}$/'],   //userName
        max: 20,
        min:3,                  
        isIn: {
          args: [['en', 'es']],
          msg: "Must be English or Espanish"
        }}
    },
    firstName:  {
      type: DataType.STRING,
      allowNull: true,
      validate: {
        is: ["^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$"],   // name and lastName
        max: 30,
        min:2,                  
        isIn: {
          args: [['en', 'es']],
          msg: "Must be English or Espanish"
        }
      }
    },
    lastName: {
      type: DataType.STRING,
      allowNull: true,
      validate: {
        is: ["^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$"],   // name and lastName
        max: 30,
        min:2,                  
        isIn: {
          args: [['en', 'es']],
          msg: "Must be English or Espanish"
        }
      }
    },
    email: {
      type: DataType.STRING,
      allowNull: false, 
      validate: {
        is: ['^[/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/]'],
        max: 20,
        min:3,                  
        isIn: {
          args: [['en', 'es']],
          msg: "Must be English or Espanish"
        }
      }
    },
    status: { 
      type: DataType.ENUM("PENDING", "ACTIVE", "INACTIVE"),
      allowNull: false,
      defaultValue: "INACTIVE"
    }
  }
  , 
  {
   timestamps: true,
    sequelize: connection
  }
)

User.beforeCreate((user)=>{
  user.id = uuidv4();
})

export default User