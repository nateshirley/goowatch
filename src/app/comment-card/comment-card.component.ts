// NATHAN SHIRLEY (nes2ta)
import {
  Component,
  OnInit,
  ViewEncapsulation,
  ElementRef,
  Input,
} from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from "@angular/common/http";
import { GooComments } from "../interfaces/goo-comments";
declare const checkCommentVanilla: any;
declare const showCommentVanilla: any;

@Component({
  selector: "app-comment-card",
  templateUrl: "./comment-card.component.html",
  styleUrls: ["./comment-card.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class CommentCardComponent implements OnInit {
  @Input("guruID") guruID: string;
  comments;
  user;
  submitComment = () => {
    let text = checkCommentVanilla();
    let params = [this.user, text, this.guruID];
    this.http
      .post("http://localhost/goowatch/submitComment.php", params)
      .subscribe(
        (data) => {
          console.log("Response", data);
          if (data == true) {
            showCommentVanilla(this.user, text);
          }
        },
        (error) => {
          console.log("Error", error);
        }
      );
  };
  getComments() {
    let params = JSON.stringify(this.guruID);
    this.http
      .post("http://localhost/goowatch/getComments.php", params)
      .subscribe(
        (data) => {
          console.log("Response", data);
          this.comments = data;
          this.comments.sort((a, b) => (a.time > b.time ? 1 : -1));
        },
        (error) => {
          console.log("Error", error);
        }
      );
  }
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getComments();
    this.user = localStorage.getItem("user");
  }
}
