(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<div class=\"row\">\n  <div class=\"col\">\n    <a routerLink=\"/presentation\" routerLinkActive=\"active\">presentation</a>  </div>\n  <div class=\"col\">\n    <a routerLink=\"/presentationTheme\" routerLinkActive=\"active\">presentation Theme</a>\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ui';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _presentation_theme_presentation_theme_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./presentation-theme/presentation-theme.component */ "./src/app/presentation-theme/presentation-theme.component.ts");
/* harmony import */ var _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./presentation/presentation.component */ "./src/app/presentation/presentation.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
















var appRoutes = [
    { path: 'presentation', component: _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_6__["PresentationComponent"] },
    { path: 'presentationTheme', component: _presentation_theme_presentation_theme_component__WEBPACK_IMPORTED_MODULE_5__["PresentationThemeComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _presentation_theme_presentation_theme_component__WEBPACK_IMPORTED_MODULE_5__["PresentationThemeComponent"],
                _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_6__["PresentationComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["AlertModule"].forRoot(),
                _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/PresentationTheme.ts":
/*!*********************************************!*\
  !*** ./src/app/models/PresentationTheme.ts ***!
  \*********************************************/
/*! exports provided: PresentationTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationTheme", function() { return PresentationTheme; });
var PresentationTheme = /** @class */ (function () {
    function PresentationTheme() {
    }
    return PresentationTheme;
}());



/***/ }),

/***/ "./src/app/presentation-theme/presentation-theme.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/presentation-theme/presentation-theme.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlc2VudGF0aW9uLXRoZW1lL3ByZXNlbnRhdGlvbi10aGVtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvcHJlc2VudGF0aW9uLXRoZW1lL3ByZXNlbnRhdGlvbi10aGVtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/presentation-theme/presentation-theme.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/presentation-theme/presentation-theme.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div>\n  <div>\n    List\n  </div>\n  <div>\n    <ul *ngFor=\"let pt of presentationThemes\">\n      <li>\n        <span>{{pt.id}}</span>\n        <span> - {{pt.title}}</span>\n        <span> - {{pt.description}}</span>\n      </li>\n    </ul>\n  </div>\n</div>-->\n\n<table mat-table [dataSource]=\"presentationThemes\">\n  <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"title\">\n    <th mat-header-cell *matHeaderCellDef>Title</th>\n    <td mat-cell *matCellDef=\"let element\">{{element.title}}</td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"description\">\n    <th mat-header-cell *matHeaderCellDef>Description</th>\n    <td mat-cell *matCellDef=\"let element\">{{element.description}}</td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"action\">\n    <th mat-header-cell *matHeaderCellDef> Action </th>\n    <td mat-cell *matCellDef=\"let element\">\n      <button mat-button (click)=\"deleteTheme(element)\">\n        <i class=\"material-icons\">\n        delete_outline\n      </i>\n      </button>\n      <button mat-button>\n        <i class=\"material-icons\">\n          edit\n        </i>\n      </button>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n\n<br/>\n\n<form>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Title\" name=\"title\" [(ngModel)]=\"selectedTheme.title\">\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Description\" name=\"description\" [(ngModel)]=\"selectedTheme.description\">\n  </mat-form-field>\n</form>\n<button (click)=\"addTheme()\">add</button>\n\n"

/***/ }),

/***/ "./src/app/presentation-theme/presentation-theme.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/presentation-theme/presentation-theme.component.ts ***!
  \********************************************************************/
/*! exports provided: PresentationThemeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationThemeComponent", function() { return PresentationThemeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_PresentationTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/PresentationTheme */ "./src/app/models/PresentationTheme.ts");
/* harmony import */ var _providers_presentation_theme_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/presentation-theme-service.service */ "./src/app/providers/presentation-theme-service.service.ts");




var PresentationThemeComponent = /** @class */ (function () {
    function PresentationThemeComponent(presentationThemeService, cdr) {
        this.presentationThemeService = presentationThemeService;
        this.cdr = cdr;
        this.displayedColumns = ['id', 'title', 'description', 'action'];
    }
    PresentationThemeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedTheme = new _models_PresentationTheme__WEBPACK_IMPORTED_MODULE_2__["PresentationTheme"]();
        this.presentationThemes = [];
        this.presentationThemeService.loadData().subscribe(function (d) { return _this.presentationThemes = d; });
    };
    PresentationThemeComponent.prototype.addTheme = function () {
        var _this = this;
        this.selectedTheme.creator = null;
        this.presentationThemeService.addData(this.selectedTheme).subscribe(function (d) { return _this.presentationThemes.push(d); });
    };
    PresentationThemeComponent.prototype.deleteTheme = function (el) {
        var index = this.presentationThemes.findIndex(function (e) { return e.id === el.id; });
        this.presentationThemes.splice(index, index + 1);
        console.log(el);
        this.presentationThemeService.deleteData(el).subscribe();
    };
    PresentationThemeComponent.prototype.editTheme = function () {
    };
    PresentationThemeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-presentation-theme',
            template: __webpack_require__(/*! ./presentation-theme.component.html */ "./src/app/presentation-theme/presentation-theme.component.html"),
            styles: [__webpack_require__(/*! ./presentation-theme.component.css */ "./src/app/presentation-theme/presentation-theme.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_presentation_theme_service_service__WEBPACK_IMPORTED_MODULE_3__["PresentationThemeServiceService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], PresentationThemeComponent);
    return PresentationThemeComponent;
}());



/***/ }),

/***/ "./src/app/presentation/presentation.component.css":
/*!*********************************************************!*\
  !*** ./src/app/presentation/presentation.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZXNlbnRhdGlvbi9wcmVzZW50YXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/presentation/presentation.component.html":
/*!**********************************************************!*\
  !*** ./src/app/presentation/presentation.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  presentation works!\n</p>\n"

/***/ }),

/***/ "./src/app/presentation/presentation.component.ts":
/*!********************************************************!*\
  !*** ./src/app/presentation/presentation.component.ts ***!
  \********************************************************/
/*! exports provided: PresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationComponent", function() { return PresentationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PresentationComponent = /** @class */ (function () {
    function PresentationComponent() {
    }
    PresentationComponent.prototype.ngOnInit = function () {
    };
    PresentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-presentation',
            template: __webpack_require__(/*! ./presentation.component.html */ "./src/app/presentation/presentation.component.html"),
            styles: [__webpack_require__(/*! ./presentation.component.css */ "./src/app/presentation/presentation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PresentationComponent);
    return PresentationComponent;
}());



/***/ }),

/***/ "./src/app/providers/presentation-theme-service.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/providers/presentation-theme-service.service.ts ***!
  \*****************************************************************/
/*! exports provided: PresentationThemeServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationThemeServiceService", function() { return PresentationThemeServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
    })
};
var PresentationThemeServiceService = /** @class */ (function () {
    function PresentationThemeServiceService(http) {
        this.http = http;
        this.appUrl = 'http://localhost:1222/rest/presentationTheme/';
    }
    PresentationThemeServiceService.prototype.loadData = function () {
        return this.http.get(this.appUrl, httpOptions).pipe();
    };
    PresentationThemeServiceService.prototype.addData = function (data) {
        return this.http.post(this.appUrl, data, httpOptions);
    };
    PresentationThemeServiceService.prototype.updateData = function (data) {
        return this.http.put(this.appUrl + "/" + data.id, data, httpOptions);
    };
    PresentationThemeServiceService.prototype.deleteData = function (data) {
        // return this.http.delete<any>(this.appUrl+"/"+data.id, httpOptions);
        return this.http.request('DELETE', this.appUrl + "/" + data.id);
        // (this.appUrl+"/"+data.id, httpOptions);
    };
    PresentationThemeServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PresentationThemeServiceService);
    return PresentationThemeServiceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/aka/programming/java/presentation/src/main/ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map