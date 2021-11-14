import { TestBed } from '@angular/core/testing';

import { TnserviceService } from './tnservice.service';

describe('TnserviceService', () => {
  let service: TnserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TnserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
