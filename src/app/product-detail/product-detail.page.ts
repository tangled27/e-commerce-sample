import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  content: string = null;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  showDetails(tabNumber){
    document.getElementById(tabNumber).style.color = '#3dc2ff';
    document.getElementById(tabNumber).style.borderBottom = '3px #3dc2ff solid';
    if (tabNumber === 'tab1') {
      document.getElementById('tab2').style.color = document.getElementById('tab3').style.color = 'black';
      document.getElementById('tab2').style.borderBottom = document.getElementById('tab3').style.borderBottom = '1px grey solid ';
      this.content = 'specification'; }
    else if (tabNumber === 'tab2' ) {
      document.getElementById('tab1').style.color = document.getElementById('tab3').style.color = 'black';
      document.getElementById('tab1').style.borderBottom = document.getElementById('tab3').style.borderBottom = '1px grey solid';
      this.content = 'descriptions';
    }
    else {
      document.getElementById('tab2').style.color = document.getElementById('tab1').style.color = 'black';
      document.getElementById('tab2').style.borderBottom = document.getElementById('tab1').style.borderBottom = '1px grey solid';
      this.content = 'reviews';
    }
  }
  goToHome(){
    this.router.navigate(['']);
  }

}
