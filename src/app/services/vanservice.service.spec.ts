import { TestBed } from '@angular/core/testing';

import { VanserviceService } from './vanservice.service';

describe('VanserviceService', () => {
  let service: VanserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VanserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
