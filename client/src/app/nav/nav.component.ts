import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public accountService: AccountService, private router: Router) {}

  ngOnInit(): void {}
  login(form:NgForm) {
    this.accountService.login(this.model).subscribe({
      next: (response) => this.router.navigate(['/members']),
      error: (err) => console.log(err),
    });
    form.reset()
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
