import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-gabriel',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './gabriel.component.html',
  styleUrl: './gabriel.component.css'
})
export class GabrielComponent {

}
