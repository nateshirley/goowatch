// NATHAN SHIRLEY (nes2ta)
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewCardFeedComponent } from './preview-card-feed.component';

describe('PreviewCardFeedComponent', () => {
  let component: PreviewCardFeedComponent;
  let fixture: ComponentFixture<PreviewCardFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewCardFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewCardFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
