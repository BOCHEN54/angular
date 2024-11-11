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
    if (this.Imie_Nazwisko && this.email && this.produkt && this.ilosc > 0) {
      console.log(this.Imie_Nazwisko, this.title, this.ilosc, this.email);
    } else {
      console.log('Formularz nie został wypełniony poprawnie');
    }
  }
}
