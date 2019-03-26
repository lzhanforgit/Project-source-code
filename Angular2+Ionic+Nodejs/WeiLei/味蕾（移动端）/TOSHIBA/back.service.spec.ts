import { TestBed, inject } from '@angular/core/testing';

import { BackService } from './back.service';

describe('BackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackService]
    });
  });

  it('should be created', inject([BackService], (service: BackService) => {
    expect(service).toBeTruthy();
  }));
});
