// JT Graass (jtg4de)
import { Component, OnInit, Input } from "@angular/core";
import { mockGurus } from "../mock-gurus";
import { Guru } from "../interfaces/guru";
import { GuruService } from "../guru.service";
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from "@angular/common/http";

@Component({
  selector: "app-goo-preview-card",
  templateUrl: "./goo-preview-card.component.html",
  styleUrls: ["./goo-preview-card.component.css"],
})
export class GooPreviewCardComponent implements OnInit {
  gurus: Guru[];
  user;
  serverGurus;
  downvote = (id, name) => {
    this.guruService.downvoteGuru(this.user, id, name);
  };
  upvote = (id, name) => {
    this.guruService.upvoteGuru(this.user, id, name);
  };

  constructor(private http: HttpClient, private guruService: GuruService) {}

  ngOnInit(): void {
    this.getGurus();
    this.user = localStorage.getItem("user");
  }
  getGurus(): void {
    this.guruService
      .getGurus()
      .subscribe(
        (gurus) =>
          (this.gurus = gurus.sort((a, b) => (a.score > b.score ? 1 : -1)))
      );
  }
}
