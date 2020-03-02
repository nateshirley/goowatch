import { Component, OnInit } from "@angular/core";
import { GooComments } from "../interfaces/goo-comments";

@Component({
  selector: "app-comment-card",
  templateUrl: "./comment-card.component.html",
  styleUrls: ["./comment-card.component.css"]
})
export class CommentCardComponent implements OnInit {
  commentArray: GooComments = {
    id: 1,
    comments: [
      {
        user: "gurufollower3",
        comment:
          "I bought this guy's course for $2300. It's been super helpful. Set up my business and did 200k in sales."
      }
    ]
  };
  comments = [
    {
      user: "gurufollower3",
      comment:
        "I bought this guy's course for $2300. It's been super helpful. Set up my business and did 200k in sales."
    },
    {
      user: "gurufollower4",
      comment:
        "I bought this guy's course for $2300. It's been super helpful. Set up my business and did 200k in sales."
    }
  ];
  frontComments = [];
  thisComment = "";
  errorMsg = "";
  addComment = comment => {
    if (comment.length > 0) {
      this.frontComments.unshift(comment);
      this.thisComment = "";
      this.errorMsg = "";
    } else {
      this.errorMsg = "Type a comment.";
    }
  };
  constructor() {}

  ngOnInit(): void {}
}