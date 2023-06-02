import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gt-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {
  context!:string;

  constructor() { }

  ngOnInit(): void {
    this.context = window.location.pathname;
  }

}
