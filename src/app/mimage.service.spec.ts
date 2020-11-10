import { TestBed } from '@angular/core/testing';

import { MimageService } from './mimage.service';

describe('MimageService', () => {
  let service: MimageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MimageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
