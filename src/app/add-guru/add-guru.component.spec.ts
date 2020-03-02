import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGuruComponent } from './add-guru.component';

describe('AddGuruComponent', () => {
  let component: AddGuruComponent;
  let fixture: ComponentFixture<AddGuruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGuruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGuruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
