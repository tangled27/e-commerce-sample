(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-profile-user-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<ion-header>-->\n<!--  <ion-toolbar>-->\n<!--&lt;!&ndash;    <ion-title>user-profile</ion-title>&ndash;&gt;-->\n<!--    <img class=\"user-pic\" src=\"assets/user-sample.png\">-->\n<!--  </ion-toolbar>-->\n<!--</ion-header>-->\n\n<ion-content class=\"profile-content\">\n  <div class=\"toolbar\">\n<!--    <img class=\"user-pic\" src=\"assets/user-sample.png\">-->\n  </div>\n  <img class=\"user-pic\" src=\"assets/user-sample.png\">\n  <div class=\"user-div\">\n    <div class=\"user\">\n      <div class=\"user name\">Alex Sandro</div>\n      <div class=\"user contact\">hksdfk@gmail.com</div>\n      <div class=\"user contact\">+1 123 456 789</div>\n    </div>\n\n    <div class=\"user-grid\">\n    <ion-grid>\n    <ion-row>\n      <ion-col size=\"4\" class=\"col divider\">\n        <div class=\"name\">20</div>\n        <div >wishlists</div>\n      </ion-col>\n\n      <ion-col size=\"4\" class=\"col divider\">\n        <div class=\"name\">100</div>\n        <div >Reward points</div>\n      </ion-col>\n\n      <ion-col size=\"4\" class=\"col\">\n        <div class=\"name\">5</div>\n        <div >Order History</div>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n    </div>\n  </div>\n\n  <div>\n    <ion-list lines=\"full\">\n      <ion-item>\n        <ion-icon name=\"heart\" slot=\"start\"></ion-icon>\n        <ion-label>Wishlist</ion-label>\n        <ion-icon name=\"chevron-forward\" slot=\"end\"></ion-icon>\n      </ion-item>\n      <ion-item>\n        <ion-icon name=\"archive\" slot=\"start\"></ion-icon>\n        <ion-label>Order History</ion-label>\n        <ion-icon name=\"chevron-forward\" slot=\"end\"></ion-icon>\n      </ion-item>\n      <ion-item>\n        <ion-icon name=\"reload\" slot=\"start\"></ion-icon>\n        <ion-label>Transcations</ion-label>\n        <ion-icon name=\"chevron-forward\" slot=\"end\"></ion-icon>\n      </ion-item>\n      <ion-item>\n        <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n        <ion-label>Newsletter</ion-label>\n        <ion-icon name=\"chevron-forward\" slot=\"end\"></ion-icon>\n      </ion-item>\n      <ion-item>\n        <ion-icon name=\"gift\" slot=\"start\"></ion-icon>\n        <ion-label>Reward points</ion-label>\n        <ion-icon name=\"chevron-forward\" slot=\"end\"></ion-icon>\n      </ion-item>\n    </ion-list>\n\n    <br/>\n    <div class=\"user-address\">\n      <div class=\"user-address address-head\"> Contact Adress</div>\n      <div class=\"user-address contact\">House 1, Road 2, Block J, Baridhara, Dhaka </div>\n    </div>\n\n    <br/>\n    <br/>\n\n\n  <ion-button expand=\"block\" fill=\"outline\" (click)=\"goToLogin()\">\n    Log in\n  </ion-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/user-profile/user-profile-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/user-profile/user-profile-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: UserProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageRoutingModule", function() { return UserProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-profile.page */ "./src/app/user-profile/user-profile.page.ts");




const routes = [
    {
        path: '',
        component: _user_profile_page__WEBPACK_IMPORTED_MODULE_3__["UserProfilePage"]
    }
];
let UserProfilePageRoutingModule = class UserProfilePageRoutingModule {
};
UserProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/user-profile/user-profile.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/user-profile/user-profile.module.ts ***!
  \*****************************************************/
/*! exports provided: UserProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function() { return UserProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-profile-routing.module */ "./src/app/user-profile/user-profile-routing.module.ts");
/* harmony import */ var _user_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profile.page */ "./src/app/user-profile/user-profile.page.ts");







let UserProfilePageModule = class UserProfilePageModule {
};
UserProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserProfilePageRoutingModule"]
        ],
        declarations: [_user_profile_page__WEBPACK_IMPORTED_MODULE_6__["UserProfilePage"]]
    })
], UserProfilePageModule);



/***/ }),

/***/ "./src/app/user-profile/user-profile.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/user-profile/user-profile.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toolbar {\n  background-color: #3dc2ff;\n  height: 20%;\n}\n\n.user-div {\n  background-color: #efeeee;\n  height: 30%;\n  margin-top: -10%;\n}\n\n.user-pic {\n  margin-top: -10%;\n  margin-left: 40%;\n  border-radius: 50%;\n  border-width: thick;\n  border: black 2px;\n  height: 80px;\n}\n\n.user {\n  padding-left: 20%;\n  justify-content: center;\n  color: black;\n}\n\n.name {\n  padding-top: 10%;\n  font-size: 22px;\n  font-weight: bolder;\n}\n\n.contact {\n  font-size: 15px;\n  font-weight: normal;\n}\n\n.user-address {\n  padding-left: 5%;\n}\n\n.address-head {\n  font-size: 20px;\n  font-weight: normal;\n}\n\n.user-grid {\n  padding-top: 2%;\n}\n\n.col {\n  padding-left: 10%;\n  padding-right: 5%;\n  padding-bottom: 3%;\n  justify-content: center;\n  font-size: 12px;\n}\n\n.divider {\n  border-right: 1px black solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQUE7RUFFRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUFBO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFHRjs7QUFEQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBSUY7O0FBRkE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFLRjs7QUFGQTtFQUNFLGdCQUFBO0FBS0Y7O0FBSEE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFNRjs7QUFKQTtFQUNFLGVBQUE7QUFPRjs7QUFKQTtFQUVFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQU1GOztBQUpBO0VBQ0UsNkJBQUE7QUFPRiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZGMyZmY7XG4gIGhlaWdodDogMjAlO1xufVxuLnVzZXItZGl2e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZWVlO1xuICBoZWlnaHQ6IDMwJTtcbiAgbWFyZ2luLXRvcDogLTEwJTtcbn1cbi51c2VyLXBpY3tcbiAgLy9iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgbWFyZ2luLXRvcDogLTEwJTtcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItd2lkdGg6IHRoaWNrO1xuICBib3JkZXI6IGJsYWNrIDJweDtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuLnVzZXJ7XG4gIHBhZGRpbmctbGVmdDogMjAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xufVxuLm5hbWV7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cbi5jb250YWN0e1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi51c2VyLWFkZHJlc3N7XG4gIHBhZGRpbmctbGVmdDogNSU7XG59XG4uYWRkcmVzcy1oZWFke1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0Om5vcm1hbDtcbn1cbi51c2VyLWdyaWR7XG4gIHBhZGRpbmctdG9wOiAyJTtcbiAgLy9oZWlnaHQ6IDEwJTtcbn1cbi5jb2x7XG4gIC8vcGFkZGluZy10b3A6IDMlO1xuICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgcGFkZGluZy1yaWdodDogNSU7XG4gIHBhZGRpbmctYm90dG9tOiAzJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5kaXZpZGVye1xuICBib3JkZXItcmlnaHQ6IDFweCBibGFjayBzb2xpZDtcbiAgLy9qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/user-profile/user-profile.page.ts":
/*!***************************************************!*\
  !*** ./src/app/user-profile/user-profile.page.ts ***!
  \***************************************************/
/*! exports provided: UserProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePage", function() { return UserProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let UserProfilePage = class UserProfilePage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goToLogin() {
        this.router.navigate(['login']);
    }
};
UserProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UserProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-profile.page.scss */ "./src/app/user-profile/user-profile.page.scss")).default]
    })
], UserProfilePage);



/***/ })

}]);
//# sourceMappingURL=user-profile-user-profile-module-es2015.js.map