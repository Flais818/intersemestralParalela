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
    let inputColor = document.getElementById("color") as HTMLInputElement;
    let inputMarca = document.getElementById("marca") as HTMLInputElement;
    let inputAnio = document.getElementById("anio") as HTMLInputElement;

    //Por color
    if (!inputAnio.value && !inputMarca.value) {
      console.time('for-loop');
      for (this.j = 0; this.j < this.autos.length; this.j++) {
        if (this.autos[this.j].color === inputColor.value) {
          this.contador++;
          this.ids.push(this.autos[this.j].id);
        }
      }
      console.timeEnd('for-loop');

      console.time('filter');
      const autosVerdes = this.autos.filter(auto => auto.color === inputColor.value);
      this.cantidadAutosVerdes = autosVerdes.length;
      console.timeEnd('filter');
    }

    // Por marca
    else if (!inputAnio.value && !inputColor.value) {
      console.time('for-loop');
      for (this.j = 0; this.j < this.autos.length; this.j++) {
        if (this.autos[this.j].marca === inputMarca.value) {
          this.contador++;
          this.ids.push(this.autos[this.j].id);
        }
      }
      console.timeEnd('for-loop');

      console.time('filter');
      const autosVerdes = this.autos.filter(auto => auto.marca === inputMarca.value);
      this.cantidadAutosVerdes = autosVerdes.length;
      console.timeEnd('filter');
    }

    // Por anio
    else if (!inputMarca.value && !inputColor.value) {
      console.time('for-loop');
      for (this.j = 0; this.j < this.autos.length; this.j++) {
        if (this.autos[this.j].anio === inputAnio.value) {
          this.contador++;
          this.ids.push(this.autos[this.j].id);
        }
      }
      console.timeEnd('for-loop');

      console.time('filter');
      const autosVerdes = this.autos.filter(auto => auto.anio === inputAnio.value);
      this.cantidadAutosVerdes = autosVerdes.length;
      console.timeEnd('filter');
    }

    // Por color y anio
    else if (!inputMarca.value) {
      console.time('for-loop');
      for (this.j = 0; this.j < this.autos.length; this.j++) {
        if (this.autos[this.j].anio === inputAnio.value && this.autos[this.j].color === inputColor.value) {
          this.contador++;
          this.ids.push(this.autos[this.j].id);
        }
      }
      console.timeEnd('for-loop');

      console.time('filter');
      const autosVerdes = this.autos.filter(auto => auto.anio === inputAnio.value && auto.color === inputColor.value);
      this.cantidadAutosVerdes = autosVerdes.length;
      console.timeEnd('filter');
    }

    // Por anio y marca
    else if (!inputColor.value) {
      console.time('for-loop');
      for (this.j = 0; this.j < this.autos.length; this.j++) {
        if (this.autos[this.j].anio === inputAnio.value && this.autos[this.j].marca === inputMarca.value) {
          this.contador++;
          this.ids.push(this.autos[this.j].id);
        }
      }
      console.timeEnd('for-loop');

      console.time('filter');
      const autosVerdes = this.autos.filter(auto => auto.anio === inputAnio.value && auto.marca === inputMarca.value);
      this.cantidadAutosVerdes = autosVerdes.length;
      console.timeEnd('filter');
    }

    // Por marca y color
    else if (!inputAnio.value) {
      console.time('for-loop');
      for (this.j = 0; this.j < this.autos.length; this.j++) {
        if (this.autos[this.j].color === inputColor.value && this.autos[this.j].marca === inputMarca.value) {
          this.contador++;
          this.ids.push(this.autos[this.j].id);
        }
      }
      console.timeEnd('for-loop');

      console.time('filter');
      const autosVerdes = this.autos.filter(auto => auto.color === inputColor.value && auto.marca === inputMarca.value);
      this.cantidadAutosVerdes = autosVerdes.length;
      console.timeEnd('filter');
    }

    // Por los 3
    else if (inputAnio.value && inputColor.value && inputMarca.value) {
      console.time('for-loop');
      for (this.j = 0; this.j < this.autos.length; this.j++) {
        if (this.autos[this.j].color === inputColor.value &&
          this.autos[this.j].marca === inputMarca.value &&
          this.autos[this.j].anio === inputAnio.value) {
          this.contador++;
          this.ids.push(this.autos[this.j].id);
        }
      }
      console.timeEnd('for-loop');

      console.time('filter');
      const autosVerdes = this.autos.filter(auto => auto.color === inputColor.value
        && auto.marca === inputMarca.value
        && auto.anio === inputAnio.value);
      this.cantidadAutosVerdes = autosVerdes.length;
      console.timeEnd('filter');
    }


    console.log(this.ids)

  }

}


