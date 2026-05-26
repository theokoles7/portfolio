import { Component, Input }                     from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector:     'app-side-nav-button',
  imports:      [
                  RouterLink,
                  RouterLinkActive
                ],
  templateUrl:  './side-nav-button.html',
  styleUrl:     './side-nav-button.scss',
})
export class SideNavButton {
  @Input() name!: any;
  @Input() context!: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate():void{
    this.router.navigateByUrl(this.context);
  }
}
