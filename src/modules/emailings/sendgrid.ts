import sgMail from '@sendgrid/mail'
import config from '../../config/config'
import { authentication_mail } from './template.authentication'

sgMail.setApiKey(config.sendgrid)


const msg = (validationKey: string) => {
  return {
    to: 'lucas.tafiviejo@gmail.com', // Change to your recipient
    from: 'Consultant@gmail.com',
    subject: 'authentication email',
    text: 'authentication email',
    html: `${authentication_mail(validationKey)}`,
  }
}

export const authEmail = async (validate: string) => {
  try {
    const response = await sgMail.send(msg(validate))
    return response
  } catch (error) {
    console.log("🚀 ~ file: sendgrid.ts:20 ~ authEmail ~ error", error)
    throw new Error('could not send the email')
  }
}
