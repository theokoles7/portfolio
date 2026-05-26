import { Component, inject }              from '@angular/core';
import { RouterLink }                     from '@angular/router';

// Data service
import { ArtPiece, Data, Paper, Project } from "../../services/data";

@Component({
  selector:     'app-main-page',
  imports:      [
                  RouterLink,
                ],
  templateUrl:  './main-page.html',
  styleUrl:     './main-page.scss',
})
export class MainPage {
  private data = inject(Data);

  art:      ArtPiece[] = this.data.getLatestArt(3);
  papers:   Paper[]    = this.data.getLatestPapers(3);
  projects: Project[]  = this.data.getLatestProjects(3);
}
