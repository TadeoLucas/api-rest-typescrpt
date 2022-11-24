import  express from "express"
import logger from "./config/logger"

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3000

app.get('/', (_, res) => {
  logger.info('init-root')
  res.send('hollo word')
})

app.listen(PORT, () => {
  logger.info(`it´s live XD:::PORT: ${PORT}`)
})