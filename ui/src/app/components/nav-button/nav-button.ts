import { Component, Input }                     from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector:     'app-nav-button',
  imports:      [
                  RouterLink,
                  RouterLinkActive
                ],
  templateUrl:  './nav-button.html',
  styleUrl:     './nav-button.scss',
})
export class NavButton {
  @Input() name!:     any;
  @Input() context!:  any;

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
