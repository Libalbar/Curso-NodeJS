const {getTabla} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

// console.log(process.argv);
// console.log(argv);

// console.log('base: yargs', argv.b);

// const [ , ,arg3 = 'base=5'] = process.argv;
// const [ , base = 1] = arg3.split('=');

// const base = 3;

getTabla(argv.b, argv.l, argv.h)
    .then(m => console.log(`Tabla ${argv.b}.txt ha sido creada`))
    .catch(err => console.log(err))

