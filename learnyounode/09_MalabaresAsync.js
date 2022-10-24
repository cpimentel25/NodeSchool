const http = require("http");
const bl = require("bl");
const async = require("async");

const parallel = require("async/parallel");

const URL = process.argv[2];

const URL1 = process.argv[2];
const URL2 = process.argv[2];
const URL3 = process.argv[2];

// ->
let res = http.get(URL, callback);

res.on("error", (err) => {
  console.error(`Got error: ${err.message}`);
});

function callback(response) {
  response.setEncoding("utf8");

  // let newUrl = response.pipe(
  //   bl((err, data) => {
  //     if (err) {
  //       console.log(`Get a error: ${err}`);
  //     }
  //     return console.log(data.toString());
  //   })
  // );

  async.parallel([
    (callback) => {
      setTimeout(() => {
        callback(null, response.pipe(
          bl((err, data) => {
            if (err) {
              console.log(`Get a error: ${err}`);
            }
            return console.log(data.toString());
          })
        ));
      }, 300);
    },
    (callback) => {
      setTimeout(() => {
        callback(null, response.pipe(
          bl((err, data) => {
            if (err) {
              console.log(`Get a error: ${err}`);
            }
            return console.log(data.toString());
          })
        ));
      }, 200);
    },
    (callback) => {
      setTimeout(() => {
        callback(null, response.pipe(
          bl((err, data) => {
            if (err) {
              console.log(`Get a error: ${err}`);
            }
            return console.log(data.toString());
          })
        ));
      }, 100);
    },
  ]);
}
