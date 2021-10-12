import { TestBed } from '@angular/core/testing';

import { BoxservicesService } from './boxservices.service';

describe('BoxservicesService', () => {
  let service: BoxservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoxservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
