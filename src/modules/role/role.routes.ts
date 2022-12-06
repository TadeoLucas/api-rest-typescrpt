import express from "express"
import { createRole, getRole } from "./role.controller"

const roleRoutes = express.Router()

roleRoutes.get('/:id', getRole)

roleRoutes.post('/create', createRole)

export  { roleRoutes }