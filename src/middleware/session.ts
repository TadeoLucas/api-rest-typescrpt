import { RequestHandler } from "express";
import logger from "../config/logger";
import { formatResponse } from "../utils/formatResponse";
import { verifyToken } from "../utils/jwt.handle";



const checkSession: RequestHandler = (req, res, next) => {
  try {
    const jwtByUser = req.headers.authorization || ''
    const token = jwtByUser.split(' ').pop() 
    const isUser = verifyToken(`${token}`)
    if (!isUser) {
      return formatResponse(
        req,
        res,
        null,
        null,
        'INVALID_SESSION',
        401
      )
    } else {
      next()
    }
  } catch (error) {
    logger.error((`error session checkJwt:: ${error}`))
    return formatResponse(
      req,
      res,
      null,
      [<Error>error],
      'INVALID_AUTH_ERROR',
      400
    )
  }
}

export { checkSession }