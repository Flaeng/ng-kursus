import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  KontaktoplysningerService,
  KontaktoplysningModel,
} from '../kontaktoplysninger.service';

@Component({
  selector: 'app-crud-kontaktoplysninger',
  templateUrl: './crud-kontaktoplysninger.component.html',
  styleUrls: ['./crud-kontaktoplysninger.component.scss'],
})
export class CrudKontaktoplysningerComponent {
  @Output()
  onSubmit: EventEmitter<KontaktoplysningModel> = new EventEmitter();

  @Input() model: KontaktoplysningModel = {};

  serverSideError: string | null = null;

  constructor(private service: KontaktoplysningerService) {}

  submit(): void {
    this.serverSideError = null;

    // Post til server
    this.service.addOrUpdate(this.model).then(
      (result) => {
        this.onSubmit.emit(result);
      },
      (err) => {
        this.serverSideError = err.toString();
      }
    );
  }
}
