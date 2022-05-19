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
      "frag": "portfolio"
    },
    {
      "name": "Dr. Sudoku",
      "description": "Suite of Sudoku-solving algorithms",
      "frag": "drsudoku"
    },
    {
      "name": "Quizzler",
      "description": "Trivia game to test your knowledge",
      "frag": "quizzler"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
