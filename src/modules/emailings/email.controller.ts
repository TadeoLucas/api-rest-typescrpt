import { RequestHandler } from "express";
// import authEmail from "../../utils/sendgrid";
import { sendEmailByUserIdService } from "./email.service";
import { formatResponse } from "../../utils/formatResponse";
import { sendMail } from "../../utils/nodemailer";
import config from "../../config/config";

export const sendValidateEmail: RequestHandler = async (req, res) => {
  try {
    const User_Id = req.params.User_Id
    const Key: any = await sendEmailByUserIdService(User_Id)
    if (Key) {
      await sendMail(`${config.email}`, Key)

      return formatResponse(
        req,
        res,
        'ok',
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