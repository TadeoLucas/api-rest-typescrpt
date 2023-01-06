import { RequestHandler } from "express";
import { createKeyAndAsociateUserService, getEmailerById } from "./email.service";
import { formatResponse } from "../../utils/formatResponse";
import { sendMail } from "../../utils/nodemailer";
import config from "../../config/config";
import { verifyCript } from "../../utils/bcrypt.password";
import logger from "../../config/logger";

export const sendEmailKey: RequestHandler = async (req, res) => {
  try {
    const User_Id = req.params.User_Id
    const response: any = await createKeyAndAsociateUserService(User_Id)
    if (response) {
      await sendMail(`${config.email}`, response.key)
      return formatResponse(
        req,
        res,
        { validId: response.validId },
        null,
        'sendEmail.Validate.succes',
        200
      )
    }
  } catch (error) {
    return formatResponse(
      req,
      res,
      null,
      [<Error>error],
      'ERROR_SEND_EMAIL_BYID',
      400
    )
  }
}

export const validateKey: RequestHandler = async (req, res) => {
  try {
    const response: any = await getEmailerById(req.params.id)
    const bool = await verifyCript(req.body.verificationKey, response?.dataValues.verificationKey)
    if (bool) {
      return formatResponse(
        req,
        res,
        'ok',
        null,
        'key.Validate.succes',
        200
      )
    } else {
      return formatResponse(
        req,
        res,
        null,
        null,
        'INVALID KEY',
        403
      )
    }
  } catch (error) {
    logger.error('controler validateKey error', error)
    return formatResponse(
      req,
      res,
      null,
      [<Error>error],
      'ERROR_GET_VALIDATE_KEY',
      400
    )
  }
}