import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gt-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  pages = [
    {name: 'About',    context: '/about'},
    {name: 'Research', context: '/research'},
    {name: 'Projects', context: '/projects'},
    {name: 'Art',      context: '/art'},
    {name: 'Contact',  context: '/contact'}
  ]

  quotes = [
    '\“The man who says he can, and the man who says he can not.. \
    Are both correct.\” \
    - Confucius',
    '\"When something is important enough, you do it even if the \
    odds are not in your favor.\" \
    - Elon Musk',
    '\"The most important thing is to never stop questioning.\" \
    - Albert Einstein',
    '\"Somewhere, something incredible is waiting to be known.\" \
    - Carl Sagan',
    '\"The saddest aspect of life right now is that it gathers knowledge \
    faster than society gathers wisdom.\" \
    - Isaac Asimov',
    '\“Nothing in life is to be feared, it is only to be understood now is \
    the time to understand more, so that we may fear less.\” \
    - Marie Curie',
    '\“I have seen the further it is by standing on the shoulders of giants.\”\
    - Isaac Newton',
    '\“Real science can be far stranger than science fiction and much more satisfying.\” \
    - Stephen Hawking',
    '\“Science knows no country because knowledge belongs to humanity and is \
    the torch which illuminates the world.\” \
    - Louis Pasteur',
    '\"Science is not only a disciple of reason but, also, one of romance and passion.\" \
    - Stephen Hawking',
    '\"Science is not finished until it is communicated.\"\
    - Mark Walport',
    '\"Science has made us gods even before we are worthy of being men.\"\
    - Jean Rostand',
    '\"Science does not know its debt to imagination.\"\
    - Ralph Waldo Emerson',
    '\"Science has explained nothing; the more we know the more fantastic the \
    world becomes and the profounder the surrounding darkness.\"\
    - Aldous Huxley',
    '\"The scientist is not a person who gives the right answers, he\'s one who \
    asks the right questions.\"\
    - Claude Levi-Strauss'
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
