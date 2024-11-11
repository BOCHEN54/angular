import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KalkulatorService {
  constructor() {}
  dodaj(...liczby: number[]): number {
    let wynik = 0;
    for (let wartosci of liczby) {
      wynik += wartosci;
    }
    return wynik;
  }
}
