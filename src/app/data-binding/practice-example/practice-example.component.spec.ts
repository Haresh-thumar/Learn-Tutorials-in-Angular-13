import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeExampleComponent } from './practice-example.component';

describe('PracticeExampleComponent', () => {
  let component: PracticeExampleComponent;
  let fixture: ComponentFixture<PracticeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PracticeExampleComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
