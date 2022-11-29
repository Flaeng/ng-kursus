import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Kommune, KommuneService } from '../services/kommune.service';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.scss'],
})
export class ListviewComponent {
  public kommuner$: Observable<Kommune[]>;

  constructor(private kommuneService: KommuneService) {
    this.kommuner$ = this.kommuneService.kommuner$;
  }
}
