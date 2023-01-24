import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, retry, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DawaService {

  kommuner$: Observable<Kommune[]>;
  kommunerCount$: Observable<number>;
  // import { delay, map, Observable, retry, shareReplay
  // } from 'rxjs';

  // export type Kommune = { kode: string, navn: string };
  constructor(
    private http: HttpClient
  ) {
    this.kommuner$ = this.http.get<Kommune[]>(
      'https://api.dataforsyningen.dk/kommuner')
      .pipe(
        retry(3),
        delay(2000),
        shareReplay()
    );

    this.kommunerCount$ = this.kommuner$.pipe(
      map(x => x.length)
    );

    // ex1
    // const res = await firstValueFrom(getArray);
    // const count = res.length;
    // new EventEmitter().emit(count);
    // return res;

    // ex2
    // return new Promise((res) => {
    //   const sub = getArray.subscribe(x => {
    //     res(x);
    //     sub.unsubscribe();
    //   }, err => {

    //   }, () => {

    //   });
    // });

    // ex3
    // HTML: {{ getArrayNames | async }}
    // HTML: <div *ngIf="(getArrayNames | async) as kommuneList">
    // DO: <input [(ngModel)]="kommuneList.navn" />
    // DONT: <input [(ngModel)]="(getArrayNames | async).navn" />
  }

}

export type Kommune = { kode: string, navn: string };
