import express from "express"
import { createUser, getUsers } from "./user.controller"

const userRoutes = express.Router()

/**
 * Get track
 * @openapi
 * /users/allUsers:
 *    post:
 *      tags:
 *        - Prescription
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
 *                $ref: "#/components/schemas/getUsersDataForConsultinOk"
 *        '400':
 *          description: Return error stack and message
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/getUsersDataForConsulting400"

 */

userRoutes.get('/allUsers', getUsers)

userRoutes.post('/create', createUser)

export {
  userRoutes
} 