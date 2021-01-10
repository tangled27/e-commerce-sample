import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  productDetails: [{'productName': string, 'productPrice': string, 'productPic': string, 'productCount': string}];
  constructor() {
    // @ts-ignore
    this.productDetails = [];
    // tslint:disable-next-line:max-line-length
    this.productDetails.push({productName: 'Microsoft Surface', productPrice: '$600', productPic: 'laptop-mssurface.png', productCount: '1'});
    this.productDetails.push({productName: 'Acer Intel Celeron', productPrice: '$500', productPic: 'laptop-acer-celeron.jpg', productCount: '2'});
    this.productDetails.push({productName: 'Lenovo Ideapad', productPrice: '$600', productPic: 'laptop-ideapad.jpg', productCount: '2'});
    // tslint:disable-next-line:max-line-length
    this.productDetails.push({productName: 'Microsoft Surface', productPrice: '$1000', productPic: 'laptop-mssurface.png', productCount: '2'});
    this.productDetails.push({productName: 'Macbook pro', productPrice: '$1200', productPic: 'laptop-macbook.jpg', productCount: '2'});
  }

}
