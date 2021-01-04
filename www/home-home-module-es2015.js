(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-grid>\n            <ion-row class=\"logo-toolbar\">\n                <ion-col size=\"2\">\n                    <ion-icon name=\"menu\" size=\"large\"></ion-icon>\n                </ion-col>\n                <ion-col size=\"8\">\n<!--                    <img class=\"logo-image\" src=\"assets/logo.jpg\">-->\n                    <ion-label class=\"logo-image\"> LOGO </ion-label>\n                </ion-col>\n                <ion-col size=\"2\" >\n                    <ion-icon name=\"notifications\" size=\"medium\"></ion-icon>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-item class=\"search-bar\">\n                    <ion-icon class=\"search-icon\" name=\"search\" (click)=\"showSearchPage()\"></ion-icon>\n                    <ion-input class=\"search-input\" placeholder=\"search items\"></ion-input>\n                </ion-item>\n            </ion-row>\n        </ion-grid>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" scrollable>\n<!--  <ion-header collapse=\"condense\">-->\n<!--    <ion-toolbar>-->\n<!--      <ion-title size=\"large\">Tab main</ion-title>-->\n<!--    </ion-toolbar>-->\n<!--  </ion-header>-->\n\n    <div class=\"home-content\" *ngIf=\"!showSearch\">\n        <ion-slides pager=\"true\">\n            <ion-slide>\n                <img src=\"assets/walmart-deals.jpg\">\n            </ion-slide>\n            <ion-slide>\n                <img src=\"assets/walmart-deals.jpg\">\n            </ion-slide>\n            <ion-slide>\n                <img src=\"assets/walmart-deals.jpg\">\n            </ion-slide>\n        </ion-slides>\n\n\n    <ion-grid class=\"category-grid\" *ngIf=\"!showSearch\">\n        <ion-row>\n            <ion-col size=\"4\" class=\"section-head\"> Category </ion-col>\n            <ion-col size=\"6\"></ion-col>\n            <ion-col size=\"2\">\n                <span> <a (click)=\"goToCategoryPage()\"> See all </a></span>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col size=\"3\">\n                <button class=\"btn-category\">\n                   <ion-icon name=\"laptop\" size=\"large\"></ion-icon>\n                </button>\n                <ion-label> Laptops </ion-label>\n            </ion-col>\n            <ion-col size=\"3\">\n                <button class=\"btn-category\">\n                    <ion-icon name=\"football\" size=\"large\"></ion-icon>\n                </button>\n                <ion-label> Sports </ion-label>\n            </ion-col>\n            <ion-col size=\"3\">\n                <button class=\"btn-category\">\n                    <ion-icon name=\"pizza\" size=\"large\"></ion-icon>\n                </button>\n                <ion-label> Food </ion-label>\n            </ion-col>\n            <ion-col size=\"3\">\n                <button class=\"btn-category\">\n                    <ion-icon name=\"school\" size=\"large\"></ion-icon>\n                </button>\n                <ion-label> Stationery </ion-label>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <ion-grid class=\"home-content deals\">\n        <ion-row>\n            <ion-col size=\"4\" class=\"section-head\"> Hot Deals</ion-col>\n            <ion-col size=\"6\"></ion-col>\n            <ion-col size=\"2\">\n                <span> <a (click)=\"goToCategoryPage()\"> See all </a></span>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col size=\"6\" (click)=\"goToProductDetails()\">\n                <div class=\"deals-card\">\n                    <img src=\"assets/laptop-acer-celeron.jpg\">\n                    <div class=\"deals-title\">Acer Intel Celeron</div>\n                    <div class=\"subtitle\">$500</div>\n                    <div class=\"stars\">\n                        <ion-icon name=\"star\" *ngFor=\"let num of [1,2,3,4,5]\"></ion-icon>\n                    </div>\n                </div>\n            </ion-col>\n            <ion-col size=\"6\">\n                <div class=\"deals-card\">\n                    <img src=\"assets/laptop-chrome.jpeg\">\n                    <div class=\"deals-title\">Chromebook </div>\n                    <div class=\"subtitle\">$700</div>\n                    <div class=\"stars\">\n                        <ion-icon name=\"star\" *ngFor=\"let num of [1,2,3,4,5]\"></ion-icon>\n                    </div>\n                </div>\n            </ion-col>\n            </ion-row>\n\n        <ion-row>\n            <ion-col size=\"6\">\n                <div class=\"deals-card\">\n                    <img src=\"assets/laptop-dell-xps15.webp\">\n                    <div class=\"deals-title\">Dell XPS 15</div>\n                    <div class=\"subtitle\">$600</div>\n                </div>\n            </ion-col>\n            <ion-col size=\"6\">\n                <div class=\"deals-card\">\n                    <img src=\"assets/laptop-ideapad.jpg\">\n                    <div class=\"deals-title\">Lenovo Ideapad</div>\n                    <div class=\"subtitle\">$600</div>\n                    <div class=\"stars\">\n                        <ion-icon name=\"star\" *ngFor=\"let num of [1,2,3,4,5]\"></ion-icon>\n                    </div>\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col size=\"6\">\n                <div class=\"deals-card\">\n                    <img src=\"assets/laptop-macbook.jpg\">\n                    <div class=\"deals-title\">Macbook pro</div>\n                    <div class=\"subtitle\">$1200</div>\n                    <div class=\"stars\">\n                        <ion-icon name=\"star\" *ngFor=\"let num of [1,2,3,4,5]\"></ion-icon>\n                    </div>\n                </div>\n            </ion-col>\n            <ion-col size=\"6\">\n                <div class=\"deals-card\">\n                    <img src=\"assets/laptop-mssurface.png\">\n                    <div class=\"deals-title\">Microsoft Surface</div>\n                    <div class=\"subtitle\">$1000</div>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    </div>\n\n    <div class=\"home-content\" *ngIf=\"showSearch\">\n        <ion-list lines>\n\n        </ion-list>\n    </div>\n<!--  <app-explore-container name=\"Tab 1 page\"></app-explore-container>-->\n</ion-content>\n");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_7__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #3dc2ff;\n}\n\n.ion-icon {\n  --color: white;\n}\n\n.logo-toolbar {\n  height: 30%;\n}\n\n.logo-image {\n  padding-left: 30%;\n  height: 20%;\n  width: 10%;\n  justify-content: center;\n}\n\n.search-bar {\n  padding-left: 8%;\n  height: 20%;\n  width: 90%;\n  --border-radius: 22px;\n  justify-content: center;\n  --highlight-height: 0;\n}\n\n.search-icon {\n  padding-left: 2%;\n  padding-right: 3%;\n  font-size: larger;\n  font-weight: 120;\n  color: #0d0d0d;\n}\n\n.search-input {\n  padding-left: 5%;\n  height: 100%;\n}\n\n.category-grid {\n  margin-left: 2%;\n  margin-top: 2%;\n  justify-content: center;\n}\n\n.category-icon {\n  --height: 50%;\n  --width: 30%;\n}\n\n.home-content {\n  padding-left: 1%;\n  padding-top: 3%;\n}\n\n.deals {\n  background-color: #efeeee;\n}\n\nion-slides {\n  height: 20%;\n  width: 90%;\n}\n\nion-label {\n  margin: 10%;\n  font-weight: 150;\n  font-size: 15px;\n  color: black;\n}\n\n.section-head {\n  font-weight: bolder;\n  font-size: 17px;\n  color: black;\n}\n\n.deals-title {\n  margin-top: 5%;\n  margin-left: 10%;\n  font-weight: bolder;\n  font-size: 15px;\n  color: black;\n}\n\n.subtitle {\n  margin-top: 5%;\n  margin-left: 10%;\n  font-weight: bold;\n  font-size: 17px;\n  color: #3dc2ff;\n}\n\n.stars {\n  margin-top: 5%;\n  margin-left: 10%;\n  color: orange;\n}\n\n.btn-category {\n  background-color: whitesmoke;\n  border: none;\n  color: black;\n  padding: 20px;\n  text-align: center;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  border-radius: 50%;\n}\n\n.btn-category:hover {\n  background-color: #e7e7e7;\n}\n\n.deals-card {\n  background-color: white;\n  border: lightgrey;\n  height: 100%;\n  width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0FBRUY7O0FBR0E7RUFDRSxXQUFBO0FBQUY7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUdGOztBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBR0Y7O0FBREE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBSUY7O0FBRUE7RUFJRSxhQUFBO0VBQ0EsWUFBQTtBQUZGOztBQU1BO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBSEY7O0FBTUE7RUFDRSx5QkFBQTtBQUhGOztBQU1BO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUFIRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBRkY7O0FBSUE7RUFFRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBRkY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBREY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBQUY7O0FBRUE7RUFDRSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBRUEscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBRUE7RUFBcUIseUJBQUE7QUFFckI7O0FBQUE7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFHRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcbiAgLS1iYWNrZ3JvdW5kOiAjM2RjMmZmO1xufVxuLmlvbi1pY29ue1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cbi5pb24tbGFiZWx7XG5cbn1cbi5sb2dvLXRvb2xiYXJ7XG4gIGhlaWdodDogMzAlO1xufVxuLmxvZ28taW1hZ2V7XG4gIHBhZGRpbmctbGVmdDogMzAlO1xuICBoZWlnaHQ6IDIwJTtcbiAgd2lkdGg6IDEwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc2VhcmNoLWJhcntcbiAgcGFkZGluZy1sZWZ0OiA4JTtcbiAgaGVpZ2h0OiAyMCU7XG4gIHdpZHRoOiA5MCU7XG4gIC0tYm9yZGVyLXJhZGl1czogMjJweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcbn1cbi5zZWFyY2gtaWNvbntcbiAgcGFkZGluZy1sZWZ0OiAyJTtcbiAgcGFkZGluZy1yaWdodDogMyU7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBmb250LXdlaWdodDogMTIwO1xuICBjb2xvcjogIzBkMGQwZDtcbiAgLy9oZWlnaHQ6IDEwJTtcbn1cbi5zZWFyY2gtaW5wdXR7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jYXRlZ29yeS1ncmlke1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi8vLmlvbi10aHVtYm5haWx7XG4vLyAgLS1ib3JkZXItcmFkaXVzOiAxMDAlO1xuLy8gIC0tc2l6ZTogMTAlO1xuLy99XG4uY2F0ZWdvcnktaWNvbntcbiAgLy9tYXJnaW46IDUlO1xuICAvLy0tYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgLy8tLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWhlaWdodDogNTAlO1xuICAtLXdpZHRoOiAzMCU7XG4gIC8vZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgLy9mb250LXdlaWdodDogMTUwO1xufVxuLmhvbWUtY29udGVudHtcbiAgcGFkZGluZy1sZWZ0OiAxJTtcbiAgcGFkZGluZy10b3A6IDMlO1xuICAvL2JhY2tncm91bmQtY29sb3I6ICNlZmVlZWU7XG59XG4uZGVhbHN7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVlZWU7XG59XG5cbmlvbi1zbGlkZXN7XG4gIGhlaWdodDogMjAlO1xuICB3aWR0aDogOTAlO1xufVxuaW9uLWxhYmVse1xuICBtYXJnaW46IDEwJTtcbiAgZm9udC13ZWlnaHQ6IDE1MDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogYmxhY2s7XG59XG4uc2VjdGlvbi1oZWFke1xuICAvL21hcmdpbi10b3A6IDIlO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmRlYWxzLXRpdGxle1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogYmxhY2s7XG59XG4uc3VidGl0bGV7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogIzNkYzJmZjtcbn1cbi5zdGFyc3tcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG4uYnRuLWNhdGVnb3J5e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvL3RleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogNHB4IDJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmJ0bi1jYXRlZ29yeTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNzt9XG5cbi5kZWFscy1jYXJke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBsaWdodGdyZXk7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGF1dG87XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let HomePage = class HomePage {
    constructor(router) {
        this.router = router;
    }
    showSearchPage() {
        this.showSearch = !this.showSearch;
        // this.router.navigate(['login']);
    }
    goToCategoryPage() {
        console.log('category page');
    }
    goToProductDetails() {
        this.router.navigate(['product-detail']);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map