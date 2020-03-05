// NATHAN SHIRLEY (nes2ta)
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Guru } from "../interfaces/guru";
// necessary to use these javascripts
declare const previewGooVanilla: any; 
declare const submitGooVanilla: any;
@Component({
  selector: "app-add-guru",
  templateUrl: "./add-guru.component.html",
  styleUrls: ["./add-guru.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class AddGuruComponent implements OnInit {
  // allows to call on previewGooVanilla() and onSubmitGooVanilla() functions written in outer javascript file as onPreview and onSubmitGoo
  onPreview = () => {
    previewGooVanilla();
  };
  onSubmitGoo = () => {
    submitGooVanilla();
  };
  constructor() {}
  // types of gurus that a guru can be
  categories = [
    "Amazon FBA",
    "Software Development",
    "Fitness",
    "Dropshipping"
  ];
  // our hypothetical next Guru object. Gets displayed at bottom of page if user clicks submit
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
