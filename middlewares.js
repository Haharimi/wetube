import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });
const multerAvatar = multer({ dest: "uploads/avatars/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    // req.user가 존재한다면, 즉 login 상태라면 home으로 redirect
    res.redirect(routes.home);
  } else {
    // req.user가 존재하지않는다면, 즉 logout 상태라면 다음으로 진행
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    // req.user가 존재한다면, 즉 login 상태라면 다음으로 진행
    next();
  } else {
    // req.user가 존재하지않는다면, 즉 logout 상태라면  home으로 redirect
    req.redirect(routes.home);
  }
};

export const uploadVideo = multerVideo.single("videoFile");
export const uploadAvatar = multerAvatar.single("avatar");
