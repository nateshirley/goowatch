import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Guru } from "../interfaces/guru";
declare const previewGooVanilla: any;
declare const submitGooVanilla: any;
@Component({
  selector: "app-add-guru",
  templateUrl: "./add-guru.component.html",
  styleUrls: ["./add-guru.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class AddGuruComponent implements OnInit {
  onPreview = () => {
    previewGooVanilla();
  };
  onSubmitGoo = () => {
    submitGooVanilla();
  };
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
