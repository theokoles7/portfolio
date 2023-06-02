import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gt-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  templates: {[id:string]:string} = {
    'resume': 'Hello Gabriel,\n\tI work for [COMPANY]. We have an opening for a [POSITION], and I\'d like to request your résumé for review.',

    'feedback': 'Hello Gabriel, here\'s my feedback:\n\nCritiques/Suggestions:\n------------------------\n\nCompliments:\n-------------\n',

    'collab': 'Hello Gabriel,\n\tI\'m currently working on a project that I\'d like to collaborate with you on.\n\n\tProject description:\n\n\tIntended role: ',

    'none': ''
  }

  message:string='';

  constructor() { }

  ngOnInit(): void {
  }

  insertTemplate(template: string):void{
    this.message = this.templates[template];    
  }

}
