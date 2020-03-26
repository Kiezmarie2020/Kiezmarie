import { TestBed } from '@angular/core/testing';

import { CityProviderService } from './city-provider.service';

describe('CityProviderService', () => {
  let service: CityProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
