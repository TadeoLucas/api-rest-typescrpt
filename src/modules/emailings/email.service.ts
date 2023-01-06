import logger from "../../config/logger";
// import User from "./user.model";
// import { Auth, STATUS_TYPES, UserI } from "./user.interface";
// import { encrypt, verify } from "../../utils/bcrypt.password";
// import { generateToken } from "../../utils/jwt.handle";
// import Role, { ACCES_TYPES } from "../role/role.model";
// import randomkeyMaker from "../../utils/random.key.maker";
import Email from "../emailings/email.model";

export const getEmailByIdService = (validId: string) => {
  try {
    const response = Email.findByPk(validId);
    return response;
  } catch (err) {
    logger.error(`error service getEmailByIdService ${err}`)
    return new Error('could not find key')
  }
}