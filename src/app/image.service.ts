import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { images } from 'src/app/data/image.data';

@Injectable()
export class ImageService {
  constructor() {}
  fetchImages(): Observable<any> {
    return of(images);
  }
}
