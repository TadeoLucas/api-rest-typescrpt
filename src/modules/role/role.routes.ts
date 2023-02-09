import express from "express"
import { checkSession } from "../../middleware/session"
import { createRole, getRole } from "./role.controller"

const roleRoutes = express.Router()

roleRoutes.get('/:id', checkSession, getRole)

roleRoutes.post('/create', checkSession, createRole)

export  { roleRoutes }