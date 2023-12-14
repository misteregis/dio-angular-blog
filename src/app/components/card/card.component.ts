import { Component, Input, OnInit } from '@angular/core';

interface Article {
  id: number;
  title: string;
  photo: string;
  description: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', './card.responsive.component.css'],
})
export class CardComponent implements OnInit {
  @Input() article!: Article;

  constructor() {}

  ngOnInit(): void {}
}
