import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gt-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  pages = [
    {name: 'About',    context: '/about'},
    {name: 'Research', context: '/research'},
    {name: 'Projects', context: '/projects'},
    {name: 'Contact',  context: '/contact'}
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate():void{
    this.router.navigateByUrl("");
  }

}
