import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ResearchPageComponent } from './research-page/research-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';



@NgModule({
  declarations: [
    MainPageComponent,
    AboutPageComponent,
    ResearchPageComponent,
    ProjectsPageComponent,
    ContactPageComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class PagesModule { }
