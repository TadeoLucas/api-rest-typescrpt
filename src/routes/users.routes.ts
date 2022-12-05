import express from "express"
import { createUser, getUser } from "../modules/user/user.controller"

const userRoutes = express.Router()

userRoutes.get('/allUsers', getUser)

userRoutes.post('/create', createUser)

export {
  userRoutes
} 