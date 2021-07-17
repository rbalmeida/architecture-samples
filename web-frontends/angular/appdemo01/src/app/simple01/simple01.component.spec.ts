import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Simple01Component } from './simple01.component';

describe('Simple01Component', () => {
  let component: Simple01Component;
  let fixture: ComponentFixture<Simple01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Simple01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Simple01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
