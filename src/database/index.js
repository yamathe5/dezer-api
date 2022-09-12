const fetch = require("node-fetch");
const debug = require("debug")("app:module-database");
debug.enabled = true;

module.exports.FetchData = ({ id, body }) => {
  return new Promise(async (resolve, reject) => {
    try {
      await fetch(`https://api.deezer.com/user/${id}`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          resolve(res);
        });
    } catch (error) {
      reject(error);
    }
  });
};
