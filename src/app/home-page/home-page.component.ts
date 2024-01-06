import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{

  constructor(private router: Router, private apiService: ApiService, public http: HttpClient) { }

  ngOnInit(){
    const token = localStorage.getItem('token');

    if (token) {
      this.router.navigate(['/home'])
    }
    else {
      this.router.navigate(['login']);
    }
  }

  logOut() {
    
    const url = 'http://localhost:8080/logout';
    const token = localStorage.getItem("token");

    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set("Authorization", "Bearer " + token!);
    this.http.get(url, {headers}).subscribe(() => {

      localStorage.removeItem("token");
      this.router.navigate(['/login']);
    
    });

  }

  showHello() {
    this.apiService.getHelloData().subscribe(
      (result: any) => {
        console.log(result);
      });
  }

}
