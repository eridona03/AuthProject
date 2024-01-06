import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}


  authenticate(data: any): Observable<any> {
    const url = `${this.baseUrl}/authenticate`;
    return this.http.post(url, data);
  }

  register(data: any): Observable<any> {
    const url = `${this.baseUrl}/register`;
    return this.http.post(url, data, {responseType: 'text',});
  }

  getHomeData(): Observable<any> {
    const url = `${this.baseUrl}/home`;
    return this.http.get(url);
  }

  getHelloData(): Observable<any> {
    const url = `${this.baseUrl}/hello`;
    return this.http.get(url);
  }
  
}
