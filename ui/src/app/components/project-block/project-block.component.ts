import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gt-project-block',
  templateUrl: './project-block.component.html',
  styleUrls: ['./project-block.component.scss']
})
export class ProjectBlockComponent implements OnInit {
  @Input() name!: string;
  @Input() description!: string;
  @Input() url!: string;
  @Input() frag!: string;

  navigate(): void{
    this.router.navigate(['projects'], {fragment: this.frag});
  }

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {}

}
