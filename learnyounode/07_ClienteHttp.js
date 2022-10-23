const http = require("http");

// process.argv.forEach((val, index) => { // <- Imprimimos los valores de "process.argv".
//     console.log(`${index}: ${val}`);
// });

const URL = process.argv[2];

//Metodo 1 http.get() (node v12):
let res = http.get(URL, callback);

res.on("error", (err) => { // <- Si existe un error, nos arroja en consola el error.
  console.error(`Got error: ${err.message}`);
});

function callback(response) {
  response.setEncoding("utf8");
  //   console.log(response.setEncoding("utf8"));

  let rawData = '';

  response.on("data", (chunk) => {
    console.log(chunk);
  });
  response.on("end", () => {
    try {
      const parsedData = JSON.parse(rawData);
      console.log(parsedData);
    } catch (error) {
      console.error(`Got error (parsedData): ${error.message}`);
    }
  });
}

//Metodo 3 (node v19.0+):
// function httpGet() {
//     const req = new XMLHttpRequest();
//     req.open('GET', process.argv);
//     req.send();
//     // req.onload = () => console.log(req.responseText)

//     // console.log(req.responseText);

//     return console.log(req.responseText);
// }
