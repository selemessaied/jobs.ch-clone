import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  jobs: any;
  searchTerm!: any;
  constructor(private http: HttpClient) {}

  /**
   * Get jobs from jobs.ch API
   */
  ngOnInit(): void {
    this.http
      .get<any>('https://www.jobs.ch/api/v1/public/search')
      .pipe(take(1))
      .subscribe((data) => {
        this.jobs = data.documents;
      });
  }

  /**
   * Search jobs by search term
   * @param searchTerm
   * @memberof HomeComponent
   * @description
   * https://www.jobs.ch/api/v1/public/search?query=java
   * https://www.jobs.ch/api/v1/public/search?query=java&location=Zürich
   */
  search(ev: any) {
    let query = ev.detail.value;
    this.http
      .get<any>('https://www.jobs.ch/api/v1/public/search?query=' + query)
      .pipe(take(1))
      .subscribe((data) => {
        this.jobs = data.documents;
      });
  }
}
