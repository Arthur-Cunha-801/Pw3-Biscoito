import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-arthur',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './arthur.component.html',
  styleUrl: './arthur.component.css'
  
})
export class ArthurComponent {

}
