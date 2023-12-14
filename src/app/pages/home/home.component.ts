import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake';
import { WindowSizeService } from '../../services/window-size.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  articles = dataFake;
  isNarrowScreen = false;

  constructor(private windowSizeService: WindowSizeService) {}

  ngOnInit(): void {
    this.shuffleArray();
  }

  shuffleArray(): void {
    this.windowSizeService.windowWidth$.subscribe((width) => {
      this.isNarrowScreen = width > 1160; // Defina a largura desejada
    });

    for (let i = this.articles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [this.articles[i], this.articles[j]] = [
        this.articles[j],
        this.articles[i],
      ];
    }
  }
}
