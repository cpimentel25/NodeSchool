// console.log(process.argv);

const [node, path, ...dates] = process.argv;

//metodo con 'reduce':
// const N = dates.reduce((acc, dates) => acc + dates, 0);
// console.log(N);

//metodo con 'for':

let n = 0;
for (let i = 0; i < +dates.length; i++){
    n += +dates[i];
};

console.log(n);
