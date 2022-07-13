import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCounterComponent } from './content-counter.component';

describe('ContentCounterComponent', () => {
  let component: ContentCounterComponent;
  let fixture: ComponentFixture<ContentCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
