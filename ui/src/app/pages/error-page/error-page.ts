import { Component }  from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector:     'app-error-page',
  imports:      [
                  RouterLink
                ],
  templateUrl:  './error-page.html',
  styleUrl:     './error-page.scss',
})
export class ErrorPage {
  context!:string;

  constructor() {}

  ngOnInit(): void {
    this.context = window.location.pathname;
  }
}
