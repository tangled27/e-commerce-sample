import { Component } from '@angular/core';
import {Router } from '@angular/router';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  totalPrice: number;
  itemCount: number;
  productDetails: [{'productName': string, 'productPrice': string, 'productPic': string, 'productCount': string}];
  constructor( private router: Router) {
    this.totalPrice = 2800;
    this.itemCount = 3;
    // @ts-ignore
    this.productDetails = [];
    // tslint:disable-next-line:max-line-length
    this.productDetails.push({productName: 'Microsoft Surface', productPrice: '$600', productPic: 'laptop-mssurface.png', productCount: '1'});
    this.productDetails.push({productName: 'Acer Intel Celeron', productPrice: '$500', productPic: 'laptop-acer-celeron.jpg', productCount: '2'});
    this.productDetails.push({productName: 'Lenovo Ideapad', productPrice: '$600', productPic: 'laptop-ideapad.jpg', productCount: '2'});
  }
  checkout(){
    this.router.navigate(['checkout', { productDetails : JSON.stringify(this.productDetails), totalPrice: this.totalPrice}]);
  }

}
