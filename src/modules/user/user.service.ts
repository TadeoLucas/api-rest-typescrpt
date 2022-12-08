import logger from "../../config/logger";
import User from "./user.model";
import { STATUS_TYPES, UserI } from "./user.interface";


export const createUserInDbIfNotExistService = (userForCreate: UserI) => {
  try{
    const response = User.findOrCreate(
      { where: 
        {
          account_name: userForCreate.account_name,
          firstName: userForCreate.firstName,
          lastName: userForCreate.lastName,
          email: userForCreate.email,
          status: userForCreate.status
        }
      }
    )
  return response;
  }catch(err){
    logger.error(`error service createUserInDbIfNotExistService ${err}`)
    return new Error('could not create user')
  }
}

export const getAllUsersService = () => {
  try{
    const response = User.findAll();
  return response;
  }catch(err){
    logger.error(`error service getAllUsersService ${err}`)
    return new Error('could not find users')
  }
}


export const getUserByIdService = (id: string) => {
  try{
    const response = User.findByPk(id);
  return response;
  }catch(err){
    logger.error(`error service getUserByIdService ${err}`)
    return new Error('could not find user')
  }
}

export const updateUserDbService = (id: string, userForUpdate: UserI) => {
  try{
    const response = User.update( 
      {
        account_name: userForUpdate.account_name,
        firstName: userForUpdate.firstName,
        lastName: userForUpdate.lastName,
        email: userForUpdate.email,
        status: userForUpdate.status
      },
      {
        where: {id: id}
      }
    )
  return response;
  }catch(err){
    logger.error(`error service updateUserDbService ${err}`)
    return new Error('could not update user')
  }
}

export const updateStatusUserDbService = (account_name: string, status: STATUS_TYPES) => {
  try{
    const response = User.update( 
      {
        status: status
      },
      {
        where: {account_name: account_name}
      }
    )
  return response;
  }catch(err){
    logger.error(`error service updateStatusUserDbService ${err}`)
    return new Error('could not update status user')
  }
}

export const deletUserByIdDbService = (id: string) => {
  try{
    const response = User.destroy(({
      where: {
          id
      }
    }));
  return response;
  }catch(err){
    logger.error(`error service deletUserByIdDbService ${err}`)
    return new Error('could not delete user')
  }
}

