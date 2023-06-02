import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavButtonComponent } from './nav-button/nav-button.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { SideNavButtonComponent } from './side-nav-button/side-nav-button.component';



@NgModule({
  declarations: [
    NavBarComponent,
    NavButtonComponent,
    SideNavBarComponent,
    SideNavButtonComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavBarComponent,
    NavButtonComponent,
    SideNavBarComponent
  ]
})
export class ComponentsModule { }
