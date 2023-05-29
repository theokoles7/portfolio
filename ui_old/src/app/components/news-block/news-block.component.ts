import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gt-news-block',
  templateUrl: './news-block.component.html',
  styleUrls: ['./news-block.component.scss']
})
export class NewsBlockComponent implements OnInit {
  @Input() name!: string;
  @Input() description!: string;
  @Input() url!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
