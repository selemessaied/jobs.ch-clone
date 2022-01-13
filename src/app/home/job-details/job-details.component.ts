import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
})
export class JobDetailsComponent implements OnInit {
  isLoading = false;
  jobId = '';
  jobDetails: any;
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private http: HttpClient
  ) {}

  /**
   * Get job details id from route params
   * @param id
   * @returns {Promise<void>}
   * @memberof JobDetailsComponent
   * @description
   * Get job details from jobs.ch API
   * https://www.jobs.ch/api/v1/public/search?query=
   * https://www.jobs.ch/api/v1/public/search?query=java
   * https://www.jobs.ch/api/v1/public/search?query=java&location=Zürich
   * https://www.jobs.ch/api/v1/public/search?query=java&location=Zürich&page=2
   * https://www.jobs.ch/api/v1/public/search?query=java&location=Zürich&page=2&per_page=10
   * https://www.jobs.ch/api/v1/public/search?query=java&location=Zürich&page=2&per_page=10&sort=date
   * https://www.jobs.ch/api/v1/public/search?query=java&location=Zürich&page=2&per_page=10&sort=date&order=desc
   *
   */
  ngOnInit(): void {
    this.isLoading = true;
    this.route.paramMap.pipe(take(1)).subscribe((paramMap: any) => {
      if (!paramMap.has('id')) {
        this.router.navigate(['/']);
        return;
      }
      this.jobId = paramMap.get('id') || '';
      this.http
        .get<any>(
          'https://dry-caverns-47411.herokuapp.com/https://www.jobs.ch/api/v1/public/search/job/' +
            this.jobId
        )
        .pipe(take(1))
        .subscribe((data) => {
          this.jobDetails = data;
        });
    });
  }
}
