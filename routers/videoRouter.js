import express from "express";
import routes from "../routes";
import { 
    videos, 
    getUpload, 
    postUpload,
    videoDetail,
    editVideo,
    deleteVideo
} from "../controller/video.controller";
import { unloadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, unloadVideo, postUpload); 

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter; 