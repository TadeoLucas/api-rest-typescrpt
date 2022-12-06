import { RequestHandler } from "express";
import logger from "../../config/logger";
import  User  from "./user.model";

export const getUsers: RequestHandler = async (_req, res) => {
  try{
    const users = await User.findAll();
    res.status(200).json(users)
  }catch(err){
    logger.error(`error controler guetUsers ${err}`)
    
  }
}

export const createUser: RequestHandler = async (req, res) => {
  try{
    const userForCreate = req.body;
    if(userForCreate){
      const userCreated = await User.create<User>(userForCreate)
      res.status(201).json(userCreated)
    }
  }catch(err){
    logger.error(`error controler createUser ${err}`)
    
  }
}


/*
req: Request,
res: Response,
data: any | null,
errors: Error[] | null,
message: string,
code: number
*/