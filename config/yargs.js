const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Actualiza el estado de la tarea, por defecto a "Done"'
}


const argv = require('yargs')
    .command('crear', 'Crear una nueva tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de la tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}