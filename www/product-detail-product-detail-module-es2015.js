(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-detail-product-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-detail/product-detail.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-detail/product-detail.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-icon name=\"arrow-back\" (click)=\"goToHome()\"></ion-icon>\n    <ion-title>Product Detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content scrollable>\n\n  <div class=\"pic-div\">\n    <ion-slides pager=\"true\">\n      <ion-slide>\n        <img src=\"assets/product1.jpeg\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"assets/product1.jpeg\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"assets/product1.jpeg\">\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n    <div class=\"product-details\">\n      <div class=\"name\"> Product name </div>\n\n      <div class=\"amount-div\">$1000</div>\n\n      <div class=\"info-div\">\n        product details.. product details\n        <br/> product detail....product details\n        product details.. product details\n        <br/>\n        <br/> product detail....product details\n        <br/>\n        product details.. product details\n        <br/> product detail....product details\n      </div>\n\n      <ion-grid>\n          <ion-row >\n            <ion-col id=\"tab1\" size=\"4\" class=\"info-tabs\" (click)=\"showDetails('tab1')\" >\n              <ion-label > Specifications </ion-label>\n<!--              <ion-badge>6</ion-badge>-->\n            </ion-col>\n\n            <ion-col id=\"tab2\" size=\"4\" class=\"info-tabs\" (click)=\"showDetails('tab2')\" >\n              <ion-label > Descriptions </ion-label>\n            </ion-col>\n\n            <ion-col id=\"tab3\" size=\"4\" class=\"info-tabs\" (click)=\"showDetails('tab3')\" >\n              <ion-label > Reviews </ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n      <div class=\"info-div\">\n        {{content}}\n      </div>\n\n    </div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"3\">\n        <ion-button expand=\"block\" fill=\"outline\"> Wishlist\n          <ion-icon name=\"heart\" size=\"small\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"3\">\n        <ion-button expand=\"block\" fill=\"outline\"> Contact\n          <ion-icon name=\"call\" size=\"small\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button expand=\"full\" fill=\"solid\"> Buy now </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/product-detail/product-detail-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/product-detail/product-detail-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ProductDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPageRoutingModule", function() { return ProductDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _product_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-detail.page */ "./src/app/product-detail/product-detail.page.ts");




const routes = [
    {
        path: '',
        component: _product_detail_page__WEBPACK_IMPORTED_MODULE_3__["ProductDetailPage"]
    }
];
let ProductDetailPageRoutingModule = class ProductDetailPageRoutingModule {
};
ProductDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/product-detail/product-detail.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/product-detail/product-detail.module.ts ***!
  \*********************************************************/
/*! exports provided: ProductDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPageModule", function() { return ProductDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-detail-routing.module */ "./src/app/product-detail/product-detail-routing.module.ts");
/* harmony import */ var _product_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-detail.page */ "./src/app/product-detail/product-detail.page.ts");







let ProductDetailPageModule = class ProductDetailPageModule {
};
ProductDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductDetailPageRoutingModule"]
        ],
        declarations: [_product_detail_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailPage"]]
    })
], ProductDetailPageModule);



/***/ }),

/***/ "./src/app/product-detail/product-detail.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/product-detail/product-detail.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pic-div {\n  margin: 0;\n  height: 40%;\n  width: 100%;\n}\n\nion-slides {\n  height: 100%;\n  width: 100%;\n}\n\n.product-details {\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  background-color: white;\n  border-top: grey 4px;\n  height: 100%;\n}\n\n.name {\n  padding: 10px;\n  font-weight: bolder;\n  font-size: larger;\n  color: black;\n}\n\n.amount-div {\n  padding: 5%;\n  font-size: large;\n  font-weight: normal;\n  color: black;\n}\n\n.info-div {\n  background-color: white;\n  padding: 5%;\n  font-size: small;\n}\n\n.info-tabs {\n  padding: 5px 15px 10px 25px;\n  font-size: medium;\n  color: black;\n  border-bottom: 1px grey solid;\n}\n\n.spec-div {\n  padding: 5px 2px 2px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUVGOztBQUFBO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FBR0Y7O0FBREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFJRjs7QUFGQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUtGOztBQUhBO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFNRjs7QUFKQTtFQUNFLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUFPRjs7QUFMQTtFQUNFLHdCQUFBO0FBUUYiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGljLWRpdntcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDQwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tc2xpZGVze1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnByb2R1Y3QtZGV0YWlsc3tcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItdG9wOiBncmV5IDRweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm5hbWV7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBjb2xvcjogYmxhY2s7XG59XG4uYW1vdW50LWRpdntcbiAgcGFkZGluZzogNSU7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5pbmZvLWRpdntcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDUlO1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuLmluZm8tdGFic3tcbiAgcGFkZGluZzogNXB4IDE1cHggMTBweCAyNXB4O1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItYm90dG9tOiAxcHggZ3JleSBzb2xpZDtcbn1cbi5zcGVjLWRpdntcbiAgcGFkZGluZzogNXB4IDJweCAycHggNXB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/product-detail/product-detail.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/product-detail/product-detail.page.ts ***!
  \*******************************************************/
/*! exports provided: ProductDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPage", function() { return ProductDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let ProductDetailPage = class ProductDetailPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    showDetails(tabNumber) {
        document.getElementById(tabNumber).style.color = '#3dc2ff';
        document.getElementById(tabNumber).style.borderBottom = '3px #3dc2ff solid';
        if (tabNumber === 'tab1') {
            document.getElementById('tab2').style.color = document.getElementById('tab3').style.color = 'black';
            document.getElementById('tab2').style.borderBottom = document.getElementById('tab3').style.borderBottom = '1px grey solid ';
            this.content = 'this is specification';
        }
        else if (tabNumber === 'tab2') {
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
    goToHome() {
        this.router.navigate(['']);
    }
};
ProductDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProductDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-detail/product-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-detail.page.scss */ "./src/app/product-detail/product-detail.page.scss")).default]
    })
], ProductDetailPage);



/***/ })

}]);
//# sourceMappingURL=product-detail-product-detail-module-es2015.js.map