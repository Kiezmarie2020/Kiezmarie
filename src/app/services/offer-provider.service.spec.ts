import { TestBed } from '@angular/core/testing';

import { OfferProviderService } from './offer-provider.service';

describe('OfferProviderService', () => {
  let service: OfferProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
