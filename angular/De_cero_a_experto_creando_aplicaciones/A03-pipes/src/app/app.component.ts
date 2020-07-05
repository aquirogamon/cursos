import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Capitán América';

  password = 'ase!3rf4om3i23r234fr3rcsvcsdm';

  nombre = 'ArManDo QUirOgA monTERo';

  arreglo = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  personajes: string[] = ['Ironman', 'Spiderman', 'Thor', 'Loki', 'Groot'];

  PI: number = Math.PI;

  porcentaje = 0.23456;

  salario = 1234.5;

  heroe = {
    nombre: 'Walter',
    clave: 'Papa',
    edad: 60,
    direccion: {
      calle: 'Colon',
      casa: 7
    }
  };

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  });

  fecha: Date = new Date();

  idioma = 'fr';

  videoUL = 'https://www.youtube.com/embed/1MPRbX7ACh8';

  activar = true;
}
