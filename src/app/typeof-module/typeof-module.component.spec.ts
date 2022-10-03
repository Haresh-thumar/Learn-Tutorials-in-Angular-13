import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeofModuleComponent } from './typeof-module.component';

describe('TypeofModuleComponent', () => {
  let component: TypeofModuleComponent;
  let fixture: ComponentFixture<TypeofModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeofModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeofModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
