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

/**
 * Create track
 * @openapi
 * /users/create:
 *    post:
 *      tags:
 *        - Users
 *      summary: "Post Users Create"
 *      description: Endpoint calling microservice to create a new user
 *      operationId: createUser
 *      responses:
 *        '200':
 *          description: Returns an array with the user created or found. (see schema below)
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/createUserDbConsultingOk"
 *        '400':
 *          description: Returns error stack and message. (see schema below)
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/createUserDbConsulting400"
 */

userRoutes.post('/create', createUser)

/**
 * Get track
 * @openapi
 * /users/:
 *    get:
 *      tags:
 *        - Users
 *      summary: "Get Users Data"
 *      description: Endpoint wich calls to MS User and format data to be used at frontend
 *      operationId: getUsers
 *      responses:
 *        '200':
 *          description: Returns array of users. (see schema below)
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/getUsersDataFromConsultinOk"
 *        '400':
 *          description: Returns error stack and message
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/getUsersDataFromConsultin400"
 */

userRoutes.get('/', getUsers)

/**
 * Get track
 * @openapi
 * /users/{id}:
 *    get:
 *      tags:
 *        - Users
 *      summary: "Get Users Data by Id"
 *      description: Endpoint wich calls to microservice User 
 *      operationId: getUserById
 *      parameters:
 *        - name: id
 *          in: path
 *          description: user primary unique id
 *          required: true
 *          type: string
 *      responses:
 *        '200':
 *          description: Returns an object with the searched user (see example below)
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/getUserByIdFromConsultingOk"
 *        '400':
 *          description: Return error stack and message
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/getUserByIdFromConsulting400"
 */

userRoutes.get('/:id', getUserById)

userRoutes.put('/byId/:id', modifyUserById)

userRoutes.put('/:account_name', changeStateByAccountName)

userRoutes.delete('/:id', deleteUserById)

export { userRoutes } 