import { Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map, Observable, Subscription, switchMap, tap } from 'rxjs';
import { DawaService, Kommune } from '../dawa.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  count$ = this.dawaService.kommunerCount$;
  kommuneList$ = this.dawaService.kommuner$;
  kommuneListSearch$?: Observable<Kommune[]>;

  @ViewChild('searchInput')
  searchInput?: ElementRef<HTMLInputElement>;

  // sink: Subscription[] = [];

  constructor(private dawaService: DawaService) {}

  ngAfterViewInit(): void {
    if (!this.searchInput) return;
    this.kommuneListSearch$ = fromEvent(
      this.searchInput.nativeElement,
      'input'
    ).pipe(
      map(x => {
        const source = x.target as HTMLInputElement;
        if (!source) return '';
        return source.value;
      }),
      debounceTime(1000),
      distinctUntilChanged(),
      tap(t => {
        console.log('searchTerm', t);
      }),
      map(x => x.toLowerCase()),
      switchMap(term => {
        return this.dawaService.kommuner$.pipe(
          map(arr =>
            arr.filter(kom => kom.navn.toLowerCase().indexOf(term) !== -1)
          )
        )
      })
    );
  }

  // ngOnInit(): void {
  //   this.sink.push(this.dawaService.kommuner$.subscribe((x) => {}));
  // }

  // ngOnDestroy(): void {
  //   this.sink.forEach((x) => x.unsubscribe());
  // }
}
