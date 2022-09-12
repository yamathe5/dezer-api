const express = require("express");

const { AlbumsController } = require("./controller");

const router = express.Router();

module.exports.AlbumsAPI = (app) => {
  router
    .get("/", AlbumsController.getAlbums)
    .get("/:id", AlbumsController.getAlbum) // http://localhost:3000/api/Albums/32
    .post("/", AlbumsController.createAlbum)
    .delete("/:id", AlbumsController.deleteAlbum) // http://localhost:3000/api/Albums
    .patch("/:id", AlbumsController.updateAlbum); // http://localhost:3000/api/Albums
  app.use("/api/albums", router);
};
