import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailViewPageComponent } from './detail-view-page.component';

describe('DetailViewPageComponent', () => {
  let component: DetailViewPageComponent;
  let fixture: ComponentFixture<DetailViewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailViewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
