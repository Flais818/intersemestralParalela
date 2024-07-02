import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Auto {
  id: number;
  marca: string;
  anio: string;
  color: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {

  public autos: Auto[] = [];
  public color: string = '';
  public contador: number = 0;
  public j: number = 0;
  public cantidadAutosVerdes: number = 0;
  public tiempoFor: number = 0;
  public tiempoFilter: number = 0;
  public value: string = "";
  public ids: number[] = [];


  constructor() { }

  ngOnInit(): void {

    for (let i = 1; i <= 10000; i++) {
      const id = i;
      const marcas = ['audi', 'bmw', 'mercedes-benz', 'porsche'];
      const marca = marcas[Math.floor(Math.random() * marcas.length)];
      const anio = (2000 + Math.floor(Math.random() * 21)).toString();
      const colores = ['verde', 'gris', 'negro', 'blanco', 'rojo', 'azul'];
      const color = colores[Math.floor(Math.random() * colores.length)];
      this.autos.push({ id, marca, anio, color });
    }
  }

  condicionABuscar(value: string) {
    let color = value.toString();
    let inputCondicion = document.getElementById("condicion") as HTMLInputElement;

    console.time('for-loop');

    for (this.j = 0; this.j < this.autos.length; this.j++) {
      if (this.autos[this.j].color === inputCondicion.value) {
        this.contador++;
        this.ids.push(this.autos[this.j].id);
      }

    }
    console.timeEnd('for-loop');

    console.time('filter');
    const autosVerdes = this.autos.filter(auto => auto.color === inputCondicion.value);
    this.cantidadAutosVerdes = autosVerdes.length;
    console.timeEnd('filter');

    console.log(this.ids)

  }

}


