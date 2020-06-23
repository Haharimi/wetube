import {videos} from "../db"

export const home = (req, res) => {
    
    res.render("home", { pageTitle: "Home", videos });
};

export const search = (req, res) => {
    const {
        query: { term: searchingBy }
    } = req;
    
    res.render("search", { pageTitle: "Search", searchingBy: searchingBy });
};

export const upload = (req, res) => res.render("upload", { pageTitle: "upload" });

export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "video Detail" });

export const editVideo = (req, res) => res.render("videoEdit", { pageTitle: "video Edit" });

export const deleteVideo = (req, res) => res.render("videoDelete", { pageTitle: "video Delete" });


