import express from "express"
import { createRole, getRole } from "../modules/role/role.controller"

const roleRoutes = express.Router()

roleRoutes.get('/:id', getRole)

roleRoutes.post('/create', createRole)

export  { roleRoutes }