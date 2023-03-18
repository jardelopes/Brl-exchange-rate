import { TestBed } from '@angular/core/testing';

import { ModelingDailyExchangeService } from './modeling-daily-exchange.service';

describe('ModelingDailyExchangeService', () => {
  let service: ModelingDailyExchangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelingDailyExchangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
