import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicingTypeComponent } from './servicing-type.component';

describe('ServicingTypeComponent', () => {
  let component: ServicingTypeComponent;
  let fixture: ComponentFixture<ServicingTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicingTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicingTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
