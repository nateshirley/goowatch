import { Component, OnInit, Input } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { GuruService } from "../guru.service";
import { Guru } from "../interfaces/guru";
@Component({
  selector: "app-goo-detail",
  templateUrl: "./goo-detail.component.html",
  styleUrls: ["./goo-detail.component.css"]
})
export class GooDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private guruService: GuruService,
    private location: Location
  ) {}
  @Input() guru: Guru;
  ngOnInit(): void {
    this.getGuru();
  }
  getGuru(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.guruService.getGuru(id).subscribe(guru => (this.guru = guru));
  }
}
