import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateOutletComponent } from './ng-template-outlet.component';

describe('NgTemplateOutletComponent', () => {
  let component: NgTemplateOutletComponent;
  let fixture: ComponentFixture<NgTemplateOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgTemplateOutletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTemplateOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
