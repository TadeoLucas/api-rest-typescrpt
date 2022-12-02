import  express from "express"
import logger from "./config/logger"
import { app } from "./app"



const PORT = process.env.DB_PORT || 3001




app.listen(PORT, () => {
  logger.info(`it´s live XD:::PORT: ${PORT}`)
})

/*
  npm ts-standard -D -E
Es una libreria q usa eslint por detras y ayuda con las configuraciones
luego de la instalacion hacer un script ej::: 
  "lint": "ts-standard",
y luego agregar al package.json::: 
  "eslintConfig":{ "extends": ["./node_modules/ts-standard/eslintrc.json"] }
*/ 