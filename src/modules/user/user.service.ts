import logger from "../../config/logger";
import User from "./user.model";
import { Auth, STATUS_TYPES, UserI } from "./user.interface";
import { encrypt, verifyCript } from "../../utils/bcrypt.password";
import { generateToken } from "../../utils/jwt.handle";
import Role, { ACCES_TYPES } from "../role/role.model";
import { set } from "local-storage";

export const createUserInDbIfNotExistService = async (userForCreate: UserI) => {
  try {
    const userFound = await User.findOne({
      where: {
        email: userForCreate.email
      },
    });

    if (userFound) { return }
    const visitor = await Role.findOne({ where: { access: "VISITOR" } })
    const passwordHash = await encrypt(userForCreate.password)
    const response = User.create(
      {
        account_name: userForCreate.account_name,
        firstName: userForCreate.firstName,
        lastName: userForCreate.lastName,
        password: passwordHash,
        email: userForCreate.email,
        status: userForCreate.status,
        roleId: visitor?.id
      }
    )
    return response;

  } catch (err) {
    logger.error(`error service createUserInDbIfNotExistService ${err}`)
    return new Error('could not find or create user')
  }
};


export const loginUser = async ({ email, password }: Auth) => {
  try {
    const checkIs = await User.findOne({
      where: {
        email
      },
    });
    if (!checkIs) return 'USER_NOT_FOUND'
    const passHash = checkIs.password
    const isCorrect = await verifyCript(password, passHash)
    if (!isCorrect) return 'INCORRECT_PASSWORD'
    const token = generateToken(checkIs.id)
    if (checkIs && isCorrect) {
       set('user', JSON.stringify(checkIs.dataValues))
      // console.log("🚀 ~ file: user.service.ts:56 ~ loginUser ~ seter", seter)
      // const user = get('user')
      // console.log("🚀 ~ file: user.service.ts:56 ~ loginUser ~ user", user)
    }
    return token

  } catch (err) {
    logger.error(`error service loginUser ${err}`)
    return new Error('could not generate token')
  }
};


export const getAllUsersService = () => {
  try {
    const response = User.findAll();
    return response;
  } catch (err) {
    logger.error(`error service getAllUsersService ${err}`)
    return new Error('could not find users')
  }
};


export const getUserByIdService = (id: string) => {
  try {
    const response = User.findByPk(id);
    return response;
  } catch (err) {
    logger.error(`error service getUserByIdService ${err}`)
    return new Error('could not find user')
  }
};


export const updateUserDbService = (id: string, userForUpdate: UserI) => {
  try {
    const response = User.update(
      {
        account_name: userForUpdate.account_name,
        firstName: userForUpdate.firstName,
        lastName: userForUpdate.lastName,
        email: userForUpdate.email,
        status: userForUpdate.status
      },
      {
        where: { id: id }
      }
    )
    return response;
  } catch (err) {
    logger.error(`error service updateUserDbService ${err}`)
    return new Error('could not update user')
  }
};


export const updateStatusUserDbService = (account_name: string, status: STATUS_TYPES) => {
  try {
    const response = User.update(
      {
        status: status
      },
      {
        where: { account_name: account_name }
      }
    )
    return response;
  } catch (err) {
    logger.error(`error service updateStatusUserDbService ${err}`)
    return new Error('could not update status user')
  }
};

export const updateUser_validIdById = (id: string, emailId: string) => {
  try {
    const response = User.update(
      {
        emailId: emailId
      },
      {
        where: { id: id }
      }
    )
    return response;
  } catch (err) {
    logger.error(`error service updateStatusUserDbService ${err}`)
    return new Error('could not update status user')
  }
}

export const updateRoleUserDbService = async (account_name: string, access: ACCES_TYPES) => {
  try {
    const role = await Role.findOne({ where: { access } })
    if (role?.id) {
      const roleId = role.id
      const response = User.update(
        {
          roleId
        },
        {
          where: { account_name: account_name }
        }
      )
      return response;
    }
  } catch (err) {
    logger.error(`error service updateRoleUserDbService ${err}`)
    return new Error('could not update role user')
  }
};


export const deletUserByIdDbService = (id: string) => {
  try {
    const response = User.destroy(({
      where: {
        id
      }
    }));
    return response;
  } catch (err) {
    logger.error(`error service deletUserByIdDbService ${err}`)
    return new Error('could not delete user')
  }
};