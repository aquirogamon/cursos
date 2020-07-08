const fs = require('fs');
const path = require('path');

let listadoPorhacer = [];

fileDB = path.join(__dirname, '../db/data.json');

const guardarDB = () => {
    let data = JSON.stringify(listadoPorhacer);
    fs.writeFile(fileDB, data, (err) => {
        if (err) throw new Error('No se pudo guardarDB', err);
    });
};

const cargarDB = () => {
    try {
        listadoPorhacer = require(fileDB);
    } catch (error) {
        listadoPorhacer = [];
    }
};

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false,
    };
    listadoPorhacer.push(porHacer);
    guardarDB();
    return porHacer;
};

const getListadoPorhacer = () => {
    cargarDB();
    return listadoPorhacer;
};

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorhacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorhacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
};

const borrarTarea = (descripcion) => {
    cargarDB();
    let index = listadoPorhacer.findIndex(tarea => tarea.descripcion === descripcion);
    nuevoPorhacer = listadoPorhacer.splice(index, 1);
    if (nuevoPorhacer.length === listadoPorhacer.length) {
        return false;
    } else {
        guardarDB();
        return true;
    }
};

module.exports = {
    crear,
    getListadoPorhacer,
    actualizar,
    borrarTarea
};