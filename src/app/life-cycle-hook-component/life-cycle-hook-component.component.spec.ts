import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleHookComponentComponent } from './life-cycle-hook-component.component';

describe('LifeCycleHookComponentComponent', () => {
  let component: LifeCycleHookComponentComponent;
  let fixture: ComponentFixture<LifeCycleHookComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeCycleHookComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycleHookComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
