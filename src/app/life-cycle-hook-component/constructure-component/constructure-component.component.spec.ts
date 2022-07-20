import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructureComponentComponent } from './constructure-component.component';

describe('ConstructureComponentComponent', () => {
  let component: ConstructureComponentComponent;
  let fixture: ComponentFixture<ConstructureComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructureComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructureComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
