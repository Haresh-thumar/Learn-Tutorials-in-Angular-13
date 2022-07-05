import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentInputOutputComponent } from './parent-input-output.component';

describe('ParentInputOutputComponent', () => {
  let component: ParentInputOutputComponent;
  let fixture: ComponentFixture<ParentInputOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentInputOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentInputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
