// NATHAN SHIRLEY (nes2ta)
import { Injectable } from "@angular/core";
import { mockGurus } from "./mock-gurus";
import { Guru } from "./interfaces/guru";
import { Observable, of } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class GuruService {
  getGurus(): Observable<Guru[]> {
    return of(mockGurus);
  }
  getGuru(id: number): Observable<Guru> {
    return of(mockGurus.find(guru => guru.id === id));
  }
  constructor() {}
}
