import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildInputOutputComponent } from './child-input-output.component';

describe('ChildInputOutputComponent', () => {
  let component: ChildInputOutputComponent;
  let fixture: ComponentFixture<ChildInputOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildInputOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildInputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
