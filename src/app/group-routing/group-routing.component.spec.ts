import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupRoutingComponent } from './group-routing.component';

describe('GroupRoutingComponent', () => {
  let component: GroupRoutingComponent;
  let fixture: ComponentFixture<GroupRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
