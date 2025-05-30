import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente01Component } from "./componente01/componente01.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Componente01Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '01_Primer_Proyecto';

  valorInicial:number = 5;
  valor:number = 0;

  sumarValor(t : number){
    this.valor += t;
  }
}
