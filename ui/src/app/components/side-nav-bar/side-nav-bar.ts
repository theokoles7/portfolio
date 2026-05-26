import { Component, Input } from '@angular/core';

// Components
import { SideNavButton }    from '../side-nav-button/side-nav-button';

@Component({
  selector:     'app-side-nav-bar',
  imports:      [
                  SideNavButton
                ],
  templateUrl:  './side-nav-bar.html',
  styleUrl:     './side-nav-bar.scss',
})
export class SideNavBar {
  @Input() children!: any;

  constructor() {}

  ngOnInit(): void {}
}
