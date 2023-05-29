import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ResearchPageComponent } from './research-page/research-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ComponentsModule } from '../components/components.module';
import { VitaPageComponent } from './vita-page/vita-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { QuizzlerPageComponent } from './quizzler-page/quizzler-page.component';
import { DrSudokuPageComponent } from './dr-sudoku-page/dr-sudoku-page.component';
import { LicensePageComponent } from './license-page/license-page.component';



@NgModule({
  declarations: [
    MainPageComponent,
    AboutPageComponent,
    ResearchPageComponent,
    ProjectsPageComponent,
    ContactPageComponent,
    ErrorPageComponent,
    VitaPageComponent,
    HistoryPageComponent,
    QuizzlerPageComponent,
    DrSudokuPageComponent,
    LicensePageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    ComponentsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class PagesModule { }
