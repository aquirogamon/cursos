let pelicula: string = "Mision Imposible";
let serie: string = "Dr House";
let poema: string = `Prueba
de
texto
largo
`;

let programas: string =
  "Mis programas favoritos son: " + pelicula + " y " + serie;
console.log(programas);

let programas2: string = `Mis programas favoritos son: ${pelicula} y ${serie}`;
console.log(programas2);
let edad_actual: number = 35;
let edad_futura: string = `
El siguiente mes mi edad será: ${edad_actual + 1}
`;
console.log(edad_futura);

// Metodos
console.log(edad_futura.charAt(1));
console.log(programas.toLocaleUpperCase());
