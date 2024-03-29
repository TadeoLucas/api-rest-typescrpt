import { RequestHandler } from "express";
import logger from "../../config/logger";
import { formatResponse } from "../../utils/formatResponse";
import { UserI2 } from "./user.interface";
import {
  createUserInDbIfNotExistService,
  loginUser,
  deletUserByIdDbService,
  getAllUsersService,
  getUserByIdService,
  updateStatusUserDbService,
  updateUserDbService,
  updateRoleUserDbService
} from "./user.service";


export const createUser: RequestHandler = async (req, res) => {
  try {
    const userCreated: any = await createUserInDbIfNotExistService(req.body)
    if (userCreated) {
      const response = {
        id: userCreated.dataValues.id,
        account_name: userCreated.dataValues.account_name,
        firstName: userCreated.dataValues.firstName,
        lastName: userCreated.dataValues.lastName,
        status: userCreated.dataValues.status
      }
      return formatResponse(
        req,
        res,
        response,
        null,
        'user.create.succes',
        200
      )
    } else {
      throw new Error('user already exists')
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
  try {
    const { email, password } = req.body
    const responseUser = await loginUser({ email, password })
    if (responseUser === "USER_NOT_FOUND" || responseUser === "INCORRECT_PASSWORD") {
      return formatResponse(
        req,
        res,
        null,
        null,
        responseUser,
        403
      )
    }
    return formatResponse(
      req,
      res,
      responseUser,
      null,
      'OK',
      200
    )
  } catch (error) {
    logger.error(`error controler loginCtrl ${error}`)

    return formatResponse(
      req,
      res,
      null,
      [<Error>error],
      'ERROR_GET_TOKEN',
      400
    )
  }
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
    logger.error(`error controler getUsers ${error}`)

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
      'ERROR_GET_USER_BYID',
      400
    )
  }
}


export const modifyUserById: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id
    const { account_name, firstName, lastName, email }: UserI2 = req.body;
    const userForUpdate: any = { account_name, firstName, lastName, email }
    const numberOfFieldsChanged = await updateUserDbService(id, userForUpdate)

    return formatResponse(
      req,
      res,
      numberOfFieldsChanged,
      null,
      'user.updated.succes',
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
    const { status } = req.body;
    const numberStatusSeted = await updateStatusUserDbService(account_name, status)

    return formatResponse(
      req,
      res,
      numberStatusSeted,
      null,
      'user.updated.succes',
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

export const changeRoleByAccountName: RequestHandler = async (req, res) => {
  try {
    const account_name = req.params.account_name
    const { access } = req.body;
    const numberStatusSeted = await updateRoleUserDbService(account_name, access)

    return formatResponse(
      req,
      res,
      numberStatusSeted,
      null,
      'role.user.updated.succes',
      200
    )
  } catch (error) {
    logger.error(`error controler put ModifyUserById: ${error}`)
    return formatResponse(
      req,
      res,
      null,
      [<Error>error],
      'ERROR_PUT_ROLE_USER',
      400
    )
  }
}


export const deleteUserById: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id
    const numberOfUserDeleted = await deletUserByIdDbService(id)
    if (numberOfUserDeleted === 0) {
      return formatResponse(
        req,
        res,
        null,
        [],
        'the user with the indicated Id does not exist',
        404
      )
    }
    return formatResponse(
      req,
      res,
      numberOfUserDeleted,
      null,
      'user.deleted.succes',
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