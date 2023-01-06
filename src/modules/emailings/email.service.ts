import logger from "../../config/logger";
import { encrypt } from "../../utils/bcrypt.password";
import randomkeyMaker from "../../utils/random.key.maker";
import Email from "../emailings/email.model";
import User from "../user/user.model";
import { updateUser_validIdById } from "../user/user.service";


export const getEmailerById = (id: string) => {
  const response = Email.findByPk(id)
  return response
}

export const createKeyAndAsociateUserService = async (id: string) => {
  try {
    const key: string = randomkeyMaker();
    const verificationKey: string = await encrypt(key)

    const emailExist = await User.findByPk(id)
    if (emailExist?.dataValues.validId) {
      await Email.update(
        {
          verificationKey: verificationKey
        },
        {
          where: { id: emailExist?.dataValues.validId }
        }
      )
    } else {
      const email = await Email.create({ verificationKey });
      await updateUser_validIdById(id, email.id)
    }
    return { key, validId: emailExist?.dataValues.validId }

  } catch (err) {
    logger.error(`error service getEmailByIdService ${err}`)
    return new Error('could not find key')
  }
}