/**
 * Async Await
 */

// let getNombre = async() => {
//     return 'Armando';
// };

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Armando');
        });
    });
};

let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${nombre}`;
}

saludo().then(nombre => {
    console.log(nombre);
}).catch(err => {
    console.log('Error de ASYNC', err);
});