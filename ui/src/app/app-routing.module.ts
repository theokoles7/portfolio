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

const routes: Routes = [
  {path: 'main', component: MainPageComponent, data: {animationState: 'One'}},
  {path: 'about', component: AboutPageComponent, data: {animationState: 'Two'}, children: [
    {path: 'vita', component: VitaPageComponent},
    {path: 'history', component: HistoryPageComponent},
    {path: '', redirectTo: 'vita', pathMatch: 'full'}
  ]},
  {path: 'research', component: ResearchPageComponent, data: {animationState: 'Three'}},
  {path: 'projects', component: ProjectsPageComponent, data: {animationState: 'Four'}, children: [
    {path: 'quizzler', component: QuizzlerPageComponent},
    {path: 'dr-sudoku', component: DrSudokuPageComponent},
    {path: '', redirectTo: 'quizzler', pathMatch: 'full'}
  ]},
  {path: 'contact', component: ContactPageComponent, data: {animationState: 'Five'}},
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
