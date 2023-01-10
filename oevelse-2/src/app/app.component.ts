import { Component } from '@angular/core';
import { KontaktoplysningModel } from './kontaktoplysninger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  city = 'København';
  zipcode = 1000;

  formResult: string = '';
  formResult2: string = '';

  oplysninger: KontaktoplysningModel = {};

  nyeOplysninger(model: KontaktoplysningModel): void {
    this.formResult = `Adresse: ${model.adresse}, husnr: ${model.husNr}, by: ${model.by}, postnr: ${model.husNr}`;
  }
  nyeOplysninger2(model: KontaktoplysningModel): void {
    this.formResult2 = `Adresse: ${model.adresse}, husnr: ${model.husNr}, by: ${model.by}, postnr: ${model.husNr}`;
  }
}
