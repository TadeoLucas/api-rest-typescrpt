import logger from "../../config/logger";
import { VideoI2, VideoI3 } from "./video.interface";
import Video from './video.model'


export const createVideoService = (body: VideoI2) => {
  try {
    const { title, comments, url } = body
    const videoCreated = Video.create({
      title,
      comments,
      url
    })
    return videoCreated

  } catch (error) {
    logger.error(`error service createVideoService ${error}`)
    return new Error('could not find videos')
  }
}

export const updateVideoService = (body: VideoI3) => {
  try {
    const { id, title, comments } = body;
    if(title && comments){
      const response = Video.update(
        {
          title,
          comments
        },
        {
          where: { id }
        }
      )
      return response;
    }
    if(comments){
      const response = Video.update(
        {
          comments
        },
        {
          where: { id }
        }
      )
      return response;
    }
    if(title){
      const response = Video.update(
        {
          title
        },
        {
          where: { id }
        }
      )
      return response;
    }
    throw new Error('no field was updated')
  } catch (error) {
    logger.error(`error service updateVideoService ${error}`)
    return new Error('could not update Video')
  }
}


export const getAllVideosService = () => {
  try {
    const response = Video.findAll();
    return response;
  } catch (error) {
    logger.error(`error service getAllVideosService ${error}`)
    return new Error('could not find videos')
  }
};


export const getVideoByIdService = (id: string) => {
  try {
    const response = Video.findByPk(id);
    return response;
  } catch (error) {
    logger.error(`error service getVideoByIdService ${error}`)
    return new Error('could not find Video')
  }
};


export const deletVideoByIdService = (id: string) => {
  try {
    const response = Video.destroy(({
      where: {
        id
      }
    }));
    return response;
  } catch (error) {
    logger.error(`error service deletVideoByIdService ${error}`)
    return new Error('could not delete Video')
  }
};