import { TestBed, inject } from '@angular/core/testing';

import { UserRegistService } from './user-regist.service';

describe('UserRegistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserRegistService]
    });
  });

  it('should be created', inject([UserRegistService], (service: UserRegistService) => {
    expect(service).toBeTruthy();
  }));
});
