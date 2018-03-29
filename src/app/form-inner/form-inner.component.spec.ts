import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInnerComponent } from './form-inner.component';

describe('FormInnerComponent', () => {
  let component: FormInnerComponent;
  let fixture: ComponentFixture<FormInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
