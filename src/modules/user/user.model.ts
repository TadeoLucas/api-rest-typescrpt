import connection from "../../config/db";
import { DataType } from "sequelize-typescript";
import { Model, Optional } from "sequelize";
import { v4 as uuidv4 } from "uuid";


type STATUS_TYPES = "pending" | "active" | "inactive";


export interface UserI {
  id?: string;
  account_name: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  email: string;
  status: STATUS_TYPES;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserInput extends Optional<UserI, "id"> {}
export interface UserOuput extends Required<UserI> {}

class User extends Model<UserI, UserInput> {
  public id!: string;
  public account_name!: string;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public status!: STATUS_TYPES;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      primaryKey: true,
      type: DataType.UUID,
    },
    account_name: {
      type: DataType.STRING,
      allowNull: true,
      unique: true,
      validate: {
        is: ['^[a-zñA-ZÑ0-9_-]{3,20}$','i'],
        max: { msg:"must be less than 20 characters", args: [20] },
        min: { msg:"must have more than 3 characters", args: [3]}
      } 
    },
    firstName: {
      type: DataType.STRING,
      allowNull: true,
      validate: {
        is: ["^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$"], // name and lastName
        max: { msg:"must be less than 20 characters", args: [20] },
        min: { msg:"must have more than 3 characters", args: [3]}
      }
    },
    lastName: {
      type: DataType.STRING,
      allowNull: true,
      validate: {
        is: ["^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$"], // name and lastName
        max: { msg:"must be less than 20 characters", args: [20] },
        min: { msg:"must have more than 3 characters", args: [3]}
      },
    },
    email: {
      type: DataType.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: { msg:"must be valid Email" }
      }
    },
    status: {
      type: DataType.ENUM("pending", "active", "inactive"),
      allowNull: false,
      defaultValue: "inactive",
    },
  },
  {
    timestamps: true,
    sequelize: connection,
  }
);

User.beforeCreate((user) => {
  user.id = uuidv4();
});

export default User;
