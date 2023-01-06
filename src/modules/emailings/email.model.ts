import { db } from "../../config/db";
import { DataType } from "sequelize-typescript";
import { Model, Optional } from "sequelize";
import { v4 as uuidv4 } from "uuid";


export interface EmailI {
  id: string;
  verificationKey: string | undefined
}

export interface EmailInput extends Optional<EmailI, "id"> { }
export interface EmailOuput extends Required<EmailI> { }

class Email extends Model<EmailI, EmailInput> {
  public id!: string;
  public verificationKey!: string | undefined
}

Email.init(
  {
    id: {
      primaryKey: true,
      type: DataType.UUID
    },
    verificationKey: {
      type: DataType.STRING,
      allowNull: false
    },
  },
  {
    timestamps: false,
    sequelize: db.sequelize,
  }
);

Email.beforeCreate((email) => {
  email.id = uuidv4();
});


export default Email;
