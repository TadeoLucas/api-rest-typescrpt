import { Optional } from "sequelize";


export type STATUS_TYPES = "pending" | "active" | "inactive";

export interface UserI {
  id?: string;
  account_name: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  password: string;
  email: string;
  status: STATUS_TYPES;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserInput extends Optional<UserI, "id"> {}
export interface UserOuput extends Required<UserI> {}


export interface Auth {
  email: string
  password: string
}