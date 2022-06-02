import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter<boolean>();
  model: any = {};
  constructor(
    private toastr: ToastrService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {}

  register() {
    this.accountService.register(this.model).subscribe({
      next: (res) => {
        console.log(res);
        this.onCancel();
      },
      error: (err) => {
        console.log(err);
        this.toastr.error(err.error.title)
      },
    });
  }
  onCancel() {
    this.cancelRegister.emit(false);
  }
}
