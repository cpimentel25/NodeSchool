const http = require("http");
const bl = require("bl");

const URL = process.argv[2];

// ->

let res = http.get(URL, callback);

res.on("error", (err) => {
  console.error(`Got error: ${err.message}`);
});

function callback(response) {
  response.setEncoding("utf8");

  response.pipe(
    bl((err, data) => {
      if (err) {
        console.log(`Get a error: ${err}`);
      }
      //1. Cantidad de caracteres recibidos.
      console.log(data.toString().length);
      //2. total de caracteres recibidos.
      console.log(data.toString());
    })
  );
}
