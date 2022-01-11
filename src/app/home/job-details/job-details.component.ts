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

  ngOnInit(): void {
    this.isLoading = true;
    this.route.paramMap.pipe(take(1)).subscribe((paramMap: any) => {
      if (!paramMap.has('id')) {
        this.router.navigate(['/']);
        return;
      }
      this.jobId = paramMap.get('id') || '';
      this.http
        .get<any>('https://www.jobs.ch/api/v1/public/search/job/' + this.jobId)
        .pipe(take(1))
        .subscribe((data) => {
          this.jobDetails = data;
          console.log(this.jobDetails);
        });
    });
  }
}
