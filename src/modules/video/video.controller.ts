import { RequestHandler } from "express";
import logger from "../../config/logger";
import { formatResponse } from "../../utils/formatResponse";
import { getAllVideosService, createVideoService, updateVideoService, getVideoByIdService } from "./video.service";

export const createControler: RequestHandler = async (req, res) => {
  try {
    const videoCreated: any = await createVideoService(req.body)
    if (videoCreated) {
      const response = {
        id: videoCreated.dataValues.id,
        title: videoCreated.dataValues.title,
        comments: videoCreated.dataValues.comments,
        url: videoCreated.dataValues.url,
        userId: videoCreated.dataValues.userId
      }
      return formatResponse(
        req,
        res,
        response,
        null,
        'user.create.succes',
        200
      )
    }
  } catch (error) {
    logger.error(`error controler createControlerVideo ${error}`)

    return formatResponse(
      req,
      res,
      null,
      [<Error>error],
      'VIDEO.CREATE.ERROR',
      400
    )
  }
}

export const updateVideoControler: RequestHandler = async (req, res) => {
  try {
    const { id, title, comments } = req.body;
    if(id == undefined) throw new Error('id field is required')
    const response = await updateVideoService({ id, title, comments })
    if (response) {
      return formatResponse(
        req,
        res,
        response,
        null,
        'videos.put.succes',
        200
      )
    } else {
      throw new Error('Videos update error')
    }
  } catch (error) {
    logger.error(`error updateVideoControler ${error}`)

    return formatResponse(
      req,
      res,
      null,
      [<Error>error],
      'ERROR_UPDATE_VIDEOS',
      400
    )
  }
}

export const getVideoById: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id
    const video = await getVideoByIdService(id)
    if (video) {
      return formatResponse(
        req,
        res,
        video,
        null,
        'videoById.get.succes',
        200
      )
    } else {
      throw new Error('Video search error')
    }
  } catch (error) {
    logger.error(`error controler getVideoById ${error}`)

    return formatResponse(
      req,
      res,
      null,
      [<Error>error],
      'ERROR_GET_VIDEO_BYID',
      400
    )
  }
}

export const getVideos: RequestHandler = async (req, res) => {
  try {
    const videoArray = await getAllVideosService()
    if (videoArray) {
      return formatResponse(
        req,
        res,
        videoArray,
        null,
        'videos.get.succes',
        200
      )
    } else {
      throw new Error('Videos search error')
    }
  } catch (error) {
    logger.error(`error controler getUsers ${error}`)

    return formatResponse(
      req,
      res,
      null,
      [<Error>error],
      'ERROR_GET_VIDEOS',
      400
    )
  }
}




/*

 -  POST |  /videos/create    [ has required fields ]
 -  PUT |  /videos/update   [ has required fields ] 
 -  GET |  /videos//:id   { params:  [ “id” ] }
 -  GET |  /videos/all    {  query:  [“date_since“, ”date_to” ] }

 */