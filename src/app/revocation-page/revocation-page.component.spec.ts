import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevocationPageComponent } from './revocation-page.component';

describe('RevocationPageComponent', () => {
  let component: RevocationPageComponent;
  let fixture: ComponentFixture<RevocationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevocationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevocationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
