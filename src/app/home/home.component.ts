import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  totalAngularPackages: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any>('https://www.jobs.ch/api/v1/public/search?query=angular&rows=2')
      .subscribe((data) => {
        this.totalAngularPackages = data.total;
        console.log(data);
      });
  }
}
