// NATHAN SHIRLEY (nes2ta)
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-preview-card-feed",
  templateUrl: "./preview-card-feed.component.html",
  styleUrls: ["./preview-card-feed.component.css"],
})
export class PreviewCardFeedComponent implements OnInit {
  constructor() {}
  user;

  ngOnInit(): void {
    this.user = localStorage.getItem("user");
  }
}
