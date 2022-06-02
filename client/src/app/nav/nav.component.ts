import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  IsLoggedIn: boolean = false;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.getCurrentUser();
  }
  login() {
    this.accountService.login(this.model).subscribe({
      next: (response) => {
        this.IsLoggedIn = true;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  logout() {
    this.accountService.logout();
    this.IsLoggedIn = false;
  }
  getCurrentUser() {
    this.accountService.currentUser$.subscribe({
      next: (user) => {
        this.IsLoggedIn = !!user;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
