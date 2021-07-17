import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Simple02Component } from './simple02.component';

describe('Simple02Component', () => {
  let component: Simple02Component;
  let fixture: ComponentFixture<Simple02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Simple02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Simple02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
