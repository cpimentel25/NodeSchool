const fs = require('fs');

const BUFFER = fs.readFileSync(process.argv[2]);

const STR = BUFFER.toString().split('\n');

console.log(STR.length - 1);