import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'formularz';
  Imie_Nazwisko = '';
  email = 'prosze podac email';
  produkt = '';
  ilosc = 1;
  wiadomosc = 'Jesli masz uwagi,napisz';

  onSubmit() {
    console.log(`Zamówienie zostało złożone:
        - Imię i nazwisko: ${this.Imie_Nazwisko}
        - Email: ${this.email}
        - Produkt: ${this.produkt}
        - Ilość: ${this.ilosc}
        - Wiadomość: ${this.wiadomosc}`);
  }
}
