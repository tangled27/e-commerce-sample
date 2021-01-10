import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  name: string;
  city: string;
  addressLine1: string;
  addressLine2: string;
  country: string;
  province: string;
  zip: string;
  phone: string;
  email: string;
  paymentFormShow: boolean;
  addressFormShow: boolean;
  cardName: string;
  cardNumber: string;
  months: [number];
  year: [any];
  productDetails: [{'productName': string, 'productPrice': string, 'productPic': string, 'productCount': string}];
  totalPrice: string;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.paymentFormShow = false;
    this.addressFormShow = true;
    // @ts-ignore
    this.months = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }

  ngOnInit() {
    const productDetails = this.route.snapshot.paramMap.get('productDetails');
    this.productDetails = JSON.parse(productDetails);
    this.totalPrice = this.route.snapshot.paramMap.get('totalPrice');
    console.log(JSON.stringify(this.productDetails) + ' ' + this.totalPrice);
  }
  proceedToPaymentForm(){
    this.addressFormShow = !this.addressFormShow;
    this.paymentFormShow = !this.paymentFormShow;
  }
  doPayment(){
    this.addressFormShow = this.paymentFormShow = false;
    // add do payment code
  }
  goToHome(){
    this.router.navigate(['']);
  }
  goToCart(){
    this.router.navigate( ['tabs/cart']);
  }
}
