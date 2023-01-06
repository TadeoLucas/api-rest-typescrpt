const nodemailer = require('nodemailer')
const nodemailerSendgrid = require('nodemailer-sendgrid')
import config from '../config/config'
import { authentication_mail } from '../modules/emailings/template.authentication'

const createTrans = () => {
  const transport = nodemailer.createTransport(
    nodemailerSendgrid({
      apiKey: `${config.sendgrid}`
    })
  )
  return transport
}

export const sendMail = async (mail: string, validationKey: string) => {
  const transporter = createTrans()
  const info = await transporter.sendMail({
    from: `${config.email}`,
    to: `${mail}`, // [correo1@g.com, correo2@g.com]
    subject: 'Bienvenido a nuestra empresa',
    html: `${authentication_mail(validationKey)}`
  })
  return info
}