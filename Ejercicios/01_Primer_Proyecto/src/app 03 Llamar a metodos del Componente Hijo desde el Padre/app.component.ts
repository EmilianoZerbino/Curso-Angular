import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Componente01Component } from "./componente01/componente01.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Componente01Component, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '01_Primer_Proyecto';
  valor1 : string ="";
  valor2 : string ="";
  valor3 : string ="";
}
