import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from "@angular/common/http";
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  user;
  responsedata;
  votes;
  constructor(private http: HttpClient, private router: Router) {}
  logout() {
    let params = JSON.stringify(this.user);
    localStorage.clear();
    this.router.navigate(["login"]);
    this.http.post("http://localhost/goowatch/logout.php", params).subscribe(
      (data) => {
        this.responsedata = data;
      },
      (error) => {
        console.log("Error", error);
      }
    );
  }
  login() {
    this.router.navigate(["login"]);
  }
  getVotes() {
    let params = JSON.stringify(this.user);
    this.http.post("http://localhost/goowatch/getVotes.php", params).subscribe(
      (data) => {
        this.votes = data;
        console.log("getVote", data);
      },
      (error) => {
        console.log("Error", error);
      }
    );
  }
  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    this.getVotes();
  }
}
