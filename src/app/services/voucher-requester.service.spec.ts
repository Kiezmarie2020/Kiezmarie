import { TestBed } from '@angular/core/testing';

import { VoucherRequesterService } from './voucher-requester.service';

describe('VoucherRequesterService', () => {
  let service: VoucherRequesterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoucherRequesterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
