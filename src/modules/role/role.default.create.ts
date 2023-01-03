import logger from "../../config/logger";
import Role from "./role.model";

export const defaultRoles = async () => {
  try {
    const rolesArray = await Role.findAll();

    if (rolesArray.length !== 0) return;

    const values = await Promise.all([
      Role.create({ access: "SUDO" }),
      Role.create({ access: "ADMIN" }),
      Role.create({ access: "EDITOR" }),
      Role.create({ access: "USER" }),
      Role.create({ access: "VISITOR" })
    ]);
    return logger.info('createRoles: values :::::', values)

  } catch (error) {
    console.log("🚀 ~ file: role.default.create.ts:18 ~ createRoles ~ error", error)
    return
  }
}