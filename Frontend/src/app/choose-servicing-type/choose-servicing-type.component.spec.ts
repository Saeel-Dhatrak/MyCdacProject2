import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseServicingTypeComponent } from './choose-servicing-type.component';

describe('ChooseServicingTypeComponent', () => {
  let component: ChooseServicingTypeComponent;
  let fixture: ComponentFixture<ChooseServicingTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseServicingTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseServicingTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
