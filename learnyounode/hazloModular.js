const mymodule = require('./filterExt') // <- Importacion del modulo

const dir = process.argv[2];
const ext = process.argv[3];

function callback(err, list){
    if(err){
        return console.log(err);
    }
    list.forEach(element => {
        console.log(element);
    });
}

mymodule(dir, ext, callback);
