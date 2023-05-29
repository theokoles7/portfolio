import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gt-art-block',
  templateUrl: './art-block.component.html',
  styleUrls: ['./art-block.component.scss']
})
export class ArtBlockComponent implements OnInit {
  @Input() name!: string;
  @Input() description!: string;
  @Input() url!: string;
  @Input() frag!: string;

  navigate(): void{
    this.router.navigate(['art'], {fragment: this.frag});
  }

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {}
}
