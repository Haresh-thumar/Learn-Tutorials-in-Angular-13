import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnChangeComponentComponent } from './ng-on-change-component.component';

describe('NgOnChangeComponentComponent', () => {
  let component: NgOnChangeComponentComponent;
  let fixture: ComponentFixture<NgOnChangeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgOnChangeComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOnChangeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
