import express from "express"
import { createUser, getUserById, getUsers, modifyUserById, deleteUserById, changeStateByAccountName } from "./user.controller"

const userRoutes = express.Router()

/**
 * Get track
 * @openapi
 * /users/allUsers:
 *    post:
 *      tags:
 *        - Consulting
 *      summary: "Get Users Data"
 *      description: Endpoint wich calls to MS User and format data to be used at frontend
 *      operationId: getUsers
 *      parameters:
 *        - name: visitRecordId
 *          in: path
 *          description: visit record id wich belongs to current appointment
 *          required: false
 *          type: string
 *      responses:
 *        '200':
 *          description: Return object with all users
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/getUsersDataForConsultingOk"
 *        '400':
 *          description: Return error stack and message
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/getUsersDataForConsulting400"

 */

userRoutes.post('/create', createUser)

userRoutes.get('/allUsers', getUsers)

userRoutes.get('/:id', getUserById)

userRoutes.put('/:id', modifyUserById)

userRoutes.put('/:account_name', changeStateByAccountName)

userRoutes.delete('/:id', deleteUserById)
export {
  userRoutes
} 