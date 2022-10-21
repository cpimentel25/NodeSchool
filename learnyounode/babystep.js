// console.log(process.argv);

const [node, path, ...dates] = process.argv;

//metodo con 'reduce':
const result = dates.reduce((acc, dates) => acc + Number(dates), 0);
console.log(result);

//metodo con 'for':
let n = 0;
for (let i = 0; i < +dates.length; i++){
    n += +dates[i];
};

console.log(n);
