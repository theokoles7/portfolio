import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ResearchPageComponent } from './pages/research-page/research-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

const routes: Routes = [
  {path: 'main', component: MainPageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'research', component: ResearchPageComponent},
  {path: 'projects', component: ProjectsPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: '', component: MainPageComponent},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
