//import connection from "../../config/db";
import { db } from "../../config/db";
import { DataType } from "sequelize-typescript";
import { Model, Optional } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import User from "../user/user.model";
import Email from "../emailings/email.model";
import Video from "../video/video.model";

export type ACCES_TYPES = "SUDO" | "ADMIN" | "EDITOR" | "USER" | "VISITOR";

export interface RoleI {
  id: string;
  access: ACCES_TYPES
}

export interface RoleInput extends Optional<RoleI, "id"> {}
export interface RoleOuput extends Required<RoleI> {}

class Role extends Model<RoleI, RoleInput> {
  public id!: string;
  public access!: ACCES_TYPES
}

Role.init(
  {
    id: {
      primaryKey: true,
      type: DataType.UUID,
    },
    access: {
      type: DataType.ENUM("SUDO", "ADMIN", "EDITOR", "USER", "VISITOR"),
      allowNull: false,
      defaultValue: "VISITOR"
    },
  },
  {
    timestamps: false,
    sequelize: db.sequelize,
  }
);

Role.beforeCreate((role) => {
  role.id = uuidv4();
});


Role.hasMany(User, {
  foreignKey: "roleId",
  onDelete: "NO ACTION"
});
User.belongsTo(Role, {
  foreignKey: "roleId",
  onDelete: "NO ACTION"
});

Email.hasOne(User, {
  foreignKey: "emailId",
  onDelete: "NO ACTION"
});
User.belongsTo(Email, {
  foreignKey: "emailId",
  onDelete: "NO ACTION"
});

User.hasMany(Video, {
  foreignKey: "userId",
  onDelete: "NO ACTION"
});
Video.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "NO ACTION"
});

export default Role;
