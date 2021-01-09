import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from 'src/app/_services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
declare var grecaptcha: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  siteKeyCaptcha: string = "6LfPDw4aAAAAAOsIC1Nx2LhDjbq9dN9aTusELuFC";
  displayName = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  matchingPassword = new FormControl('', [Validators.required, Validators.minLength(8)]);
  recaptcha = new FormControl('', [Validators.required]);
  isSuccessful: boolean;
  isSignUpFailed: boolean;
  errorMessage: string;

  constructor(public fb: FormBuilder
              , private authService: AuthService
              , private router: Router
              , private route: ActivatedRoute) {
    this.registerForm = this.fb.group({
      displayName: this.displayName,
      email: this.email,
      password: this.password,
      matchingPassword: this.matchingPassword,
      recaptcha: this.recaptcha
    })
  }

  ngOnInit(): void {
    grecaptcha.render('capcha_element', {
      'sitekey': this.siteKeyCaptcha
    });
    window['getResponceCapcha'] = this.getResponceCapcha.bind(this);
  }

  getDisplayNameMessage() {
    if (this.displayName.hasError('required')) return 'please enter display name';
    if ((this.displayName.hasError('minLength'))
      || (this.displayName.hasError('minLength'))) return 'display name can contain 5 to 20 chars';
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) return 'email required';
    if (this.email.hasError('email')) return 'Not a valid email';
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) return 'password requied';
    if (this.password.hasError('minLength')) return 'password is at least 8 chars';

  }

  getMatchingPasswordErrorMessage() {
    if (this.matchingPassword.value !== this.password.value) return 'matching password should match the password';
  }


  getRecaptchaErrorMessage() {
    if (this.recaptcha.hasError('required')) return 'recaptcha required';
  }

  getResponceCapcha(captchaResponse: string) {
    this.verifyCaptcha(captchaResponse);
  }

  verifyCaptcha(captchaResponse: string) {
    this.recaptcha.setValue(captchaResponse);
  }

  public registerUser = (registerFormValue) => {
    console.log("password: "+this.password.value);
    console.log("matching password: "+this.matchingPassword.value);

    if (this.password.value !== this.matchingPassword) this.matchingPassword.setErrors({ 'required': true })

    console.log("All good");
    this.executeUserCreation(registerFormValue);
  }

  private executeUserCreation = (registerFormValue) => {
    let user: User = {
      displayName: registerFormValue.displayName,
      email: registerFormValue.email,
      password: registerFormValue.password,
      matchingPassword: registerFormValue.matchingPassword,
      recaptcha: registerFormValue.recaptcha
    }

    this.authService.register(user).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['/'], {relativeTo: this.route});
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        grecaptcha.reset();
        this.password.setValue('')
        this.matchingPassword.setValue('')
        this.recaptcha.setValue('');
      }
    );

  }
}

export interface User {
  displayName: string,
  email: string,
  password: string,
  matchingPassword: string,
  recaptcha: string
}
