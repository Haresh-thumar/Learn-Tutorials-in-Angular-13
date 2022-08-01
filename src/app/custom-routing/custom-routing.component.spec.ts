import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRoutingComponent } from './custom-routing.component';

describe('CustomRoutingComponent', () => {
  let component: CustomRoutingComponent;
  let fixture: ComponentFixture<CustomRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
