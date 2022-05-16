import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gt-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  open: boolean = false;

  navigate(url: string): void{
    this.router.navigateByUrl(url);
    this.open = false;
  }

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}

}
