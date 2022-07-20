import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnInitComponentComponent } from './ng-on-init-component.component';

describe('NgOnInitComponentComponent', () => {
  let component: NgOnInitComponentComponent;
  let fixture: ComponentFixture<NgOnInitComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgOnInitComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOnInitComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
