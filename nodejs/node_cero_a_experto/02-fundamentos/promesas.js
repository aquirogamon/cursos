let empleados = [{
        id: 1,
        nombre: 'Armando'
    },
    {
        id: 2,
        nombre: 'Miguel'
    },
    {
        id: 3,
        nombre: 'Walter'
    }
];

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
};

let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No se encontró un salario para ${empleado.nombre}`);
        } else {
            resolve({
                id: empleado.id,
                nombre: empleado.nombre,
                salario: salarioDB.salario
            });
        }
    })
};

// getEmpleado(3).then((empleado) => {
//     getSalario(empleado).then((salario) => {
//         console.log(`El Salario de ${empleado.nombre} es de ${salario.salario}`);
//     }, err => {
//         console.log(err);
//     });
// }, err => {
//     console.log(err);
// });


getEmpleado(10).then((empleado) => {
    return getSalario(empleado);
}).then((response) => {
    console.log(response);
}).catch(err => {
    console.log(err);
});