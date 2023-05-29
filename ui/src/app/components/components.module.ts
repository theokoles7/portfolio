import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavButtonComponent } from './nav-button/nav-button.component';



@NgModule({
  declarations: [
    NavBarComponent,
    NavButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent,
    NavButtonComponent
  ]
})
export class ComponentsModule { }
