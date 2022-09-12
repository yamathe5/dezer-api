const createError = require("http-errors");
const debug = require("debug")("app:mopudle-Albums-controller");
debug.enabled = true;

const { AlbumsService } = require("./services");
const { Response } = require("../common/response");

module.exports.AlbumsController = {
  getAlbums: async (req, res) => {
    try {
      let albums = await AlbumsService.getAll();
      Response.success(res, 200, "Lista de albumes", albums);
      // res.json(products); comentamos esto xq reesponse.succes ya lo implementa
    } catch (error) {
      debug(error);
      Response.error(res);
      // res.status(500).json({ message: "internal server error" });
    }
  },
  getAlbum: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      let album = await AlbumsService.getById(id);
      if (!album) {
        Response.error(res, new createError.NotFound());
      } else {
        Response.success(res, 200, `Album: ${id}`, album);
        // res.json(product);
      }
    } catch (error) {
      debug("error");
      Response.error(res);
      // res.status(500).json({ message: "internal server error" });
    }
  },
  createAlbum: async (req, res) => {
    try {
      const { body } = req;
      if (!body || Object.keys(body).length === 0) {
        Response.error(res, new createError.BadRequest());
      } else {
        const insertedId = await AlbumsService.create(body);
        Response.success(res, 201, "Usuario agregado", insertedId); // res.json(insertedId);
      }
    } catch (error) {
      debug("error");
      Response.error(res); // res.status(500).json({ message: "internal server error" });
    }
  },

  updateAlbum: async (req, res) => {
    try {
      let id = req.params.id;
      let body = req.body;
      let updatedAlbum = await AlbumsService.update(id, body);
      Response.success(res, 200, "Album actualizado", updatedAlbum);
    } catch (error) {
      debug(error);
      Response.error(res, new createError.BadRequest());
    }
  },

  deleteAlbum: async (req, res) => {
    try {
      let id = req.params.id;
      let response = await AlbumsService.remove(id);
      if (response.deletedCount === 1) {
        debug("Se elimino 1 usuario");
        Response.success(res, 200, "Usuario eliminado", response);
      } else {
        Response.error(res, new createError.NotFound());
      }
    } catch (error) {
      debug("error");
      Response.error(res);
    }
  },
};
