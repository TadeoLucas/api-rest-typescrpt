import express from "express"

const router = express.Router()

router.get('all', (_req, res) => {
  res.send('database is not created yet')
})

export default router