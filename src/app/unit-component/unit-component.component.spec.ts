import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitComponentComponent } from './unit-component.component';

describe('UnitComponentComponent', () => {
  let component: UnitComponentComponent;
  let fixture: ComponentFixture<UnitComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnitComponentComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("check component name", () => {
    expect(component.componentName).toBe("Unit-Testing");
  })

  it("check component function", () => {
    expect(component.sum()).toBe(100);
  })

  it("check component function with parameter", () => {
    expect(component.total(30, 20)).toBe(50);
  })

  it("check HTML Native Element", () => {
    const collection = fixture.nativeElement;
    expect(collection.querySelector('.unit_component').textContent).toContain('Unit-Testing');
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
