import express from "express"
import { checkSession } from "../../middleware/session"
import {
  createUser,
  loginCtrl,
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



userRoutes.post('/login', loginCtrl)

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

userRoutes.get('/', checkSession, getUsers)

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
 *          description: User primary unique id
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

userRoutes.get('/:id', checkSession, getUserById)

/**
 * Put track
 * @openapi
 * /users/{id}:
 *    put:
 *      tags:
 *        - Users
 *      summary: "Modify Users Data by id"
 *      description: Endpoint wich calls to microservice User 
 *      operationId: modifyUserById
 *      parameters:
 *        - name: id
 *          in: path
 *          description: User primary unique id
 *          required: true
 *          type: string
 *      responses:
 *        '200':
 *          description: Returns an object with the modified user (see example below)
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/putUserByIdFromConsultingOk"
 *        '400':
 *          description: Return error stack and message
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/putUserByIdFromConsulting400"
 */

userRoutes.put('/:id', checkSession, modifyUserById)

/**
 * Put track
 * @openapi
 * /users/state/{account_name}:
 *    put:
 *      tags:
 *        - Users
 *      summary: "Modify Users Data by account_name"
 *      description: Endpoint wich calls to microservice User 
 *      operationId: changeStateByAccountName
 *      parameters:
 *        - name: account_name
 *          in: path
 *          description: User account_name unique
 *          required: true
 *          type: string
 *      responses:
 *        '200':
 *          description: Returns an object with the modified user (see example below)
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/putUserByAccountNameFromConsultingOk"
 *        '400':
 *          description: Return error stack and message
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/putUserByAccountNameFromConsulting400"
 */

userRoutes.put('/state/:account_name', checkSession, changeStateByAccountName)

/**
 * Delete track
 * @openapi
 * /users/{id}:
 *    delete:
 *      tags:
 *        - Users
 *      summary: "Delete Users Data by id"
 *      description: Endpoint wich calls to microservice User 
 *      operationId: deleteUserById
 *      parameters:
 *        - name: id
 *          in: path
 *          description: User primary unique id
 *          required: true
 *          type: string
 *      responses:
 *        '200':
 *          description: Returns an object with the delete user (see example below)
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/deleteUserByIdFromConsultingOk"
 *        '400':
 *          description: Return error stack and message
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/deleteUserByIdFromConsulting400"
 */

userRoutes.delete('/:id', checkSession, deleteUserById)

export { userRoutes } 