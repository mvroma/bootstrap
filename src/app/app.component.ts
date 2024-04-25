import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaproductoComponent } from './listaproducto/listaproducto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaproductoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bootstrap';
}
