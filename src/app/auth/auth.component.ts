import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string = null;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm) {
    this.isLoading = true;
    if (!authForm.valid) return;

    console.log(authForm.value);
    if (this.isLoginMode) {
      this.authService
        .signin(authForm.value.email, authForm.value.password)
        .subscribe(
          (response) => {
            console.log(response);
            this.error = null;
            this.isLoading = false;
          },
          (error) => {
            this.error = error;
            this.isLoading = false;
          }
        );
    } else {
      this.authService
        .signup(authForm.value.email, authForm.value.password)
        .subscribe(
          (response) => {
            console.log(response);
            this.error = null;
            this.isLoading = false;
          },
          (error) => {
            this.error = error;
            this.isLoading = false;
          }
        );
    }

    //authForm.reset();
  }
}
