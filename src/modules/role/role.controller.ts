import { RequestHandler } from "express";
import logger from "../../config/logger";
import  Role  from "../role/role.model";

export const getRole: RequestHandler = async (req, res) => {
  try{
    const role = await Role.findByPk(req.params.id);
    return res.status(200).json(role)
  }catch(err){
    logger.error(`controller getRole | method GET | ${err}`)
    return res.status(400).send({error: err})
  }
}

export const createRole: RequestHandler = async (req, res) => {
  try{
    const {access} = req.body;
    if(access){
      const createdRole = await Role.create({
        access
      })
      return res.status(201).json(createdRole)
    }
  }catch(err){
    logger.error(`controller createRole | method POST | ${err}`)
    return res.status(400).send({error: err})
  }
}