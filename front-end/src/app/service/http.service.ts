import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  URL = 'http://www.starrys.club:7001';
  constructor(private http: HttpClient) {
    console.log(environment);
    this.URL = environment.requesturl;
  }
  loginPost(body) {
    return this.http.post(`${this.URL}/login`, body).pipe(
      tap(res => {
        // console.log(res);
      })
    );
  }
  registerPost(body) {
    return this.http.post(`${this.URL}/register`, body).pipe(
      tap(res => {
        // console.log(res);
      })
    );
  }
  listPost() {
    return this.http.post(`${this.URL}/list`, {}).pipe(
      tap(res => {
        // console.log(res);
      })
    );
  }
}
