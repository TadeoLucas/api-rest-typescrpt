import express from "express"
import { checkSession } from '../../middleware/session'
import { sendEmailKey, validateKey } from "./email.controller"

const emailsRoutes = express.Router()

/* sendEmailKey  retorna el id de la llave para validar */

emailsRoutes.get('/sendBy/:User_Id', checkSession, sendEmailKey);

/* requiere por params el id de la llave para validar */
/** requiere por body la clave alfanumerica enviada al mail */

emailsRoutes.get('/validate/:id', checkSession, validateKey)

export { emailsRoutes }