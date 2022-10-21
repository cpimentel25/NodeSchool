const fs = require('fs');
const path = require('path');

const PATH = process.argv[2];

fs.readdir(PATH, 'utf-8', function(err, files){
    if (err) {
        console.log(err);
    }
    // console.log(files);

    files.forEach(filePath => {
        if (path.extname(filePath) == '.md')
            console.log(filePath);
    });

});