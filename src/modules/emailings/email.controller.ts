import { RequestHandler } from "express";
// import authEmail from "../../utils/sendgrid";
import { getEmailByIdService } from "./email.service";
import { formatResponse } from "../../utils/formatResponse";
import { sendMail } from "../../utils/nodemailer";

export const sendValidateEmail: RequestHandler = async (req, res) => {
  try {
    const validId = req.params.validId
    const emailKey:any = await getEmailByIdService(validId)
    if(emailKey.dataValues.verificationKey){

      
      await sendMail('lucas.tafiviejo@gmail.com', emailKey.dataValues.verificationKey)
      return formatResponse(
        req,
        res,
        'ok',
        null,
        'sendEmail.Validate.succes',
        200
      )
    }
  }catch(error){
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