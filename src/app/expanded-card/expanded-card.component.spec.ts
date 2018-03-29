import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandedCardComponent } from './expanded-card.component';

describe('ExpandedCardComponent', () => {
  let component: ExpandedCardComponent;
  let fixture: ComponentFixture<ExpandedCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandedCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
