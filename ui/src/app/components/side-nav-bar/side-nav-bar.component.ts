import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gt-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss']
})
export class SideNavBarComponent implements OnInit {
  @Input() children!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
