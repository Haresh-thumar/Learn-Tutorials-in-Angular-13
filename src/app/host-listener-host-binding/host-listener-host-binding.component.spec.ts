import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostListenerHostBindingComponent } from './host-listener-host-binding.component';

describe('HostListenerHostBindingComponent', () => {
  let component: HostListenerHostBindingComponent;
  let fixture: ComponentFixture<HostListenerHostBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostListenerHostBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostListenerHostBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
