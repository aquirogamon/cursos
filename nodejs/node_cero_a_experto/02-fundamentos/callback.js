// setTimeout(() => {
//     console.log('Hola mundo');
// }, 3000);


let getUserById = (id, callback) => {
    let user = {
        nombre: 'Armando',
        id
    };
    if (id === 20) {
        callback(`El usuario con id ${id}, no existe en el BD`);
    } else {
        callback(null, user);
    }
};

getUserById(10, (err, user) => {
    if (err) {
        return console.log(err);
    };
    console.log('Usuario de base de datos', user);
});