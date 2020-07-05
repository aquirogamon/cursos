const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors/safe');

// let argv2 = process.argv;
// let parametro = argv2[2];
// let base = parametro.split('=')[1];
let base = argv.base;
let limite = argv.limite;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(base, limite);
        break;

    case 'crear':
        crearArchivo(base, limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}