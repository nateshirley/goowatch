import { Component, OnInit } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from "@angular/common/http";
import { Router } from "@angular/router";
declare const addUsernameLoginListener: any;
declare const addPasswordLoginListener: any;

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  pass_error = "";
  username_error = "";
  user = {
    username: "",
    password: "",
  };
  responsedata;
  secureUser;
  ngOnInit(): void {}

  login(form: any): void {
    if (this.user.password.length < 6)
      this.pass_error = "Password must be six characters.";
    if (this.user.username.length < 1) {
      this.username_error = "Enter a valid username.";
    }
    let params = JSON.stringify(form);
    this.http
      //.get<Order>("http://localhost/icsix/ngphp-get.php?str=" + params)
      .post("http://localhost/goowatch/login.php", params)
      .subscribe(
        (data) => {
          console.log(data[1]);
          if (data[0] == true) {
            this.userTrue(data[1]);
          } else {
            this.responsedata = data[1];
          }
        },
        (error) => {
          console.log("Error", error);
        }
      );
  }

  userTrue(username) {
    console.log(username);
    this.secureUser = username;
    this.router.navigate(["gurus"]);
    localStorage.setItem("user", username);
  }

  // Ajax code
  onUsernameType = () => {
    var str_sofar = (<HTMLInputElement>document.getElementById("username")).value;
    console.log(str_sofar);
    addUsernameLoginListener(str_sofar);
  };

  onPasswordType = () => {
    var str_sofar = (<HTMLInputElement>document.getElementById("password")).value;
    console.log(str_sofar);
    addPasswordLoginListener(str_sofar);
  };
}
