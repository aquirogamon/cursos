const descripcion = {
    demand: true,
    alias: 'd',
    description: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    description: 'Marca como completado o pendiente la tarea por hacer'
};

const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado de completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea', {
        descripcion
    })
    .options({
        completado: {
            alias: 'c',
            description: 'Lista las tareas completadas o pendientes'
        },
        listado: {
            alias: 'l',
            default: true,
            description: 'Lista las tareas completadas o pendientes'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
};