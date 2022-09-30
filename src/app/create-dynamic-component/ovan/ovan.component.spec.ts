/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OvanComponent } from './ovan.component';

describe('OvanComponent', () => {
  let component: OvanComponent;
  let fixture: ComponentFixture<OvanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
