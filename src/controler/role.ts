import { RequestHandler } from "express";
import logger from "../config/logger";
import  Role  from "../model/user";

export const getRole: RequestHandler = async (req, res) => {
  try{
    const users = await Role.findByPk(req.params.id);
    res.status(200).json(users)
  }catch(err){
    logger.error(`error controler guetUsers ${err}`)
    
  }
}

export const createRole: RequestHandler = async (req, res) => {
  try{
    const roleForCreate = req.body;
    if(roleForCreate){
      const userCreated = await Role.create<Role>(roleForCreate)
      res.status(201).json(userCreated)
    }
  }catch(err){
    logger.error(`error controler createUser ${err}`)
    
  }
}