import { Component, OnInit } from '@angular/core';
import { SideNavBarComponent } from 'src/app/components/side-nav-bar/side-nav-bar.component';

@Component({
  selector: 'gt-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  children = [
    {name: 'Vita', context: '/about/vita'},
    {name: 'History', context: '/about/history'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
