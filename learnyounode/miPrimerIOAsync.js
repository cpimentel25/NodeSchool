const fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', function(err, data){
    if (err) {
        console.log(err);
    }
    const result = data.toString().split('\n').length -1;
    console.log(result);
});
