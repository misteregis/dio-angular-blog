import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WindowSizeService {
  private windowWidthSubject = new BehaviorSubject<number>(window.innerWidth);
  windowWidth$ = this.windowWidthSubject.asObservable();

  constructor() {
    window.addEventListener('resize', () => {
      this.windowWidthSubject.next(window.innerWidth);
    });
  }
}
