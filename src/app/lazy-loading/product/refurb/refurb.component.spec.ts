import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefurbComponent } from './refurb.component';

describe('RefurbComponent', () => {
  let component: RefurbComponent;
  let fixture: ComponentFixture<RefurbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefurbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
