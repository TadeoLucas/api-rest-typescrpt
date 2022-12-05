import express from "express"
import { createRole, getRole } from "../controler/role"

const routerUser = express.Router()

routerUser.get('/:id', getRole)

routerUser.post('/create', createRole)

export default routerUser