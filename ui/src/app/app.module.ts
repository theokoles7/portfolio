import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ArtComponent } from './pages/art/art.component';
import { FooterComponent } from './components/footer/footer.component';
import { LicenseComponent } from './components/license/license.component';
import { PortfolioComponent } from './pages/projects/portfolio/portfolio.component';
import { QuizzlerComponent } from './pages/projects/quizzler/quizzler.component';
import { DrSudokuComponent } from './pages/projects/dr-sudoku/dr-sudoku.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProjectBlockComponent } from './components/project-block/project-block.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    ArtComponent,
    FooterComponent,
    LicenseComponent,
    PortfolioComponent,
    QuizzlerComponent,
    DrSudokuComponent,
    NotFoundComponent,
    ProjectBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
