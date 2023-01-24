import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavnComponent } from './navn/navn.component';



@NgModule({
  declarations: [
    NavnComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavnComponent
  ]
})
export class TestModuleModule { }
