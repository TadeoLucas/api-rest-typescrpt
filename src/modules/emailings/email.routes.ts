import express from "express"
import { sendValidateEmail } from "./email.controller"

const emailsRoutes = express.Router()

emailsRoutes.get('/validate/:validId', sendValidateEmail)

export  { emailsRoutes }

/*
crear un  numero de 6 digitos aleatoriamente // ruta de creacion
encriptarlo 
enviarlo por mail
*/