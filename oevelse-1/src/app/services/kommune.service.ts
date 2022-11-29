import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export type BaseEntity = { kode: string; navn: string };

export type Region = BaseEntity;
export type Kommune = BaseEntity & { region: Region, ændret: string };

@Injectable({
  providedIn: 'root',
})
export class KommuneService {
  kommuner$: Observable<Kommune[]>;

  constructor(private http: HttpClient) {
    this.kommuner$ = http.get<Kommune[]>(`${environment.apiBasePath}kommuner`);
  }

  public getKommune(kode: string): Observable<Kommune> {
    return this.http.get<Kommune>(`${environment.apiBasePath}kommuner/${kode}`);
  }

}
