import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css'],
})
export class ErrorsComponent implements OnInit {
  baseUrl = 'https://localhost:5001/api/';
  validationErrors: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  get404Error() {
    this.http.get(this.baseUrl + 'buggy/not-found').subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  get400Error() {
    this.http.get(this.baseUrl + 'buggy/bad-request').subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  get500Error() {
    this.http.get(this.baseUrl + 'buggy/server-error').subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  get401Error() {
    this.http.get(this.baseUrl + 'buggy/auth').subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  get400ValidationError() {
    this.http.post(this.baseUrl + 'account/register', {}).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (error) => {
        console.log(error);
        this.validationErrors = error;
      },
    });
  }
}
