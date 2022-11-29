import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  map,
  mergeMap,
  Observable,
  of,
} from 'rxjs';
import { Kommune, KommuneService } from '../services/kommune.service';

@Component({
  selector: 'app-detailsview',
  templateUrl: './detailsview.component.html',
  styleUrls: ['./detailsview.component.scss'],
})
export class DetailsviewComponent {
  public kommune$: Observable<Kommune | null>;

  constructor(
    route: ActivatedRoute,
    private kommuneService: KommuneService
  ) {
    this.kommune$ = route.paramMap.pipe(
      mergeMap((params) => {
        const kode = params.get('kode');
        if (!kode) return of(null);
        return this.kommuneService
          .getKommune(kode)
          .pipe(
            map((val) => val.navn !== undefined ? val : null)
          );
      })
    );
  }
}
