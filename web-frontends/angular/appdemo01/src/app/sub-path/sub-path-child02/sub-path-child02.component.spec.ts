import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPathChild02Component } from './sub-path-child02.component';

describe('SubPathChild02Component', () => {
  let component: SubPathChild02Component;
  let fixture: ComponentFixture<SubPathChild02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubPathChild02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPathChild02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
