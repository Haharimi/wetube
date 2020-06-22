export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const search = (req, res) => res.render("search", { pageTitle: "Search" });
export const videos = (req, res) => res.render("videos", { pageTitle: "videos" });
export const upload = (req, res) => res.render("upload", { pageTitle: "upload" });
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "video Detail" });
export const editVideo = (req, res) => res.render("videoEdit", { pageTitle: "video Edit" });
export const deleteVideo = (req, res) => res.render("videoDelete", { pageTitle: "video Delete" });


