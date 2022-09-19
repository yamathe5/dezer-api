const express = require("express");

const { SongsController } = require("./controller");

const router = express.Router();

module.exports.SongsAPI = (app) => {
  router
    .get("/", SongsController.getSongs)
    .get("/:id", SongsController.getSong)
    .post("/", SongsController.createSong)
    .delete("/:id", SongsController.deleteSong)
    .patch("/:id", SongsController.updateSong);
  app.use("/api/songs", router);
};
