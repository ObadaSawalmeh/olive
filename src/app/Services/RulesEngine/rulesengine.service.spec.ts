import { TestBed } from '@angular/core/testing';

import { RulesengineService } from './rulesengine.service';

describe('RulesengineService', () => {
  let service: RulesengineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RulesengineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
