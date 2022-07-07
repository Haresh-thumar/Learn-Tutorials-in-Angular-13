import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTempleteComponent } from './ng-templete.component';

describe('NgTempleteComponent', () => {
  let component: NgTempleteComponent;
  let fixture: ComponentFixture<NgTempleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgTempleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTempleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
