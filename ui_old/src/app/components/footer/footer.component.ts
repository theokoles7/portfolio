import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gt-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  navigate(url: string): void{
    this.router.navigateByUrl(url);
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
