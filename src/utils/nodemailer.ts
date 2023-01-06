const nodemailer = require('nodemailer')
const nodemailerSendgrid = require('nodemailer-sendgrid')
import { authentication_mail } from '../modules/emailings/template.authentication'

const createTrans = () => {
  const transport = nodemailer.createTransport(
    nodemailerSendgrid({
      apiKey: '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'
    })
  )
  return transport
}

export const sendMail = async (mail: string, validationKey: string) => {
  const transporter = createTrans()
  const info = await transporter.sendMail({
    from: 'lucas.tafiviejo@gmail.com',
    to: `${mail}`, // [correo1@g.com, correo2@g.com]
    subject: 'Bienvenido a nuestra empresa',
    html: `${authentication_mail(validationKey)}`
  })
  return info
}