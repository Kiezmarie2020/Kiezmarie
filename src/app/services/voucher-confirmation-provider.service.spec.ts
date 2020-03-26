import { TestBed } from '@angular/core/testing';

import { VoucherConfirmationProviderService } from './voucher-confirmation-provider.service';

describe('VoucherConfirmationProviderService', () => {
  let service: VoucherConfirmationProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoucherConfirmationProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
