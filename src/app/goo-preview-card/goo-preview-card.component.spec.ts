// NATHAN SHIRLEY (nes2ta)
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GooPreviewCardComponent } from "./goo-preview-card.component";

describe("GooPreviewCardComponent", () => {
  let component: GooPreviewCardComponent;
  let fixture: ComponentFixture<GooPreviewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GooPreviewCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooPreviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
