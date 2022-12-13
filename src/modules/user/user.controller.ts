import { RequestHandler } from "express";
import logger from "../../config/logger";
import { formatResponse } from "../../utils/formatResponse";
import {
  createUserInDbIfNotExistService,
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
      const userCreated = await createUserInDbIfNotExistService(userForCreate)

      return formatResponse(
        req,
        res,
        userCreated,
        null,
        'user.create.succes',
        200
      )
    } else {
      throw new Error('Could not create user')
    }

  } catch (err) {
    logger.error(`error controler createUser ${err}`)

    return formatResponse(
      req,
      res,
      null,
      [<Error>err],
      'user.create.error',
      400
    )
  }
}

export const getUsers: RequestHandler = async (_req, res) => {
  try {
    const usersArray = await getAllUsersService()
    if (usersArray) {
      return formatResponse(
        _req,
        res,
        usersArray,
        null,
        'All_user.get.succes',
        200
      )
    } else {
      throw new Error('Could not find user')
    }

  } catch (err) {
    logger.error(`error controler guetUsers ${err}`)

    return formatResponse(
      _req,
      res,
      null,
      [<Error>err],
      'All_user.get.error',
      400
    )
  }
}

export const getUserById: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id
    const user = await getUserByIdService(id)

    return formatResponse(
      req,
      res,
      user,
      null,
      'user.get.succes',
      200
    )
  } catch (err) {
    logger.error(`error controler getUserById ${err}`)

    return formatResponse(
      req,
      res,
      null,
      [<Error>err],
      'user.get.error',
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
      'user.put.succes',
      200
    )

  } catch (err) {
    logger.error(`error controler put ModifyUserById: ${err}`)

    return formatResponse(
      req,
      res,
      null,
      [<Error>err],
      'user.put.error',
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
      'user_status.put.succes',
      200
    )

  } catch (err) {
    logger.error(`error controler put ModifyUserById: ${err}`)

    return formatResponse(
      req,
      res,
      null,
      [<Error>err],
      'user_status.put.error',
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
      'user.delete.succes',
      200
    )
  } catch (err) {
    logger.error(`error controler getUserById ${err}`)

    return formatResponse(
      req,
      res,
      null,
      [<Error>err],
      'user.delete.error',
      400
    )
  }
}