(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n<!--  <ion-toolbar>-->\n<!--&lt;!&ndash;    <ion-title>Login</ion-title>&ndash;&gt;-->\n<!--&lt;!&ndash;    <ion-icon name=\"arrow-back\"></ion-icon>&ndash;&gt;-->\n<!--  </ion-toolbar>-->\n</ion-header>\n\n<ion-content>\n  <ion-icon name=\"arrow-back-sharp\" size=\"large\" (click)=\"navigate()\"></ion-icon>\n  <div class=\"login-head\"> Login </div>\n  <div class=\"login-form\">\n    <ion-item class=\"input-item\">\n    <ion-label position=\"floating\">Username </ion-label>\n    <ion-input required=\"true\" [(ngModel)]=\"username\"> </ion-input>\n    </ion-item>\n\n    <ion-item class=\"input-item\">\n    <ion-label position=\"floating\">Password </ion-label>\n    <ion-input required=\"true\" [(ngModel)]=\"password\"> </ion-input>\n    </ion-item>\n\n    <ion-button class=\"login-btn\" expand=\"block\"> Log in </ion-button>\n\n    <ul class=\"center-div\"> Forgot Password ? </ul>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"5\"> <div class=\"line-colm\"></div></ion-col>\n        <ion-col size=\"1\"> <div> &nbsp; or </div> </ion-col>\n        <ion-col size=\"6\"> <div class=\"line-colm\"></div></ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-button class=\"btn\" expand=\"block\" fill=\"outline\" > Log in with phone number </ion-button>\n\n    <div class=\"last-line\"> Do not have an account?\n      <span > <a class=\"signup\" (click)=\"navigate()\"> Sign up </a>  </span>\n    </div>\n<!--    <a [routerLink]=\"\" (click)=\"onGoToPage2()\">Go to page</a>-->\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ion-icon {\n  --font-size: xx-large;\n  --font-weight: 200;\n  --padding-left: 10%;\n}\n\n.login-head {\n  padding-top: 3%;\n  padding-left: 10%;\n  justify-content: left;\n  font-size: xx-large;\n  font-weight: bolder;\n}\n\n.login-form {\n  padding-top: 20%;\n  background-color: white;\n  height: 90%;\n  overflow: hidden;\n}\n\n.input-item {\n  --border-width: 2px;\n  --border-color: #3dc2ff;\n  --background: lightgrey;\n  --border-radius: 5px;\n  color: black;\n  overflow: hidden;\n  margin: 10px auto;\n  width: 80%;\n  --highlight-height: 0;\n}\n\n.login-btn {\n  --background: #3dc2ff;\n  width: 80%;\n  margin: 10px auto;\n}\n\n.btn {\n  --background: white;\n  --border-color: darkblue;\n  --border-width: 1px;\n  width: 80%;\n  --color: darkblue;\n  margin: 10px auto;\n}\n\n.center-div {\n  padding-top: 5%;\n  padding-left: 35%;\n  justify-content: center;\n  font-size: medium;\n  font-weight: 80;\n  color: darkblue;\n}\n\n.line-colm {\n  border-top: 1px solid darkblue;\n}\n\n.last-line {\n  padding-top: 30%;\n  padding-left: 20%;\n  color: black;\n}\n\n.signup {\n  color: #3dc2ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUdBLG1CQUFBO0FBREY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0VBUUEsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBRUEsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7QUFORjs7QUFXQTtFQUNFLHFCQUFBO0VBRUEsVUFBQTtFQUNBLGlCQUFBO0FBVEY7O0FBV0E7RUFDRSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFFQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQVRGOztBQVdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBUkY7O0FBVUE7RUFDRSw4QkFBQTtBQVBGOztBQVVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFQRjs7QUFVQTtFQUNFLGNBQUE7QUFQRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb24taWNvbntcbiAgLS1mb250LXNpemU6IHh4LWxhcmdlO1xuICAtLWZvbnQtd2VpZ2h0OiAyMDA7XG4gIC8vLS1oZWlnaHQ6IDIwJTtcbiAgLy8tLXdpZHRoOiAyMCU7XG4gIC0tcGFkZGluZy1sZWZ0OiAxMCU7XG59XG4ubG9naW4taGVhZHtcbiAgcGFkZGluZy10b3A6IDMlO1xuICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuLmxvZ2luLWZvcm17XG4gIHBhZGRpbmctdG9wOiAyMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDkwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pbnB1dC1pdGVte1xuICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAvLy0tYm9yZGVyLXJpZ2h0LXdpZHRoOiAxMHB4O1xuICAvLy0tYm9yZGVyLWxlZnQtd2lkdGg6IDEwcHg7XG4gIC8vLS1ib3JkZXItYm90dG9tLXdpZHRoOiAxMHB4O1xuICAvLy0tYm9yZGVyLXRvcC1jb2xvcjogIzNkYzJmZjtcbiAgLy8tLWJvcmRlci1yaWdodC1jb2xvcjogIzNkYzJmZjtcbiAgLy8tLWJvcmRlci1ib3R0b20tY29sb3I6ICMzZGMyZmY7XG4gIC8vLS1ib3JkZXItbGVmdC1jb2xvcjogIzNkYzJmZjtcbiAgLS1ib3JkZXItY29sb3I6ICMzZGMyZmY7XG4gIC0tYmFja2dyb3VuZDogbGlnaHRncmV5O1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLy8tLWlubmVyLWJvcmRlci13aWR0aDogNXB4O1xuICBjb2xvcjogYmxhY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICB3aWR0aDogODAlO1xuICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XG59XG4uaW9uLWlucHV0e1xuICAvLy0taGlnaGxpZ2h0LWhlaWdodDogMDtcbn1cbi5sb2dpbi1idG57XG4gIC0tYmFja2dyb3VuZDogIzNkYzJmZjtcbiAgLy9oZWlnaHQ6IDIwJTtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG59XG4uYnRue1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWJvcmRlci1jb2xvcjogZGFya2JsdWU7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC8vaGVpZ2h0OiAyMCU7XG4gIHdpZHRoOiA4MCU7XG4gIC0tY29sb3I6IGRhcmtibHVlO1xuICBtYXJnaW46IDEwcHggYXV0bztcbn1cbi5jZW50ZXItZGl2e1xuICBwYWRkaW5nLXRvcDogNSU7XG4gIHBhZGRpbmctbGVmdDogMzUlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGZvbnQtd2VpZ2h0OiA4MDtcbiAgY29sb3I6IGRhcmtibHVlO1xufVxuLmxpbmUtY29sbXtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGRhcmtibHVlO1xufVxuXG4ubGFzdC1saW5le1xuICBwYWRkaW5nLXRvcDogMzAlO1xuICBwYWRkaW5nLWxlZnQ6IDIwJTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uc2lnbnVwe1xuICBjb2xvcjogIzNkYzJmZjtcbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let LoginPage = class LoginPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    navigate() {
        this.router.navigate(['']);
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map