// NATHAN SHIRLEY (nes2ta)
import { Injectable } from "@angular/core";
import { mockGurus } from "./mock-gurus";
import { Guru } from "./interfaces/guru";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
declare const upvoteVanilla: any;
declare const downvoteVanilla: any;
declare const failDown: any;
declare const failUp: any;

@Injectable({
  providedIn: "root",
})
export class GuruService {
  gurusUrl = "http://localhost/goowatch/getGurus.php";
  guruByIdUrl = "http://localhost/goowatch/getGuruById.php";
  getGurus(): Observable<Guru[]> {
    return this.http.get<Guru[]>(this.gurusUrl);
  }
  getGuru(id: number): Observable<Guru> {
    let params = JSON.stringify(id);
    return this.http.post<Guru>(this.guruByIdUrl, params);
  }
  upvoteGuru(user: string, guruID: any, guruName: string): void {
    let params = JSON.stringify([user, guruID, guruName]);
    this.http.post("http://localhost/goowatch/upvote.php", params).subscribe(
      (data) => {
        console.log("Response", data);
        if (data == true) {
          upvoteVanilla(guruID);
        } else failUp(guruID);
      },
      (error) => {
        console.log("Error", error);
      }
    );
  }
  downvoteGuru(user: string, guruID: any, guruName: string): void {
    let params = JSON.stringify([user, guruID, guruName]);
    this.http.post("http://localhost/goowatch/downvote.php", params).subscribe(
      (data) => {
        console.log("Response", data);
        if (data == true) {
          downvoteVanilla(guruID);
        } else failDown(guruID);
      },
      (error) => {
        console.log("Error", error);
      }
    );
  }

  constructor(private http: HttpClient) {}
}
