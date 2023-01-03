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
  userId?: string | undefined;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserInput extends Optional<UserI, "id"> {}
export interface UserOuput extends Required<UserI> {}

// export type UserI2 = Omit<UserI, "password" & "status" >
export type UserI2 = Pick<UserI, "account_name" | "firstName" | "lastName" | "email">

export interface Auth {
  email: string
  password: string
}