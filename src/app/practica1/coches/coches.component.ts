import { Component } from '@angular/core';

interface Auto {
  id: number;
  marca: string;
  anio: string;
  color: string;
}

@Component({
  selector: 'app-coches',
  standalone: true,
  imports: [],
  templateUrl: './coches.component.html',
  styleUrl: './coches.component.css'
})
export class CochesComponent {

  public contador: number = 0;
  public autos: Auto[] = [];
  // Definimos una variable para la condicion de busqueda
  public condicion: string = 'verde';
  public j: number = 0;

  // Creación de los autos
  constructor() {
    for (let i = 1; i <= 1000; i++) {
      const id = i;
      // Definimos los posibles valores de la interfaz
      const marcas = ['audi', 'bmw', 'mercedes-benz', 'porsche'];
      const marca = marcas[Math.floor(Math.random() * marcas.length)];
      const anio = (2000 + Math.floor(Math.random() * 21)).toString();
      const colores = ['verde', 'gris', 'negro', 'blanco', 'rojo', 'azul'];
      const color = colores[Math.floor(Math.random() * colores.length)];

      this.autos.push({ id, marca, anio, color });
    }

    for (this.j = 0; this.j <= 1000; this.j++) {
      if (this.autos[this.j].color === this.condicion) {
        this.contador++;
      }
    }
    console.log('Los autos verdes son' + this.contador);

  }

}
