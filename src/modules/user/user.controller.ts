import { RequestHandler } from "express";
import logger from "../../config/logger";
import { formatResponse } from "../../utils/formatResponse";
import {
  createUserInDbIfNotExistService,
  loginUser,
  deletUserByIdDbService,
  getAllUsersService,
  getUserByIdService,
  updateStatusUserDbService,
  updateUserDbService
} from "./user.service";


export const createUser: RequestHandler = async (req, res) => {
  try {
    const userForCreate = req.body;
    if (userForCreate) {
      const userCreated: any = await createUserInDbIfNotExistService(userForCreate)
      // console.log('RESPONSE CREATE', userCreated._options.isNewRecord)
      const message = userCreated._options.isNewRecord ? 'user.create.succes' : 'USER.ALREADY.EXIST'
      return formatResponse(
        req,
        res,
        userCreated,
        null,
        message,
        200
      )
    } else {
      throw new Error('Could not find or create user')
    }

  } catch (error) {
    logger.error(`error controler createUser ${error}`)

    return formatResponse(
      req,
      res,
      null,
      [<Error>error],
      'USER.CREATE.ERROR',
      400
    )
  }
}


export const loginCtrl: RequestHandler = async (req, res) => {
  const { email, password } = req.body
  const responseUser = await loginUser({ email, password })
  if(responseUser === "USER_NOT_FOUND" || responseUser ===  "INCORRECT_PASSWORD" ){
    return res.status(403).json(responseUser)
  }
  return res.send(responseUser)
}


export const getUsers: RequestHandler = async (req, res) => {
  try {
    const usersArray = await getAllUsersService()
    if (usersArray) {
      return formatResponse(
        req,
        res,
        usersArray,
        null,
        'users.get.succes',
        200
      )
    } else {
      throw new Error('Users search error')
    }

  } catch (error) {
    logger.error(`error controler guetUsers ${error}`)

    return formatResponse(
      req,
      res,
      null,
      [<Error>error],
      'ERROR_GET_USERS',
      400
    )
  }
}


export const getUserById: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id
    const user = await getUserByIdService(id)
    if (user) {
      return formatResponse(
        req,
        res,
        user,
        null,
        'userbyid.get.succes',
        200
      )
    } else {
      throw new Error('Users search error')
    }
  } catch (error) {
    logger.error(`error controler getUserById ${error}`)

    return formatResponse(
      req,
      res,
      null,
      [<Error>error],
      'ERROR_GET_USERS_BYID',
      400
    )
  }
}


export const modifyUserById: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id
    const userForUpdate = req.body;
    const numberOfFieldsChanged = await updateUserDbService(id, userForUpdate)

    return formatResponse(
      req,
      res,
      numberOfFieldsChanged,
      null,
      'user.create.succes',
      200
    )
  } catch (error) {
    logger.error(`error controler put ModifyUserById: ${error}`)

    return formatResponse(
      req,
      res,
      null,
      [<Error>error],
      'ERROR_PUT_USER',
      400
    )
  }
}


export const changeStateByAccountName: RequestHandler = async (req, res) => {
  try {
    const account_name = req.params.account_name
    const status = req.body;
    const numberStatusSeted = await updateStatusUserDbService(account_name, status)

    return formatResponse(
      req,
      res,
      numberStatusSeted,
      null,
      'user.create.succes',
      200
    )
  } catch (error) {
    logger.error(`error controler put ModifyUserById: ${error}`)
    return formatResponse(
      req,
      res,
      null,
      [<Error>error],
      'ERROR_PUT_USER_STATE',
      400
    )
  }
}


export const deleteUserById: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id
    const numberOfUserDeleted = await deletUserByIdDbService(id)

    return formatResponse(
      req,
      res,
      numberOfUserDeleted,
      null,
      'user.create.succes',
      200
    )
  } catch (error) {
    logger.error(`error controler getUserById ${error}`)

    return formatResponse(
      req,
      res,
      null,
      [<Error>error],
      'ERROR_DELETE_USER',
      400
    )
  }
}