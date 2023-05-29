import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeTransitionAnimations } from '../../route-transition-animations';

@Component({
  selector: 'gt-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
  animations: [routeTransitionAnimations]
})
export class ProjectsPageComponent implements OnInit {
  children = [
    {name: 'Quizzler', context: '/projects/quizzler'},
    {name: 'Dr. Sudoku', context: '/projects/dr-sudoku'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
  }

}
