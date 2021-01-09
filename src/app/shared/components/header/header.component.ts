import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from 'src/app/_services/token-storage.service';
import {AuthService} from 'src/app/_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  LOGO: string = "./assets/images/divvet1.png";

  email: string;

  badgeValue: string;
  badeNumber: number = 0;
  isLoggedIn = false;
  username: string;

  constructor(public router: Router
              , public route: ActivatedRoute
              , private http: HttpClient
              , private authService: AuthService
              , private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = user.displayName;
    }
  }

  toggleSideBar() {
    this.LOGO === "./assets/image/divvet.png" ? "./assets/image/D.png" : "./assets/image/divvet.png";
    this.toggleSideBarForMe.emit();
    setTimeout(()=> {
      window.dispatchEvent(new Event('resize'))
    }, 300);
  }

  logoutUser() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  changeBadge() {
    this.badgeValue = String(this.badeNumber++);
  }

  showCart() {
    // this.router.navigateByUrl("/cart");
    this.router.navigate(['/cart'], {relativeTo: this.route});
  }
  navigateTo(dest: string) {
    this.router.navigateByUrl(dest);
    // this.router.navigate([dest], {relativeTo: this.route});
  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['/'], {relativeTo: this.route});
    window.location.reload();
  }
}
