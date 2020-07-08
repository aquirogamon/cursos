const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./config/por-hacer.js');

let command = argv._[0];
let descripcion = argv.descripcion;
let completado = argv.completado;

switch (command) {
    case 'crear':
        let tarea = porHacer.crear(descripcion);
        console.log(tarea);
        break;

    case 'listar':
        console.log(argv);
        let tareas = porHacer.getListadoPorhacer();
        for (let tarea of tareas) {
            console.log('=========== Por hacer ============'.green);
            console.log(tarea.descripcion);
            if (!tarea.completado) {
                console.log(`Estado: `, colors.red(tarea.completado));
            } else {
                console.log(`Estado: `, colors.blue(tarea.completado));
            }
            console.log('==================================\n'.green);
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(descripcion, completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrarTarea(descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido');
        break;
}