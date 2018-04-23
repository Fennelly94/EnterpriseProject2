webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "/* Application-wide Styles */\r\nh1 {\r\n  color: #369;\r\n   font-family: 'Anton', sans-serif;\r\n  font-size: 250%;\r\n}\r\nh2, h3 {\r\n  color: #blue;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: lighter;\r\n}\r\nbody {\r\n  margin: 2em;\r\n}\r\nbody, input[text], button {\r\n  color: #888;\r\n  font-family: Cambria, Georgia;\r\n}\r\n/* everywhere else */\r\n* {\r\n  \r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigationBar></app-navigationBar>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.author = 'Gavin Fennelly';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__case0_case0_component__ = __webpack_require__("./src/app/case0/case0.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__case1_case1_component__ = __webpack_require__("./src/app/case1/case1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__case3_case3_component__ = __webpack_require__("./src/app/case3/case3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__case4_case4_component__ = __webpack_require__("./src/app/case4/case4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__case5_case5_component__ = __webpack_require__("./src/app/case5/case5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__navigationBar_navigationBar_component__ = __webpack_require__("./src/app/navigationBar/navigationBar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_stockCurrency_service__ = __webpack_require__("./src/app/services/stockCurrency.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routing_module__ = __webpack_require__("./src/app/app.routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 // <-- NgModel lives here












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__case0_case0_component__["a" /* Case0Component */],
                __WEBPACK_IMPORTED_MODULE_9__case1_case1_component__["a" /* Case1Component */],
                __WEBPACK_IMPORTED_MODULE_10__case3_case3_component__["a" /* Case3Component */],
                __WEBPACK_IMPORTED_MODULE_11__case4_case4_component__["a" /* Case4Component */],
                __WEBPACK_IMPORTED_MODULE_12__case5_case5_component__["a" /* Case5Component */],
                __WEBPACK_IMPORTED_MODULE_13__navigationBar_navigationBar_component__["a" /* NavigationBarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_15__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__services_stockCurrency_service__["a" /* StockCurrencyService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__case0_case0_component__ = __webpack_require__("./src/app/case0/case0.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__case1_case1_component__ = __webpack_require__("./src/app/case1/case1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__case3_case3_component__ = __webpack_require__("./src/app/case3/case3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__case4_case4_component__ = __webpack_require__("./src/app/case4/case4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__case5_case5_component__ = __webpack_require__("./src/app/case5/case5.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'case0', component: __WEBPACK_IMPORTED_MODULE_3__case0_case0_component__["a" /* Case0Component */] },
    { path: 'case1', component: __WEBPACK_IMPORTED_MODULE_4__case1_case1_component__["a" /* Case1Component */] },
    { path: 'case3', component: __WEBPACK_IMPORTED_MODULE_5__case3_case3_component__["a" /* Case3Component */] },
    { path: 'case4', component: __WEBPACK_IMPORTED_MODULE_6__case4_case4_component__["a" /* Case4Component */] },
    { path: 'case5', component: __WEBPACK_IMPORTED_MODULE_7__case5_case5_component__["a" /* Case5Component */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/case0/case0.component.css":
/***/ (function(module, exports) {

module.exports = "table, th, td {\n  border: 1px solid black;\n  padding: 5px;\n}\n\ntable {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\n\nh1 {\r\n   font-family: 'Anton', sans-serif;\r\n}\r\n"

/***/ }),

/***/ "./src/app/case0/case0.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Case 1</h1><table>\n  <tr>\n    <th><h4>Description</h4></th>\n    <th><h4>Exchange</h4></th>\n    <th><h4>Symbol</h4></th>\n    <th><h4>Date In</h4></th>\n    <th><h4>Date Out</h4></th>\n    <th><h4>Qty</h4></th>\n    <th><h4>Total Qty</h4></th>\n    <th><h4>Cost</h4></th>\n    <th><h4>Purchase Price</h4></th>\n    <th><h4>Price</h4></th>\n    <th><h4>Value</h4></th>\n    <th><h4>Detail Gain/Loss</h4></th>\n    <th><h4>Cumulative Gain/Loss</h4></th>\n    <th><h4>% Gain/Loss</h4></th>\n    <th><h4>Sell Costs</h4></th>\n  </tr>\n  <tr *ngFor=\"let eachIse of ise.data\">\n    <td>{{eachIse.company}}</td>\n    <td>{{ise.exchange}}</td>\n    <td>{{eachIse.symbol}}</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>{{eachIse.price}}</td>\n    <td>**</td>\n    <td>{{eachIse.change}}</td>\n    <td>**</td>\n    <td>{{eachIse.pChg}}</td>\n    <td>**</td>\n  </tr>\n  <tr *ngFor=\"let eachFtse of ftse.data\">\n    <td>{{eachFtse.company}}</td>\n    <td>{{ftse.exchange}}</td>\n    <td>{{eachFtse.symbol}}</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>{{eachFtse.price}}</td>\n    <td>**</td>\n    <td>{{eachFtse.change}}</td>\n    <td>**</td>\n    <td>{{eachFtse.pChg}}</td>\n    <td>**</td>\n  </tr>\n <tr *ngFor=\"let eachCoin of coinranking.data\">\n    <td>{{eachCoin.company}}</td>\n    <td>{{coinranking.exchange}}</td>\n    <td>{{eachCoin.symbol}}</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>{{eachCoin.price}}</td>\n    <td>**</td>\n    <td>{{eachCoin.change}}</td>\n    <td>**</td>\n    <td>{{eachCoin.pChg}}</td>\n    <td>**</td>\n  </tr>\n  </table>\n"

/***/ }),

/***/ "./src/app/case0/case0.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Case0Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_stockCurrency__ = __webpack_require__("./src/app/models/stockCurrency.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_stockCurrency_service__ = __webpack_require__("./src/app/services/stockCurrency.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Case0Component = /** @class */ (function () {
    function Case0Component(stockCurrencyService) {
        this.stockCurrencyService = stockCurrencyService;
        this.title = 'case0';
        this.ise = __WEBPACK_IMPORTED_MODULE_1__models_stockCurrency__["a" /* StockCurrency */];
        this.ftse = __WEBPACK_IMPORTED_MODULE_1__models_stockCurrency__["a" /* StockCurrency */];
        this.coinranking = __WEBPACK_IMPORTED_MODULE_1__models_stockCurrency__["a" /* StockCurrency */];
    }
    Case0Component.prototype.ngOnInit = function () {
        var _this = this;
        this.stockCurrencyService.getIseCase0Data().subscribe(function (responseIses) { return _this.ise = responseIses; });
        this.stockCurrencyService.getFtseCase0Data().subscribe(function (responseFtses) { return _this.ftse = responseFtses; });
        this.stockCurrencyService.getCoinRankingCase0Data().subscribe(function (responseCoins) { return _this.coinranking = responseCoins; });
    };
    Case0Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-case0',
            template: __webpack_require__("./src/app/case0/case0.component.html"),
            styles: [__webpack_require__("./src/app/case0/case0.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_stockCurrency_service__["a" /* StockCurrencyService */]])
    ], Case0Component);
    return Case0Component;
}());



/***/ }),

/***/ "./src/app/case1/case1.component.css":
/***/ (function(module, exports) {

module.exports = "table, th, td {\n  border: 1px solid black;\n  padding: 5px;\n}\n\ntable {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\n\nh1 {\r\n   font-family: 'Anton', sans-serif;\r\n}\r\n"

/***/ }),

/***/ "./src/app/case1/case1.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Case 2</h1><table>\n  <tr>\n    <th><h4>Description</h4></th>\n    <th><h4>Exchange</h4></th>\n    <th><h4>Symbol</h4></th>\n    <th><h4>Date In</h4></th>\n    <th><h4>Date Out</h4></th>\n    <th><h4>Qty</h4></th>\n    <th><h4>Total Qty</h4></th>\n    <th><h4>Cost</h4></th>\n    <th><h4>Purchase Price</h4></th>\n    <th><h4>Price</h4></th>\n    <th><h4>Value</h4></th>\n    <th><h4>Detail Gain/Loss</h4></th>\n    <th><h4>Cumulative Gain/Loss</h4></th>\n    <th><h4>% Gain/Loss</h4></th>\n    <th><h4>Sell Costs</h4></th>\n  </tr>\n  <tr *ngFor=\"let eachIse of ise.data\">\n    <td>{{eachIse.company}}</td>\n    <td>{{ise.exchange}}</td>\n    <td>{{eachIse.symbol}}</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>{{eachIse.price}}</td>\n    <td>**</td>\n    <td>{{eachIse.change}}</td>\n    <td>**</td>\n    <td>{{eachIse.pChg}}</td>\n    <td>**</td>\n  </tr>\n  <tr *ngFor=\"let eachFtse of ftse.data\">\n    <td>{{eachFtse.company}}</td>\n    <td>{{ftse.exchange}}</td>\n    <td>{{eachFtse.symbol}}</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>{{eachFtse.price}}</td>\n    <td>**</td>\n    <td>{{eachFtse.change}}</td>\n    <td>**</td>\n    <td>{{eachFtse.pChg}}</td>\n    <td>**</td>\n  </tr>\n <tr *ngFor=\"let eachCoin of coinranking.data\">\n    <td>{{eachCoin.company}}</td>\n    <td>{{coinranking.exchange}}</td>\n    <td>{{eachCoin.symbol}}</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>{{eachCoin.price}}</td>\n    <td>**</td>\n    <td>{{eachCoin.change}}</td>\n    <td>**</td>\n    <td>{{eachCoin.pChg}}</td>\n    <td>**</td>\n  </tr>\n  </table>\n"

/***/ }),

/***/ "./src/app/case1/case1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Case1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_stockCurrency__ = __webpack_require__("./src/app/models/stockCurrency.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_stockCurrency_service__ = __webpack_require__("./src/app/services/stockCurrency.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Case1Component = /** @class */ (function () {
    function Case1Component(stockCurrencyService) {
        this.stockCurrencyService = stockCurrencyService;
        this.title = 'case1';
        this.ise = __WEBPACK_IMPORTED_MODULE_1__models_stockCurrency__["a" /* StockCurrency */];
        this.ftse = __WEBPACK_IMPORTED_MODULE_1__models_stockCurrency__["a" /* StockCurrency */];
        this.coinranking = __WEBPACK_IMPORTED_MODULE_1__models_stockCurrency__["a" /* StockCurrency */];
    }
    Case1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.stockCurrencyService.getIseCase1Data().subscribe(function (responseIses) { return _this.ise = responseIses; });
        this.stockCurrencyService.getFtseCase1Data().subscribe(function (responseFtses) { return _this.ftse = responseFtses; });
        this.stockCurrencyService.getCoinRankingCase1Data().subscribe(function (responseCoins) { return _this.coinranking = responseCoins; });
    };
    Case1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-case1',
            template: __webpack_require__("./src/app/case1/case1.component.html"),
            styles: [__webpack_require__("./src/app/case1/case1.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_stockCurrency_service__["a" /* StockCurrencyService */]])
    ], Case1Component);
    return Case1Component;
}());



/***/ }),

/***/ "./src/app/case3/case3.component.css":
/***/ (function(module, exports) {

module.exports = "table, th, td {\n  border: 1px solid black;\n  padding: 5px;\n}\n\ntable {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\n\nh1 {\r\n   font-family: 'Anton', sans-serif;\r\n}\r\n"

/***/ }),

/***/ "./src/app/case3/case3.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Case 3</h1><table>\n  <tr>\n    <th><h4>Description</h4></th>\n    <th><h4>Exchange</h4></th>\n    <th><h4>Symbol</h4></th>\n    <th><h4>Date In</h4></th>\n    <th><h4>Date Out</h4></th>\n    <th><h4>Qty</h4></th>\n    <th><h4>Total Qty</h4></th>\n    <th><h4>Cost</h4></th>\n    <th><h4>Purchase Price</h4></th>\n    <th><h4>Price</h4></th>\n    <th><h4>Value</h4></th>\n    <th><h4>Detail Gain/Loss</h4></th>\n    <th><h4>Cumulative Gain/Loss</h4></th>\n    <th><h4>% Gain/Loss</h4></th>\n    <th><h4>Sell Costs</h4></th>\n  </tr>\n  <tr *ngFor=\"let eachIse of ise.data\">\n    <td>{{eachIse.company}}</td>\n    <td>{{ise.exchange}}</td>\n    <td>{{eachIse.symbol}}</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>{{eachIse.price}}</td>\n    <td>**</td>\n    <td>{{eachIse.change}}</td>\n    <td>**</td>\n    <td>{{eachIse.pChg}}</td>\n    <td>**</td>\n  </tr>\n  <tr *ngFor=\"let eachFtse of ftse.data\">\n    <td>{{eachFtse.company}}</td>\n    <td>{{ftse.exchange}}</td>\n    <td>{{eachFtse.symbol}}</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>{{eachFtse.price}}</td>\n    <td>**</td>\n    <td>{{eachFtse.change}}</td>\n    <td>**</td>\n    <td>{{eachFtse.pChg}}</td>\n    <td>**</td>\n  </tr>\n <tr *ngFor=\"let eachCoin of coinranking.data\">\n    <td>{{eachCoin.company}}</td>\n    <td>{{coinranking.exchange}}</td>\n    <td>{{eachCoin.symbol}}</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>{{eachCoin.price}}</td>\n    <td>**</td>\n    <td>{{eachCoin.change}}</td>\n    <td>**</td>\n    <td>{{eachCoin.pChg}}</td>\n    <td>**</td>\n  </tr>\n  </table>\n"

/***/ }),

/***/ "./src/app/case3/case3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Case3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_stockCurrency__ = __webpack_require__("./src/app/models/stockCurrency.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_stockCurrency_service__ = __webpack_require__("./src/app/services/stockCurrency.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Case3Component = /** @class */ (function () {
    function Case3Component(stockCurrencyService) {
        this.stockCurrencyService = stockCurrencyService;
        this.title = 'case3';
        this.ise = __WEBPACK_IMPORTED_MODULE_1__models_stockCurrency__["a" /* StockCurrency */];
        this.ftse = __WEBPACK_IMPORTED_MODULE_1__models_stockCurrency__["a" /* StockCurrency */];
        this.coinranking = __WEBPACK_IMPORTED_MODULE_1__models_stockCurrency__["a" /* StockCurrency */];
    }
    Case3Component.prototype.ngOnInit = function () {
        var _this = this;
        this.stockCurrencyService.getIseCase3Data().subscribe(function (responseIses) { return _this.ise = responseIses; });
        this.stockCurrencyService.getFtseCase3Data().subscribe(function (responseFtses) { return _this.ftse = responseFtses; });
        this.stockCurrencyService.getCoinRankingCase3Data().subscribe(function (responseCoins) { return _this.coinranking = responseCoins; });
    };
    Case3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-case3',
            template: __webpack_require__("./src/app/case3/case3.component.html"),
            styles: [__webpack_require__("./src/app/case3/case3.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_stockCurrency_service__["a" /* StockCurrencyService */]])
    ], Case3Component);
    return Case3Component;
}());



/***/ }),

/***/ "./src/app/case4/case4.component.css":
/***/ (function(module, exports) {

module.exports = "table, th, td {\n  border: 1px solid black;\n  padding: 5px;\n}\n\ntable {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\n\nh1 {\r\n   font-family: 'Anton', sans-serif;\r\n}\r\n"

/***/ }),

/***/ "./src/app/case4/case4.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Case 4</h1><table>\n  <tr>\n    <th><h4>Description</h4></th>\n    <th><h4>Exchange</h4></th>\n    <th><h4>Symbol</h4></th>\n    <th><h4>Date In</h4></th>\n    <th><h4>Date Out</h4></th>\n    <th><h4>Qty</h4></th>\n    <th><h4>Total Qty</h4></th>\n    <th><h4>Cost</h4></th>\n    <th><h4>Purchase Price</h4></th>\n    <th><h4>Price</h4></th>\n    <th><h4>Value</h4></th>\n    <th><h4>Detail Gain/Loss</h4></th>\n    <th><h4>Cumulative Gain/Loss</h4></th>\n    <th><h4>% Gain/Loss</h4></th>\n    <th><h4>Sell Costs</h4></th>\n  </tr>\n  <tr *ngFor=\"let eachIse of ise.data\">\n    <td>{{eachIse.company}}</td>\n    <td>{{ise.exchange}}</td>\n    <td>{{eachIse.symbol}}</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>{{eachIse.price}}</td>\n    <td>**</td>\n    <td>{{eachIse.change}}</td>\n    <td>**</td>\n    <td>{{eachIse.pChg}}</td>\n    <td>**</td>\n  </tr>\n  <tr *ngFor=\"let eachFtse of ftse.data\">\n    <td>{{eachFtse.company}}</td>\n    <td>{{ftse.exchange}}</td>\n    <td>{{eachFtse.symbol}}</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>{{eachFtse.price}}</td>\n    <td>**</td>\n    <td>{{eachFtse.change}}</td>\n    <td>**</td>\n    <td>{{eachFtse.pChg}}</td>\n    <td>**</td>\n  </tr>\n <tr *ngFor=\"let eachCoin of coinranking.data\">\n    <td>{{eachCoin.company}}</td>\n    <td>{{coinranking.exchange}}</td>\n    <td>{{eachCoin.symbol}}</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>{{eachCoin.price}}</td>\n    <td>**</td>\n    <td>{{eachCoin.change}}</td>\n    <td>**</td>\n    <td>{{eachCoin.pChg}}</td>\n    <td>**</td>\n  </tr>\n  </table>\n"

/***/ }),

/***/ "./src/app/case4/case4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Case4Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_stockCurrency__ = __webpack_require__("./src/app/models/stockCurrency.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_stockCurrency_service__ = __webpack_require__("./src/app/services/stockCurrency.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Case4Component = /** @class */ (function () {
    function Case4Component(stockCurrencyService) {
        this.stockCurrencyService = stockCurrencyService;
        this.title = 'case4';
        this.ise = __WEBPACK_IMPORTED_MODULE_1__models_stockCurrency__["a" /* StockCurrency */];
        this.ftse = __WEBPACK_IMPORTED_MODULE_1__models_stockCurrency__["a" /* StockCurrency */];
        this.coinranking = __WEBPACK_IMPORTED_MODULE_1__models_stockCurrency__["a" /* StockCurrency */];
    }
    Case4Component.prototype.ngOnInit = function () {
        var _this = this;
        this.stockCurrencyService.getIseCase4Data().subscribe(function (responseIses) { return _this.ise = responseIses; });
        this.stockCurrencyService.getFtseCase4Data().subscribe(function (responseFtses) { return _this.ftse = responseFtses; });
        this.stockCurrencyService.getCoinRankingCase4Data().subscribe(function (responseCoins) { return _this.coinranking = responseCoins; });
    };
    Case4Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-case4',
            template: __webpack_require__("./src/app/case4/case4.component.html"),
            styles: [__webpack_require__("./src/app/case4/case4.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_stockCurrency_service__["a" /* StockCurrencyService */]])
    ], Case4Component);
    return Case4Component;
}());



/***/ }),

/***/ "./src/app/case5/case5.component.css":
/***/ (function(module, exports) {

module.exports = "table, th, td {\n  border: 1px solid black;\n  padding: 5px;\n}\n\ntable {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\n\nh1 {\r\n   font-family: 'Anton', sans-serif;\r\n}\r\n"

/***/ }),

/***/ "./src/app/case5/case5.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Case 5</h1><table>\n  <tr>\n    <th><h4>Description</h4></th>\n    <th><h4>Exchange</h4></th>\n    <th><h4>Symbol</h4></th>\n    <th><h4>Date In</h4></th>\n    <th><h4>Date Out</h4></th>\n    <th><h4>Qty</h4></th>\n    <th><h4>Total Qty</h4></th>\n    <th><h4>Cost</h4></th>\n    <th><h4>Purchase Price</h4></th>\n    <th><h4>Price</h4></th>\n    <th><h4>Value</h4></th>\n    <th><h4>Detail Gain/Loss</h4></th>\n    <th><h4>Cumulative Gain/Loss</h4></th>\n    <th><h4>% Gain/Loss</h4></th>\n    <th><h4>Sell Costs</h4></th>\n  </tr>\n  <tr *ngFor=\"let eachIse of ise.data\">\n    <td>{{eachIse.company}}</td>\n    <td>{{ise.exchange}}</td>\n    <td>{{eachIse.symbol}}</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>{{eachIse.price}}</td>\n    <td>**</td>\n    <td>{{eachIse.change}}</td>\n    <td>**</td>\n    <td>{{eachIse.pChg}}</td>\n    <td>**</td>\n  </tr>\n  <tr *ngFor=\"let eachFtse of ftse.data\">\n    <td>{{eachFtse.company}}</td>\n    <td>{{ftse.exchange}}</td>\n    <td>{{eachFtse.symbol}}</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>{{eachFtse.price}}</td>\n    <td>**</td>\n    <td>{{eachFtse.change}}</td>\n    <td>**</td>\n    <td>{{eachFtse.pChg}}</td>\n    <td>**</td>\n  </tr>\n <tr *ngFor=\"let eachCoin of coinranking.data\">\n    <td>{{eachCoin.company}}</td>\n    <td>{{coinranking.exchange}}</td>\n    <td>{{eachCoin.symbol}}</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>{{eachCoin.price}}</td>\n    <td>**</td>\n    <td>{{eachCoin.change}}</td>\n    <td>**</td>\n    <td>{{eachCoin.pChg}}</td>\n    <td>**</td>\n  </tr>\n  </table>\n"

/***/ }),

/***/ "./src/app/case5/case5.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Case5Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_stockCurrency__ = __webpack_require__("./src/app/models/stockCurrency.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_stockCurrency_service__ = __webpack_require__("./src/app/services/stockCurrency.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Case5Component = /** @class */ (function () {
    function Case5Component(stockCurrencyService) {
        this.stockCurrencyService = stockCurrencyService;
        this.title = 'case5';
        this.ise = __WEBPACK_IMPORTED_MODULE_1__models_stockCurrency__["a" /* StockCurrency */];
        this.ftse = __WEBPACK_IMPORTED_MODULE_1__models_stockCurrency__["a" /* StockCurrency */];
        this.coinranking = __WEBPACK_IMPORTED_MODULE_1__models_stockCurrency__["a" /* StockCurrency */];
    }
    Case5Component.prototype.ngOnInit = function () {
        var _this = this;
        this.stockCurrencyService.getIseCase5Data().subscribe(function (responseIses) { return _this.ise = responseIses; });
        this.stockCurrencyService.getFtseCase5Data().subscribe(function (responseFtses) { return _this.ftse = responseFtses; });
        this.stockCurrencyService.getCoinRankingCase5Data().subscribe(function (responseCoins) { return _this.coinranking = responseCoins; });
    };
    Case5Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-case5',
            template: __webpack_require__("./src/app/case5/case5.component.html"),
            styles: [__webpack_require__("./src/app/case5/case5.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_stockCurrency_service__["a" /* StockCurrencyService */]])
    ], Case5Component);
    return Case5Component;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "table, th, td {\n  border: 1px solid black;\n  padding: 5px;\n}\n\ntable {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\n\nh1 {\r\n   font-family: 'Anton', sans-serif;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Home</h1>\n<table>\n  <tr>\n    <th><h4>Description</h4></th>\n    <th><h4>Exchange</h4></th>\n    <th><h4>Symbol</h4></th>\n    <th><h4>Date In</h4></th>\n    <th><h4>Date Out</h4></th>\n    <th><h4>Qty</h4></th>\n    <th><h4>Total Qty</h4></th>\n    <th><h4>Cost</h4></th>\n    <th><h4>Purchase Price</h4></th>\n    <th><h4>Price</h4></th>\n    <th><h4>Value</h4></th>\n    <th><h4>Detail Gain/Loss</h4></th>\n    <th><h4>Cumulative Gain/Loss</h4></th>\n    <th><h4>% Gain/Loss</h4></th>\n    <th><h4>Sell Costs</h4></th>\n  </tr>\n  <tr *ngFor=\"let eachIse of ise.data\">\n    <td>{{eachIse.company}}</td>\n    <td>{{ise.exchange}}</td>\n    <td>{{eachIse.symbol}}</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>{{eachIse.price}}</td>\n    <td>**</td>\n    <td>{{eachIse.change}}</td>\n    <td>**</td>\n    <td>{{eachIse.pChg}}</td>\n    <td>**</td>\n  </tr>\n  <tr *ngFor=\"let eachFtse of ftse.data\">\n    <td>{{eachFtse.company}}</td>\n    <td>{{ftse.exchange}}</td>\n    <td>{{eachFtse.symbol}}</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>{{eachFtse.price}}</td>\n    <td>**</td>\n    <td>{{eachFtse.change}}</td>\n    <td>**</td>\n    <td>{{eachFtse.pChg}}</td>\n    <td>**</td>\n  </tr>\n <tr *ngFor=\"let eachCoin of coinranking.data\">\n    <td>{{eachCoin.company}}</td>\n    <td>{{coinranking.exchange}}</td>\n    <td>{{eachCoin.symbol}}</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>**</td>\n    <td>{{eachCoin.price}}</td>\n    <td>**</td>\n    <td>{{eachCoin.change}}</td>\n    <td>**</td>\n    <td>{{eachCoin.pChg}}</td>\n    <td>**</td>\n  </tr>\n  </table>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_stockCurrency__ = __webpack_require__("./src/app/models/stockCurrency.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_stockCurrency_service__ = __webpack_require__("./src/app/services/stockCurrency.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(stockCurrencyService) {
        this.stockCurrencyService = stockCurrencyService;
        this.title = 'home';
        this.ise = __WEBPACK_IMPORTED_MODULE_1__models_stockCurrency__["a" /* StockCurrency */];
        this.ftse = __WEBPACK_IMPORTED_MODULE_1__models_stockCurrency__["a" /* StockCurrency */];
        this.coinranking = __WEBPACK_IMPORTED_MODULE_1__models_stockCurrency__["a" /* StockCurrency */];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stockCurrencyService.getIseData().subscribe(function (responseIses) { return _this.ise = responseIses; });
        this.stockCurrencyService.getFtseData().subscribe(function (responseFtses) { return _this.ftse = responseFtses; });
        this.stockCurrencyService.getCoinRankingData().subscribe(function (responseCoins) { return _this.coinranking = responseCoins; });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_stockCurrency_service__["a" /* StockCurrencyService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/models/stockCurrency.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockCurrency; });
var StockCurrency = /** @class */ (function () {
    function StockCurrency() {
    }
    return StockCurrency;
}());



/***/ }),

/***/ "./src/app/navigationBar/navigationBar.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n  background-color: #6AB2FA;\r\n  -webkit-box-pack: initial;\r\n      -ms-flex-pack: initial;\r\n          justify-content: initial;\r\n  font-family: 'Anton', sans-serif;\r\n}\r\n\r\n.navbar-nav {\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n}\r\n\r\n.navbar-brand {\r\n  padding: 0.25em;\r\n  font-size: x-large;\r\n}\r\n\r\n.nav-item {\r\n  font-size: medium;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/navigationBar/navigationBar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n<div class=\"navbar-header\">\r\n  <a class=\"navbar-brand\">{{title}}</a>\r\n  </div>\r\n \n    <ul class=\"nav navbar-nav list-inline\">\r\n    <li class=\"nav nav-item\" > <a routerLink=\"/home\">Home</a></li>\r\n    <li class=\"nav nav-item\" > <a routerLink=\"/case0\">Case 1</a></li>\r\n    <li class=\"nav nav-item\" > <a routerLink=\"/case1\">Case 2</a></li>\r\n    <li class=\"nav nav-item\" > <a routerLink=\"/case3\">Case 3</a></li>\r\n    <li class=\"nav nav-item\" > <a routerLink=\"/case4\">Case 4</a></li>\r\n    <li class=\"nav nav-item\"  > <a routerLink=\"/case5\">Case 5</a></li>\r\n    \r\n  </ul>\r\n</nav>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/navigationBar/navigationBar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationBarComponent = /** @class */ (function () {
    function NavigationBarComponent() {
        this.title = 'Stocks and Shares App';
    }
    NavigationBarComponent.prototype.ngOnInit = function () {
    };
    NavigationBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigationBar',
            template: __webpack_require__("./src/app/navigationBar/navigationBar.component.html"),
            styles: [__webpack_require__("./src/app/navigationBar/navigationBar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationBarComponent);
    return NavigationBarComponent;
}());



/***/ }),

/***/ "./src/app/services/stockCurrency.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockCurrencyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StockCurrencyService = /** @class */ (function () {
    function StockCurrencyService(http) {
        this.http = http;
        this.url = 'https://scraper601.herokuapp.com/scrape/all';
        this.url_case0 = 'https://scraper601.herokuapp.com/scrape/test?n=1';
        this.url_case1 = 'https://scraper601.herokuapp.com/scrape/test?n=2';
        this.url_case3 = 'https://scraper601.herokuapp.com/scrape/test?n=3';
        this.url_case4 = 'https://scraper601.herokuapp.com/scrape/test?n=4';
        this.url_case5 = 'https://scraper601.herokuapp.com/scrape/test?n=5';
    }
    StockCurrencyService.prototype.getCoinRankingData = function () {
        return this.http.get(this.url).map(function (response) { return response.json().coinranking; });
    };
    StockCurrencyService.prototype.getIseData = function () {
        return this.http.get(this.url).map(function (response) { return response.json().ise; });
    };
    StockCurrencyService.prototype.getFtseData = function () {
        return this.http.get(this.url).map(function (response) { return response.json().ftse350; });
    };
    StockCurrencyService.prototype.getCoinRankingCase0Data = function () {
        return this.http.get(this.url_case0).map(function (response) { return response.json().coinranking; });
    };
    StockCurrencyService.prototype.getIseCase0Data = function () {
        return this.http.get(this.url_case0).map(function (response) { return response.json().ise; });
    };
    StockCurrencyService.prototype.getFtseCase0Data = function () {
        return this.http.get(this.url_case0).map(function (response) { return response.json().ftse350; });
    };
    StockCurrencyService.prototype.getCoinRankingCase1Data = function () {
        return this.http.get(this.url_case1).map(function (response) { return response.json().coinranking; });
    };
    StockCurrencyService.prototype.getIseCase1Data = function () {
        return this.http.get(this.url_case1).map(function (response) { return response.json().ise; });
    };
    StockCurrencyService.prototype.getFtseCase1Data = function () {
        return this.http.get(this.url_case1).map(function (response) { return response.json().ftse350; });
    };
    StockCurrencyService.prototype.getCoinRankingCase3Data = function () {
        return this.http.get(this.url_case3).map(function (response) { return response.json().coinranking; });
    };
    StockCurrencyService.prototype.getIseCase3Data = function () {
        return this.http.get(this.url_case3).map(function (response) { return response.json().ise; });
    };
    StockCurrencyService.prototype.getFtseCase3Data = function () {
        return this.http.get(this.url_case3).map(function (response) { return response.json().ftse350; });
    };
    StockCurrencyService.prototype.getCoinRankingCase4Data = function () {
        return this.http.get(this.url_case4).map(function (response) { return response.json().coinranking; });
    };
    StockCurrencyService.prototype.getIseCase4Data = function () {
        return this.http.get(this.url_case4).map(function (response) { return response.json().ise; });
    };
    StockCurrencyService.prototype.getFtseCase4Data = function () {
        return this.http.get(this.url_case4).map(function (response) { return response.json().ftse350; });
    };
    StockCurrencyService.prototype.getCoinRankingCase5Data = function () {
        return this.http.get(this.url_case5).map(function (response) { return response.json().coinranking; });
    };
    StockCurrencyService.prototype.getIseCase5Data = function () {
        return this.http.get(this.url_case5).map(function (response) { return response.json().ise; });
    };
    StockCurrencyService.prototype.getFtseCase5Data = function () {
        return this.http.get(this.url_case5).map(function (response) { return response.json().ftse350; });
    };
    StockCurrencyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], StockCurrencyService);
    return StockCurrencyService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map