import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPathComponent } from './sub-path.component';

describe('SubPathComponent', () => {
  let component: SubPathComponent;
  let fixture: ComponentFixture<SubPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
