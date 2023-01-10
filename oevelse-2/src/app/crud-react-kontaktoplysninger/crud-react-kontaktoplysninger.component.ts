import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { KontaktoplysningerService, KontaktoplysningModel } from '../kontaktoplysninger.service';

@Component({
  selector: 'app-crud-react-kontaktoplysninger',
  templateUrl: './crud-react-kontaktoplysninger.component.html',
  styleUrls: ['./crud-react-kontaktoplysninger.component.scss']
})
export class CrudReactKontaktoplysningerComponent {
  @Output()
  onSubmit: EventEmitter<KontaktoplysningModel> = new EventEmitter();

  form = this.fb.group({
    adresse: this.fb.control<string>('', {
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100),
      ]
    }),
    husNr: this.fb.control<number | null>(null, {
      validators: [
        Validators.min(1),
      ]
    }),
    by: this.fb.control<string>('', {
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100),
      ]
    }),
    postNr: this.fb.control<number | null>(null, {
      validators: [
        Validators.required,
        Validators.min(1),
        Validators.max(9999)
      ]
    })
  });

  serverSideError?: string | null = null;

  constructor(
    private service: KontaktoplysningerService,
    private fb: FormBuilder
  ) {
  }

  submit(): void {
    this.serverSideError = null;
    // Clientside validering
    if (this.form.valid === false) return;

    // Post til server
    this.service.addOrUpdate(this.form.value as KontaktoplysningModel).then(
      (result) => {
        this.onSubmit.emit(result);
      },
      (err) => {
        this.serverSideError = err.toString();
      }
    );
  }

}
