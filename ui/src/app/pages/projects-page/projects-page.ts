import { Component, inject }  from '@angular/core';
import { RouterLink }         from '@angular/router';

// Data service
import { Data, Project }      from '../../services/data';

@Component({
  selector:     'app-projects-page',
  imports:      [
                  RouterLink,
                ],
  templateUrl:  './projects-page.html',
  styleUrl:     './projects-page.scss',
})
export class ProjectsPage {
  private data = inject(Data);

  projects: Project[] = this.data.projects;

}
