const createError = require("http-errors");
const debug = require("debug")("app:mopudle-Songs-controller");
debug.enabled = true;

const { SongsService } = require("./services");
const { Response } = require("../common/response");

module.exports.SongsController = {
  getSongs: async (req, res) => {
    try {
      let Songs = await SongsService.getAll();
      Response.success(res, 200, "Lista de Songs", Songs);
      // res.json(products); comentamos esto xq reesponse.succes ya lo implementa
    } catch (error) {
      debug(error);
      Response.error(res);
      // res.status(500).json({ message: "internal server error" });
    }
  },
  getSong: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      let Song = await SongsService.getById(id);
      if (!Song) {
        Response.error(res, new createError.NotFound());
      } else {
        Response.success(res, 200, `Song: ${id}`, Song);
        // res.json(product);
      }
    } catch (error) {
      debug("error");
      Response.error(res);
      // res.status(500).json({ message: "internal server error" });
    }
  },
  createSong: async (req, res) => {
    try {
      const { body } = req;
      if (!body || Object.keys(body).length === 0) {
        Response.error(res, new createError.BadRequest());
      } else {
        const insertedId = await SongsService.create(body);
        Response.success(res, 201, "Usuario agregado", insertedId); // res.json(insertedId);
      }
    } catch (error) {
      debug("error");
      Response.error(res); // res.status(500).json({ message: "internal server error" });
    }
  },

  updateSong: async (req, res) => {
    try {
      let id = req.params.id;
      let body = req.body;
      let updatedSong = await SongsService.update(id, body);
      Response.success(res, 200, "Song actualizado", updatedSong);
    } catch (error) {
      debug(error);
      Response.error(res, new createError.BadRequest());
    }
  },

  deleteSong: async (req, res) => {
    try {
      let id = req.params.id;
      let response = await SongsService.remove(id);
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
