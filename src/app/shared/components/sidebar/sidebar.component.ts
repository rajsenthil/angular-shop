import {Component, OnInit} from '@angular/core';
import {UserService} from 'src/app/_services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  first_name: string;
  last_name: string;
  email: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(user => {
      if (user) {
        this.first_name = user.firstName;
        this.last_name = user.lastName;
        this.email = user.email;
      }
    });
  }

}
