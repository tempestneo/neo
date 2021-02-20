import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(readonly http: HttpClient) { }

  getPortfolio() {
    return this.http.get(`api/portfolio.json`).pipe(map(res => res))
  }

  getResume() {
    return this.http.get(`${environment.api}/resume`).pipe(map(res => res))
  }
}
