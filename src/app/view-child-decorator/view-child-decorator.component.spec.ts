import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildDecoratorComponent } from './view-child-decorator.component';

describe('ViewChildDecoratorComponent', () => {
  let component: ViewChildDecoratorComponent;
  let fixture: ComponentFixture<ViewChildDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChildDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
