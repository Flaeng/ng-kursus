import { Injectable } from '@angular/core';

export type KontaktoplysningModel = {
  id?: string;
  adresse?: string;
  husNr?: number;
  by?: string;
  postNr?: number;
};

@Injectable({
  providedIn: 'root'
})
export class KontaktoplysningerService {
  addOrUpdate(model: KontaktoplysningModel): Promise<KontaktoplysningModel> {
    return new Promise(res => { res(model); });
  }
}
