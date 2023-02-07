import express from "express"
import { getVideos, createControler, updateVideoControler, getVideoById } from "./video.controller"

const videoRoutes = express.Router()

videoRoutes.post('/create', createControler)

videoRoutes.put('/update', updateVideoControler)

videoRoutes.get('//:id', getVideoById)

videoRoutes.get('/all', getVideos)

export  { videoRoutes }



/*

 -  POST |  /videos/create    [ has required fields ]
 -  PUT |  /videos/update   [ has required fields ] 
 -  GET |  /videos//:id   { params:  [ “id” ] }
 -  GET |  /videos/all    {  query:  [“date_since“, ”date_to” ] }

 */