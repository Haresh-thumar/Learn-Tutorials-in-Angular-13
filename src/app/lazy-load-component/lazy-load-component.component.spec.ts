import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadComponentComponent } from './lazy-load-component.component';

describe('LazyLoadComponentComponent', () => {
  let component: LazyLoadComponentComponent;
  let fixture: ComponentFixture<LazyLoadComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyLoadComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
