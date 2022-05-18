import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LicenseComponent } from './components/license/license.component';
import { AboutComponent } from './pages/about/about.component';
import { ArtComponent } from './pages/art/art.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DrSudokuComponent } from './pages/projects/dr-sudoku/dr-sudoku.component';
import { PortfolioComponent } from './pages/projects/portfolio/portfolio.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { QuizzlerComponent } from './pages/projects/quizzler/quizzler.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'art', component: ArtComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'license', component: LicenseComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'quizzler', component: QuizzlerComponent},
  {path: 'drsudoku', component: DrSudokuComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
