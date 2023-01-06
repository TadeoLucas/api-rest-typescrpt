import logger from "../../config/logger";
import { encrypt } from "../../utils/bcrypt.password";
import randomkeyMaker from "../../utils/random.key.maker";
import Email from "../emailings/email.model";
import User from "../user/user.model";
import { updateUser_emailIdById } from "../user/user.service";

export const sendEmailByUserIdService = async (id: string) => {
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
      await updateUser_emailIdById(id, email.id)
    }
    return key

  } catch (err) {
    logger.error(`error service getEmailByIdService ${err}`)
    return new Error('could not find key')
  }
}