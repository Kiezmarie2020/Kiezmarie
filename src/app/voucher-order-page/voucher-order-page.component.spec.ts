import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherOrderPageComponent } from './voucher-order-page.component';

describe('VoucherOrderPageComponent', () => {
  let component: VoucherOrderPageComponent;
  let fixture: ComponentFixture<VoucherOrderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoucherOrderPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
