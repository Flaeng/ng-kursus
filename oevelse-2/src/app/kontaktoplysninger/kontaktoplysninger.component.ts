import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kontaktoplysninger',
  templateUrl: './kontaktoplysninger.component.html',
  styleUrls: ['./kontaktoplysninger.component.scss']
})
export class KontaktoplysningerComponent implements OnInit {

  @Input()
  adresse?: string;

  @Input()
  husNr?: number;

  @Input()
  by?: string;

  @Input()
  postNr?: number;

  constructor() { }

  ngOnInit(): void {
  }

}
