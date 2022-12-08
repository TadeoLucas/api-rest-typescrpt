import { RequestHandler } from "express";
import logger from "../../config/logger";
import  User  from "./user.model";


export const createUser: RequestHandler = async (req, res) => {
  try{
    const userForCreate = req.body;
    if(userForCreate){

      const userCreated = await User.findOrCreate({where: 
        {
          account_name: userForCreate.account_name,
          firstName: userForCreate.firstName,
          lastName: userForCreate.lastName,
          email: userForCreate.email,
          status: userForCreate.status
        } 
      })
      if(userCreated[1] === true) return res.status(201).json(userCreated[0])
      if(userCreated[1] === false) return res.status(203).json(userCreated[0])
      return;
    }
  }catch(err){
    logger.error(`error controler createUser ${err}`)
    return res.status(400).send({error: err})
  }
}

export const getUsers: RequestHandler = async (_req, res) => {
  try{
    const users = await User.findAll();
    return res.status(200).json(users)
  }catch(err){
    logger.error(`error controler guetUsers ${err}`)
    return res.status(400).send({error: err})
  }
}

export const getUserById: RequestHandler = async (req, res) => {
  try{
    const id = req.params.id
    const user = await User.findByPk(id);
    return res.status(200).json(user)
  }catch(err){
    logger.error(`error controler getUserById ${err}`)
    return res.status(400).send({error: err})
  }
}

export const modifyUserById: RequestHandler = async (req, res) => {
  try{
    const id = req.params.id
    const userForUpdate = req.body;
    const userUpdated = await User.update( 
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
    return res.status(200).json(userUpdated)

  }catch(err){
    logger.error(`error controler put ModifyUserById: ${err}`)
    return res.status(400).send({error: err})
  }
}

export const changeStateByAccountName: RequestHandler = async (req, res) => {
  try{
    const account_name = req.params.account_name
    const status = req.body;
    const statusSeted = await User.update( 
      {
        status: status
      },
      {
        where: {account_name: account_name}
      }
    )
    return res.status(200).json(statusSeted)

  }catch(err){
    logger.error(`error controler put ModifyUserById: ${err}`)
    return res.status(400).send({error: err})
  }
}

export const deleteUserById: RequestHandler = async (req, res) => {
  try{
    const id = req.params.id
    const user = await User.destroy(({
      where: {
          id
      }
  }));
    return res.status(200).json(user)
  }catch(err){
    logger.error(`error controler getUserById ${err}`)
    return res.status(400).send({error: err})
  }
}