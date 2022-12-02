import { RequestHandler } from "express";
import logger from "../config/logger";
import { User } from "../model/user";

export const getUser: RequestHandler = async (_req, res) => {
  try{
    const users = await User.findAll();
    res.status(200).json(users)
  }catch(err){
    logger.error(`error controler guetUsers ${err}`)
    
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