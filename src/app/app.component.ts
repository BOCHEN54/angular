import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'formularz';
  Imie_Nazwisko = '';
  email = 'prosze podac email';
  produkt = '';
  ilosc = 0;
  wiadomosc = 'Jesli masz uwagi,napisz';

  onSubmit() {
    console.log(this.Imie_Nazwisko, this.title, this.ilosc);
  }
}
