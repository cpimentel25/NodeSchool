const fs = require("fs");
const path = require("path");

module.exports = function (dir, ext, callBack) { // <- Modulo a exportar.
  fs.readdir(dir, "utf-8", function (err, files) {
    if (err) {
      return callBack(err);
    }

    const filterList = files.filter((file) => {
      return path.extname(file) === `.${ext}`;
    });
    callBack(null, filterList); // <- callBack de la funcion en './hazloModular.js'
  });
};
