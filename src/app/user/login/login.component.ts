import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppConstants} from 'src/app/common/app.constants';
import {AuthService} from 'src/app/_services/auth.service';
import {TokenStorageService} from 'src/app/_services/token-storage.service';
import {UserService} from 'src/app/_services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  currentUser: any;
  googleURL = AppConstants.GOOGLE_AUTH_URL;
  facebookURL = AppConstants.FACEBOOK_AUTH_URL;
  // githubURL = AppConstants.GITHUB_AUTH_URL;
  // linkedinURL = AppConstants.LINKEDIN_AUTH_URL;
  username: any;
  password: any;

  constructor(private authService: AuthService
              , private tokenStorage: TokenStorageService
              , private router: Router
              , private route: ActivatedRoute
              , private userService: UserService) {}

  ngOnInit(): void {
    const token: string = this.route.snapshot.queryParamMap.get('token');
    const error: string = this.route.snapshot.queryParamMap.get('error');
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.currentUser = this.tokenStorage.getUser();
    }
    else if (token){
      this.tokenStorage.saveToken(token);
      this.userService.getCurrentUser().subscribe(
        data => {
          this.login(data);
        },
        err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      );
    }
    else if (error){
      this.errorMessage = error;
      this.isLoginFailed = true;
    }
  }

  onSubmit(): void {
    console.log('login submit');
    this.authService.login(this.form).subscribe(
      data => {
        console.log('data.accessToken:'+ data.accessToken);
        this.tokenStorage.saveToken(data.accessToken);
        this.login(data.user);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  login(user): void {
    console.log('User login:' + this.username);
    this.tokenStorage.saveUser(user);
    this.isLoginFailed = false;
    this.isLoggedIn = true;
    console.log('User loggged in? ' + this.isLoggedIn);
    this.currentUser = this.tokenStorage.getUser();
    this.router.navigate(['/']);
    // window.location.reload();
  }

}
