import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeTransitionAnimations } from '../../route-transition-animations';

@Component({
  selector: 'gt-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  animations: [routeTransitionAnimations]
})
export class AboutPageComponent implements OnInit {
  children = [
    {name: 'History', context: '/about/history'},
    {name: 'Curriculum Vitae', context: '/about/vita'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
  }

}
