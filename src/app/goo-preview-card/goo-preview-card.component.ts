import { Component, OnInit, Input } from "@angular/core";
import { mockGurus } from "../mock-gurus";
import { Guru } from "../interfaces/guru";
import { GuruService } from "../guru.service";

@Component({
  selector: "app-goo-preview-card",
  templateUrl: "./goo-preview-card.component.html",
  styleUrls: ["./goo-preview-card.component.css"]
})
export class GooPreviewCardComponent implements OnInit {
  gurus: Guru[];

  constructor(private guruService: GuruService) {}

  ngOnInit(): void {
    this.getGurus();
  }
  getGurus(): void {
    this.guruService.getGurus().subscribe(gurus => (this.gurus = gurus));
  }
}
