import express from "express"
import { checkSession } from "../../middleware/session"
import { getVideos, createControler, updateVideoControler, getVideoById, deleteVideoById } from "./video.controller"

const videoRoutes = express.Router()

videoRoutes.post('/create', checkSession, createControler)

videoRoutes.put('/update', checkSession, updateVideoControler)

videoRoutes.get('//:id', getVideoById)

videoRoutes.get('/all', getVideos)

videoRoutes.delete('/id', checkSession, deleteVideoById)

export  { videoRoutes }
