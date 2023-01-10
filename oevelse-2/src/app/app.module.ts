import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KontaktoplysningerComponent } from './kontaktoplysninger/kontaktoplysninger.component';
import { CrudKontaktoplysningerComponent } from './crud-kontaktoplysninger/crud-kontaktoplysninger.component';
import { CrudReactKontaktoplysningerComponent } from './crud-react-kontaktoplysninger/crud-react-kontaktoplysninger.component';

@NgModule({
  declarations: [
    AppComponent,
    KontaktoplysningerComponent,
    CrudKontaktoplysningerComponent,
    CrudReactKontaktoplysningerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
