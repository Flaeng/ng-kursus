import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForsideComponent } from './forside/forside.component';
import { Section1RoutingModule } from './section1-routing.module';

@NgModule({
  declarations: [
    ForsideComponent
  ],
  imports: [
    CommonModule,
    Section1RoutingModule,
  ]
})
export class Section1Module { }
