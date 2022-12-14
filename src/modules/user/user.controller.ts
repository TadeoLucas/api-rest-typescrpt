import { RequestHandler } from "express";
import logger from "../../config/logger";
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

      return res.status(200).json(userCreated)
    } else {
      throw new Error('Could not create user')
    }

  } catch (err) {
    logger.error(`error controler createUser ${err}`)

    return res.status(400).send({ error: err })
  }
}

export const getUsers: RequestHandler = async (_req, res) => {
  try {
    const usersArray = await getAllUsersService()
    if (usersArray) {
      return res.status(200).json(usersArray)

    } else {
      throw new Error('Users search error')
    }

  } catch (err) {
    logger.error(`error controler guetUsers ${err}`)
    return res.status(400).send({ error: err })
  }
}

export const getUserById: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id
    const user = await getUserByIdService(id)
    if (user) {
      return res.status(200).json(user)
    } else {
      res.status(400).json({ message: 'User not found' })
    }
  } catch (err) {
    logger.error(`error controler getUserById ${err}`)
    return res.status(400).send({ error: err })
  }
}

export const modifyUserById: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id
    const userForUpdate = req.body;
    const numberOfFieldsChanged = await updateUserDbService(id, userForUpdate)
    return res.status(200).json(numberOfFieldsChanged)

  } catch (err) {
    logger.error(`error controler put ModifyUserById: ${err}`)
    return res.status(400).send({ error: err })
  }
}

export const changeStateByAccountName: RequestHandler = async (req, res) => {
  try {
    const account_name = req.params.account_name
    const status = req.body;
    const numberStatusSeted = await updateStatusUserDbService(account_name, status)
    return res.status(200).json(numberStatusSeted)

  } catch (err) {
    logger.error(`error controler put ModifyUserById: ${err}`)
    return res.status(400).send({ error: err })
  }
}

export const deleteUserById: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id
    const numberOfUserDeleted = await deletUserByIdDbService(id)
    return res.status(200).json(numberOfUserDeleted)

  } catch (err) {
    logger.error(`error controler getUserById ${err}`)
    return res.status(400).send({ error: err })
  }
}