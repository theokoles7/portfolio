import { Component, inject }  from '@angular/core';

// Data service
import { Data, Paper }        from '../../services/data';

@Component({
  selector:     'app-research-page',
  imports:      [],
  templateUrl:  './research-page.html',
  styleUrl:     './research-page.scss',
})
export class ResearchPage {
  private data = inject(Data);
  
  papers: Paper[] = this.data.papers;

}
