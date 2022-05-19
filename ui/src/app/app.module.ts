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
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProjectBlockComponent } from './components/project-block/project-block.component';
import { NewsBlockComponent } from './components/news-block/news-block.component';
import { ArtBlockComponent } from './components/art-block/art-block.component';

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
    NotFoundComponent,
    ProjectBlockComponent,
    NewsBlockComponent,
    ArtBlockComponent
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
