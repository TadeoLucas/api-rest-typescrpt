import  express from "express"
import logger from "./config/logger"

import dotenv from 'dotenv' // preguntar

const app = express()

app.use(express.json())

const PORT = process.env.DB_PORT || 3001

app.get('/', (_, res) => {
  logger.info('init-root')
  res.send('hollo word')
})

app.listen(PORT, () => {
  logger.info(`it´s live XD:::PORT: ${PORT}`)
})