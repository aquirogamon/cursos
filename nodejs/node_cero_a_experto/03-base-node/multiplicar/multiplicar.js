// Requiereds
const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${base} no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
};

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        console.log('====================='.green);
        console.log(`Tabla del ${base}`.bgBlue);
        console.log('====================='.green);
        if (!Number(base)) {
            reject(`El valor ${base} no es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i} \n`);
        }
    });
};


module.exports = {
    crearArchivo,
    listarTabla
};