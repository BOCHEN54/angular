import { Component } from '@angular/core';
import { KalkulatorService } from './kalkulator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [KalkulatorService],
})
export class AppComponent {
  title = 'angular_kar2';
  dodawanie = 0;
  constructor(private Kalkulator: KalkulatorService) {
    this.dodawanie = Kalkulator.dodaj(3, 4, 4, 5);
  }
}
