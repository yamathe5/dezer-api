const { FetchSongsData } = require("../database/songs");
const { FetchAllSongsData } = require("../database/songs");
// https://api.deezer.com/Song/302121 - 302150
const getAll = async () => {
  const collection = await FetchAllSongsData(); // ruta
  // console.log(collection);
  return collection;
};

const getById = async (id) => {
  const collection = await FetchSongsData({ id });
  return collection;
};

const create = async (body) => {
  const collecion = await FetchSongsData(body);
  return collection;
};

const update = async (id, body) => {
  const collection = await FetchSongsData(id, body);
  console.log(result, id, body);
  return collection;
};

const remove = async (id) => {
  const collecion = await FetchSongsData(id);
  return collection;
};

module.exports.SongsService = {
  getAll,
  getById,
  create,
  update,
  remove,
};
