import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleteReferenceVariableComponent } from './templete-reference-variable.component';

describe('TempleteReferenceVariableComponent', () => {
  let component: TempleteReferenceVariableComponent;
  let fixture: ComponentFixture<TempleteReferenceVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempleteReferenceVariableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempleteReferenceVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
