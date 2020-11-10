import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mimages } from 'src/app/data/mimage.data';

@Injectable()
export class MimageService {
  constructor() {}
  fetchMimages(): Observable<any> {
    return of(mimages);
  }
}
