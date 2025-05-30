import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Boton01Component } from "./boton01/boton01.component";
import { Boton02Component } from "./boton02/boton02.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Boton01Component, Boton02Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '01_Primer_Proyecto';
  valor:number = 0;

  restar(){
    this.valor--;
  }

  sumar(){
    this.valor++;
  }
}
