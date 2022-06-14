import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
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
  registerForm: FormGroup;
  constructor(
    private toastr: ToastrService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('', [Validators.required, this.matchValue('password') ]),
    });
    this.registerForm.controls.password.valueChanges.subscribe((value) => {
      this.registerForm.controls.confirmPassword.updateValueAndValidity();
    });
  }

  matchValue(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control?.value === control?.parent?.controls[matchTo].value
        ? null
        : { isMatching: true };
    };
  }

  register() {
    console.log(this.registerForm.value);
    // this.accountService.register(this.model).subscribe({
    //   next: (res) => {
    //     console.log(res);
    //     this.onCancel();
    //   },
    //   error: (err) => {
    //     console.log(err);
    //     this.toastr.error(err.error.title)
    //   },
    // });
  }
  onCancel() {
    this.cancelRegister.emit(false);
  }
}
