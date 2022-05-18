import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects: Array<any> = [
    {
      "name": "Portfolio",
      "description": "My personal portfolio website",
      "url": "projects#portfolio"
    },
    {
      "name": "Dr. Sudoku",
      "description": "Suite of Sudoku-solving algorithms",
      "url": "projects#drsudoku"
    },
    {
      "name": "Quizzler",
      "description": "Trivia game to test your knowledge",
      "url": "projects#quizzler"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
