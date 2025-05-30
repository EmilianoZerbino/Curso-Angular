import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-componente01',
  imports: [],
  templateUrl: './componente01.component.html',
  styleUrl: './componente01.component.css'
})
export class Componente01Component {
  @Input() valorInicial:number=0;
  @Output() valorSalida = new EventEmitter<number>();

  valor : number = 0;

  ngOnInit(){
    this.valor = this.valorInicial;
  }

  actualizarValor(){
    this.valorSalida.emit(this.valor)
    this.valor++;
  }
}
