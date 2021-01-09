import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  LOGO: string = "./assets/images/divvet1.png";
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  sideBarOpen = true;
  value: 0;
  options: FormGroup;
  colorControl = new FormControl('primary');
  fontSizeControl = new FormControl(0, Validators.min(0));
  badgeValue: string;
  badeNumber: number = 0;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      color: this.colorControl,
      fontSize: this.fontSizeControl,
    });
  }

  getFontSize() {
    return Math.max(10, this.fontSizeControl.value);
  }

  ngOnInit(): void {
  }

  changeBadge() {
    this.badgeValue = String(this.badeNumber++);
  }

  sideBarToggler(event) {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
