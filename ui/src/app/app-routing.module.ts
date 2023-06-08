import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ResearchPageComponent } from './pages/research-page/research-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { VitaPageComponent } from './pages/vita-page/vita-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { QuizzlerPageComponent } from './pages/quizzler-page/quizzler-page.component';
import { DrSudokuPageComponent } from './pages/dr-sudoku-page/dr-sudoku-page.component';
import { ArtPageComponent } from './pages/art-page/art-page.component';

const routes: Routes = [
  {path: 'main', component: MainPageComponent, data: {animationState: '1'}},
  {path: 'about', component: AboutPageComponent, data: {animationState: '2'}, 
    children: [
      {path: 'vita', component: VitaPageComponent, data: {animationState: '2a'}},
      {path: 'history', component: HistoryPageComponent, data: {animationState: '2b'}},
      {path: '', redirectTo: 'history', pathMatch: 'full'}
    ]},
  {path: 'research', component: ResearchPageComponent, data: {animationState: '3'}},
  {path: 'projects', component: ProjectsPageComponent, data: {animationState: '4'}, 
    children: [
      {path: 'quizzler', component: QuizzlerPageComponent, data: {animationState: '4a'}},
      {path: 'dr-sudoku', component: DrSudokuPageComponent, data: {animationState: '4b'}},
      {path: '', redirectTo: 'quizzler', pathMatch: 'full', data: {animationState: '4c'}}
    ]},
  {path: 'contact', component: ContactPageComponent, data: {animationState: '5'}},
  {path: 'art', component: ArtPageComponent, data: {animationState: '6'}},
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: '**', component: ErrorPageComponent, data: {animationState: '7'},}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
