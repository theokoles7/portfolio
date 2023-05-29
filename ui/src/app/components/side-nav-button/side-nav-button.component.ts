import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gt-side-nav-button',
  templateUrl: './side-nav-button.component.html',
  styleUrls: ['./side-nav-button.component.scss']
})
export class SideNavButtonComponent implements OnInit {
  @Input() name!: any;
  @Input() context!: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate():void{
    this.router.navigateByUrl(this.context);
  }

}
