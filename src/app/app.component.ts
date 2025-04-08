import { Component } from '@angular/core';
import { ArthurComponent } from "./components/arthur/arthur.component";
import { GabrielComponent } from "./components/gabriel/gabriel.component";


@Component({
  selector: 'app-root',
  imports: [ArthurComponent, GabrielComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pw2-biscoitinho';
}
