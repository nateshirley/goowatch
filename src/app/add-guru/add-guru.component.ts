import { Component, OnInit } from "@angular/core";
import { Guru } from "../interfaces/guru";
@Component({
  selector: "app-add-guru",
  templateUrl: "./add-guru.component.html",
  styleUrls: ["./add-guru.component.css"]
})
export class AddGuruComponent implements OnInit {
  constructor() {}
  categories = [
    "Amazon FBA",
    "Software Development",
    "Fitness",
    "Dropshipping"
  ];
  newGuru: Guru = {
    id: 5,
    name: "",
    score: 0,
    category: "",
    description: "",
    imgLink: "",
    youtube: "",
    website: ""
  };

  ngOnInit(): void {}
}
