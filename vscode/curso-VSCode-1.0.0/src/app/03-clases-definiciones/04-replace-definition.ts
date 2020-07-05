import { SuperHeroe2 } from './extra/classes';

/*
    Objetivo:
        Cambiar únicamente la refencia de SuperHeroe a Heroe
        OJO!: Pero no reemplazar los strings

    Tips:
        Replace Symbol
        F2
*/


const wolverine = new SuperHeroe2();
const ironman = new SuperHeroe2();
const spiderman = new SuperHeroe2();

function saludar() {
  return 'El SuperHeroe Wolverine es genial!';
}

function gritar() {
  return 'El SuperHeroe en este string no se debe de cambiar';
}

