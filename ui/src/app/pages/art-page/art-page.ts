import { Component, inject }  from '@angular/core';

// Data service
import { ArtPiece, Data }     from '../../services/data';

@Component({
  selector: 'app-art-page',
  imports: [],
  templateUrl: './art-page.html',
  styleUrl: './art-page.scss',
})
export class ArtPage {
  private data = inject(Data);

  art: ArtPiece[] = this.data.art;
}
