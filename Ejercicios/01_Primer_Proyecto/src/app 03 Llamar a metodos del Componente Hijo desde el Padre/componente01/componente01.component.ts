import { Component } from '@angular/core';

@Component({
  selector: 'app-componente01',
  imports: [],
  templateUrl: './componente01.component.html',
  styleUrl: './componente01.component.css'
})
export class Componente01Component {

  cabecera : string = "";
  contenido : string = "";

  asignar(v: string){
    this.contenido = v;
  }
}
