import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSelectionList} from '@angular/material/list';
import {ActivatedRoute, Router} from '@angular/router';
import {BehaviorSubject} from "rxjs";
import {Product} from "src/app/user/shopping-cart/model/product.model";
import {ProductDigital} from "src/app/stores/model/product-digital";
import {FrontPageServiceService} from "src/app/stores/front-page/front-page-service.service";
import {AppConstants} from "src/app/common/app.constants";
import {Category} from "src/app/stores/model/category";

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {
  @ViewChild('categoryList') categorySelection: MatSelectionList;

  LOGO: string = "./assets/images/divvet1.png";
  value: 0;
  options: FormGroup;
  colorControl = new FormControl('primary');
  fontSizeControl = new FormControl(0, Validators.min(0));
  badgeValue: string;
  badeNumber: number = 0;
  /*
  categories: object[] = [
    { name: "category 1" },
    { name: "category 2" },
    { name: "category 3" },
    { name: "category 4" }
  ];
  */
  toggle: boolean = true;
  productsData: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  productsDigitalContent: BehaviorSubject<ProductDigital[]> = new BehaviorSubject<ProductDigital[]>([]);
  categories: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>([]);
  IMAGE_HOST = AppConstants.BASE_STATIC_HOST;

  constructor( private frontPageServiceService: FrontPageServiceService
              , fb: FormBuilder
              , public router: Router
              , public route: ActivatedRoute, ) {
    this.options = fb.group({
      color: this.colorControl,
      fontSize: this.fontSizeControl,
    });
    this.frontPageServiceService.getProducts().subscribe(data => {
      this.frontPageServiceService.getProductsDigitalContent().subscribe(dg => {
        this.productsDigitalContent.next(dg);
        this.productsData.next(data);
      });
      this.frontPageServiceService.getCategories().subscribe(c => {
        this.categories.next(c);
      })
    });
  }

  ngOnInit(): void {
  }

  getFontSize() {
    return Math.max(10, this.fontSizeControl.value);
  }

  changeBadge() {
    this.badgeValue = String(++this.badeNumber);
  }

  deselectCategory() {
    this.categorySelection.deselectAll();
  }

  removeFromCart() {
    this.badgeValue = String(--this.badeNumber);
  }

  showCart() {
    // this.router.navigateByUrl("/cart");
    this.router.navigate(['/cart'], {relativeTo: this.route});
  }
}
