import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gt-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  lists: Array<any> = [
    {
      "title": "Languages",
      "items": [
        "Java", "Python", "C/C++", "JavaScript", "TypeScript", "Bash", "Ruby", "HTML & CSS"
      ]
    },
    {
      "title": "Frameworks",
      "items": [
        "Angular", "Django", "Spring"
      ]
    },
    {
      "title": "DBMS & Servers",
      "items": [
        "MySQL", "Postgres", "MongoDB", "Apache", "Nginx"
      ]
    },
    {
      "title": "Other",
      "items": [
        "Git", "Linux", "Docker", "Gradle", "Maven"
      ]
    },
  ]

  news: Array<any> = [
    {
      "title": "STEM Camp",
      "description": "Organized/Coordinated a Thunkable Code Camp event for high school students preparing to compete in the Congressional App Challenge.",
      "url": "https://www.cgi.com/us/en-us/article/corporate-social-responsibility/cgis-summer-stem"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
