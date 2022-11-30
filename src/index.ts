import  express from "express"
import logger from "./config/logger"

import routerUser from "./routes/users"

const PORT = process.env.DB_PORT || 3001

const app = express()

app.use(express.json())

app.use('/users', routerUser)


app.get('/', (_, res) => {
  logger.info('init-root-reggae')
  res.send('hollo word')
})

app.listen(PORT, () => {
  logger.info(`it´s live XD:::PORT: ${PORT}`)
})