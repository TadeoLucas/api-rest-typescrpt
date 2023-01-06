import express from "express"
import { sendValidateEmail } from "./email.controller"

const emailsRoutes = express.Router()

emailsRoutes.get('/validate/:User_Id', sendValidateEmail)

export  { emailsRoutes }

/*
crear un  numero de 6 digitos aleatoriamente // ruta de creacion
encriptarlo 
enviarlo por mail
*/