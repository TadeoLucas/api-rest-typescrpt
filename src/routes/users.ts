import express from "express"
import { createUser, getUser } from "../controler/user"

const routerUser = express.Router()

routerUser.get('/allUsers', getUser)

routerUser.post('/create', createUser)

export default routerUser