import express from "express"
import {
  createUser,
  getUserById,
  getUsers,
  modifyUserById,
  deleteUserById,
  changeStateByAccountName
} from "./user.controller"

const userRoutes = express.Router()

userRoutes.post('/create', createUser)

userRoutes.get('/:id', getUserById)

/**
 * Get track
 * @openapi
 * /users/allUsers:
 *    get:
 *      tags:
 *        - Users
 *      summary: "Get Users Data"
 *      description: Endpoint wich calls to MS User and format data to be used at frontend
 *      operationId: getUsers
 *      responses:
 *        '200':
 *          description: Return array of users. (see schema below)
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/getUsersDataForConsultinOk"
 *        '400':
 *          description: Return error stack and message
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/getUsersDataForConsultin400"
 */

userRoutes.get('/allUser', getUsers)

userRoutes.put('/:id', modifyUserById)

userRoutes.put('/:account_name', changeStateByAccountName)

userRoutes.delete('/:id', deleteUserById)

export {
  userRoutes
} 