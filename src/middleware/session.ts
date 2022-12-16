import { RequestHandler } from "express";
import logger from "../config/logger";
import { verifyToken } from "../utils/jwt.handle";



const checkSession: RequestHandler = (req, res, next) => {
  try {
    const jwtByUser = req.headers.authorization || ''
    const token = jwtByUser.split(' ').pop() 
    const isUser = verifyToken(`${token}`)
    if (!isUser) {
      return res.status(401).json('INVALID_SESSION')
    } else {
      next()
    }
  } catch (error) {
    logger.error((`error session checkJwt:: ${error}`))
    return res.status(400).json('INVALID_AUTH')
  }
}

export { checkSession }