import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPathChild01Component } from './sub-path-child01.component';

describe('SubPathChild01Component', () => {
  let component: SubPathChild01Component;
  let fixture: ComponentFixture<SubPathChild01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubPathChild01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPathChild01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
