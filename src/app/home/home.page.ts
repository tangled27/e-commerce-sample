import { Component } from '@angular/core';
import {Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  showSearch: boolean;
  constructor(private router: Router) {}

  showSearchPage(){
    this.showSearch = !this.showSearch;
    // this.router.navigate(['login']);
  }
  goToCategoryPage(){
    console.log('category page');
  }
  goToProductDetails(){
    this.router.navigate(['product-detail']);
  }
}
