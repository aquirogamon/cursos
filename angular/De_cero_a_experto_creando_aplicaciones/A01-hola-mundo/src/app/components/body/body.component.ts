import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {
  mostrar = true;
  frase: any = {
    mensaje: 'La perseverancia y el esfuerzo es la base de todas tus metas',
    autor: 'Armando Quiroga'
  };
  personajes: string[] = ['Walter', 'Armando', 'Miguel'];
}
