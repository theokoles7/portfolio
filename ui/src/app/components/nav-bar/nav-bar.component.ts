import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gt-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  pages = [
    {name: 'About',    context: '/about', sections: ['Vita', 'Resume']},
    {name: 'Research', context: '/research', sections: ['Machine Learning']},
    {name: 'Projects', context: '/projects', sections: ['Quizzler', 'Dr. Sudoku', 'Door Alarm']},
    {name: 'Contact',  context: '/contact', sections: []}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
