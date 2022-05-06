import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LadingRoutingModule } from './lading-routing.module';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LadingRoutingModule
  ],
  exports: [MainComponent]
})
export class LadingModule { }
