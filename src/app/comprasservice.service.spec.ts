import { TestBed } from '@angular/core/testing';

import { ComprasserviceService } from './comprasservice.service';

describe('ComprasserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComprasserviceService = TestBed.get(ComprasserviceService);
    expect(service).toBeTruthy();
  });
});
