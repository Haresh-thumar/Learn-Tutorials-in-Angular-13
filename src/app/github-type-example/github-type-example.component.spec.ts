import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubTypeExampleComponent } from './github-type-example.component';

describe('GithubTypeExampleComponent', () => {
  let component: GithubTypeExampleComponent;
  let fixture: ComponentFixture<GithubTypeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubTypeExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubTypeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
