// NATHAN SHIRLEY (nes2ta)
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GooDetailComponent } from './goo-detail.component';

describe('GooDetailComponent', () => {
  let component: GooDetailComponent;
  let fixture: ComponentFixture<GooDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
