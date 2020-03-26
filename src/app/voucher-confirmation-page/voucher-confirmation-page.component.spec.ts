import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherConfirmationPageComponent } from './voucher-confirmation-page.component';

describe('VoucherConfirmationPageComponent', () => {
  let component: VoucherConfirmationPageComponent;
  let fixture: ComponentFixture<VoucherConfirmationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoucherConfirmationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherConfirmationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
