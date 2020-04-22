// NATHAN SHIRLEY (nes2ta)
import { Component, OnInit, Input } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { GuruService } from "../guru.service";
import { Guru } from "../interfaces/guru";
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from "@angular/common/http";
@Component({
  selector: "app-goo-detail",
  templateUrl: "./goo-detail.component.html",
  styleUrls: ["./goo-detail.component.css"],
})
export class GooDetailComponent implements OnInit {
  user;
  constructor(
    private route: ActivatedRoute,
    private guruService: GuruService,
    private location: Location,
    private http: HttpClient
  ) {}
  @Input() guru: Guru;
  ngOnInit(): void {
    this.getGuru();
    this.user = localStorage.getItem("user");
  }
  getGuru(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.guruService.getGuru(id).subscribe((guru) => (this.guru = guru));
  }
  // likewise need these functions for the individual Gurus' pages too
  downvote = () => {
    let result = this.guruService.downvoteGuru(
      this.user,
      this.guru.id,
      this.guru.name
    );
    console.log(result);
  };
  upvote = () => {
    this.guruService.upvoteGuru(this.user, this.guru.id, this.guru.name);
  };
}
