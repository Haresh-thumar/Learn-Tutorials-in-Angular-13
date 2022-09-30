import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDynamicComponentComponent } from './create-dynamic-component.component';

describe('CreateDynamicComponentComponent', () => {
  let component: CreateDynamicComponentComponent;
  let fixture: ComponentFixture<CreateDynamicComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDynamicComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDynamicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
