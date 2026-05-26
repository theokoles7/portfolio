import { Component }                                  from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector:     'app-about-page',
  imports:      [
                  RouterLink,
                  RouterLinkActive,
                  RouterOutlet,
                ],
  templateUrl:  './about-page.html',
  styleUrl:     './about-page.scss',
})
export class AboutPage {}
