(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");





class ApiService {
    constructor(http, config) {
        this.http = http;
        this.config = config;
        this.url = null;
        this.config.config.subscribe((cfg) => {
            this.url = cfg.postUrl;
        });
    }
    saveRecord(record) {
        if (this.url) {
            return this.http.post(this.url, record);
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ success: true });
        }
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9idXNpbmVzc2dhdGUvc3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "../../node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "../../node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var hatool__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hatool */ "../../node_modules/hatool/__ivy_ngcc__/fesm2015/hatool.js");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ltr_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ltr.directive */ "./src/app/ltr.directive.ts");
/* harmony import */ var _chat_msgs_chat_msg_image_chat_msg_image_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chat-msgs/chat-msg-image/chat-msg-image.component */ "./src/app/chat-msgs/chat-msg-image/chat-msg-image.component.ts");
/* harmony import */ var _chat_msgs_chat_msg_select_from_list_chat_msg_select_from_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chat-msgs/chat-msg-select-from-list/chat-msg-select-from-list.component */ "./src/app/chat-msgs/chat-msg-select-from-list/chat-msg-select-from-list.component.ts");
/* harmony import */ var _chat_msgs_chat_msg_card_stack_chat_msg_card_stack_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./chat-msgs/chat-msg-card-stack/chat-msg-card-stack.component */ "./src/app/chat-msgs/chat-msg-card-stack/chat-msg-card-stack.component.ts");
/* harmony import */ var _cards_simple_card_simple_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cards/simple-card/simple-card.component */ "./src/app/cards/simple-card/simple-card.component.ts");
/* harmony import */ var _cards_title_card_title_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cards/title-card/title-card.component */ "./src/app/cards/title-card/title-card.component.ts");
/* harmony import */ var _cards_base_card_base_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cards/base-card/base-card.component */ "./src/app/cards/base-card/base-card.component.ts");
/* harmony import */ var _cards_gallery_card_gallery_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cards/gallery-card/gallery-card.component */ "./src/app/cards/gallery-card/gallery-card.component.ts");
/* harmony import */ var _cards_chatlike_ending_card_chatlike_ending_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cards/chatlike-ending-card/chatlike-ending-card.component */ "./src/app/cards/chatlike-ending-card/chatlike-ending-card.component.ts");
/* harmony import */ var _widgets_widget_map_widget_map_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./widgets/widget-map/widget-map.component */ "./src/app/widgets/widget-map/widget-map.component.ts");
/* harmony import */ var _cards_stack_header_card_stack_header_card_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cards/stack-header-card/stack-header-card.component */ "./src/app/cards/stack-header-card/stack-header-card.component.ts");
/* harmony import */ var _cards_scores_card_scores_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./cards/scores-card/scores-card.component */ "./src/app/cards/scores-card/scores-card.component.ts");

























const appRoutes = [
    { path: 'r/:id', component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__["MainPageComponent"] },
    { path: '', component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__["MainPageComponent"] },
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            hatool__WEBPACK_IMPORTED_MODULE_7__["HatoolLibModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes),
            _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__["MainPageComponent"],
        _ltr_directive__WEBPACK_IMPORTED_MODULE_10__["LtrDirective"],
        _chat_msgs_chat_msg_image_chat_msg_image_component__WEBPACK_IMPORTED_MODULE_11__["ChatMsgImageComponent"],
        _chat_msgs_chat_msg_select_from_list_chat_msg_select_from_list_component__WEBPACK_IMPORTED_MODULE_12__["ChatMsgSelectFromListComponent"],
        _chat_msgs_chat_msg_card_stack_chat_msg_card_stack_component__WEBPACK_IMPORTED_MODULE_13__["ChatMsgCardStackComponent"],
        _cards_simple_card_simple_card_component__WEBPACK_IMPORTED_MODULE_14__["SimpleCardComponent"],
        _cards_title_card_title_card_component__WEBPACK_IMPORTED_MODULE_15__["TitleCardComponent"],
        _cards_base_card_base_card_component__WEBPACK_IMPORTED_MODULE_16__["BaseCardComponent"],
        _cards_gallery_card_gallery_card_component__WEBPACK_IMPORTED_MODULE_17__["GalleryCardComponent"],
        _cards_chatlike_ending_card_chatlike_ending_card_component__WEBPACK_IMPORTED_MODULE_18__["ChatlikeEndingCardComponent"],
        _widgets_widget_map_widget_map_component__WEBPACK_IMPORTED_MODULE_19__["WidgetMapComponent"],
        _cards_stack_header_card_stack_header_card_component__WEBPACK_IMPORTED_MODULE_20__["StackHeaderCardComponent"],
        _cards_scores_card_scores_card_component__WEBPACK_IMPORTED_MODULE_21__["ScoresCardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        hatool__WEBPACK_IMPORTED_MODULE_7__["HatoolLibModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__["MainPageComponent"],
                    _ltr_directive__WEBPACK_IMPORTED_MODULE_10__["LtrDirective"],
                    _chat_msgs_chat_msg_image_chat_msg_image_component__WEBPACK_IMPORTED_MODULE_11__["ChatMsgImageComponent"],
                    _chat_msgs_chat_msg_select_from_list_chat_msg_select_from_list_component__WEBPACK_IMPORTED_MODULE_12__["ChatMsgSelectFromListComponent"],
                    _chat_msgs_chat_msg_card_stack_chat_msg_card_stack_component__WEBPACK_IMPORTED_MODULE_13__["ChatMsgCardStackComponent"],
                    _cards_simple_card_simple_card_component__WEBPACK_IMPORTED_MODULE_14__["SimpleCardComponent"],
                    _cards_title_card_title_card_component__WEBPACK_IMPORTED_MODULE_15__["TitleCardComponent"],
                    _cards_base_card_base_card_component__WEBPACK_IMPORTED_MODULE_16__["BaseCardComponent"],
                    _cards_gallery_card_gallery_card_component__WEBPACK_IMPORTED_MODULE_17__["GalleryCardComponent"],
                    _cards_chatlike_ending_card_chatlike_ending_card_component__WEBPACK_IMPORTED_MODULE_18__["ChatlikeEndingCardComponent"],
                    _widgets_widget_map_widget_map_component__WEBPACK_IMPORTED_MODULE_19__["WidgetMapComponent"],
                    _cards_stack_header_card_stack_header_card_component__WEBPACK_IMPORTED_MODULE_20__["StackHeaderCardComponent"],
                    _cards_scores_card_scores_card_component__WEBPACK_IMPORTED_MODULE_21__["ScoresCardComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    hatool__WEBPACK_IMPORTED_MODULE_7__["HatoolLibModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(appRoutes),
                    _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase),
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/backend.service.ts":
/*!************************************!*\
  !*** ./src/app/backend.service.ts ***!
  \************************************/
/*! exports provided: BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! json-stable-stringify */ "../../node_modules/json-stable-stringify/index.js");
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "../../node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







class BackendService {
    constructor(firestore, location) {
        this.firestore = firestore;
        this.location = location;
        this.record = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
        this.itemId = '';
        this.state = '';
    }
    handleItem(itemId) {
        if (!itemId) {
            const record = { 'timestamp': new Date().toISOString(), 'data': '{}' };
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.firestore.collection('records').add(record))
                .subscribe((docRef) => {
                console.log('Document was written with id', docRef.id);
                this.location.replaceState('/r/' + docRef.id);
                this.itemId = docRef.id;
                this.record.next({
                    self_link: window.location.href
                });
            });
        }
        else {
            this.itemId = itemId;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.firestore.collection('records').doc(itemId).get())
                .subscribe((doc) => {
                if (doc.exists) {
                    this.state = doc.data().data;
                    console.log('Document was retrieved with content', this.state.length);
                    const record = JSON.parse(this.state);
                    console.log('>> record keys', Object.keys(record));
                    this.record.next(record);
                }
            });
        }
    }
    update(item) {
        const update = json_stable_stringify__WEBPACK_IMPORTED_MODULE_3__(item);
        if (update !== this.state) {
            this.state = update;
            return this.firestore.collection('records')
                .doc(this.itemId).set({ data: update }, { merge: true });
        }
        else {
            return Promise.resolve();
        }
    }
    sendClientEmail(address, record) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const item = {
                to: address,
                template: {
                    name: 'client-response',
                    data: {
                        self_link: record.self_link
                    }
                }
            };
            return this.firestore.collection('mail').add(item).then((docref) => docref.id);
        });
    }
}
BackendService.ɵfac = function BackendService_Factory(t) { return new (t || BackendService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"])); };
BackendService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BackendService, factory: BackendService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BackendService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }]; }, null); })();


/***/ }),

/***/ "./src/app/cards/base-card/base-card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/cards/base-card/base-card.component.ts ***!
  \********************************************************/
/*! exports provided: BaseCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseCardComponent", function() { return BaseCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function BaseCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r0.width + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("shadow", ctx_r0.shadow);
} }
const _c0 = ["*"];
class BaseCardComponent {
    constructor() {
        this.width = 0;
        this.shadow = true;
    }
    ngOnInit() {
    }
}
BaseCardComponent.ɵfac = function BaseCardComponent_Factory(t) { return new (t || BaseCardComponent)(); };
BaseCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BaseCardComponent, selectors: [["app-base-card"]], inputs: { width: "width", shadow: "shadow" }, ngContentSelectors: _c0, decls: 1, vars: 1, consts: [["class", "card", 3, "width", 4, "ngIf"], [1, "card"], ["viewBox", "0 0 1 1"], [1, "square"], [1, "inner"]], template: function BaseCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BaseCardComponent_div_0_Template, 5, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.width);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["@import 'https://fonts.googleapis.com/earlyaccess/opensanshebrew.css';\n\n\n\n.font1[_ngcontent-%COMP%] {\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n}\n@font-face {\n  font-family: Narkiss;\n  font-weight: normal;\n  src: url('NarkissBlockCondensed-Regular-TRIAL.otf') format(\"opentype\");\n}\n@font-face {\n  font-family: Narkiss;\n  font-weight: bold;\n  src: url('NarkissBlockCondensed-Bold-TRIAL.otf') format(\"opentype\");\n}\n.font2[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n}\n\n.to-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n\n.options-text[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #2C3C3B;\n}\n\n.from-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #ffffff;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n.card-text[_ngcontent-%COMP%] {\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n.gallery-title[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-weight: 700;\n  font-size: 24px;\n  color: #360627;\n}\n.gallery-text[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-weight: 300;\n  font-size: 24px;\n  color: #360627;\n}\n\n.bot-message[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  box-shadow: 0px 2px 0px #CBD6D9;\n  border-radius: 12px 1px 12px 12px;\n  padding: 8px 16px;\n  font-size: 16px;\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n.bot-option[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #2C3C3B;\n  box-shadow: 0px 2px 0px #2C3C3B;\n  border-radius: 24px;\n  padding: 8px 16px;\n  margin: 0 4px;\n  white-space: nowrap;\n  cursor: pointer;\n  font-size: 22px;\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #2C3C3B;\n}\n\n.no-scrollbars[_ngcontent-%COMP%] {\n  \n  scrollbar-width: none;\n  \n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n.no-scrollbars[_ngcontent-%COMP%]::-webkit-scrollbar {\n  \n  display: none;\n}\n[_nghost-%COMP%] {\n  display: block;\n}\n.card[_ngcontent-%COMP%] {\n  display: grid;\n  position: relative;\n  width: 100%;\n}\n.card[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  grid-area: 1;\n}\n.card[_ngcontent-%COMP%]   .square[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n  position: absolute;\n  padding: 4px;\n  border-radius: 4px;\n}\n.card[_ngcontent-%COMP%]   .square[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  height: 100%;\n}\n.card[_ngcontent-%COMP%]   .square[_ngcontent-%COMP%]   .inner.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n.card[_ngcontent-%COMP%]   .square[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]    >   * {\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2J1c2luZXNzZ2F0ZS9zcmMvYXBwL2NhcmRzL2Jhc2UtY2FyZC9iYXNlLWNhcmQuY29tcG9uZW50Lmxlc3MiLCIvVXNlcnMvYWRhbS9Db2RlL2hhc2FkbmEvYnVzaW5lc3NnYXRlL3VpL3Byb2plY3RzL2J1c2luZXNzZ2F0ZS9zcmMvY29tbW9uLmxlc3MiLCIvVXNlcnMvYWRhbS9Db2RlL2hhc2FkbmEvYnVzaW5lc3NnYXRlL3VpL3Byb2plY3RzL2J1c2luZXNzZ2F0ZS9zcmMvYXBwL2NhcmRzL2Jhc2UtY2FyZC9iYXNlLWNhcmQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUVDQWM7QURDZCxjQUFjO0FBQ2QsV0FBVztBQUNYLFVBQVU7QUNpQlY7RUFDSSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURmSjtBQ2tCQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzRUFBQTtBRGhCSjtBQ21CQTtFQUNJLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtRUFBQTtBRGpCSjtBQ29CQTtFQUNJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRGxCSjtBQUNBLFlBQVk7QUNxQlo7RUFDSSxlQUFBO0VBekJBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQXlCQSxjQUFBO0FEakJKO0FBQ0EsaUJBQWlCO0FDb0JqQjtFQUNJLGVBQUE7RUFkQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFjQSxjQUFBO0FEaEJKO0FBQ0EsY0FBYztBQ21CZDtFQUNJLGVBQUE7RUFyQkEsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBcUJBLGNBQUE7QURmSjtBQ2tCQTtFQTFCSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUEwQkEsY0FBQTtBRGRKO0FDaUJBO0VBakRJLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQWlEQSxjQUFBO0FEYko7QUNnQkE7RUFwQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBb0NBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QURaSjtBQ2VBO0VBM0NJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQTJDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FEWEo7QUFDQSxZQUFZO0FDY1o7RUFDSSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUNBQUE7RUFFQSxpQkFBQTtFQWpEQSxlQUFBO0VBekJBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQXlCQSxjQUFBO0FEdUNKO0FDYUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUVBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQXhEQSxlQUFBO0VBZEEsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBY0EsY0FBQTtBRCtDSjtBQUNBLGNBQWM7QUNZZDtFRFZFLFVBQVU7RUNZUixxQkFBQTtFRFZGLFFBQVE7RUNZTiw0Q0FBQTtBRFZKO0FDV0k7RURURix1QkFBdUI7RUNXakIsYUFBQTtBRFRSO0FFL0dBO0VBQ0ksY0FBQTtBRmlISjtBRTlHQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUZnSEo7QUU5R0k7RUFDSSxZQUFBO0FGZ0hSO0FFdEhBO0VBVVEsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FGK0dSO0FFOUhBO0VBc0JZLGtCQUFBO0VBQ0EsWUFBQTtBRjJHWjtBRWhIWTtFQUVJLDBDQUFBO0FGaUhoQjtBRXJJQTtFQTBCZ0Isa0JBQUE7QUY4R2hCIiwiZmlsZSI6InByb2plY3RzL2J1c2luZXNzZ2F0ZS9zcmMvYXBwL2NhcmRzL2Jhc2UtY2FyZC9iYXNlLWNhcmQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Vhcmx5YWNjZXNzL29wZW5zYW5zaGVicmV3LmNzcyc7XG4vKiBjb250YWluZXIgKi9cbi8qIGNvbG9ycyAqL1xuLyogZm9udHMgKi9cbi5mb250MSB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIEhlYnJldycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogTmFya2lzcztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvTmFya2lzc0Jsb2NrQ29uZGVuc2VkLVJlZ3VsYXItVFJJQUwub3RmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBOYXJraXNzO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvTmFya2lzc0Jsb2NrQ29uZGVuc2VkLUJvbGQtVFJJQUwub3RmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuLmZvbnQyIHtcbiAgZm9udC1mYW1pbHk6IE5hcmtpc3MsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi8qIHRvIHRleHQgKi9cbi50by10ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBIZWJyZXcnLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMzYwNjI3O1xufVxuLyogb3B0aW9ucyB0ZXh0ICovXG4ub3B0aW9ucy10ZXh0IHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LWZhbWlseTogTmFya2lzcywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzJDM0MzQjtcbn1cbi8qIGZyb20gdGV4dCAqL1xuLmZyb20tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IE5hcmtpc3MsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uY2FyZC10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBOYXJraXNzLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMzYwNjI3O1xufVxuLmNhcmQtdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIEhlYnJldycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMzNjA2Mjc7XG59XG4uZ2FsbGVyeS10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBOYXJraXNzLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICMzNjA2Mjc7XG59XG4uZ2FsbGVyeS10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IE5hcmtpc3MsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzM2MDYyNztcbn1cbi8qIGJ1YmJsZXMgKi9cbi5ib3QtbWVzc2FnZSB7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMHB4ICNDQkQ2RDk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHggMXB4IDEycHggMTJweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgSGVicmV3Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzM2MDYyNztcbn1cbi5ib3Qtb3B0aW9uIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJDM0MzQjtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAwcHggIzJDM0MzQjtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIG1hcmdpbjogMCA0cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LWZhbWlseTogTmFya2lzcywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzJDM0MzQjtcbn1cbi8qIHV0aWxpdGllcyAqL1xuLm5vLXNjcm9sbGJhcnMge1xuICAvKkZpcmVGb3gqL1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gIC8qSUUxMCsqL1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcbn1cbi5uby1zY3JvbGxiYXJzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIC8qQ2hyb21lLCBTYWZhcmksIEVkZ2UqL1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5jYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jYXJkID4gKiB7XG4gIGdyaWQtYXJlYTogMTtcbn1cbi5jYXJkIC5zcXVhcmUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmNhcmQgLnNxdWFyZSAuaW5uZXIge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jYXJkIC5zcXVhcmUgLmlubmVyLnNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5jYXJkIC5zcXVhcmUgLmlubmVyID4gOjpuZy1kZWVwICoge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4iLCJAaW1wb3J0IChjc3MpICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Vhcmx5YWNjZXNzL29wZW5zYW5zaGVicmV3LmNzcyc7XG5cbi8qIGNvbnRhaW5lciAqL1xuQGJhY2tncm91bmQtaW1hZ2U6IHVybChhc3NldHMvaW1nL2JhY2tncm91bmQucG5nKTtcbkBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuQGNvbnRhaW5lci1wYWRkaW5nOiAyMHB4O1xuXG4vKiBjb2xvcnMgKi9cbkB3aGl0ZTogI2ZmZjtcbkBhY2NlbnQtdGV4dDogIzM2MDYyNztcbkBibGFjay03MDA6ICMyQzNDM0I7XG5AYmxhY2stNTAwOiAjNzM3MzczO1xuQGdyYXktZjY6ICNmNmY2ZjY7XG5AZ3JheS05NzogIzk3OTc5NztcbkB3aGl0ZTogI2ZmZmZmZjtcbkBhY2NlbnQtMTAwOiAjRjlGN0Y3O1xuQG9yYW5nZS03MDA6ICM5RjA5MDk7XG5AZGVtb2dyYXBoaWNzLTcwMDogIzBGODA0MjtcblxuLyogZm9udHMgKi9cbi5mb250MSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgSGVicmV3Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn0gXG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBOYXJraXNzO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgc3JjOiB1cmwoXCJhc3NldHMvZm9udHMvTmFya2lzc0Jsb2NrQ29uZGVuc2VkLVJlZ3VsYXItVFJJQUwub3RmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogTmFya2lzcztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBzcmM6IHVybChcImFzc2V0cy9mb250cy9OYXJraXNzQmxvY2tDb25kZW5zZWQtQm9sZC1UUklBTC5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5cbi5mb250MiB7XG4gICAgZm9udC1mYW1pbHk6IE5hcmtpc3MsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi8qIHRvIHRleHQgKi9cbi50by10ZXh0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgLmZvbnQxO1xuICAgIGNvbG9yOiBAYWNjZW50LXRleHQ7XG59XG5cbi8qIG9wdGlvbnMgdGV4dCAqL1xuLm9wdGlvbnMtdGV4dCB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIC5mb250MjtcbiAgICBjb2xvcjogQGJsYWNrLTcwMDtcbn1cblxuLyogZnJvbSB0ZXh0ICovXG4uZnJvbS10ZXh0IHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgLmZvbnQyO1xuICAgIGNvbG9yOiBAd2hpdGU7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgICAuZm9udDI7XG4gICAgY29sb3I6IEBhY2NlbnQtdGV4dDtcbn1cblxuLmNhcmQtdGV4dCB7XG4gICAgLmZvbnQxO1xuICAgIGNvbG9yOiBAYWNjZW50LXRleHQ7XG59XG5cbi5nYWxsZXJ5LXRpdGxlIHtcbiAgICAuZm9udDI7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6IEBhY2NlbnQtdGV4dDtcbn1cblxuLmdhbGxlcnktdGV4dCB7XG4gICAgLmZvbnQyO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiBAYWNjZW50LXRleHQ7XG59XG5cbi8qIGJ1YmJsZXMgKi9cbi5ib3QtbWVzc2FnZSB7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDBweCAjQ0JENkQ5O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMXB4IDEycHggMTJweDtcblxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuXG4gICAgLnRvLXRleHQ7XG59XG5cbi5ib3Qtb3B0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIEBibGFjay03MDA7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAwcHggQGJsYWNrLTcwMDtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgbWFyZ2luOiAwIDRweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIC5vcHRpb25zLXRleHQ7XG59XG5cbi8qIHV0aWxpdGllcyAqL1xuLm5vLXNjcm9sbGJhcnMge1xuICAgIC8qRmlyZUZveCovXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAgIC8qSUUxMCsqL1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAvKkNocm9tZSwgU2FmYXJpLCBFZGdlKi9cbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9IFxufVxuXG4vLyBAYmx1ZWdyZWVuOiAjMDA4MDdjO1xuLy8gQGZhZGVkLWJsdWVncmVlbjogI2U1ZjJmMTtcbi8vIEBjaGFyY29hbDogIzJjM2MzYjtcbi8vIEBhdWJlcmdpbmU6ICM0ODBhMzU7XG4vLyBAc2VhZm9hbS1ibHVlOiAjNmVkZWRhO1xuLy8gQGNvb2wtZ3JleTogIzg5YTlhODtcbi8vIEBwYWxlLWJsdWU6ICNkOWYyZjE7XG4vLyBAd2hpdGU6ICNmNmY2ZjY7XG5cblxuLy8gLmN0YSB7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgIGZsZXg6IDAgMCBhdXRvO1xuLy8gICAgIG1hcmdpbi10b3A6IGF1dG87XG4vLyAgICAgd2lkdGg6IDEwMCU7XG5cbi8vICAgICAuYnV0dG9uIHtcbi8vICAgICAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICAgICAgZmxleC1mbG93OiByb3c7XG4vLyAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4vLyAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IEBzZWFmb2FtLWJsdWU7ICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAcGFsZS1ibHVlO1xuLy8gICAgICAgICBmb250LXNpemU6IDE4cHg7XG4vLyAgICAgICAgIGNvbG9yOiBAYmx1ZWdyZWVuO1xuLy8gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbi8vICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbi8vICAgICAgICAgcGFkZGluZzogNHB4IDIwcHg7XG4vLyAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuLy8gICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbi8vICAgICAgICAgaW1nIHtcbi8vICAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7ICAgXG4vLyAgICAgICAgIH1cblxuLy8gICAgIH1cblxuLy8gfVxuXG4vLyAudmlzdWFsbHktaGlkZGVuIHtcbi8vICAgICBib3JkZXI6IDA7XG4vLyAgICAgY2xpcDogcmVjdCgxcHgsMXB4LDFweCwxcHgpO1xuLy8gICAgIC13ZWJraXQtY2xpcC1wYXRoOiBpbnNldCg1MCUpO1xuLy8gICAgIGNsaXAtcGF0aDogaW5zZXQoNTAlKTtcbi8vICAgICBoZWlnaHQ6IDFweDtcbi8vICAgICBtYXJnaW46IC0xcHg7XG4vLyAgICAgbWFyZ2luLXRvcDogLTFweDtcbi8vICAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyAgICAgcGFkZGluZzogMDtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgd2lkdGg6IDFweDtcbi8vICAgICB3b3JkLXdyYXA6IG5vcm1hbDtcbi8vIH1cblxuLy8gLnBsYWNlaG9sZGVyLXR4IHtcbi8vICAgICBkaXNwbGF5OiBub25lO1xuLy8gfVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vY29tbW9uLmxlc3MnO1xuXG46aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jYXJkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgICYgPiAqIHtcbiAgICAgICAgZ3JpZC1hcmVhOiAxLzE7ICBcbiAgICB9XG5cbiAgICAuc3F1YXJlIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICAgICAgICAuaW5uZXIge1xuICAgICAgICAgICAgJi5zaGFkb3cge1xuICAgICAgICAgICAgICAgIC8vIGJveC1zaGFkb3c6IDBweCAtM3B4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgaW5zZXQgMHB4IDFweCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgICAgID4gOjpuZy1kZWVwICoge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-base-card',
                templateUrl: './base-card.component.html',
                styleUrls: ['./base-card.component.less']
            }]
    }], function () { return []; }, { width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], shadow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/cards/chatlike-ending-card/chatlike-ending-card.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/cards/chatlike-ending-card/chatlike-ending-card.component.ts ***!
  \******************************************************************************/
/*! exports provided: ChatlikeEndingCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatlikeEndingCardComponent", function() { return ChatlikeEndingCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_card_base_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-card/base-card.component */ "./src/app/cards/base-card/base-card.component.ts");



class ChatlikeEndingCardComponent {
    constructor() {
        this.width = 0;
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    close() {
        this.closed.emit();
    }
}
ChatlikeEndingCardComponent.ɵfac = function ChatlikeEndingCardComponent_Factory(t) { return new (t || ChatlikeEndingCardComponent)(); };
ChatlikeEndingCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatlikeEndingCardComponent, selectors: [["app-chatlike-ending-card"]], inputs: { width: "width", stack: "stack", params: "params" }, outputs: { closed: "closed" }, decls: 15, vars: 6, consts: [[3, "width", "shadow"], [1, "content"], [1, "owner"], [3, "src"], [1, "name"], [1, "title"], [1, "message"], [3, "innerHtml"], [1, "buttons"], [1, "button", 3, "click"], [1, "button"]], template: function ChatlikeEndingCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-base-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatlikeEndingCardComponent_Template_span_click_11_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u05D4\u05DB\u05DC \u05D1\u05E8\u05D5\u05E8, \u05EA\u05D5\u05D3\u05D4!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u05D9\u05E9 \u05DC\u05D9 \u05E2\u05D5\u05D3 \u05E9\u05D0\u05DC\u05D4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx.width)("shadow", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.stack.owner.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.stack.owner.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.stack.owner.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.stack.goodbye, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_base_card_base_card_component__WEBPACK_IMPORTED_MODULE_1__["BaseCardComponent"]], styles: ["@import 'https://fonts.googleapis.com/earlyaccess/opensanshebrew.css';\n\n\n\n.font1[_ngcontent-%COMP%] {\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n}\n@font-face {\n  font-family: Narkiss;\n  font-weight: normal;\n  src: url('NarkissBlockCondensed-Regular-TRIAL.otf') format(\"opentype\");\n}\n@font-face {\n  font-family: Narkiss;\n  font-weight: bold;\n  src: url('NarkissBlockCondensed-Bold-TRIAL.otf') format(\"opentype\");\n}\n.font2[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n}\n\n.to-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n\n.options-text[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #2C3C3B;\n}\n\n.from-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #ffffff;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n.card-text[_ngcontent-%COMP%] {\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n.gallery-title[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-weight: 700;\n  font-size: 24px;\n  color: #360627;\n}\n.gallery-text[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-weight: 300;\n  font-size: 24px;\n  color: #360627;\n}\n\n.bot-message[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  box-shadow: 0px 2px 0px #CBD6D9;\n  border-radius: 12px 1px 12px 12px;\n  padding: 8px 16px;\n  font-size: 16px;\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n.bot-option[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #2C3C3B;\n  box-shadow: 0px 2px 0px #2C3C3B;\n  border-radius: 24px;\n  padding: 8px 16px;\n  margin: 0 4px;\n  white-space: nowrap;\n  cursor: pointer;\n  font-size: 22px;\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #2C3C3B;\n}\n\n.no-scrollbars[_ngcontent-%COMP%] {\n  \n  scrollbar-width: none;\n  \n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n.no-scrollbars[_ngcontent-%COMP%]::-webkit-scrollbar {\n  \n  display: none;\n}\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n}\n.content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 16px;\n  display: flex;\n  flex-flow: column;\n  justify-content: flex-end;\n}\n.content[_ngcontent-%COMP%]    > .owner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  position: relative;\n  top: 8px;\n}\n.content[_ngcontent-%COMP%]    > .owner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 24px;\n  border: 2px solid #2C3C3B;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n}\n.content[_ngcontent-%COMP%]    > .owner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  line-height: 18px;\n  margin-right: 8px;\n}\n.content[_ngcontent-%COMP%]    > .owner[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.content[_ngcontent-%COMP%]    > .owner[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 300;\n}\n.content[_ngcontent-%COMP%]    > .message[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  box-shadow: 0px 2px 0px #CBD6D9;\n  border-radius: 12px 1px 12px 12px;\n  padding: 8px 16px;\n  font-size: 16px;\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n  margin: 0;\n  margin-right: 8px;\n  padding: 16px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n}\n.content[_ngcontent-%COMP%]    > .buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  margin: 16px 0;\n}\n.content[_ngcontent-%COMP%]    > .buttons[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #2C3C3B;\n  box-shadow: 0px 2px 0px #2C3C3B;\n  border-radius: 24px;\n  padding: 8px 16px;\n  margin: 0 4px;\n  white-space: nowrap;\n  cursor: pointer;\n  font-size: 22px;\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #2C3C3B;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2J1c2luZXNzZ2F0ZS9zcmMvYXBwL2NhcmRzL2NoYXRsaWtlLWVuZGluZy1jYXJkL2NoYXRsaWtlLWVuZGluZy1jYXJkLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL2FkYW0vQ29kZS9oYXNhZG5hL2J1c2luZXNzZ2F0ZS91aS9wcm9qZWN0cy9idXNpbmVzc2dhdGUvc3JjL2NvbW1vbi5sZXNzIiwiL1VzZXJzL2FkYW0vQ29kZS9oYXNhZG5hL2J1c2luZXNzZ2F0ZS91aS9wcm9qZWN0cy9idXNpbmVzc2dhdGUvc3JjL2FwcC9jYXJkcy9jaGF0bGlrZS1lbmRpbmctY2FyZC9jaGF0bGlrZS1lbmRpbmctY2FyZC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxRUNBYztBRENkLGNBQWM7QUFDZCxXQUFXO0FBQ1gsVUFBVTtBQ2lCVjtFQUNJLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRGZKO0FDa0JBO0VBQ0ksb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNFQUFBO0FEaEJKO0FDbUJBO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1FQUFBO0FEakJKO0FDb0JBO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEbEJKO0FBQ0EsWUFBWTtBQ3FCWjtFQUNJLGVBQUE7RUF6QkEsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBeUJBLGNBQUE7QURqQko7QUFDQSxpQkFBaUI7QUNvQmpCO0VBQ0ksZUFBQTtFQWRBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQWNBLGNBQUE7QURoQko7QUFDQSxjQUFjO0FDbUJkO0VBQ0ksZUFBQTtFQXJCQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFxQkEsY0FBQTtBRGZKO0FDa0JBO0VBMUJJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQTBCQSxjQUFBO0FEZEo7QUNpQkE7RUFqREksMkNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBaURBLGNBQUE7QURiSjtBQ2dCQTtFQXBDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFvQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBRFpKO0FDZUE7RUEzQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBMkNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QURYSjtBQUNBLFlBQVk7QUNjWjtFQUNJLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUVBLGlCQUFBO0VBakRBLGVBQUE7RUF6QkEsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBeUJBLGNBQUE7QUR1Q0o7QUNhQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBRUEsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBeERBLGVBQUE7RUFkQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFjQSxjQUFBO0FEK0NKO0FBQ0EsY0FBYztBQ1lkO0VEVkUsVUFBVTtFQ1lSLHFCQUFBO0VEVkYsUUFBUTtFQ1lOLDRDQUFBO0FEVko7QUNXSTtFRFRGLHVCQUF1QjtFQ1dqQixhQUFBO0FEVFI7QUUvR0E7RUFDSSwyQ0FBQTtBRmlISjtBRTlHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FGK0dKO0FFdEhBO0VBVVEsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBRitHUjtBRTdIQTtFQWlCWSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUF2QlIsMkNBQUE7QUZ1SUo7QUVwSUE7RURpQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VDVFEsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUZnSFo7QUU1SUE7RUErQlksZ0JBQUE7QUZnSFo7QUUvSUE7RUFrQ1ksZ0JBQUE7QUZnSFo7QUVsSkE7RURxRkksbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBRUEsaUJBQUE7RUFqREEsZUFBQTtFQXpCQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUF5QkEsY0FBQTtFQ0hJLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUE1Q0osMkNBQUE7QUZvS0o7QUVqS0E7RUE2Q1EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUZ1SFI7QUV2S0E7RUQrRkksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFFQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUF4REEsZUFBQTtFQWRBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQWNBLGNBQUE7RUNwREEsMkNBQUE7QUYwTEoiLCJmaWxlIjoicHJvamVjdHMvYnVzaW5lc3NnYXRlL3NyYy9hcHAvY2FyZHMvY2hhdGxpa2UtZW5kaW5nLWNhcmQvY2hhdGxpa2UtZW5kaW5nLWNhcmQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Vhcmx5YWNjZXNzL29wZW5zYW5zaGVicmV3LmNzcyc7XG4vKiBjb250YWluZXIgKi9cbi8qIGNvbG9ycyAqL1xuLyogZm9udHMgKi9cbi5mb250MSB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIEhlYnJldycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogTmFya2lzcztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvTmFya2lzc0Jsb2NrQ29uZGVuc2VkLVJlZ3VsYXItVFJJQUwub3RmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBOYXJraXNzO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvTmFya2lzc0Jsb2NrQ29uZGVuc2VkLUJvbGQtVFJJQUwub3RmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuLmZvbnQyIHtcbiAgZm9udC1mYW1pbHk6IE5hcmtpc3MsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi8qIHRvIHRleHQgKi9cbi50by10ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBIZWJyZXcnLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMzYwNjI3O1xufVxuLyogb3B0aW9ucyB0ZXh0ICovXG4ub3B0aW9ucy10ZXh0IHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LWZhbWlseTogTmFya2lzcywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzJDM0MzQjtcbn1cbi8qIGZyb20gdGV4dCAqL1xuLmZyb20tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IE5hcmtpc3MsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uY2FyZC10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBOYXJraXNzLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMzYwNjI3O1xufVxuLmNhcmQtdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIEhlYnJldycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMzNjA2Mjc7XG59XG4uZ2FsbGVyeS10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBOYXJraXNzLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICMzNjA2Mjc7XG59XG4uZ2FsbGVyeS10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IE5hcmtpc3MsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzM2MDYyNztcbn1cbi8qIGJ1YmJsZXMgKi9cbi5ib3QtbWVzc2FnZSB7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMHB4ICNDQkQ2RDk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHggMXB4IDEycHggMTJweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgSGVicmV3Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzM2MDYyNztcbn1cbi5ib3Qtb3B0aW9uIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJDM0MzQjtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAwcHggIzJDM0MzQjtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIG1hcmdpbjogMCA0cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LWZhbWlseTogTmFya2lzcywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzJDM0MzQjtcbn1cbi8qIHV0aWxpdGllcyAqL1xuLm5vLXNjcm9sbGJhcnMge1xuICAvKkZpcmVGb3gqL1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gIC8qSUUxMCsqL1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcbn1cbi5uby1zY3JvbGxiYXJzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIC8qQ2hyb21lLCBTYWZhcmksIEVkZ2UqL1xuICBkaXNwbGF5OiBub25lO1xufVxuLnNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG59XG4uY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmNvbnRlbnQgPiAub3duZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDhweDtcbn1cbi5jb250ZW50ID4gLm93bmVyIGltZyB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyQzNDM0I7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG59XG4uY29udGVudCA+IC5vd25lciBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IE5hcmtpc3MsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4uY29udGVudCA+IC5vd25lciAubmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY29udGVudCA+IC5vd25lciAudGl0bGUge1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmNvbnRlbnQgPiAubWVzc2FnZSB7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMHB4ICNDQkQ2RDk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHggMXB4IDEycHggMTJweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgSGVicmV3Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzM2MDYyNztcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgcGFkZGluZzogMTZweDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cbi5jb250ZW50ID4gLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxNnB4IDA7XG59XG4uY29udGVudCA+IC5idXR0b25zIC5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMkMzQzNCO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDBweCAjMkMzQzNCO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgbWFyZ2luOiAwIDRweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtZmFtaWx5OiBOYXJraXNzLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMkMzQzNCO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuIiwiQGltcG9ydCAoY3NzKSAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9lYXJseWFjY2Vzcy9vcGVuc2Fuc2hlYnJldy5jc3MnO1xuXG4vKiBjb250YWluZXIgKi9cbkBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLnBuZyk7XG5AYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbkBjb250YWluZXItcGFkZGluZzogMjBweDtcblxuLyogY29sb3JzICovXG5Ad2hpdGU6ICNmZmY7XG5AYWNjZW50LXRleHQ6ICMzNjA2Mjc7XG5AYmxhY2stNzAwOiAjMkMzQzNCO1xuQGJsYWNrLTUwMDogIzczNzM3MztcbkBncmF5LWY2OiAjZjZmNmY2O1xuQGdyYXktOTc6ICM5Nzk3OTc7XG5Ad2hpdGU6ICNmZmZmZmY7XG5AYWNjZW50LTEwMDogI0Y5RjdGNztcbkBvcmFuZ2UtNzAwOiAjOUYwOTA5O1xuQGRlbW9ncmFwaGljcy03MDA6ICMwRjgwNDI7XG5cbi8qIGZvbnRzICovXG4uZm9udDEge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIEhlYnJldycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59IFxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogTmFya2lzcztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIHNyYzogdXJsKFwiYXNzZXRzL2ZvbnRzL05hcmtpc3NCbG9ja0NvbmRlbnNlZC1SZWd1bGFyLVRSSUFMLm90ZlwiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IE5hcmtpc3M7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgc3JjOiB1cmwoXCJhc3NldHMvZm9udHMvTmFya2lzc0Jsb2NrQ29uZGVuc2VkLUJvbGQtVFJJQUwub3RmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuXG4uZm9udDIge1xuICAgIGZvbnQtZmFtaWx5OiBOYXJraXNzLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4vKiB0byB0ZXh0ICovXG4udG8tdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIC5mb250MTtcbiAgICBjb2xvcjogQGFjY2VudC10ZXh0O1xufVxuXG4vKiBvcHRpb25zIHRleHQgKi9cbi5vcHRpb25zLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAuZm9udDI7XG4gICAgY29sb3I6IEBibGFjay03MDA7XG59XG5cbi8qIGZyb20gdGV4dCAqL1xuLmZyb20tdGV4dCB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIC5mb250MjtcbiAgICBjb2xvcjogQHdoaXRlO1xufVxuXG4uY2FyZC10aXRsZSB7XG4gICAgLmZvbnQyO1xuICAgIGNvbG9yOiBAYWNjZW50LXRleHQ7XG59XG5cbi5jYXJkLXRleHQge1xuICAgIC5mb250MTtcbiAgICBjb2xvcjogQGFjY2VudC10ZXh0O1xufVxuXG4uZ2FsbGVyeS10aXRsZSB7XG4gICAgLmZvbnQyO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiBAYWNjZW50LXRleHQ7XG59XG5cbi5nYWxsZXJ5LXRleHQge1xuICAgIC5mb250MjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogQGFjY2VudC10ZXh0O1xufVxuXG4vKiBidWJibGVzICovXG4uYm90LW1lc3NhZ2Uge1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAwcHggI0NCRDZEOTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4IDFweCAxMnB4IDEycHg7XG5cbiAgICBwYWRkaW5nOiA4cHggMTZweDtcblxuICAgIC50by10ZXh0O1xufVxuXG4uYm90LW9wdGlvbiB7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBAYmxhY2stNzAwO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggMHB4IEBibGFjay03MDA7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcblxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIG1hcmdpbjogMCA0cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAub3B0aW9ucy10ZXh0O1xufVxuXG4vKiB1dGlsaXRpZXMgKi9cbi5uby1zY3JvbGxiYXJzIHtcbiAgICAvKkZpcmVGb3gqL1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICAvKklFMTArKi9cbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgLypDaHJvbWUsIFNhZmFyaSwgRWRnZSovXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfSBcbn1cblxuLy8gQGJsdWVncmVlbjogIzAwODA3Yztcbi8vIEBmYWRlZC1ibHVlZ3JlZW46ICNlNWYyZjE7XG4vLyBAY2hhcmNvYWw6ICMyYzNjM2I7XG4vLyBAYXViZXJnaW5lOiAjNDgwYTM1O1xuLy8gQHNlYWZvYW0tYmx1ZTogIzZlZGVkYTtcbi8vIEBjb29sLWdyZXk6ICM4OWE5YTg7XG4vLyBAcGFsZS1ibHVlOiAjZDlmMmYxO1xuLy8gQHdoaXRlOiAjZjZmNmY2O1xuXG5cbi8vIC5jdGEge1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgZmxleC1mbG93OiBjb2x1bW47XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBmbGV4OiAwIDAgYXV0bztcbi8vICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuXG4vLyAgICAgLmJ1dHRvbiB7XG4vLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgICAgIGZsZXgtZmxvdzogcm93O1xuLy8gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuLy8gICAgICAgICBib3JkZXI6IHNvbGlkIDFweCBAc2VhZm9hbS1ibHVlOyAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQHBhbGUtYmx1ZTtcbi8vICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuLy8gICAgICAgICBjb2xvcjogQGJsdWVncmVlbjtcbi8vICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4vLyAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4vLyAgICAgICAgIHBhZGRpbmc6IDRweCAyMHB4O1xuLy8gICAgICAgICBtYXJnaW46IDEwcHggMDtcbi8vICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4vLyAgICAgICAgIGltZyB7XG4vLyAgICAgICAgICAgICBtYXJnaW46IDAgNXB4OyAgIFxuLy8gICAgICAgICB9XG5cbi8vICAgICB9XG5cbi8vIH1cblxuLy8gLnZpc3VhbGx5LWhpZGRlbiB7XG4vLyAgICAgYm9yZGVyOiAwO1xuLy8gICAgIGNsaXA6IHJlY3QoMXB4LDFweCwxcHgsMXB4KTtcbi8vICAgICAtd2Via2l0LWNsaXAtcGF0aDogaW5zZXQoNTAlKTtcbi8vICAgICBjbGlwLXBhdGg6IGluc2V0KDUwJSk7XG4vLyAgICAgaGVpZ2h0OiAxcHg7XG4vLyAgICAgbWFyZ2luOiAtMXB4O1xuLy8gICAgIG1hcmdpbi10b3A6IC0xcHg7XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogLTFweDtcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xuLy8gICAgIHBhZGRpbmc6IDA7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHdpZHRoOiAxcHg7XG4vLyAgICAgd29yZC13cmFwOiBub3JtYWw7XG4vLyB9XG5cbi8vIC5wbGFjZWhvbGRlci10eCB7XG4vLyAgICAgZGlzcGxheTogbm9uZTtcbi8vIH1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uL2NvbW1vbi5sZXNzJztcblxuLnNoYWRvdyB7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cblxuLmNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgPiAub3duZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IHJvdztcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDhweDtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgQGJsYWNrLTcwMDtcbiAgICAgICAgICAgIC5zaGFkb3c7XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIC5mb250MjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICA+IC5tZXNzYWdlIHtcbiAgICAgICAgLmJvdC1tZXNzYWdlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAuc2hhZG93O1xuICAgIH1cbiAgICA+IC5idXR0b25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMTZweCAwO1xuXG4gICAgICAgIC5idXR0b24ge1xuICAgICAgICAgICAgLmJvdC1vcHRpb247XG4gICAgICAgICAgICAuc2hhZG93O1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatlikeEndingCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chatlike-ending-card',
                templateUrl: './chatlike-ending-card.component.html',
                styleUrls: ['./chatlike-ending-card.component.less']
            }]
    }], function () { return []; }, { width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], stack: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], params: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/cards/gallery-card/gallery-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/cards/gallery-card/gallery-card.component.ts ***!
  \**************************************************************/
/*! exports provided: GalleryCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryCardComponent", function() { return GalleryCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _base_card_base_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-card/base-card.component */ "./src/app/cards/base-card/base-card.component.ts");




function GalleryCardComponent_app_base_card_0_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryCardComponent_app_base_card_0_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r2.select(ctx_r2.card); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r1.card.selectButtonText, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function GalleryCardComponent_app_base_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-base-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GalleryCardComponent_app_base_card_0_div_5_Template, 1, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx_r0.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx_r0.image() + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r0.card.title, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r0.params.__runner.fillIn(ctx_r0.card.content), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.card.selectButtonText);
} }
class GalleryCardComponent {
    constructor() {
        this.width = 0;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    image() {
        return this.card.image || 'assets/img/dummy-location.png';
    }
    select(value) {
        this.selected.emit(value);
    }
}
GalleryCardComponent.ɵfac = function GalleryCardComponent_Factory(t) { return new (t || GalleryCardComponent)(); };
GalleryCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryCardComponent, selectors: [["app-gallery-card"]], inputs: { width: "width", card: "card", params: "params" }, outputs: { selected: "selected" }, decls: 1, vars: 1, consts: [[3, "width", 4, "ngIf"], [3, "width"], [1, "img"], [1, "content", "scheme-secondary-bg"], [3, "innerHtml"], ["class", "bot-option", 3, "innerHtml", "click", 4, "ngIf"], [1, "bot-option", 3, "innerHtml", "click"]], template: function GalleryCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleryCardComponent_app_base_card_0_Template, 6, 6, "app-base-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.card);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _base_card_base_card_component__WEBPACK_IMPORTED_MODULE_2__["BaseCardComponent"]], styles: ["@import 'https://fonts.googleapis.com/earlyaccess/opensanshebrew.css';\n\n\n\n.font1[_ngcontent-%COMP%] {\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n}\n@font-face {\n  font-family: Narkiss;\n  font-weight: normal;\n  src: url('NarkissBlockCondensed-Regular-TRIAL.otf') format(\"opentype\");\n}\n@font-face {\n  font-family: Narkiss;\n  font-weight: bold;\n  src: url('NarkissBlockCondensed-Bold-TRIAL.otf') format(\"opentype\");\n}\n.font2[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n}\n\n.to-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n\n.options-text[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #2C3C3B;\n}\n\n.from-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #ffffff;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n.card-text[_ngcontent-%COMP%] {\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n.gallery-title[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-weight: 700;\n  font-size: 24px;\n  color: #360627;\n}\n.gallery-text[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-weight: 300;\n  font-size: 24px;\n  color: #360627;\n}\n\n.bot-message[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  box-shadow: 0px 2px 0px #CBD6D9;\n  border-radius: 12px 1px 12px 12px;\n  padding: 8px 16px;\n  font-size: 16px;\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n.bot-option[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #2C3C3B;\n  box-shadow: 0px 2px 0px #2C3C3B;\n  border-radius: 24px;\n  padding: 8px 16px;\n  margin: 0 4px;\n  white-space: nowrap;\n  cursor: pointer;\n  font-size: 22px;\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #2C3C3B;\n}\n\n.no-scrollbars[_ngcontent-%COMP%] {\n  \n  scrollbar-width: none;\n  \n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n.no-scrollbars[_ngcontent-%COMP%]::-webkit-scrollbar {\n  \n  display: none;\n}\n.img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50%;\n  padding: 20px 8px;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n}\n.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-weight: 700;\n  font-size: 24px;\n  color: #360627;\n  margin: 0;\n  line-height: 24px;\n}\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-weight: 300;\n  font-size: 24px;\n  color: #360627;\n  margin: 0;\n  margin-top: -4px;\n}\n.content[_ngcontent-%COMP%]   .bot-option[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2J1c2luZXNzZ2F0ZS9zcmMvYXBwL2NhcmRzL2dhbGxlcnktY2FyZC9nYWxsZXJ5LWNhcmQuY29tcG9uZW50Lmxlc3MiLCIvVXNlcnMvYWRhbS9Db2RlL2hhc2FkbmEvYnVzaW5lc3NnYXRlL3VpL3Byb2plY3RzL2J1c2luZXNzZ2F0ZS9zcmMvY29tbW9uLmxlc3MiLCIvVXNlcnMvYWRhbS9Db2RlL2hhc2FkbmEvYnVzaW5lc3NnYXRlL3VpL3Byb2plY3RzL2J1c2luZXNzZ2F0ZS9zcmMvYXBwL2NhcmRzL2dhbGxlcnktY2FyZC9nYWxsZXJ5LWNhcmQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUVDQWM7QURDZCxjQUFjO0FBQ2QsV0FBVztBQUNYLFVBQVU7QUNpQlY7RUFDSSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURmSjtBQ2tCQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzRUFBQTtBRGhCSjtBQ21CQTtFQUNJLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtRUFBQTtBRGpCSjtBQ29CQTtFQUNJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRGxCSjtBQUNBLFlBQVk7QUNxQlo7RUFDSSxlQUFBO0VBekJBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQXlCQSxjQUFBO0FEakJKO0FBQ0EsaUJBQWlCO0FDb0JqQjtFQUNJLGVBQUE7RUFkQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFjQSxjQUFBO0FEaEJKO0FBQ0EsY0FBYztBQ21CZDtFQUNJLGVBQUE7RUFyQkEsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBcUJBLGNBQUE7QURmSjtBQ2tCQTtFQTFCSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUEwQkEsY0FBQTtBRGRKO0FDaUJBO0VBakRJLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQWlEQSxjQUFBO0FEYko7QUNnQkE7RUFwQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBb0NBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QURaSjtBQ2VBO0VBM0NJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQTJDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FEWEo7QUFDQSxZQUFZO0FDY1o7RUFDSSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUNBQUE7RUFFQSxpQkFBQTtFQWpEQSxlQUFBO0VBekJBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQXlCQSxjQUFBO0FEdUNKO0FDYUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUVBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQXhEQSxlQUFBO0VBZEEsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBY0EsY0FBQTtBRCtDSjtBQUNBLGNBQWM7QUNZZDtFRFZFLFVBQVU7RUNZUixxQkFBQTtFRFZGLFFBQVE7RUNZTiw0Q0FBQTtBRFZKO0FDV0k7RURURix1QkFBdUI7RUNXakIsYUFBQTtBRFRSO0FFL0dBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FGaUhKO0FFOUdBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FGZ0hKO0FFdEhBO0VEOEJJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQW9DQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VDNURJLFNBQUE7RUFDQSxpQkFBQTtBRnFIUjtBRWhJQTtFRDhCSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUEyQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQzdESSxTQUFBO0VBQ0EsZ0JBQUE7QUZ5SFI7QUUxSUE7RUFxQlEsZ0JBQUE7QUZ3SFIiLCJmaWxlIjoicHJvamVjdHMvYnVzaW5lc3NnYXRlL3NyYy9hcHAvY2FyZHMvZ2FsbGVyeS1jYXJkL2dhbGxlcnktY2FyZC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vZWFybHlhY2Nlc3Mvb3BlbnNhbnNoZWJyZXcuY3NzJztcbi8qIGNvbnRhaW5lciAqL1xuLyogY29sb3JzICovXG4vKiBmb250cyAqL1xuLmZvbnQxIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgSGVicmV3Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBOYXJraXNzO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9OYXJraXNzQmxvY2tDb25kZW5zZWQtUmVndWxhci1UUklBTC5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IE5hcmtpc3M7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBzcmM6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9OYXJraXNzQmxvY2tDb25kZW5zZWQtQm9sZC1UUklBTC5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG4uZm9udDIge1xuICBmb250LWZhbWlseTogTmFya2lzcywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLyogdG8gdGV4dCAqL1xuLnRvLXRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIEhlYnJldycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMzNjA2Mjc7XG59XG4vKiBvcHRpb25zIHRleHQgKi9cbi5vcHRpb25zLXRleHQge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtZmFtaWx5OiBOYXJraXNzLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMkMzQzNCO1xufVxuLyogZnJvbSB0ZXh0ICovXG4uZnJvbS10ZXh0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogTmFya2lzcywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5jYXJkLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IE5hcmtpc3MsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMzNjA2Mjc7XG59XG4uY2FyZC10ZXh0IHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgSGVicmV3Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzM2MDYyNztcbn1cbi5nYWxsZXJ5LXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IE5hcmtpc3MsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzM2MDYyNztcbn1cbi5nYWxsZXJ5LXRleHQge1xuICBmb250LWZhbWlseTogTmFya2lzcywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjMzYwNjI3O1xufVxuLyogYnViYmxlcyAqL1xuLmJvdC1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAwcHggI0NCRDZEOTtcbiAgYm9yZGVyLXJhZGl1czogMTJweCAxcHggMTJweCAxMnB4O1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBIZWJyZXcnLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMzYwNjI3O1xufVxuLmJvdC1vcHRpb24ge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMkMzQzNCO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDBweCAjMkMzQzNCO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgbWFyZ2luOiAwIDRweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtZmFtaWx5OiBOYXJraXNzLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMkMzQzNCO1xufVxuLyogdXRpbGl0aWVzICovXG4ubm8tc2Nyb2xsYmFycyB7XG4gIC8qRmlyZUZveCovXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgLypJRTEwKyovXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xufVxuLm5vLXNjcm9sbGJhcnM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgLypDaHJvbWUsIFNhZmFyaSwgRWRnZSovXG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLmNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIHBhZGRpbmc6IDIwcHggOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250ZW50IGgxIHtcbiAgZm9udC1mYW1pbHk6IE5hcmtpc3MsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzM2MDYyNztcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi5jb250ZW50IHAge1xuICBmb250LWZhbWlseTogTmFya2lzcywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjMzYwNjI3O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IC00cHg7XG59XG4uY29udGVudCAuYm90LW9wdGlvbiB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG59XG4iLCJAaW1wb3J0IChjc3MpICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Vhcmx5YWNjZXNzL29wZW5zYW5zaGVicmV3LmNzcyc7XG5cbi8qIGNvbnRhaW5lciAqL1xuQGJhY2tncm91bmQtaW1hZ2U6IHVybChhc3NldHMvaW1nL2JhY2tncm91bmQucG5nKTtcbkBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuQGNvbnRhaW5lci1wYWRkaW5nOiAyMHB4O1xuXG4vKiBjb2xvcnMgKi9cbkB3aGl0ZTogI2ZmZjtcbkBhY2NlbnQtdGV4dDogIzM2MDYyNztcbkBibGFjay03MDA6ICMyQzNDM0I7XG5AYmxhY2stNTAwOiAjNzM3MzczO1xuQGdyYXktZjY6ICNmNmY2ZjY7XG5AZ3JheS05NzogIzk3OTc5NztcbkB3aGl0ZTogI2ZmZmZmZjtcbkBhY2NlbnQtMTAwOiAjRjlGN0Y3O1xuQG9yYW5nZS03MDA6ICM5RjA5MDk7XG5AZGVtb2dyYXBoaWNzLTcwMDogIzBGODA0MjtcblxuLyogZm9udHMgKi9cbi5mb250MSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgSGVicmV3Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn0gXG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBOYXJraXNzO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgc3JjOiB1cmwoXCJhc3NldHMvZm9udHMvTmFya2lzc0Jsb2NrQ29uZGVuc2VkLVJlZ3VsYXItVFJJQUwub3RmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogTmFya2lzcztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBzcmM6IHVybChcImFzc2V0cy9mb250cy9OYXJraXNzQmxvY2tDb25kZW5zZWQtQm9sZC1UUklBTC5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5cbi5mb250MiB7XG4gICAgZm9udC1mYW1pbHk6IE5hcmtpc3MsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi8qIHRvIHRleHQgKi9cbi50by10ZXh0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgLmZvbnQxO1xuICAgIGNvbG9yOiBAYWNjZW50LXRleHQ7XG59XG5cbi8qIG9wdGlvbnMgdGV4dCAqL1xuLm9wdGlvbnMtdGV4dCB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIC5mb250MjtcbiAgICBjb2xvcjogQGJsYWNrLTcwMDtcbn1cblxuLyogZnJvbSB0ZXh0ICovXG4uZnJvbS10ZXh0IHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgLmZvbnQyO1xuICAgIGNvbG9yOiBAd2hpdGU7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgICAuZm9udDI7XG4gICAgY29sb3I6IEBhY2NlbnQtdGV4dDtcbn1cblxuLmNhcmQtdGV4dCB7XG4gICAgLmZvbnQxO1xuICAgIGNvbG9yOiBAYWNjZW50LXRleHQ7XG59XG5cbi5nYWxsZXJ5LXRpdGxlIHtcbiAgICAuZm9udDI7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6IEBhY2NlbnQtdGV4dDtcbn1cblxuLmdhbGxlcnktdGV4dCB7XG4gICAgLmZvbnQyO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiBAYWNjZW50LXRleHQ7XG59XG5cbi8qIGJ1YmJsZXMgKi9cbi5ib3QtbWVzc2FnZSB7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDBweCAjQ0JENkQ5O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMXB4IDEycHggMTJweDtcblxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuXG4gICAgLnRvLXRleHQ7XG59XG5cbi5ib3Qtb3B0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIEBibGFjay03MDA7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAwcHggQGJsYWNrLTcwMDtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgbWFyZ2luOiAwIDRweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIC5vcHRpb25zLXRleHQ7XG59XG5cbi8qIHV0aWxpdGllcyAqL1xuLm5vLXNjcm9sbGJhcnMge1xuICAgIC8qRmlyZUZveCovXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAgIC8qSUUxMCsqL1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAvKkNocm9tZSwgU2FmYXJpLCBFZGdlKi9cbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9IFxufVxuXG4vLyBAYmx1ZWdyZWVuOiAjMDA4MDdjO1xuLy8gQGZhZGVkLWJsdWVncmVlbjogI2U1ZjJmMTtcbi8vIEBjaGFyY29hbDogIzJjM2MzYjtcbi8vIEBhdWJlcmdpbmU6ICM0ODBhMzU7XG4vLyBAc2VhZm9hbS1ibHVlOiAjNmVkZWRhO1xuLy8gQGNvb2wtZ3JleTogIzg5YTlhODtcbi8vIEBwYWxlLWJsdWU6ICNkOWYyZjE7XG4vLyBAd2hpdGU6ICNmNmY2ZjY7XG5cblxuLy8gLmN0YSB7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgIGZsZXg6IDAgMCBhdXRvO1xuLy8gICAgIG1hcmdpbi10b3A6IGF1dG87XG4vLyAgICAgd2lkdGg6IDEwMCU7XG5cbi8vICAgICAuYnV0dG9uIHtcbi8vICAgICAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICAgICAgZmxleC1mbG93OiByb3c7XG4vLyAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4vLyAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IEBzZWFmb2FtLWJsdWU7ICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAcGFsZS1ibHVlO1xuLy8gICAgICAgICBmb250LXNpemU6IDE4cHg7XG4vLyAgICAgICAgIGNvbG9yOiBAYmx1ZWdyZWVuO1xuLy8gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbi8vICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbi8vICAgICAgICAgcGFkZGluZzogNHB4IDIwcHg7XG4vLyAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuLy8gICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbi8vICAgICAgICAgaW1nIHtcbi8vICAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7ICAgXG4vLyAgICAgICAgIH1cblxuLy8gICAgIH1cblxuLy8gfVxuXG4vLyAudmlzdWFsbHktaGlkZGVuIHtcbi8vICAgICBib3JkZXI6IDA7XG4vLyAgICAgY2xpcDogcmVjdCgxcHgsMXB4LDFweCwxcHgpO1xuLy8gICAgIC13ZWJraXQtY2xpcC1wYXRoOiBpbnNldCg1MCUpO1xuLy8gICAgIGNsaXAtcGF0aDogaW5zZXQoNTAlKTtcbi8vICAgICBoZWlnaHQ6IDFweDtcbi8vICAgICBtYXJnaW46IC0xcHg7XG4vLyAgICAgbWFyZ2luLXRvcDogLTFweDtcbi8vICAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyAgICAgcGFkZGluZzogMDtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgd2lkdGg6IDFweDtcbi8vICAgICB3b3JkLXdyYXA6IG5vcm1hbDtcbi8vIH1cblxuLy8gLnBsYWNlaG9sZGVyLXR4IHtcbi8vICAgICBkaXNwbGF5OiBub25lO1xuLy8gfVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vY29tbW9uLmxlc3MnO1xuXG4uaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBwYWRkaW5nOiAyMHB4IDhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBoMSB7XG4gICAgICAgIC5nYWxsZXJ5LXRpdGxlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIH1cbiBcbiAgICBwIHtcbiAgICAgICAgLmdhbGxlcnktdGV4dDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tdG9wOiAtNHB4O1xuICAgIH1cblxuICAgIC5ib3Qtb3B0aW9uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gallery-card',
                templateUrl: './gallery-card.component.html',
                styleUrls: ['./gallery-card.component.less']
            }]
    }], function () { return []; }, { width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], card: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], params: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/cards/scores-card/scores-card.component.ts":
/*!************************************************************!*\
  !*** ./src/app/cards/scores-card/scores-card.component.ts ***!
  \************************************************************/
/*! exports provided: ScoresCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoresCardComponent", function() { return ScoresCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _base_card_base_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-card/base-card.component */ "./src/app/cards/base-card/base-card.component.ts");




function ScoresCardComponent_app_base_card_0_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 2);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r1.params.__runner.fillIn(ctx_r1.card.content), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ScoresCardComponent_app_base_card_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const score_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", score_r3.title === ctx_r2.current);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("right", ctx_r2.bar_position(score_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](score_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](score_r3.score_display);
} }
function ScoresCardComponent_app_base_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-base-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ScoresCardComponent_app_base_card_0_p_3_Template, 1, 1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ScoresCardComponent_app_base_card_0_div_4_Template, 8, 7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx_r0.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("content scheme-secondary-bg scheme-" + ctx_r0.scheme);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r0.params.__runner.fillIn(ctx_r0.card.title), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.card.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.card.scores);
} }
class ScoresCardComponent {
    constructor() {
        this.width = 0;
    }
    ngOnInit() {
    }
    bar_position(score) {
        return (100 * (1 - score.score_value)) + '%';
    }
}
ScoresCardComponent.ɵfac = function ScoresCardComponent_Factory(t) { return new (t || ScoresCardComponent)(); };
ScoresCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScoresCardComponent, selectors: [["app-scores-card"]], inputs: { width: "width", card: "card", params: "params", current: "current", scheme: "scheme" }, decls: 1, vars: 1, consts: [[3, "width", 4, "ngIf"], [3, "width"], [3, "innerHtml"], [3, "innerHtml", 4, "ngIf"], ["class", "score", 3, "selected", 4, "ngFor", "ngForOf"], [1, "score"], [1, "background"], [1, "number"], [1, "title"], [1, "value"]], template: function ScoresCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ScoresCardComponent_app_base_card_0_Template, 5, 6, "app-base-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.card);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _base_card_base_card_component__WEBPACK_IMPORTED_MODULE_2__["BaseCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["@import 'https://fonts.googleapis.com/earlyaccess/opensanshebrew.css';\n\n\n\n.font1[_ngcontent-%COMP%] {\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n}\n@font-face {\n  font-family: Narkiss;\n  font-weight: normal;\n  src: url('NarkissBlockCondensed-Regular-TRIAL.otf') format(\"opentype\");\n}\n@font-face {\n  font-family: Narkiss;\n  font-weight: bold;\n  src: url('NarkissBlockCondensed-Bold-TRIAL.otf') format(\"opentype\");\n}\n.font2[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n}\n\n.to-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n\n.options-text[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #2C3C3B;\n}\n\n.from-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #ffffff;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n.card-text[_ngcontent-%COMP%] {\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n.gallery-title[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-weight: 700;\n  font-size: 24px;\n  color: #360627;\n}\n.gallery-text[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-weight: 300;\n  font-size: 24px;\n  color: #360627;\n}\n\n.bot-message[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  box-shadow: 0px 2px 0px #CBD6D9;\n  border-radius: 12px 1px 12px 12px;\n  padding: 8px 16px;\n  font-size: 16px;\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n.bot-option[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #2C3C3B;\n  box-shadow: 0px 2px 0px #2C3C3B;\n  border-radius: 24px;\n  padding: 8px 16px;\n  margin: 0 4px;\n  white-space: nowrap;\n  cursor: pointer;\n  font-size: 22px;\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #2C3C3B;\n}\n\n.no-scrollbars[_ngcontent-%COMP%] {\n  \n  scrollbar-width: none;\n  \n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n.no-scrollbars[_ngcontent-%COMP%]::-webkit-scrollbar {\n  \n  display: none;\n}\n.content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 20px 16px;\n  overflow-y: scroll;\n  \n  scrollbar-width: none;\n  \n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n.content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  \n  display: none;\n}\n.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n  font-size: 24px;\n  margin-bottom: 20px;\n}\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n  font-size: 16px;\n}\n.content[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  padding: 0 8px;\n  border-radius: 4px;\n  background: rgba(44, 60, 59, 0.05);\n  margin-bottom: 4px;\n  position: relative;\n  overflow: hidden;\n  border: 1px solid transparent;\n}\n.content[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 22px;\n  z-index: 2;\n}\n.content[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url('bar-pattern-red.png');\n  background-repeat: repeat;\n  z-index: 1;\n  opacity: 0.75;\n}\n.content[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  justify-content: center;\n  background: rgba(44, 60, 59, 0.05);\n  border-radius: 12px;\n  color: #2C3C3B;\n  width: 24px;\n  height: 24px;\n}\n.content[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #2C3C3B;\n  margin: 0 8px;\n}\n.content[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  margin-right: auto;\n  color: #737373;\n}\n.content[_ngcontent-%COMP%]   .score.selected[_ngcontent-%COMP%] {\n  border-color: #9F0909;\n}\n.content[_ngcontent-%COMP%]   .score.selected[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  background: #9F0909;\n  color: #ffffff;\n}\n.content[_ngcontent-%COMP%]   .score.selected[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.content[_ngcontent-%COMP%]   .score.selected[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: #2C3C3B;\n}\n.content.scheme-green[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%] {\n  background-image: url('bar-pattern-green.png');\n}\n.content.scheme-green[_ngcontent-%COMP%]   .score.selected[_ngcontent-%COMP%] {\n  border-color: #0F8042;\n}\n.content.scheme-green[_ngcontent-%COMP%]   .score.selected[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  background: #0F8042;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2J1c2luZXNzZ2F0ZS9zcmMvYXBwL2NhcmRzL3Njb3Jlcy1jYXJkL3Njb3Jlcy1jYXJkLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL2FkYW0vQ29kZS9oYXNhZG5hL2J1c2luZXNzZ2F0ZS91aS9wcm9qZWN0cy9idXNpbmVzc2dhdGUvc3JjL2NvbW1vbi5sZXNzIiwiL1VzZXJzL2FkYW0vQ29kZS9oYXNhZG5hL2J1c2luZXNzZ2F0ZS91aS9wcm9qZWN0cy9idXNpbmVzc2dhdGUvc3JjL2FwcC9jYXJkcy9zY29yZXMtY2FyZC9zY29yZXMtY2FyZC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxRUNBYztBRENkLGNBQWM7QUFDZCxXQUFXO0FBQ1gsVUFBVTtBQ2lCVjtFQUNJLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRGZKO0FDa0JBO0VBQ0ksb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNFQUFBO0FEaEJKO0FDbUJBO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1FQUFBO0FEakJKO0FDb0JBO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEbEJKO0FBQ0EsWUFBWTtBQ3FCWjtFQUNJLGVBQUE7RUF6QkEsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBeUJBLGNBQUE7QURqQko7QUFDQSxpQkFBaUI7QUNvQmpCO0VBQ0ksZUFBQTtFQWRBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQWNBLGNBQUE7QURoQko7QUFDQSxjQUFjO0FDbUJkO0VBQ0ksZUFBQTtFQXJCQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFxQkEsY0FBQTtBRGZKO0FDa0JBO0VBMUJJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQTBCQSxjQUFBO0FEZEo7QUNpQkE7RUFqREksMkNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBaURBLGNBQUE7QURiSjtBQ2dCQTtFQXBDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFvQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBRFpKO0FDZUE7RUEzQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBMkNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QURYSjtBQUNBLFlBQVk7QUNjWjtFQUNJLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUVBLGlCQUFBO0VBakRBLGVBQUE7RUF6QkEsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBeUJBLGNBQUE7QUR1Q0o7QUNhQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBRUEsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBeERBLGVBQUE7RUFkQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFjQSxjQUFBO0FEK0NKO0FBQ0EsY0FBYztBQ1lkO0VEVkUsVUFBVTtFQ1lSLHFCQUFBO0VEVkYsUUFBUTtFQ1lOLDRDQUFBO0FEVko7QUNXSTtFRFRGLHVCQUF1QjtFQ1dqQixhQUFBO0FEVFI7QUUvR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUZpSEYsVUFBVTtFQ0ZSLHFCQUFBO0VESUYsUUFBUTtFQ0ZOLDRDQUFBO0FESUo7QUNISTtFREtGLHVCQUF1QjtFQ0hqQixhQUFBO0FES1I7QUU3SEE7RURxQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBMEJBLGNBQUE7RUN4REksZUFBQTtFQUNBLG1CQUFBO0FGMkhSO0FFcklBO0VEbUJJLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQWlEQSxjQUFBO0VDdkRJLGVBQUE7QUY2SFI7QUU1SUE7RUFtQlEsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBRjRIUjtBRTFKQTtFRHFDSSxnQ0FBQTtFQUNBLGtCQUFBO0VDSlEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBRjZIWjtBRWpLQTtFQXdDWSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBRjRIWjtBRTNLQTtFQW1EWSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FGMkhaO0FFdExBO0VBK0RZLGNBQUE7RUFDQSxhQUFBO0FGMEhaO0FFMUxBO0VBbUVZLGtCQUFBO0VBQ0EsY0FBQTtBRjBIWjtBRXhIUTtFQUNJLHFCQUFBO0FGMEhaO0FFM0hRO0VBSVEsbUJBQUE7RUFDQSxjQUFBO0FGMEhoQjtBRS9IUTtFQVNRLGlCQUFBO0FGeUhoQjtBRWxJUTtFQVlRLGNBQUE7QUZ5SGhCO0FFcEhJO0VBSVksOENBQUE7QUZtSGhCO0FFaEhZO0VBQ0kscUJBQUE7QUZrSGhCO0FFbkhZO0VBSVEsbUJBQUE7QUZrSHBCIiwiZmlsZSI6InByb2plY3RzL2J1c2luZXNzZ2F0ZS9zcmMvYXBwL2NhcmRzL3Njb3Jlcy1jYXJkL3Njb3Jlcy1jYXJkLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9lYXJseWFjY2Vzcy9vcGVuc2Fuc2hlYnJldy5jc3MnO1xuLyogY29udGFpbmVyICovXG4vKiBjb2xvcnMgKi9cbi8qIGZvbnRzICovXG4uZm9udDEge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBIZWJyZXcnLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IE5hcmtpc3M7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL05hcmtpc3NCbG9ja0NvbmRlbnNlZC1SZWd1bGFyLVRSSUFMLm90ZlwiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogTmFya2lzcztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL05hcmtpc3NCbG9ja0NvbmRlbnNlZC1Cb2xkLVRSSUFMLm90ZlwiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cbi5mb250MiB7XG4gIGZvbnQtZmFtaWx5OiBOYXJraXNzLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4vKiB0byB0ZXh0ICovXG4udG8tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgSGVicmV3Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzM2MDYyNztcbn1cbi8qIG9wdGlvbnMgdGV4dCAqL1xuLm9wdGlvbnMtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC1mYW1pbHk6IE5hcmtpc3MsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMyQzNDM0I7XG59XG4vKiBmcm9tIHRleHQgKi9cbi5mcm9tLXRleHQge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBOYXJraXNzLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmNhcmQtdGl0bGUge1xuICBmb250LWZhbWlseTogTmFya2lzcywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzM2MDYyNztcbn1cbi5jYXJkLXRleHQge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBIZWJyZXcnLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMzYwNjI3O1xufVxuLmdhbGxlcnktdGl0bGUge1xuICBmb250LWZhbWlseTogTmFya2lzcywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjMzYwNjI3O1xufVxuLmdhbGxlcnktdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBOYXJraXNzLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICMzNjA2Mjc7XG59XG4vKiBidWJibGVzICovXG4uYm90LW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDBweCAjQ0JENkQ5O1xuICBib3JkZXItcmFkaXVzOiAxMnB4IDFweCAxMnB4IDEycHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIEhlYnJldycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMzNjA2Mjc7XG59XG4uYm90LW9wdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyQzNDM0I7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMHB4ICMyQzNDM0I7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBtYXJnaW46IDAgNHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC1mYW1pbHk6IE5hcmtpc3MsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMyQzNDM0I7XG59XG4vKiB1dGlsaXRpZXMgKi9cbi5uby1zY3JvbGxiYXJzIHtcbiAgLypGaXJlRm94Ki9cbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAvKklFMTArKi9cbiAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XG59XG4ubm8tc2Nyb2xsYmFyczo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAvKkNocm9tZSwgU2FmYXJpLCBFZGdlKi9cbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMjBweCAxNnB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIC8qRmlyZUZveCovXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgLypJRTEwKyovXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xufVxuLmNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgLypDaHJvbWUsIFNhZmFyaSwgRWRnZSovXG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uY29udGVudCBoMSB7XG4gIGZvbnQtZmFtaWx5OiBOYXJraXNzLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMzYwNjI3O1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uY29udGVudCBwIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgSGVicmV3Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzM2MDYyNztcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmNvbnRlbnQgLnNjb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoNDQsIDYwLCA1OSwgMC4wNSk7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbi5jb250ZW50IC5zY29yZSA+ICoge1xuICBmb250LWZhbWlseTogTmFya2lzcywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDIycHg7XG4gIHotaW5kZXg6IDI7XG59XG4uY29udGVudCAuc2NvcmUgLmJhY2tncm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFyLXBhdHRlcm4tcmVkLnBuZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG4gIHotaW5kZXg6IDE7XG4gIG9wYWNpdHk6IDAuNzU7XG59XG4uY29udGVudCAuc2NvcmUgLm51bWJlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiYSg0NCwgNjAsIDU5LCAwLjA1KTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgY29sb3I6ICMyQzNDM0I7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG4uY29udGVudCAuc2NvcmUgLnRpdGxlIHtcbiAgY29sb3I6ICMyQzNDM0I7XG4gIG1hcmdpbjogMCA4cHg7XG59XG4uY29udGVudCAuc2NvcmUgLnZhbHVlIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBjb2xvcjogIzczNzM3Mztcbn1cbi5jb250ZW50IC5zY29yZS5zZWxlY3RlZCB7XG4gIGJvcmRlci1jb2xvcjogIzlGMDkwOTtcbn1cbi5jb250ZW50IC5zY29yZS5zZWxlY3RlZCAubnVtYmVyIHtcbiAgYmFja2dyb3VuZDogIzlGMDkwOTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uY29udGVudCAuc2NvcmUuc2VsZWN0ZWQgLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGVudCAuc2NvcmUuc2VsZWN0ZWQgLnZhbHVlIHtcbiAgY29sb3I6ICMyQzNDM0I7XG59XG4uY29udGVudC5zY2hlbWUtZ3JlZW4gLnNjb3JlIC5iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFyLXBhdHRlcm4tZ3JlZW4ucG5nKTtcbn1cbi5jb250ZW50LnNjaGVtZS1ncmVlbiAuc2NvcmUuc2VsZWN0ZWQge1xuICBib3JkZXItY29sb3I6ICMwRjgwNDI7XG59XG4uY29udGVudC5zY2hlbWUtZ3JlZW4gLnNjb3JlLnNlbGVjdGVkIC5udW1iZXIge1xuICBiYWNrZ3JvdW5kOiAjMEY4MDQyO1xufVxuIiwiQGltcG9ydCAoY3NzKSAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9lYXJseWFjY2Vzcy9vcGVuc2Fuc2hlYnJldy5jc3MnO1xuXG4vKiBjb250YWluZXIgKi9cbkBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLnBuZyk7XG5AYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbkBjb250YWluZXItcGFkZGluZzogMjBweDtcblxuLyogY29sb3JzICovXG5Ad2hpdGU6ICNmZmY7XG5AYWNjZW50LXRleHQ6ICMzNjA2Mjc7XG5AYmxhY2stNzAwOiAjMkMzQzNCO1xuQGJsYWNrLTUwMDogIzczNzM3MztcbkBncmF5LWY2OiAjZjZmNmY2O1xuQGdyYXktOTc6ICM5Nzk3OTc7XG5Ad2hpdGU6ICNmZmZmZmY7XG5AYWNjZW50LTEwMDogI0Y5RjdGNztcbkBvcmFuZ2UtNzAwOiAjOUYwOTA5O1xuQGRlbW9ncmFwaGljcy03MDA6ICMwRjgwNDI7XG5cbi8qIGZvbnRzICovXG4uZm9udDEge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIEhlYnJldycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59IFxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogTmFya2lzcztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIHNyYzogdXJsKFwiYXNzZXRzL2ZvbnRzL05hcmtpc3NCbG9ja0NvbmRlbnNlZC1SZWd1bGFyLVRSSUFMLm90ZlwiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IE5hcmtpc3M7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgc3JjOiB1cmwoXCJhc3NldHMvZm9udHMvTmFya2lzc0Jsb2NrQ29uZGVuc2VkLUJvbGQtVFJJQUwub3RmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuXG4uZm9udDIge1xuICAgIGZvbnQtZmFtaWx5OiBOYXJraXNzLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4vKiB0byB0ZXh0ICovXG4udG8tdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIC5mb250MTtcbiAgICBjb2xvcjogQGFjY2VudC10ZXh0O1xufVxuXG4vKiBvcHRpb25zIHRleHQgKi9cbi5vcHRpb25zLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAuZm9udDI7XG4gICAgY29sb3I6IEBibGFjay03MDA7XG59XG5cbi8qIGZyb20gdGV4dCAqL1xuLmZyb20tdGV4dCB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIC5mb250MjtcbiAgICBjb2xvcjogQHdoaXRlO1xufVxuXG4uY2FyZC10aXRsZSB7XG4gICAgLmZvbnQyO1xuICAgIGNvbG9yOiBAYWNjZW50LXRleHQ7XG59XG5cbi5jYXJkLXRleHQge1xuICAgIC5mb250MTtcbiAgICBjb2xvcjogQGFjY2VudC10ZXh0O1xufVxuXG4uZ2FsbGVyeS10aXRsZSB7XG4gICAgLmZvbnQyO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiBAYWNjZW50LXRleHQ7XG59XG5cbi5nYWxsZXJ5LXRleHQge1xuICAgIC5mb250MjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogQGFjY2VudC10ZXh0O1xufVxuXG4vKiBidWJibGVzICovXG4uYm90LW1lc3NhZ2Uge1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAwcHggI0NCRDZEOTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4IDFweCAxMnB4IDEycHg7XG5cbiAgICBwYWRkaW5nOiA4cHggMTZweDtcblxuICAgIC50by10ZXh0O1xufVxuXG4uYm90LW9wdGlvbiB7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBAYmxhY2stNzAwO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggMHB4IEBibGFjay03MDA7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcblxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIG1hcmdpbjogMCA0cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAub3B0aW9ucy10ZXh0O1xufVxuXG4vKiB1dGlsaXRpZXMgKi9cbi5uby1zY3JvbGxiYXJzIHtcbiAgICAvKkZpcmVGb3gqL1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICAvKklFMTArKi9cbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgLypDaHJvbWUsIFNhZmFyaSwgRWRnZSovXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfSBcbn1cblxuLy8gQGJsdWVncmVlbjogIzAwODA3Yztcbi8vIEBmYWRlZC1ibHVlZ3JlZW46ICNlNWYyZjE7XG4vLyBAY2hhcmNvYWw6ICMyYzNjM2I7XG4vLyBAYXViZXJnaW5lOiAjNDgwYTM1O1xuLy8gQHNlYWZvYW0tYmx1ZTogIzZlZGVkYTtcbi8vIEBjb29sLWdyZXk6ICM4OWE5YTg7XG4vLyBAcGFsZS1ibHVlOiAjZDlmMmYxO1xuLy8gQHdoaXRlOiAjZjZmNmY2O1xuXG5cbi8vIC5jdGEge1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgZmxleC1mbG93OiBjb2x1bW47XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBmbGV4OiAwIDAgYXV0bztcbi8vICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuXG4vLyAgICAgLmJ1dHRvbiB7XG4vLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgICAgIGZsZXgtZmxvdzogcm93O1xuLy8gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuLy8gICAgICAgICBib3JkZXI6IHNvbGlkIDFweCBAc2VhZm9hbS1ibHVlOyAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQHBhbGUtYmx1ZTtcbi8vICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuLy8gICAgICAgICBjb2xvcjogQGJsdWVncmVlbjtcbi8vICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4vLyAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4vLyAgICAgICAgIHBhZGRpbmc6IDRweCAyMHB4O1xuLy8gICAgICAgICBtYXJnaW46IDEwcHggMDtcbi8vICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4vLyAgICAgICAgIGltZyB7XG4vLyAgICAgICAgICAgICBtYXJnaW46IDAgNXB4OyAgIFxuLy8gICAgICAgICB9XG5cbi8vICAgICB9XG5cbi8vIH1cblxuLy8gLnZpc3VhbGx5LWhpZGRlbiB7XG4vLyAgICAgYm9yZGVyOiAwO1xuLy8gICAgIGNsaXA6IHJlY3QoMXB4LDFweCwxcHgsMXB4KTtcbi8vICAgICAtd2Via2l0LWNsaXAtcGF0aDogaW5zZXQoNTAlKTtcbi8vICAgICBjbGlwLXBhdGg6IGluc2V0KDUwJSk7XG4vLyAgICAgaGVpZ2h0OiAxcHg7XG4vLyAgICAgbWFyZ2luOiAtMXB4O1xuLy8gICAgIG1hcmdpbi10b3A6IC0xcHg7XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogLTFweDtcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xuLy8gICAgIHBhZGRpbmc6IDA7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHdpZHRoOiAxcHg7XG4vLyAgICAgd29yZC13cmFwOiBub3JtYWw7XG4vLyB9XG5cbi8vIC5wbGFjZWhvbGRlci10eCB7XG4vLyAgICAgZGlzcGxheTogbm9uZTtcbi8vIH1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uL2NvbW1vbi5sZXNzJztcblxuLmNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4IDE2cHg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIC5uby1zY3JvbGxiYXJzO1xuXG4gICAgaDEge1xuICAgICAgICAuY2FyZC10aXRsZTtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgIHAge1xuICAgICAgICAuY2FyZC10ZXh0O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgLnNjb3JlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNDQsIDYwLCA1OSwgMC4wNSk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcblxuICAgICAgICA+ICoge1xuICAgICAgICAgICAgLmZvbnQyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDsgIFxuICAgICAgICAgICAgei1pbmRleDogMjsgIFxuICAgICAgICB9XG5cbiAgICAgICAgLmJhY2tncm91bmQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9iYXItcGF0dGVybi1yZWQucG5nKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgb3BhY2l0eTogMC43NTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5udW1iZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg0NCwgNjAsIDU5LCAwLjA1KTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogQGJsYWNrLTcwMDtcbiAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGNvbG9yOiBAYmxhY2stNzAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDhweDtcbiAgICAgICAgfVxuICAgICAgICAudmFsdWUge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgY29sb3I6IEBibGFjay01MDA7XG4gICAgICAgIH1cbiAgICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IEBvcmFuZ2UtNzAwO1xuXG4gICAgICAgICAgICAubnVtYmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBAb3JhbmdlLTcwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC52YWx1ZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IEBibGFjay03MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLnNjaGVtZS1ncmVlbiB7XG5cbiAgICAgICAgLnNjb3JlIHtcbiAgICAgICAgICAgIC5iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9iYXItcGF0dGVybi1ncmVlbi5wbmcpO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBAZGVtb2dyYXBoaWNzLTcwMDtcbiAgICBcbiAgICAgICAgICAgICAgICAubnVtYmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQGRlbW9ncmFwaGljcy03MDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSAgICBcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScoresCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-scores-card',
                templateUrl: './scores-card.component.html',
                styleUrls: ['./scores-card.component.less']
            }]
    }], function () { return []; }, { width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], card: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], params: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], current: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scheme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/cards/simple-card/simple-card.component.ts":
/*!************************************************************!*\
  !*** ./src/app/cards/simple-card/simple-card.component.ts ***!
  \************************************************************/
/*! exports provided: SimpleCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleCardComponent", function() { return SimpleCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _base_card_base_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-card/base-card.component */ "./src/app/cards/base-card/base-card.component.ts");




function SimpleCardComponent_app_base_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-base-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx_r0.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r0.params.__runner.fillIn(ctx_r0.card.title), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r0.params.__runner.fillIn(ctx_r0.card.content), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class SimpleCardComponent {
    constructor() {
        this.width = 0;
    }
    ngOnInit() {
    }
}
SimpleCardComponent.ɵfac = function SimpleCardComponent_Factory(t) { return new (t || SimpleCardComponent)(); };
SimpleCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SimpleCardComponent, selectors: [["app-simple-card"]], inputs: { width: "width", card: "card", params: "params" }, decls: 1, vars: 1, consts: [[3, "width", 4, "ngIf"], [3, "width"], [1, "content", "scheme-secondary-bg"], [3, "innerHtml"]], template: function SimpleCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SimpleCardComponent_app_base_card_0_Template, 4, 3, "app-base-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.card);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _base_card_base_card_component__WEBPACK_IMPORTED_MODULE_2__["BaseCardComponent"]], styles: ["@import 'https://fonts.googleapis.com/earlyaccess/opensanshebrew.css';\n\n\n\n.font1[_ngcontent-%COMP%] {\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n}\n@font-face {\n  font-family: Narkiss;\n  font-weight: normal;\n  src: url('NarkissBlockCondensed-Regular-TRIAL.otf') format(\"opentype\");\n}\n@font-face {\n  font-family: Narkiss;\n  font-weight: bold;\n  src: url('NarkissBlockCondensed-Bold-TRIAL.otf') format(\"opentype\");\n}\n.font2[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n}\n\n.to-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n\n.options-text[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #2C3C3B;\n}\n\n.from-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #ffffff;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n.card-text[_ngcontent-%COMP%] {\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n.gallery-title[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-weight: 700;\n  font-size: 24px;\n  color: #360627;\n}\n.gallery-text[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-weight: 300;\n  font-size: 24px;\n  color: #360627;\n}\n\n.bot-message[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  box-shadow: 0px 2px 0px #CBD6D9;\n  border-radius: 12px 1px 12px 12px;\n  padding: 8px 16px;\n  font-size: 16px;\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n.bot-option[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #2C3C3B;\n  box-shadow: 0px 2px 0px #2C3C3B;\n  border-radius: 24px;\n  padding: 8px 16px;\n  margin: 0 4px;\n  white-space: nowrap;\n  cursor: pointer;\n  font-size: 22px;\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #2C3C3B;\n}\n\n.no-scrollbars[_ngcontent-%COMP%] {\n  \n  scrollbar-width: none;\n  \n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n.no-scrollbars[_ngcontent-%COMP%]::-webkit-scrollbar {\n  \n  display: none;\n}\n.content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 20px 16px;\n}\n.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n  font-size: 22px;\n  margin-bottom: 12px;\n}\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2J1c2luZXNzZ2F0ZS9zcmMvYXBwL2NhcmRzL3NpbXBsZS1jYXJkL3NpbXBsZS1jYXJkLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL2FkYW0vQ29kZS9oYXNhZG5hL2J1c2luZXNzZ2F0ZS91aS9wcm9qZWN0cy9idXNpbmVzc2dhdGUvc3JjL2NvbW1vbi5sZXNzIiwiL1VzZXJzL2FkYW0vQ29kZS9oYXNhZG5hL2J1c2luZXNzZ2F0ZS91aS9wcm9qZWN0cy9idXNpbmVzc2dhdGUvc3JjL2FwcC9jYXJkcy9zaW1wbGUtY2FyZC9zaW1wbGUtY2FyZC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxRUNBYztBRENkLGNBQWM7QUFDZCxXQUFXO0FBQ1gsVUFBVTtBQ2lCVjtFQUNJLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRGZKO0FDa0JBO0VBQ0ksb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNFQUFBO0FEaEJKO0FDbUJBO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1FQUFBO0FEakJKO0FDb0JBO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEbEJKO0FBQ0EsWUFBWTtBQ3FCWjtFQUNJLGVBQUE7RUF6QkEsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBeUJBLGNBQUE7QURqQko7QUFDQSxpQkFBaUI7QUNvQmpCO0VBQ0ksZUFBQTtFQWRBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQWNBLGNBQUE7QURoQko7QUFDQSxjQUFjO0FDbUJkO0VBQ0ksZUFBQTtFQXJCQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFxQkEsY0FBQTtBRGZKO0FDa0JBO0VBMUJJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQTBCQSxjQUFBO0FEZEo7QUNpQkE7RUFqREksMkNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBaURBLGNBQUE7QURiSjtBQ2dCQTtFQXBDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFvQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBRFpKO0FDZUE7RUEzQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBMkNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QURYSjtBQUNBLFlBQVk7QUNjWjtFQUNJLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUVBLGlCQUFBO0VBakRBLGVBQUE7RUF6QkEsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBeUJBLGNBQUE7QUR1Q0o7QUNhQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBRUEsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBeERBLGVBQUE7RUFkQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFjQSxjQUFBO0FEK0NKO0FBQ0EsY0FBYztBQ1lkO0VEVkUsVUFBVTtFQ1lSLHFCQUFBO0VEVkYsUUFBUTtFQ1lOLDRDQUFBO0FEVko7QUNXSTtFRFRGLHVCQUF1QjtFQ1dqQixhQUFBO0FEVFI7QUUvR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FGaUhKO0FFcEhBO0VEcUNJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQTBCQSxjQUFBO0VDMURJLGVBQUE7RUFDQSxtQkFBQTtBRm9IUjtBRTVIQTtFRG1CSSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFpREEsY0FBQTtFQ3pESSxlQUFBO0FGc0hSIiwiZmlsZSI6InByb2plY3RzL2J1c2luZXNzZ2F0ZS9zcmMvYXBwL2NhcmRzL3NpbXBsZS1jYXJkL3NpbXBsZS1jYXJkLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9lYXJseWFjY2Vzcy9vcGVuc2Fuc2hlYnJldy5jc3MnO1xuLyogY29udGFpbmVyICovXG4vKiBjb2xvcnMgKi9cbi8qIGZvbnRzICovXG4uZm9udDEge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBIZWJyZXcnLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IE5hcmtpc3M7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL05hcmtpc3NCbG9ja0NvbmRlbnNlZC1SZWd1bGFyLVRSSUFMLm90ZlwiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogTmFya2lzcztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL05hcmtpc3NCbG9ja0NvbmRlbnNlZC1Cb2xkLVRSSUFMLm90ZlwiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cbi5mb250MiB7XG4gIGZvbnQtZmFtaWx5OiBOYXJraXNzLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4vKiB0byB0ZXh0ICovXG4udG8tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgSGVicmV3Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzM2MDYyNztcbn1cbi8qIG9wdGlvbnMgdGV4dCAqL1xuLm9wdGlvbnMtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC1mYW1pbHk6IE5hcmtpc3MsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMyQzNDM0I7XG59XG4vKiBmcm9tIHRleHQgKi9cbi5mcm9tLXRleHQge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBOYXJraXNzLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmNhcmQtdGl0bGUge1xuICBmb250LWZhbWlseTogTmFya2lzcywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzM2MDYyNztcbn1cbi5jYXJkLXRleHQge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBIZWJyZXcnLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMzYwNjI3O1xufVxuLmdhbGxlcnktdGl0bGUge1xuICBmb250LWZhbWlseTogTmFya2lzcywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjMzYwNjI3O1xufVxuLmdhbGxlcnktdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBOYXJraXNzLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICMzNjA2Mjc7XG59XG4vKiBidWJibGVzICovXG4uYm90LW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDBweCAjQ0JENkQ5O1xuICBib3JkZXItcmFkaXVzOiAxMnB4IDFweCAxMnB4IDEycHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIEhlYnJldycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMzNjA2Mjc7XG59XG4uYm90LW9wdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyQzNDM0I7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMHB4ICMyQzNDM0I7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBtYXJnaW46IDAgNHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC1mYW1pbHk6IE5hcmtpc3MsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMyQzNDM0I7XG59XG4vKiB1dGlsaXRpZXMgKi9cbi5uby1zY3JvbGxiYXJzIHtcbiAgLypGaXJlRm94Ki9cbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAvKklFMTArKi9cbiAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XG59XG4ubm8tc2Nyb2xsYmFyczo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAvKkNocm9tZSwgU2FmYXJpLCBFZGdlKi9cbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMjBweCAxNnB4O1xufVxuLmNvbnRlbnQgaDEge1xuICBmb250LWZhbWlseTogTmFya2lzcywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzM2MDYyNztcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLmNvbnRlbnQgcCB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIEhlYnJldycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMzNjA2Mjc7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbiIsIkBpbXBvcnQgKGNzcykgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vZWFybHlhY2Nlc3Mvb3BlbnNhbnNoZWJyZXcuY3NzJztcblxuLyogY29udGFpbmVyICovXG5AYmFja2dyb3VuZC1pbWFnZTogdXJsKGFzc2V0cy9pbWcvYmFja2dyb3VuZC5wbmcpO1xuQGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG5AY29udGFpbmVyLXBhZGRpbmc6IDIwcHg7XG5cbi8qIGNvbG9ycyAqL1xuQHdoaXRlOiAjZmZmO1xuQGFjY2VudC10ZXh0OiAjMzYwNjI3O1xuQGJsYWNrLTcwMDogIzJDM0MzQjtcbkBibGFjay01MDA6ICM3MzczNzM7XG5AZ3JheS1mNjogI2Y2ZjZmNjtcbkBncmF5LTk3OiAjOTc5Nzk3O1xuQHdoaXRlOiAjZmZmZmZmO1xuQGFjY2VudC0xMDA6ICNGOUY3Rjc7XG5Ab3JhbmdlLTcwMDogIzlGMDkwOTtcbkBkZW1vZ3JhcGhpY3MtNzAwOiAjMEY4MDQyO1xuXG4vKiBmb250cyAqL1xuLmZvbnQxIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucyBIZWJyZXcnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xufSBcblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IE5hcmtpc3M7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBzcmM6IHVybChcImFzc2V0cy9mb250cy9OYXJraXNzQmxvY2tDb25kZW5zZWQtUmVndWxhci1UUklBTC5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBOYXJraXNzO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHNyYzogdXJsKFwiYXNzZXRzL2ZvbnRzL05hcmtpc3NCbG9ja0NvbmRlbnNlZC1Cb2xkLVRSSUFMLm90ZlwiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cblxuLmZvbnQyIHtcbiAgICBmb250LWZhbWlseTogTmFya2lzcywgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLyogdG8gdGV4dCAqL1xuLnRvLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAuZm9udDE7XG4gICAgY29sb3I6IEBhY2NlbnQtdGV4dDtcbn1cblxuLyogb3B0aW9ucyB0ZXh0ICovXG4ub3B0aW9ucy10ZXh0IHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgLmZvbnQyO1xuICAgIGNvbG9yOiBAYmxhY2stNzAwO1xufVxuXG4vKiBmcm9tIHRleHQgKi9cbi5mcm9tLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAuZm9udDI7XG4gICAgY29sb3I6IEB3aGl0ZTtcbn1cblxuLmNhcmQtdGl0bGUge1xuICAgIC5mb250MjtcbiAgICBjb2xvcjogQGFjY2VudC10ZXh0O1xufVxuXG4uY2FyZC10ZXh0IHtcbiAgICAuZm9udDE7XG4gICAgY29sb3I6IEBhY2NlbnQtdGV4dDtcbn1cblxuLmdhbGxlcnktdGl0bGUge1xuICAgIC5mb250MjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogQGFjY2VudC10ZXh0O1xufVxuXG4uZ2FsbGVyeS10ZXh0IHtcbiAgICAuZm9udDI7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6IEBhY2NlbnQtdGV4dDtcbn1cblxuLyogYnViYmxlcyAqL1xuLmJvdC1tZXNzYWdlIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggMHB4ICNDQkQ2RDk7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweCAxcHggMTJweCAxMnB4O1xuXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG5cbiAgICAudG8tdGV4dDtcbn1cblxuLmJvdC1vcHRpb24ge1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgQGJsYWNrLTcwMDtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDBweCBAYmxhY2stNzAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG5cbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBtYXJnaW46IDAgNHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgLm9wdGlvbnMtdGV4dDtcbn1cblxuLyogdXRpbGl0aWVzICovXG4ubm8tc2Nyb2xsYmFycyB7XG4gICAgLypGaXJlRm94Ki9cbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgLypJRTEwKyovXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIC8qQ2hyb21lLCBTYWZhcmksIEVkZ2UqL1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH0gXG59XG5cbi8vIEBibHVlZ3JlZW46ICMwMDgwN2M7XG4vLyBAZmFkZWQtYmx1ZWdyZWVuOiAjZTVmMmYxO1xuLy8gQGNoYXJjb2FsOiAjMmMzYzNiO1xuLy8gQGF1YmVyZ2luZTogIzQ4MGEzNTtcbi8vIEBzZWFmb2FtLWJsdWU6ICM2ZWRlZGE7XG4vLyBAY29vbC1ncmV5OiAjODlhOWE4O1xuLy8gQHBhbGUtYmx1ZTogI2Q5ZjJmMTtcbi8vIEB3aGl0ZTogI2Y2ZjZmNjtcblxuXG4vLyAuY3RhIHtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGZsZXgtZmxvdzogY29sdW1uO1xuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAgZmxleDogMCAwIGF1dG87XG4vLyAgICAgbWFyZ2luLXRvcDogYXV0bztcbi8vICAgICB3aWR0aDogMTAwJTtcblxuLy8gICAgIC5idXR0b24ge1xuLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgICAgICBmbGV4LWZsb3c6IHJvdztcbi8vICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogMThweDtcbi8vICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggQHNlYWZvYW0tYmx1ZTsgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBwYWxlLWJsdWU7XG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbi8vICAgICAgICAgY29sb3I6IEBibHVlZ3JlZW47XG4vLyAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuLy8gICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuLy8gICAgICAgICBwYWRkaW5nOiA0cHggMjBweDtcbi8vICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4vLyAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuLy8gICAgICAgICBpbWcge1xuLy8gICAgICAgICAgICAgbWFyZ2luOiAwIDVweDsgICBcbi8vICAgICAgICAgfVxuXG4vLyAgICAgfVxuXG4vLyB9XG5cbi8vIC52aXN1YWxseS1oaWRkZW4ge1xuLy8gICAgIGJvcmRlcjogMDtcbi8vICAgICBjbGlwOiByZWN0KDFweCwxcHgsMXB4LDFweCk7XG4vLyAgICAgLXdlYmtpdC1jbGlwLXBhdGg6IGluc2V0KDUwJSk7XG4vLyAgICAgY2xpcC1wYXRoOiBpbnNldCg1MCUpO1xuLy8gICAgIGhlaWdodDogMXB4O1xuLy8gICAgIG1hcmdpbjogLTFweDtcbi8vICAgICBtYXJnaW4tdG9wOiAtMXB4O1xuLy8gICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vICAgICBwYWRkaW5nOiAwO1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB3aWR0aDogMXB4O1xuLy8gICAgIHdvcmQtd3JhcDogbm9ybWFsO1xuLy8gfVxuXG4vLyAucGxhY2Vob2xkZXItdHgge1xuLy8gICAgIGRpc3BsYXk6IG5vbmU7XG4vLyB9XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi9jb21tb24ubGVzcyc7XG5cbi5jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMjBweCAxNnB4O1xuXG4gICAgaDEge1xuICAgICAgICAuY2FyZC10aXRsZTtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIH1cbiBcbiAgICBwIHtcbiAgICAgICAgLmNhcmQtdGV4dDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimpleCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-simple-card',
                templateUrl: './simple-card.component.html',
                styleUrls: ['./simple-card.component.less']
            }]
    }], function () { return []; }, { width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], card: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], params: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/cards/stack-header-card/stack-header-card.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/cards/stack-header-card/stack-header-card.component.ts ***!
  \************************************************************************/
/*! exports provided: StackHeaderCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StackHeaderCardComponent", function() { return StackHeaderCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _base_card_base_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-card/base-card.component */ "./src/app/cards/base-card/base-card.component.ts");




function StackHeaderCardComponent_app_base_card_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-base-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transform_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", transform_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx_r0.width);
} }
function StackHeaderCardComponent_app_base_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-base-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx_r1.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r1.params.__runner.fillIn(ctx_r1.stack.title), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r1.params.__runner.fillIn(ctx_r1.stack.subtitle), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class StackHeaderCardComponent {
    constructor() {
        this.width = 120;
        this.transforms = [
            'rotate(5deg)',
            'rotate(-3deg)',
            'rotate(10deg)',
            'rotate(-7deg)',
            'rotate(2deg)',
        ];
    }
    ngOnInit() {
    }
}
StackHeaderCardComponent.ɵfac = function StackHeaderCardComponent_Factory(t) { return new (t || StackHeaderCardComponent)(); };
StackHeaderCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StackHeaderCardComponent, selectors: [["app-stack-header-card"]], inputs: { width: "width", stack: "stack", params: "params" }, decls: 2, vars: 2, consts: [[3, "width", "transform", 4, "ngFor", "ngForOf"], [3, "width", 4, "ngIf"], [3, "width"], [1, "content", "scheme-primary-bg"], [1, "title"], [3, "innerHtml"]], template: function StackHeaderCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StackHeaderCardComponent_app_base_card_0_Template, 2, 3, "app-base-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StackHeaderCardComponent_app_base_card_1_Template, 5, 3, "app-base-card", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.transforms);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stack);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _base_card_base_card_component__WEBPACK_IMPORTED_MODULE_2__["BaseCardComponent"]], styles: ["@import 'https://fonts.googleapis.com/earlyaccess/opensanshebrew.css';\n\n\n\n.font1[_ngcontent-%COMP%] {\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n}\n@font-face {\n  font-family: Narkiss;\n  font-weight: normal;\n  src: url('NarkissBlockCondensed-Regular-TRIAL.otf') format(\"opentype\");\n}\n@font-face {\n  font-family: Narkiss;\n  font-weight: bold;\n  src: url('NarkissBlockCondensed-Bold-TRIAL.otf') format(\"opentype\");\n}\n.font2[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n}\n\n.to-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n\n.options-text[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #2C3C3B;\n}\n\n.from-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #ffffff;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n.card-text[_ngcontent-%COMP%] {\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n.gallery-title[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-weight: 700;\n  font-size: 24px;\n  color: #360627;\n}\n.gallery-text[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-weight: 300;\n  font-size: 24px;\n  color: #360627;\n}\n\n.bot-message[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  box-shadow: 0px 2px 0px #CBD6D9;\n  border-radius: 12px 1px 12px 12px;\n  padding: 8px 16px;\n  font-size: 16px;\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n.bot-option[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #2C3C3B;\n  box-shadow: 0px 2px 0px #2C3C3B;\n  border-radius: 24px;\n  padding: 8px 16px;\n  margin: 0 4px;\n  white-space: nowrap;\n  cursor: pointer;\n  font-size: 22px;\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #2C3C3B;\n}\n\n.no-scrollbars[_ngcontent-%COMP%] {\n  \n  scrollbar-width: none;\n  \n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n.no-scrollbars[_ngcontent-%COMP%]::-webkit-scrollbar {\n  \n  display: none;\n}\n[_nghost-%COMP%] {\n  position: relative;\n  display: block;\n  height: 140px;\n  min-width: 140px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   app-base-card[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n[_nghost-%COMP%]   app-base-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 20px 16px;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: center;\n  text-align: right;\n}\n[_nghost-%COMP%]   app-base-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], [_nghost-%COMP%]   app-base-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 24px;\n  margin: 0;\n  line-height: 20px;\n}\n[_nghost-%COMP%]   app-base-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n[_nghost-%COMP%]   app-base-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2J1c2luZXNzZ2F0ZS9zcmMvYXBwL2NhcmRzL3N0YWNrLWhlYWRlci1jYXJkL3N0YWNrLWhlYWRlci1jYXJkLmNvbXBvbmVudC5sZXNzIiwiL1VzZXJzL2FkYW0vQ29kZS9oYXNhZG5hL2J1c2luZXNzZ2F0ZS91aS9wcm9qZWN0cy9idXNpbmVzc2dhdGUvc3JjL2NvbW1vbi5sZXNzIiwiL1VzZXJzL2FkYW0vQ29kZS9oYXNhZG5hL2J1c2luZXNzZ2F0ZS91aS9wcm9qZWN0cy9idXNpbmVzc2dhdGUvc3JjL2FwcC9jYXJkcy9zdGFjay1oZWFkZXItY2FyZC9zdGFjay1oZWFkZXItY2FyZC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxRUNBYztBRENkLGNBQWM7QUFDZCxXQUFXO0FBQ1gsVUFBVTtBQ2lCVjtFQUNJLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRGZKO0FDa0JBO0VBQ0ksb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNFQUFBO0FEaEJKO0FDbUJBO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1FQUFBO0FEakJKO0FDb0JBO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEbEJKO0FBQ0EsWUFBWTtBQ3FCWjtFQUNJLGVBQUE7RUF6QkEsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBeUJBLGNBQUE7QURqQko7QUFDQSxpQkFBaUI7QUNvQmpCO0VBQ0ksZUFBQTtFQWRBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQWNBLGNBQUE7QURoQko7QUFDQSxjQUFjO0FDbUJkO0VBQ0ksZUFBQTtFQXJCQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFxQkEsY0FBQTtBRGZKO0FDa0JBO0VBMUJJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQTBCQSxjQUFBO0FEZEo7QUNpQkE7RUFqREksMkNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBaURBLGNBQUE7QURiSjtBQ2dCQTtFQXBDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFvQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBRFpKO0FDZUE7RUEzQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBMkNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QURYSjtBQUNBLFlBQVk7QUNjWjtFQUNJLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUVBLGlCQUFBO0VBakRBLGVBQUE7RUF6QkEsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBeUJBLGNBQUE7QUR1Q0o7QUNhQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBRUEsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBeERBLGVBQUE7RUFkQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFjQSxjQUFBO0FEK0NKO0FBQ0EsY0FBYztBQ1lkO0VEVkUsVUFBVTtFQ1lSLHFCQUFBO0VEVkYsUUFBUTtFQ1lOLDRDQUFBO0FEVko7QUNXSTtFRFRGLHVCQUF1QjtFQ1dqQixhQUFBO0FEVFI7QUUvR0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FGaUhKO0FFdEhBO0VBUVEsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBRmlIUjtBRTNIQTtFQVlZLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUZpSFo7QUVySUE7O0VEcUNJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQ2RnQixlQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FGbUhwQjtBRTlJQTtFQThCb0IsaUJBQUE7QUZtSHBCO0FFakpBO0VBaUNvQixtQkFBQTtBRm1IcEIiLCJmaWxlIjoicHJvamVjdHMvYnVzaW5lc3NnYXRlL3NyYy9hcHAvY2FyZHMvc3RhY2staGVhZGVyLWNhcmQvc3RhY2staGVhZGVyLWNhcmQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Vhcmx5YWNjZXNzL29wZW5zYW5zaGVicmV3LmNzcyc7XG4vKiBjb250YWluZXIgKi9cbi8qIGNvbG9ycyAqL1xuLyogZm9udHMgKi9cbi5mb250MSB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIEhlYnJldycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogTmFya2lzcztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvTmFya2lzc0Jsb2NrQ29uZGVuc2VkLVJlZ3VsYXItVFJJQUwub3RmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBOYXJraXNzO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvTmFya2lzc0Jsb2NrQ29uZGVuc2VkLUJvbGQtVFJJQUwub3RmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuLmZvbnQyIHtcbiAgZm9udC1mYW1pbHk6IE5hcmtpc3MsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi8qIHRvIHRleHQgKi9cbi50by10ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBIZWJyZXcnLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMzYwNjI3O1xufVxuLyogb3B0aW9ucyB0ZXh0ICovXG4ub3B0aW9ucy10ZXh0IHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LWZhbWlseTogTmFya2lzcywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzJDM0MzQjtcbn1cbi8qIGZyb20gdGV4dCAqL1xuLmZyb20tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IE5hcmtpc3MsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uY2FyZC10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBOYXJraXNzLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMzYwNjI3O1xufVxuLmNhcmQtdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIEhlYnJldycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMzNjA2Mjc7XG59XG4uZ2FsbGVyeS10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBOYXJraXNzLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICMzNjA2Mjc7XG59XG4uZ2FsbGVyeS10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IE5hcmtpc3MsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzM2MDYyNztcbn1cbi8qIGJ1YmJsZXMgKi9cbi5ib3QtbWVzc2FnZSB7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMHB4ICNDQkQ2RDk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHggMXB4IDEycHggMTJweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgSGVicmV3Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzM2MDYyNztcbn1cbi5ib3Qtb3B0aW9uIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJDM0MzQjtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAwcHggIzJDM0MzQjtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIG1hcmdpbjogMCA0cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LWZhbWlseTogTmFya2lzcywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzJDM0MzQjtcbn1cbi8qIHV0aWxpdGllcyAqL1xuLm5vLXNjcm9sbGJhcnMge1xuICAvKkZpcmVGb3gqL1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gIC8qSUUxMCsqL1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcbn1cbi5uby1zY3JvbGxiYXJzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIC8qQ2hyb21lLCBTYWZhcmksIEVkZ2UqL1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDE0MHB4O1xuICBtaW4td2lkdGg6IDE0MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdCBhcHAtYmFzZS1jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xufVxuOmhvc3QgYXBwLWJhc2UtY2FyZCAuY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHggMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbjpob3N0IGFwcC1iYXNlLWNhcmQgLmNvbnRlbnQgPiAudGl0bGUgaDEsXG46aG9zdCBhcHAtYmFzZS1jYXJkIC5jb250ZW50ID4gLnRpdGxlIGgyIHtcbiAgZm9udC1mYW1pbHk6IE5hcmtpc3MsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuOmhvc3QgYXBwLWJhc2UtY2FyZCAuY29udGVudCA+IC50aXRsZSBoMSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuOmhvc3QgYXBwLWJhc2UtY2FyZCAuY29udGVudCA+IC50aXRsZSBoMiB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4iLCJAaW1wb3J0IChjc3MpICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Vhcmx5YWNjZXNzL29wZW5zYW5zaGVicmV3LmNzcyc7XG5cbi8qIGNvbnRhaW5lciAqL1xuQGJhY2tncm91bmQtaW1hZ2U6IHVybChhc3NldHMvaW1nL2JhY2tncm91bmQucG5nKTtcbkBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuQGNvbnRhaW5lci1wYWRkaW5nOiAyMHB4O1xuXG4vKiBjb2xvcnMgKi9cbkB3aGl0ZTogI2ZmZjtcbkBhY2NlbnQtdGV4dDogIzM2MDYyNztcbkBibGFjay03MDA6ICMyQzNDM0I7XG5AYmxhY2stNTAwOiAjNzM3MzczO1xuQGdyYXktZjY6ICNmNmY2ZjY7XG5AZ3JheS05NzogIzk3OTc5NztcbkB3aGl0ZTogI2ZmZmZmZjtcbkBhY2NlbnQtMTAwOiAjRjlGN0Y3O1xuQG9yYW5nZS03MDA6ICM5RjA5MDk7XG5AZGVtb2dyYXBoaWNzLTcwMDogIzBGODA0MjtcblxuLyogZm9udHMgKi9cbi5mb250MSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgSGVicmV3Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn0gXG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBOYXJraXNzO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgc3JjOiB1cmwoXCJhc3NldHMvZm9udHMvTmFya2lzc0Jsb2NrQ29uZGVuc2VkLVJlZ3VsYXItVFJJQUwub3RmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogTmFya2lzcztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBzcmM6IHVybChcImFzc2V0cy9mb250cy9OYXJraXNzQmxvY2tDb25kZW5zZWQtQm9sZC1UUklBTC5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5cbi5mb250MiB7XG4gICAgZm9udC1mYW1pbHk6IE5hcmtpc3MsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi8qIHRvIHRleHQgKi9cbi50by10ZXh0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgLmZvbnQxO1xuICAgIGNvbG9yOiBAYWNjZW50LXRleHQ7XG59XG5cbi8qIG9wdGlvbnMgdGV4dCAqL1xuLm9wdGlvbnMtdGV4dCB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIC5mb250MjtcbiAgICBjb2xvcjogQGJsYWNrLTcwMDtcbn1cblxuLyogZnJvbSB0ZXh0ICovXG4uZnJvbS10ZXh0IHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgLmZvbnQyO1xuICAgIGNvbG9yOiBAd2hpdGU7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgICAuZm9udDI7XG4gICAgY29sb3I6IEBhY2NlbnQtdGV4dDtcbn1cblxuLmNhcmQtdGV4dCB7XG4gICAgLmZvbnQxO1xuICAgIGNvbG9yOiBAYWNjZW50LXRleHQ7XG59XG5cbi5nYWxsZXJ5LXRpdGxlIHtcbiAgICAuZm9udDI7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6IEBhY2NlbnQtdGV4dDtcbn1cblxuLmdhbGxlcnktdGV4dCB7XG4gICAgLmZvbnQyO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiBAYWNjZW50LXRleHQ7XG59XG5cbi8qIGJ1YmJsZXMgKi9cbi5ib3QtbWVzc2FnZSB7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDBweCAjQ0JENkQ5O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMXB4IDEycHggMTJweDtcblxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuXG4gICAgLnRvLXRleHQ7XG59XG5cbi5ib3Qtb3B0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIEBibGFjay03MDA7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAwcHggQGJsYWNrLTcwMDtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgbWFyZ2luOiAwIDRweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIC5vcHRpb25zLXRleHQ7XG59XG5cbi8qIHV0aWxpdGllcyAqL1xuLm5vLXNjcm9sbGJhcnMge1xuICAgIC8qRmlyZUZveCovXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAgIC8qSUUxMCsqL1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAvKkNocm9tZSwgU2FmYXJpLCBFZGdlKi9cbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9IFxufVxuXG4vLyBAYmx1ZWdyZWVuOiAjMDA4MDdjO1xuLy8gQGZhZGVkLWJsdWVncmVlbjogI2U1ZjJmMTtcbi8vIEBjaGFyY29hbDogIzJjM2MzYjtcbi8vIEBhdWJlcmdpbmU6ICM0ODBhMzU7XG4vLyBAc2VhZm9hbS1ibHVlOiAjNmVkZWRhO1xuLy8gQGNvb2wtZ3JleTogIzg5YTlhODtcbi8vIEBwYWxlLWJsdWU6ICNkOWYyZjE7XG4vLyBAd2hpdGU6ICNmNmY2ZjY7XG5cblxuLy8gLmN0YSB7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgIGZsZXg6IDAgMCBhdXRvO1xuLy8gICAgIG1hcmdpbi10b3A6IGF1dG87XG4vLyAgICAgd2lkdGg6IDEwMCU7XG5cbi8vICAgICAuYnV0dG9uIHtcbi8vICAgICAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICAgICAgZmxleC1mbG93OiByb3c7XG4vLyAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4vLyAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IEBzZWFmb2FtLWJsdWU7ICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAcGFsZS1ibHVlO1xuLy8gICAgICAgICBmb250LXNpemU6IDE4cHg7XG4vLyAgICAgICAgIGNvbG9yOiBAYmx1ZWdyZWVuO1xuLy8gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbi8vICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbi8vICAgICAgICAgcGFkZGluZzogNHB4IDIwcHg7XG4vLyAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuLy8gICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbi8vICAgICAgICAgaW1nIHtcbi8vICAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7ICAgXG4vLyAgICAgICAgIH1cblxuLy8gICAgIH1cblxuLy8gfVxuXG4vLyAudmlzdWFsbHktaGlkZGVuIHtcbi8vICAgICBib3JkZXI6IDA7XG4vLyAgICAgY2xpcDogcmVjdCgxcHgsMXB4LDFweCwxcHgpO1xuLy8gICAgIC13ZWJraXQtY2xpcC1wYXRoOiBpbnNldCg1MCUpO1xuLy8gICAgIGNsaXAtcGF0aDogaW5zZXQoNTAlKTtcbi8vICAgICBoZWlnaHQ6IDFweDtcbi8vICAgICBtYXJnaW46IC0xcHg7XG4vLyAgICAgbWFyZ2luLXRvcDogLTFweDtcbi8vICAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyAgICAgcGFkZGluZzogMDtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgd2lkdGg6IDFweDtcbi8vICAgICB3b3JkLXdyYXA6IG5vcm1hbDtcbi8vIH1cblxuLy8gLnBsYWNlaG9sZGVyLXR4IHtcbi8vICAgICBkaXNwbGF5OiBub25lO1xuLy8gfVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vY29tbW9uLmxlc3MnO1xuXG46aG9zdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTQwcHg7XG4gICAgbWluLXdpZHRoOiAxNDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICBhcHAtYmFzZS1jYXJkIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMTZweDtcbiAgICAgICAgXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgXG4gICAgICAgICAgICA+IC50aXRsZSB7XG4gICAgICAgICAgICAgICAgaDEsIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgLmZvbnQyO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StackHeaderCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stack-header-card',
                templateUrl: './stack-header-card.component.html',
                styleUrls: ['./stack-header-card.component.less']
            }]
    }], function () { return []; }, { width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], stack: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], params: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/cards/title-card/title-card.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/cards/title-card/title-card.component.ts ***!
  \**********************************************************/
/*! exports provided: TitleCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleCardComponent", function() { return TitleCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_card_base_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-card/base-card.component */ "./src/app/cards/base-card/base-card.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function TitleCardComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r1);
} }
class TitleCardComponent {
    constructor() {
        this.width = 0;
    }
    ngOnInit() {
    }
}
TitleCardComponent.ɵfac = function TitleCardComponent_Factory(t) { return new (t || TitleCardComponent)(); };
TitleCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TitleCardComponent, selectors: [["app-title-card"]], inputs: { width: "width", stack: "stack", params: "params" }, decls: 14, vars: 7, consts: [[3, "width"], [1, "content", "scheme-primary-bg"], [1, "owner"], [3, "src"], [1, "deets"], [1, "name"], [1, "title"], [3, "innerHtml"], [1, "tags"], ["class", "tag scheme-primary-fg", 4, "ngFor", "ngForOf"], [1, "tag", "scheme-primary-fg"]], template: function TitleCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-base-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TitleCardComponent_span_13_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.stack.owner.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.stack.owner.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.stack.owner.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.params.__runner.fillIn(ctx.stack.title), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.params.__runner.fillIn(ctx.stack.subtitle), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stack.tags);
    } }, directives: [_base_card_base_card_component__WEBPACK_IMPORTED_MODULE_1__["BaseCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["@import 'https://fonts.googleapis.com/earlyaccess/opensanshebrew.css';\n\n\n\n.font1[_ngcontent-%COMP%] {\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n}\n@font-face {\n  font-family: Narkiss;\n  font-weight: normal;\n  src: url('NarkissBlockCondensed-Regular-TRIAL.otf') format(\"opentype\");\n}\n@font-face {\n  font-family: Narkiss;\n  font-weight: bold;\n  src: url('NarkissBlockCondensed-Bold-TRIAL.otf') format(\"opentype\");\n}\n.font2[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n}\n\n.to-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n\n.options-text[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #2C3C3B;\n}\n\n.from-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #ffffff;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n.card-text[_ngcontent-%COMP%] {\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n.gallery-title[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-weight: 700;\n  font-size: 24px;\n  color: #360627;\n}\n.gallery-text[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-weight: 300;\n  font-size: 24px;\n  color: #360627;\n}\n\n.bot-message[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  box-shadow: 0px 2px 0px #CBD6D9;\n  border-radius: 12px 1px 12px 12px;\n  padding: 8px 16px;\n  font-size: 16px;\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n.bot-option[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #2C3C3B;\n  box-shadow: 0px 2px 0px #2C3C3B;\n  border-radius: 24px;\n  padding: 8px 16px;\n  margin: 0 4px;\n  white-space: nowrap;\n  cursor: pointer;\n  font-size: 22px;\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #2C3C3B;\n}\n\n.no-scrollbars[_ngcontent-%COMP%] {\n  \n  scrollbar-width: none;\n  \n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n.no-scrollbars[_ngcontent-%COMP%]::-webkit-scrollbar {\n  \n  display: none;\n}\n.content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 20px 16px;\n  display: flex;\n  flex-flow: column;\n}\n.content[_ngcontent-%COMP%]    > .owner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n}\n.content[_ngcontent-%COMP%]    > .owner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 24px;\n  border: 2px solid #2C3C3B;\n}\n.content[_ngcontent-%COMP%]    > .owner[_ngcontent-%COMP%]   .deets[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  margin: 0 8px;\n}\n.content[_ngcontent-%COMP%]    > .owner[_ngcontent-%COMP%]   .deets[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  line-height: 18px;\n}\n.content[_ngcontent-%COMP%]    > .owner[_ngcontent-%COMP%]   .deets[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.content[_ngcontent-%COMP%]    > .owner[_ngcontent-%COMP%]   .deets[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 300;\n}\n.content[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: 16px;\n}\n.content[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 48px;\n  margin: 0;\n  line-height: 40px;\n}\n.content[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.content[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n.content[_ngcontent-%COMP%]    > .tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n}\n.content[_ngcontent-%COMP%]    > .tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  background-color: #360627;\n  font-size: 18px;\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  margin-left: 4px;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2J1c2luZXNzZ2F0ZS9zcmMvYXBwL2NhcmRzL3RpdGxlLWNhcmQvdGl0bGUtY2FyZC5jb21wb25lbnQubGVzcyIsIi9Vc2Vycy9hZGFtL0NvZGUvaGFzYWRuYS9idXNpbmVzc2dhdGUvdWkvcHJvamVjdHMvYnVzaW5lc3NnYXRlL3NyYy9jb21tb24ubGVzcyIsIi9Vc2Vycy9hZGFtL0NvZGUvaGFzYWRuYS9idXNpbmVzc2dhdGUvdWkvcHJvamVjdHMvYnVzaW5lc3NnYXRlL3NyYy9hcHAvY2FyZHMvdGl0bGUtY2FyZC90aXRsZS1jYXJkLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFFQ0FjO0FEQ2QsY0FBYztBQUNkLFdBQVc7QUFDWCxVQUFVO0FDaUJWO0VBQ0ksMkNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEZko7QUNrQkE7RUFDSSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0VBQUE7QURoQko7QUNtQkE7RUFDSSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUVBQUE7QURqQko7QUNvQkE7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURsQko7QUFDQSxZQUFZO0FDcUJaO0VBQ0ksZUFBQTtFQXpCQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUF5QkEsY0FBQTtBRGpCSjtBQUNBLGlCQUFpQjtBQ29CakI7RUFDSSxlQUFBO0VBZEEsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBY0EsY0FBQTtBRGhCSjtBQUNBLGNBQWM7QUNtQmQ7RUFDSSxlQUFBO0VBckJBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQXFCQSxjQUFBO0FEZko7QUNrQkE7RUExQkksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBMEJBLGNBQUE7QURkSjtBQ2lCQTtFQWpESSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFpREEsY0FBQTtBRGJKO0FDZ0JBO0VBcENJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQW9DQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FEWko7QUNlQTtFQTNDSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUEyQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBRFhKO0FBQ0EsWUFBWTtBQ2NaO0VBQ0ksbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBRUEsaUJBQUE7RUFqREEsZUFBQTtFQXpCQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUF5QkEsY0FBQTtBRHVDSjtBQ2FBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFFQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUF4REEsZUFBQTtFQWRBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQWNBLGNBQUE7QUQrQ0o7QUFDQSxjQUFjO0FDWWQ7RURWRSxVQUFVO0VDWVIscUJBQUE7RURWRixRQUFRO0VDWU4sNENBQUE7QURWSjtBQ1dJO0VEVEYsdUJBQXVCO0VDV2pCLGFBQUE7QURUUjtBRS9HQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0EsaUJBQUE7QUZnSEo7QUV0SEE7RUFTUSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FGZ0hSO0FFM0hBO0VBY1ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FGZ0haO0FFaklBO0VBcUJZLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUYrR1o7QUV0SUE7RURxQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VDYlksZUFBQTtFQUNBLGlCQUFBO0FGa0hoQjtBRTdJQTtFQThCZ0IsZ0JBQUE7QUZrSGhCO0FFaEpBO0VBaUNnQixnQkFBQTtBRmtIaEI7QUVuSkE7RUFzQ1EsZ0JBQUE7RUFDQSxtQkFBQTtBRmdIUjtBRXZKQTs7RURxQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VDR1EsZUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBRm9IWjtBRWhLQTtFQStDWSxpQkFBQTtBRm9IWjtBRW5LQTtFQWtEWSxtQkFBQTtBRm9IWjtBRXRLQTtFQXNEUSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FGbUhSO0FFM0tBO0VBMkRZLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VEeEJSLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQ3dCUSxnQkFBQTtFQUNBLGtCQUFBO0FGcUhaIiwiZmlsZSI6InByb2plY3RzL2J1c2luZXNzZ2F0ZS9zcmMvYXBwL2NhcmRzL3RpdGxlLWNhcmQvdGl0bGUtY2FyZC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vZWFybHlhY2Nlc3Mvb3BlbnNhbnNoZWJyZXcuY3NzJztcbi8qIGNvbnRhaW5lciAqL1xuLyogY29sb3JzICovXG4vKiBmb250cyAqL1xuLmZvbnQxIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgSGVicmV3Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBOYXJraXNzO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9OYXJraXNzQmxvY2tDb25kZW5zZWQtUmVndWxhci1UUklBTC5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IE5hcmtpc3M7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBzcmM6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9OYXJraXNzQmxvY2tDb25kZW5zZWQtQm9sZC1UUklBTC5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG4uZm9udDIge1xuICBmb250LWZhbWlseTogTmFya2lzcywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLyogdG8gdGV4dCAqL1xuLnRvLXRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIEhlYnJldycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMzNjA2Mjc7XG59XG4vKiBvcHRpb25zIHRleHQgKi9cbi5vcHRpb25zLXRleHQge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtZmFtaWx5OiBOYXJraXNzLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMkMzQzNCO1xufVxuLyogZnJvbSB0ZXh0ICovXG4uZnJvbS10ZXh0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogTmFya2lzcywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5jYXJkLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IE5hcmtpc3MsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMzNjA2Mjc7XG59XG4uY2FyZC10ZXh0IHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgSGVicmV3Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzM2MDYyNztcbn1cbi5nYWxsZXJ5LXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IE5hcmtpc3MsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzM2MDYyNztcbn1cbi5nYWxsZXJ5LXRleHQge1xuICBmb250LWZhbWlseTogTmFya2lzcywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjMzYwNjI3O1xufVxuLyogYnViYmxlcyAqL1xuLmJvdC1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAwcHggI0NCRDZEOTtcbiAgYm9yZGVyLXJhZGl1czogMTJweCAxcHggMTJweCAxMnB4O1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBIZWJyZXcnLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMzYwNjI3O1xufVxuLmJvdC1vcHRpb24ge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMkMzQzNCO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDBweCAjMkMzQzNCO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgbWFyZ2luOiAwIDRweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtZmFtaWx5OiBOYXJraXNzLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMkMzQzNCO1xufVxuLyogdXRpbGl0aWVzICovXG4ubm8tc2Nyb2xsYmFycyB7XG4gIC8qRmlyZUZveCovXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgLypJRTEwKyovXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xufVxuLm5vLXNjcm9sbGJhcnM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgLypDaHJvbWUsIFNhZmFyaSwgRWRnZSovXG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHggMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG59XG4uY29udGVudCA+IC5vd25lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRlbnQgPiAub3duZXIgaW1nIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzJDM0MzQjtcbn1cbi5jb250ZW50ID4gLm93bmVyIC5kZWV0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBtYXJnaW46IDAgOHB4O1xufVxuLmNvbnRlbnQgPiAub3duZXIgLmRlZXRzIHNwYW4ge1xuICBmb250LWZhbWlseTogTmFya2lzcywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuLmNvbnRlbnQgPiAub3duZXIgLmRlZXRzIC5uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jb250ZW50ID4gLm93bmVyIC5kZWV0cyAudGl0bGUge1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmNvbnRlbnQgPiAudGl0bGUge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLmNvbnRlbnQgPiAudGl0bGUgaDEsXG4uY29udGVudCA+IC50aXRsZSBoMiB7XG4gIGZvbnQtZmFtaWx5OiBOYXJraXNzLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogNDBweDtcbn1cbi5jb250ZW50ID4gLnRpdGxlIGgxIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGVudCA+IC50aXRsZSBoMiB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uY29udGVudCA+IC50YWdzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGVudCA+IC50YWdzIC50YWcge1xuICBwYWRkaW5nOiAycHggOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYwNjI3O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBOYXJraXNzLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbiIsIkBpbXBvcnQgKGNzcykgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vZWFybHlhY2Nlc3Mvb3BlbnNhbnNoZWJyZXcuY3NzJztcblxuLyogY29udGFpbmVyICovXG5AYmFja2dyb3VuZC1pbWFnZTogdXJsKGFzc2V0cy9pbWcvYmFja2dyb3VuZC5wbmcpO1xuQGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG5AY29udGFpbmVyLXBhZGRpbmc6IDIwcHg7XG5cbi8qIGNvbG9ycyAqL1xuQHdoaXRlOiAjZmZmO1xuQGFjY2VudC10ZXh0OiAjMzYwNjI3O1xuQGJsYWNrLTcwMDogIzJDM0MzQjtcbkBibGFjay01MDA6ICM3MzczNzM7XG5AZ3JheS1mNjogI2Y2ZjZmNjtcbkBncmF5LTk3OiAjOTc5Nzk3O1xuQHdoaXRlOiAjZmZmZmZmO1xuQGFjY2VudC0xMDA6ICNGOUY3Rjc7XG5Ab3JhbmdlLTcwMDogIzlGMDkwOTtcbkBkZW1vZ3JhcGhpY3MtNzAwOiAjMEY4MDQyO1xuXG4vKiBmb250cyAqL1xuLmZvbnQxIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucyBIZWJyZXcnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xufSBcblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IE5hcmtpc3M7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBzcmM6IHVybChcImFzc2V0cy9mb250cy9OYXJraXNzQmxvY2tDb25kZW5zZWQtUmVndWxhci1UUklBTC5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBOYXJraXNzO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHNyYzogdXJsKFwiYXNzZXRzL2ZvbnRzL05hcmtpc3NCbG9ja0NvbmRlbnNlZC1Cb2xkLVRSSUFMLm90ZlwiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cblxuLmZvbnQyIHtcbiAgICBmb250LWZhbWlseTogTmFya2lzcywgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLyogdG8gdGV4dCAqL1xuLnRvLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAuZm9udDE7XG4gICAgY29sb3I6IEBhY2NlbnQtdGV4dDtcbn1cblxuLyogb3B0aW9ucyB0ZXh0ICovXG4ub3B0aW9ucy10ZXh0IHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgLmZvbnQyO1xuICAgIGNvbG9yOiBAYmxhY2stNzAwO1xufVxuXG4vKiBmcm9tIHRleHQgKi9cbi5mcm9tLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAuZm9udDI7XG4gICAgY29sb3I6IEB3aGl0ZTtcbn1cblxuLmNhcmQtdGl0bGUge1xuICAgIC5mb250MjtcbiAgICBjb2xvcjogQGFjY2VudC10ZXh0O1xufVxuXG4uY2FyZC10ZXh0IHtcbiAgICAuZm9udDE7XG4gICAgY29sb3I6IEBhY2NlbnQtdGV4dDtcbn1cblxuLmdhbGxlcnktdGl0bGUge1xuICAgIC5mb250MjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogQGFjY2VudC10ZXh0O1xufVxuXG4uZ2FsbGVyeS10ZXh0IHtcbiAgICAuZm9udDI7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6IEBhY2NlbnQtdGV4dDtcbn1cblxuLyogYnViYmxlcyAqL1xuLmJvdC1tZXNzYWdlIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggMHB4ICNDQkQ2RDk7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweCAxcHggMTJweCAxMnB4O1xuXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG5cbiAgICAudG8tdGV4dDtcbn1cblxuLmJvdC1vcHRpb24ge1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgQGJsYWNrLTcwMDtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDBweCBAYmxhY2stNzAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG5cbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICBtYXJnaW46IDAgNHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgLm9wdGlvbnMtdGV4dDtcbn1cblxuLyogdXRpbGl0aWVzICovXG4ubm8tc2Nyb2xsYmFycyB7XG4gICAgLypGaXJlRm94Ki9cbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgLypJRTEwKyovXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIC8qQ2hyb21lLCBTYWZhcmksIEVkZ2UqL1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH0gXG59XG5cbi8vIEBibHVlZ3JlZW46ICMwMDgwN2M7XG4vLyBAZmFkZWQtYmx1ZWdyZWVuOiAjZTVmMmYxO1xuLy8gQGNoYXJjb2FsOiAjMmMzYzNiO1xuLy8gQGF1YmVyZ2luZTogIzQ4MGEzNTtcbi8vIEBzZWFmb2FtLWJsdWU6ICM2ZWRlZGE7XG4vLyBAY29vbC1ncmV5OiAjODlhOWE4O1xuLy8gQHBhbGUtYmx1ZTogI2Q5ZjJmMTtcbi8vIEB3aGl0ZTogI2Y2ZjZmNjtcblxuXG4vLyAuY3RhIHtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGZsZXgtZmxvdzogY29sdW1uO1xuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAgZmxleDogMCAwIGF1dG87XG4vLyAgICAgbWFyZ2luLXRvcDogYXV0bztcbi8vICAgICB3aWR0aDogMTAwJTtcblxuLy8gICAgIC5idXR0b24ge1xuLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgICAgICBmbGV4LWZsb3c6IHJvdztcbi8vICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogMThweDtcbi8vICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggQHNlYWZvYW0tYmx1ZTsgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBwYWxlLWJsdWU7XG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbi8vICAgICAgICAgY29sb3I6IEBibHVlZ3JlZW47XG4vLyAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuLy8gICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuLy8gICAgICAgICBwYWRkaW5nOiA0cHggMjBweDtcbi8vICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4vLyAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuLy8gICAgICAgICBpbWcge1xuLy8gICAgICAgICAgICAgbWFyZ2luOiAwIDVweDsgICBcbi8vICAgICAgICAgfVxuXG4vLyAgICAgfVxuXG4vLyB9XG5cbi8vIC52aXN1YWxseS1oaWRkZW4ge1xuLy8gICAgIGJvcmRlcjogMDtcbi8vICAgICBjbGlwOiByZWN0KDFweCwxcHgsMXB4LDFweCk7XG4vLyAgICAgLXdlYmtpdC1jbGlwLXBhdGg6IGluc2V0KDUwJSk7XG4vLyAgICAgY2xpcC1wYXRoOiBpbnNldCg1MCUpO1xuLy8gICAgIGhlaWdodDogMXB4O1xuLy8gICAgIG1hcmdpbjogLTFweDtcbi8vICAgICBtYXJnaW4tdG9wOiAtMXB4O1xuLy8gICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vICAgICBwYWRkaW5nOiAwO1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB3aWR0aDogMXB4O1xuLy8gICAgIHdvcmQtd3JhcDogbm9ybWFsO1xuLy8gfVxuXG4vLyAucGxhY2Vob2xkZXItdHgge1xuLy8gICAgIGRpc3BsYXk6IG5vbmU7XG4vLyB9XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi9jb21tb24ubGVzcyc7XG5cbi5jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMjBweCAxNnB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcblxuICAgID4gLm93bmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIEBibGFjay03MDA7XG4gICAgICAgIH1cblxuICAgICAgICAuZGVldHMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDhweDtcbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIC5mb250MjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmFtZSB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICA+IC50aXRsZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgIGgxLCBoMiB7XG4gICAgICAgICAgICAuZm9udDI7XG4gICAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICB9XG4gICAgfVxuICAgID4gLnRhZ3Mge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IHJvdztcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAudGFnIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCA4cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYWNjZW50LXRleHQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAuZm9udDI7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitleCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-title-card',
                templateUrl: './title-card.component.html',
                styleUrls: ['./title-card.component.less']
            }]
    }], function () { return []; }, { width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], stack: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], params: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/chat-msgs/chat-msg-card-stack/chat-msg-card-stack.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/chat-msgs/chat-msg-card-stack/chat-msg-card-stack.component.ts ***!
  \********************************************************************************/
/*! exports provided: ChatMsgCardStackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMsgCardStackComponent", function() { return ChatMsgCardStackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mapbox-gl */ "../../node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _turf_turf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @turf/turf */ "../../node_modules/@turf/turf/turf.min.js");
/* harmony import */ var _turf_turf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_turf_turf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _widgets_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../widgets.service */ "./src/app/widgets.service.ts");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../backend.service */ "./src/app/backend.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _cards_stack_header_card_stack_header_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../cards/stack-header-card/stack-header-card.component */ "./src/app/cards/stack-header-card/stack-header-card.component.ts");
/* harmony import */ var _cards_title_card_title_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../cards/title-card/title-card.component */ "./src/app/cards/title-card/title-card.component.ts");
/* harmony import */ var _cards_simple_card_simple_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../cards/simple-card/simple-card.component */ "./src/app/cards/simple-card/simple-card.component.ts");
/* harmony import */ var _cards_gallery_card_gallery_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../cards/gallery-card/gallery-card.component */ "./src/app/cards/gallery-card/gallery-card.component.ts");
/* harmony import */ var _cards_scores_card_scores_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../cards/scores-card/scores-card.component */ "./src/app/cards/scores-card/scores-card.component.ts");
/* harmony import */ var _cards_chatlike_ending_card_chatlike_ending_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../cards/chatlike-ending-card/chatlike-ending-card.component */ "./src/app/cards/chatlike-ending-card/chatlike-ending-card.component.ts");
















const _c0 = ["stackEl"];
const _c1 = ["wrapperEl"];
function ChatMsgCardStackComponent_div_2_app_stack_header_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-stack-header-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatMsgCardStackComponent_div_2_app_stack_header_card_1_Template_app_stack_header_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _stack_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.selectStack(_stack_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _stack_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r5.colorSchemeClass(_stack_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("params", ctx_r5.params)("stack", _stack_r6);
} }
function ChatMsgCardStackComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatMsgCardStackComponent_div_2_app_stack_header_card_1_Template, 1, 4, "app-stack-header-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx_r1.opened)("slidden", ctx_r1.selectorsSlidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.stacks);
} }
function ChatMsgCardStackComponent_ng_container_5_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-simple-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r12 = ctx_r16.index;
    const card_r11 = ctx_r16.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", ctx_r13.transform(i_r12 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("params", ctx_r13.params)("card", card_r11)("width", ctx_r13.width);
} }
function ChatMsgCardStackComponent_ng_container_5_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-gallery-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function ChatMsgCardStackComponent_ng_container_5_ng_container_2_ng_container_2_Template_app_gallery_card_selected_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r17.returnValue($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r12 = ctx_r19.index;
    const card_r11 = ctx_r19.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", ctx_r14.transform(i_r12 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("params", ctx_r14.params)("card", card_r11)("width", ctx_r14.width);
} }
function ChatMsgCardStackComponent_ng_container_5_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-scores-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r12 = ctx_r20.index;
    const card_r11 = ctx_r20.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", ctx_r15.transform(i_r12 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("params", ctx_r15.params)("card", card_r11)("width", ctx_r15.width)("scheme", ctx_r15.stack.scheme)("current", ctx_r15.current());
} }
function ChatMsgCardStackComponent_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatMsgCardStackComponent_ng_container_5_ng_container_2_ng_container_1_Template, 2, 5, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatMsgCardStackComponent_ng_container_5_ng_container_2_ng_container_2_Template, 2, 5, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatMsgCardStackComponent_ng_container_5_ng_container_2_ng_container_3_Template, 2, 7, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const card_r11 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.layout(card_r11) === "simple");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.layout(card_r11) === "gallery");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.layout(card_r11) === "scores");
} }
function ChatMsgCardStackComponent_ng_container_5_app_chatlike_ending_card_3_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-chatlike-ending-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatMsgCardStackComponent_ng_container_5_app_chatlike_ending_card_3_Template_app_chatlike_ending_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.closeStack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", ctx_r10.transform(ctx_r10.cards.length + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("params", ctx_r10.params)("stack", ctx_r10.stack)("width", ctx_r10.width);
} }
function ChatMsgCardStackComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-title-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatMsgCardStackComponent_ng_container_5_Template_app_title_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.openStack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatMsgCardStackComponent_ng_container_5_ng_container_2_Template, 4, 3, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatMsgCardStackComponent_ng_container_5_app_chatlike_ending_card_3_Template, 1, 5, "app-chatlike-ending-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", ctx_r3.transform(0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("params", ctx_r3.params)("stack", ctx_r3.stack)("width", ctx_r3.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.cards);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.stack.goodbye);
} }
function ChatMsgCardStackComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatMsgCardStackComponent_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.returnValue(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx_r4.opened);
} }
class ChatMsgCardStackComponent {
    constructor(data, widgets, backend) {
        this.data = data;
        this.widgets = widgets;
        this.backend = backend;
        this.MAX_CARD_WIDTH = 348;
        this.PADDING = 60;
        this.PREFIX = 'red_';
        this.POLYGON_LAYERS = [
            'polygons_choropleth_pattern',
            'polygons_choropleth_line_base',
            'polygons_choropleth_lines',
            'polygons_choropleth_selected',
        ];
        this.LABEL_LAYERS = [
            'marker_selected',
            'markers_other'
        ];
        this.ISO_LAYERS = [
            'iso-fill',
            'iso-line',
            'iso-text',
        ];
        this.args = {};
        this.record = {};
        this.stack = null;
        this.stacks = [];
        this.cards = [];
        this.open = false;
        this.opened = false;
        this.width = 0;
        this.fullWidth = 0;
        this.selectorsSlidden = false;
        this.positionTransform = 'translateY(0)';
        this.mapPadding = {};
        this.returned = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
        this.mapFitParams = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.scrollSub = null;
        this.mapFitParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(100)).subscribe((x) => {
            this._fitMap(x[0], x[1], x[2]);
        });
        this.slideSelectors(false);
    }
    slideSelectors(slide) {
        this.selectorsSlidden = slide;
    }
    ngOnInit() {
        this.args = this.params['cards'];
        this.variable = this.args['variable'];
        this.variable2 = this.args['variable2'];
        this.runner = this.params.__runner;
        this.record = this.runner.record;
        this.data.stacks.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((result) => {
            if (this.args.stack) {
                return [result[this.args.stack]];
            }
            else if (this.args.stacks) {
                return this.args.stacks.map((s) => result[s]);
            }
            else if (this.args.stacksFrom) {
                return this.record[this.args.stacksFrom].map((s) => s.name ? s : result[s]);
            }
        })).subscribe((result) => {
            this.stacks = result;
            if (result.length === 1) {
                this.stack = result[0];
                this.cards = this.processCards();
            }
            if (this.params.__runFast) {
                if (this.variable) {
                    if (this.record[this.variable]) {
                        this.returnValue(this.record[this.variable]);
                    }
                }
                else {
                    this.returnValue();
                }
            }
        });
    }
    colorSchemeClass(stack) {
        if (stack) {
            return 'scheme-' + stack.scheme;
        }
        else {
            return '';
        }
    }
    ngAfterViewInit() {
        const el = this.stackEl.nativeElement;
        setTimeout(() => {
            this.fullWidth = el.offsetWidth;
            this.width = this.fullWidth - this.PADDING;
            if (this.width > this.MAX_CARD_WIDTH) {
                this.width = this.MAX_CARD_WIDTH;
            }
        }, 0);
    }
    transform(i) {
        if (this.open) {
            return 'translateX(0px) translateY(0px) rotate(0deg)';
        }
        else {
            const rotation = i > 0 ? (i * 777 % 10) - 5 : 0;
            const y = (i * 778) % 10;
            return 'translateX(' + i * this.width + 'px) translateY(' + y + 'px) rotate(' + rotation + 'deg)';
        }
    }
    calcPositionTransform() {
        if (this.open && this.stack && this.stack.map) {
            const el = this.wrapperEl.nativeElement;
            const bbox = el.getBoundingClientRect();
            const bottom = bbox.top + bbox.height;
            const height = window.innerHeight;
            console.log('BBBOX', bbox, height);
            this.positionTransform = 'translateY(' + (height - bottom - 40) + 'px)';
        }
        else {
            this.positionTransform = 'translateY(0px)';
        }
    }
    processCards() {
        const ret = [];
        if (this.stack.introTitle) {
            ret.push({
                title: this.stack.introTitle,
                content: this.stack.introContent,
                layout: 'simple'
            });
        }
        for (const card of this.stack.cards) {
            card.selectButtonText = card.selectButtonText || this.stack.selectButtonText;
            if (card.test) {
                if (this.runner.get(this.record, card.test)) {
                    ret.push(card);
                }
            }
            else {
                ret.push(card);
            }
        }
        return ret;
    }
    selectStack(stack) {
        this.stack = stack;
        this.cards = this.processCards();
        if (this.open || this.opened) {
            this.closeStack(true);
        }
        else {
            this.openStack();
        }
    }
    openStack() {
        this.open = true;
        this.content.setScrollLock(true);
        setTimeout(() => {
            const el = this.stackEl.nativeElement;
            this.fullWidth = el.offsetWidth;
            this.opened = true;
            if (this.stack.map) {
                this.scrollSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(el, 'scroll').subscribe((event) => {
                    let ticking = false;
                    let scrollPosition = event.target.scrollLeft;
                    if (!ticking) {
                        requestAnimationFrame(() => {
                            if (scrollPosition !== 0) {
                                scrollPosition = -scrollPosition - 20 + (this.fullWidth - this.width) / 2;
                            }
                            let fromCard = Math.floor(scrollPosition / this.width);
                            let interpolate = (scrollPosition % this.width) / this.width;
                            if (interpolate === 0 && fromCard !== 0) {
                                interpolate = 1;
                                fromCard -= 1;
                            }
                            this.fitMap(fromCard, fromCard + 1, interpolate);
                            ticking = false;
                        });
                        ticking = true;
                    }
                });
                this.showMap();
            }
            setTimeout(() => {
                el.scroll(-this.width, 0);
                setTimeout(() => {
                    this.calcPositionTransform();
                }, 1000);
            }, 0);
        }, 600);
    }
    closeStack(reopen) {
        this.open = false;
        this.map = null;
        this.content.setScrollLock(false);
        if (this.scrollSub) {
            this.scrollSub.unsubscribe();
            this.scrollSub = null;
        }
        this.closeMap();
        setTimeout(() => {
            this.opened = false;
            this.calcPositionTransform();
            setTimeout(() => {
                const el = this.stackEl.nativeElement;
                el.scroll(0, 0);
                if (this.stacks.length === 1) {
                    this.returned.next();
                }
                else if (reopen) {
                    this.openStack();
                }
            }, 0);
        }, 600);
    }
    returnValue(value) {
        if (this.variable) {
            this.record[this.variable] = value;
        }
        if (this.variable2) {
            this.record[this.variable2] = value;
        }
        if (this.open || this.opened) {
            this.closeStack();
        }
        this.returned.next();
    }
    wait() {
        return this.returned.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => {
            return this.backend.update(this.record);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => {
            const response = this.args.response;
            if (response) {
                return this.params.__runner.fillIn(response);
            }
            else {
                return false;
            }
        })).toPromise();
    }
    calculateGeometryBounds(geometry) {
        const ret = new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["LngLatBounds"]();
        if (geometry.type === 'FeatureCollection') {
            for (const feature of geometry.features) {
                ret.extend(this.calculateGeometryBounds(feature));
            }
        }
        else if (geometry.type === 'Feature') {
            return this.calculateGeometryBounds(geometry.geometry);
        }
        else if (geometry.type === 'Polygon') {
            for (const coordinates of geometry.coordinates) {
                for (const latlng of coordinates) {
                    ret.extend(latlng);
                }
            }
        }
        else {
            ret.extend(geometry.coordinates);
        }
        return ret;
    }
    calculatePoint(geometry) {
        if (geometry.type === 'Polygon') {
            return _turf_turf__WEBPACK_IMPORTED_MODULE_4__["pointOnFeature"](geometry);
        }
        else if (geometry.type === 'Point') {
            return geometry;
        }
        else if (geometry.type === 'Feature') {
            return this.calculatePoint(geometry.geometry);
        }
        else {
            return null;
        }
    }
    processGeometries() {
        this.fullBounds = new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["LngLatBounds"]();
        this.stack.bounds = [this.fullBounds];
        console.log('processGeometries', this.stack);
        const geometry = {
            type: 'FeatureCollection',
            features: []
        };
        const isochronesGeometry = {
            type: 'FeatureCollection',
            features: []
        };
        const pointGeometry = {
            type: 'FeatureCollection',
            features: []
        };
        this.cards.forEach((card) => {
            if (card.geometry) {
                card.geometry.properties.title = card.geometry.properties.title || card.title;
                card.geometry.properties.x = card.geometry.properties.x || 2;
                card.geometry.properties.selected = card.geometry.properties.selected || false;
                const cardBounds = this.calculateGeometryBounds(card.geometry);
                this.fullBounds.extend(cardBounds);
                this.stack.bounds.push(cardBounds);
                geometry.features.push(card.geometry);
                if (!card.pointGeometry) {
                    card.pointGeometry = this.calculatePoint(card.geometry);
                }
                card.pointGeometry.properties = card.geometry.properties;
                pointGeometry.features.push(card.pointGeometry);
            }
        });
        if (!this.stack.geometry) {
            this.stack.geometry = geometry;
        }
        else {
            this.fullBounds.extend(this.calculateGeometryBounds(this.stack.geometry));
            (this.stack.geometry.features || []).forEach((geometry) => {
                geometry.properties.x = geometry.properties.x || 2;
                if (this.stack.currentField) {
                    geometry.properties.selected = this.record.location && (geometry.properties.title === this.record.location[this.stack.currentField]);
                }
                else {
                    geometry.properties.selected = geometry.properties.selected || false;
                }
            });
        }
        if (!this.stack.isochronesGeometry) {
            this.stack.isochronesGeometry = isochronesGeometry;
        }
        else {
            this.fullBounds.extend(this.calculateGeometryBounds(this.stack.isochronesGeometry));
        }
        if (!this.stack.pointGeometry) {
            this.stack.pointGeometry = pointGeometry;
        }
        if (this.stack.bounds.length === 1) {
            this.cards.forEach(() => {
                this.stack.bounds.push(this.fullBounds);
            });
        }
        this.stack.bounds.push(this.fullBounds);
    }
    showMap() {
        this.processGeometries();
        if (this.stack.scheme === 'green') {
            this.PREFIX = 'green_';
        }
        this.cards.forEach((card) => {
            card.bounds = card.bounds || this.fullBounds;
        });
        this.widgets.mapBounds.next({ bounds: this.fullBounds, padding: {} });
        this.widgets.mapLoaded.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((x) => !!x), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe((map) => {
            this.map = map;
            map.addSource('data', { type: 'geojson', data: this.stack.geometry });
            map.addSource('pointData', { type: 'geojson', data: this.stack.pointGeometry });
            map.addSource('isochronesData', { type: 'geojson', data: this.stack.isochronesGeometry });
            const style = map.getStyle();
            for (const layer_id of this.POLYGON_LAYERS) {
                const layer = style.layers.filter((l) => l.id == this.PREFIX + layer_id)[0];
                const newLayer = {
                    id: layer_id,
                    type: layer.type,
                    source: 'data',
                    layout: Object.assign(layer.layout || {}, { visibility: 'visible' }),
                    paint: layer.paint,
                };
                if (layer.filter) {
                    newLayer.filter = layer.filter;
                }
                map.addLayer(newLayer);
            }
            for (const layer_id of this.ISO_LAYERS) {
                const layer = style.layers.filter((l) => l.id === layer_id)[0];
                map.addLayer({
                    id: '_' + layer_id,
                    type: layer.type,
                    source: 'isochronesData',
                    layout: Object.assign(layer.layout || {}, { visibility: 'visible' }),
                    paint: layer.paint,
                });
            }
            for (const layer_id of this.LABEL_LAYERS) {
                const layer = style.layers.filter((l) => l.id === layer_id)[0];
                map.addLayer({
                    id: '_' + layer_id,
                    type: layer.type,
                    source: 'pointData',
                    layout: Object.assign(layer.layout || {}, { visibility: 'visible' }),
                    paint: layer.paint,
                });
            }
            if (this.record.location && this.record.location.center) {
                map.addSource('centerData', { type: 'geojson', data: this.record.location.center });
                const layer = style.layers.filter((l) => l.id === 'center_symbol')[0];
                map.addLayer({
                    id: '_center_symbol',
                    type: layer.type,
                    source: 'centerData',
                    layout: Object.assign(layer.layout || {}, { visibility: 'visible' }),
                });
            }
            const el = this.wrapperEl.nativeElement;
            this.mapPadding = {
                top: 10, left: 10, right: 10, bottom: window.innerHeight - el.getBoundingClientRect().height
            };
            this.fitMap(1, 2, 0);
        });
    }
    fitMap(boundsIdx1, boundsIdx2, t) {
        this.mapFitParams.next([boundsIdx1, boundsIdx2, t]);
    }
    _fitMap(boundsIdx1, boundsIdx2, t) {
        if (!this.fullBounds) {
            return;
        }
        if (this.map) {
            const index = Math.round(boundsIdx1 + t) - 1;
            const card = this.cards[index];
            this.slideSelectors(!!card);
            if (card && card.geometry) {
                this.map.getSource('data').setData(card.geometry);
            }
            else {
                if (card && card.scores) {
                    const scores = {};
                    for (const score of card.scores) {
                        scores[score.title] = score.geometry_score;
                    }
                    for (const feature of this.stack.geometry.features) {
                        if (feature.properties) {
                            feature.properties.x = scores[feature.properties.title];
                        }
                    }
                    console.log(this.stack.geometry);
                }
                this.map.getSource('data').setData(this.stack.geometry);
            }
            let pointGeometry = {
                type: 'FeatureCollection',
                features: []
            };
            if (card && card.pointGeometry) {
                pointGeometry = card.pointGeometry;
            }
            else if (this.stack.pointGeometry) {
                pointGeometry = this.stack.pointGeometry;
            }
            this.map.getSource('pointData').setData(pointGeometry);
        }
        const bounds1 = this.stack.bounds[boundsIdx1];
        const bounds2 = this.stack.bounds[boundsIdx2];
        let bounds = bounds2;
        if (bounds1 !== bounds2) {
            bounds = new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["LngLatBounds"](new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["LngLat"]((1 - t) * bounds1.getSouthWest().lng + t * bounds2.getSouthWest().lng, (1 - t) * bounds1.getSouthWest().lat + t * bounds2.getSouthWest().lat), //sw
            new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["LngLat"]((1 - t) * bounds1.getNorthEast().lng + t * bounds2.getNorthEast().lng, (1 - t) * bounds1.getNorthEast().lat + t * bounds2.getNorthEast().lat));
        }
        this.widgets.mapBounds.next({ bounds: bounds, padding: this.mapPadding });
    }
    closeMap() {
        this.slideSelectors(false);
        this.widgets.mapBounds.next(null);
    }
    current() {
        if (this.stack.currentField && this.record && this.record.location) {
            return this.record.location[this.stack.currentField];
        }
    }
    layout(card) {
        return card.layout || this.stack.layout || 'simple';
    }
}
ChatMsgCardStackComponent.ɵfac = function ChatMsgCardStackComponent_Factory(t) { return new (t || ChatMsgCardStackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_widgets_service__WEBPACK_IMPORTED_MODULE_6__["WidgetsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_backend_service__WEBPACK_IMPORTED_MODULE_7__["BackendService"])); };
ChatMsgCardStackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatMsgCardStackComponent, selectors: [["app-chat-msg-card-stack"]], viewQuery: function ChatMsgCardStackComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stackEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wrapperEl = _t.first);
    } }, inputs: { params: "params", content: "content" }, decls: 7, vars: 11, consts: [[1, "stack-wrapper"], ["wrapperEl", ""], ["class", "stack-selectors", 3, "open", "slidden", 4, "ngIf"], [1, "stack"], ["stackEl", ""], [4, "ngIf"], ["class", "bot-option", 3, "open", "click", 4, "ngIf"], [1, "stack-selectors"], [3, "class", "params", "stack", "click", 4, "ngFor", "ngForOf"], [3, "params", "stack", "click"], [3, "params", "stack", "width", "click"], [4, "ngFor", "ngForOf"], [3, "params", "stack", "width", "transform", "click", 4, "ngIf"], [3, "params", "card", "width"], [3, "params", "card", "width", "selected"], [3, "params", "card", "width", "scheme", "current"], [1, "bot-option", 3, "click"], ["src", "assets/img/down-arrow.png"]], template: function ChatMsgCardStackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatMsgCardStackComponent_div_2_Template, 2, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatMsgCardStackComponent_ng_container_5_Template, 4, 7, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatMsgCardStackComponent_div_6_Template, 2, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform", ctx.positionTransform);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.stacks && ctx.stacks.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.colorSchemeClass(ctx.stack));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stack);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stacks.length > 1 || ctx.stack && !ctx.stack.disableClose);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _cards_stack_header_card_stack_header_card_component__WEBPACK_IMPORTED_MODULE_9__["StackHeaderCardComponent"], _cards_title_card_title_card_component__WEBPACK_IMPORTED_MODULE_10__["TitleCardComponent"], _cards_simple_card_simple_card_component__WEBPACK_IMPORTED_MODULE_11__["SimpleCardComponent"], _cards_gallery_card_gallery_card_component__WEBPACK_IMPORTED_MODULE_12__["GalleryCardComponent"], _cards_scores_card_scores_card_component__WEBPACK_IMPORTED_MODULE_13__["ScoresCardComponent"], _cards_chatlike_ending_card_chatlike_ending_card_component__WEBPACK_IMPORTED_MODULE_14__["ChatlikeEndingCardComponent"]], styles: ["@import 'https://fonts.googleapis.com/earlyaccess/opensanshebrew.css';\n\n\n\n.font1[_ngcontent-%COMP%] {\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n}\n@font-face {\n  font-family: Narkiss;\n  font-weight: normal;\n  src: url('NarkissBlockCondensed-Regular-TRIAL.otf') format(\"opentype\");\n}\n@font-face {\n  font-family: Narkiss;\n  font-weight: bold;\n  src: url('NarkissBlockCondensed-Bold-TRIAL.otf') format(\"opentype\");\n}\n.font2[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n}\n\n.to-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n\n.options-text[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #2C3C3B;\n}\n\n.from-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #ffffff;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n.card-text[_ngcontent-%COMP%] {\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n.gallery-title[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-weight: 700;\n  font-size: 24px;\n  color: #360627;\n}\n.gallery-text[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-weight: 300;\n  font-size: 24px;\n  color: #360627;\n}\n\n.bot-message[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  box-shadow: 0px 2px 0px #CBD6D9;\n  border-radius: 12px 1px 12px 12px;\n  padding: 8px 16px;\n  font-size: 16px;\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n.bot-option[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #2C3C3B;\n  box-shadow: 0px 2px 0px #2C3C3B;\n  border-radius: 24px;\n  padding: 8px 16px;\n  margin: 0 4px;\n  white-space: nowrap;\n  cursor: pointer;\n  font-size: 22px;\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #2C3C3B;\n}\n\n.no-scrollbars[_ngcontent-%COMP%] {\n  \n  scrollbar-width: none;\n  \n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n.no-scrollbars[_ngcontent-%COMP%]::-webkit-scrollbar {\n  \n  display: none;\n}\n[_nghost-%COMP%] {\n  width: calc(100% + 2 * 20px);\n}\n.stack-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  margin-bottom: 20px;\n  position: relative;\n  transition-property: transform;\n  transition-duration: 500ms;\n}\n.stack-wrapper[_ngcontent-%COMP%]   .scheme-yellow[_ngcontent-%COMP%]     .scheme-primary-bg {\n  background: #FFCB1E;\n}\n.stack-wrapper[_ngcontent-%COMP%]   .scheme-yellow[_ngcontent-%COMP%]     .scheme-primary-fg {\n  color: #FFCB1E;\n}\n.stack-wrapper[_ngcontent-%COMP%]   .scheme-yellow[_ngcontent-%COMP%]     .scheme-secondary-bg {\n  background: #FFCB1E;\n}\n.stack-wrapper[_ngcontent-%COMP%]   .scheme-blue[_ngcontent-%COMP%]     .scheme-primary-bg {\n  background: #A9F1E4;\n}\n.stack-wrapper[_ngcontent-%COMP%]   .scheme-blue[_ngcontent-%COMP%]     .scheme-primary-fg {\n  color: #A9F1E4;\n}\n.stack-wrapper[_ngcontent-%COMP%]   .scheme-blue[_ngcontent-%COMP%]     .scheme-secondary-bg {\n  background: #F2FAF6;\n}\n.stack-wrapper[_ngcontent-%COMP%]   .scheme-gray[_ngcontent-%COMP%]     .scheme-primary-bg {\n  background: #FFFFFF;\n}\n.stack-wrapper[_ngcontent-%COMP%]   .scheme-gray[_ngcontent-%COMP%]     .scheme-primary-fg {\n  color: #FFFFFF;\n}\n.stack-wrapper[_ngcontent-%COMP%]   .scheme-gray[_ngcontent-%COMP%]     .scheme-secondary-bg {\n  background: #F9F7F7;\n}\n.stack-wrapper[_ngcontent-%COMP%]   .scheme-peach[_ngcontent-%COMP%]     .scheme-primary-bg {\n  background: #FFB7AC;\n}\n.stack-wrapper[_ngcontent-%COMP%]   .scheme-peach[_ngcontent-%COMP%]     .scheme-primary-fg {\n  color: #FFB7AC;\n}\n.stack-wrapper[_ngcontent-%COMP%]   .scheme-peach[_ngcontent-%COMP%]     .scheme-secondary-bg {\n  background: #FCFDEE;\n}\n.stack-wrapper[_ngcontent-%COMP%]   .scheme-green[_ngcontent-%COMP%]     .scheme-primary-bg {\n  background: #6EDEA1;\n}\n.stack-wrapper[_ngcontent-%COMP%]   .scheme-green[_ngcontent-%COMP%]     .scheme-primary-fg {\n  color: #6EDEA1;\n}\n.stack-wrapper[_ngcontent-%COMP%]   .scheme-green[_ngcontent-%COMP%]     .scheme-secondary-bg {\n  background: #FCFDEE;\n}\n.stack-wrapper.open[_ngcontent-%COMP%] {\n  z-index: 10;\n}\n.stack-wrapper[_ngcontent-%COMP%]   .stack-selectors[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-flow: row;\n  justify-content: flex-start;\n  padding: 20px;\n  padding-bottom: 0;\n  overflow-x: scroll;\n  \n  scrollbar-width: none;\n  \n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  min-height: 160px;\n  z-index: 1;\n  opacity: 1;\n  transition-property: opacity;\n  transition-duration: 500ms;\n}\n.stack-wrapper[_ngcontent-%COMP%]   .stack-selectors[_ngcontent-%COMP%]::-webkit-scrollbar {\n  \n  display: none;\n}\n.stack-wrapper[_ngcontent-%COMP%]   .stack-selectors.slidden[_ngcontent-%COMP%] {\n  opacity: 0;\n  pointer-events: none;\n}\n.stack-wrapper[_ngcontent-%COMP%]   .stack[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-flow: row;\n  justify-content: flex-start;\n  padding: 20px;\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n.stack-wrapper[_ngcontent-%COMP%]   .stack[_ngcontent-%COMP%]   app-title-card[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n.stack-wrapper[_ngcontent-%COMP%]   .stack.open[_ngcontent-%COMP%] {\n  overflow-x: scroll;\n  scroll-behavior: smooth;\n  \n  scrollbar-width: none;\n  \n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  scroll-snap-type: x mandatory;\n  scroll-snap-stop: always;\n  z-index: 10;\n}\n.stack-wrapper[_ngcontent-%COMP%]   .stack.open[_ngcontent-%COMP%]::-webkit-scrollbar {\n  \n  display: none;\n}\n.stack-wrapper[_ngcontent-%COMP%]   .stack[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  scroll-snap-align: center;\n  transition-property: transform;\n  transition-duration: 500ms;\n}\n.stack-wrapper[_ngcontent-%COMP%]    > .bot-option[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 180px;\n  text-align: center;\n  font-size: 0px;\n}\n.stack-wrapper[_ngcontent-%COMP%]    > .bot-option[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 18px;\n}\n.stack-wrapper[_ngcontent-%COMP%]    > .bot-option.open[_ngcontent-%COMP%] {\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2J1c2luZXNzZ2F0ZS9zcmMvYXBwL2NoYXQtbXNncy9jaGF0LW1zZy1jYXJkLXN0YWNrL2NoYXQtbXNnLWNhcmQtc3RhY2suY29tcG9uZW50Lmxlc3MiLCIvVXNlcnMvYWRhbS9Db2RlL2hhc2FkbmEvYnVzaW5lc3NnYXRlL3VpL3Byb2plY3RzL2J1c2luZXNzZ2F0ZS9zcmMvY29tbW9uLmxlc3MiLCIvVXNlcnMvYWRhbS9Db2RlL2hhc2FkbmEvYnVzaW5lc3NnYXRlL3VpL3Byb2plY3RzL2J1c2luZXNzZ2F0ZS9zcmMvYXBwL2NoYXQtbXNncy9jaGF0LW1zZy1jYXJkLXN0YWNrL2NoYXQtbXNnLWNhcmQtc3RhY2suY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUVDQWM7QURDZCxjQUFjO0FBQ2QsV0FBVztBQUNYLFVBQVU7QUNpQlY7RUFDSSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURmSjtBQ2tCQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzRUFBQTtBRGhCSjtBQ21CQTtFQUNJLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtRUFBQTtBRGpCSjtBQ29CQTtFQUNJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRGxCSjtBQUNBLFlBQVk7QUNxQlo7RUFDSSxlQUFBO0VBekJBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQXlCQSxjQUFBO0FEakJKO0FBQ0EsaUJBQWlCO0FDb0JqQjtFQUNJLGVBQUE7RUFkQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFjQSxjQUFBO0FEaEJKO0FBQ0EsY0FBYztBQ21CZDtFQUNJLGVBQUE7RUFyQkEsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBcUJBLGNBQUE7QURmSjtBQ2tCQTtFQTFCSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUEwQkEsY0FBQTtBRGRKO0FDaUJBO0VBakRJLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQWlEQSxjQUFBO0FEYko7QUNnQkE7RUFwQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBb0NBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QURaSjtBQ2VBO0VBM0NJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQTJDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FEWEo7QUFDQSxZQUFZO0FDY1o7RUFDSSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUNBQUE7RUFFQSxpQkFBQTtFQWpEQSxlQUFBO0VBekJBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQXlCQSxjQUFBO0FEdUNKO0FDYUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUVBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQXhEQSxlQUFBO0VBZEEsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBY0EsY0FBQTtBRCtDSjtBQUNBLGNBQWM7QUNZZDtFRFZFLFVBQVU7RUNZUixxQkFBQTtFRFZGLFFBQVE7RUNZTiw0Q0FBQTtBRFZKO0FDV0k7RURURix1QkFBdUI7RUNXakIsYUFBQTtBRFRSO0FFbkdBO0VBQ0ksNEJBQUE7QUZxR0o7QUVsR0E7RUFDSSxXQUFBO0VBRUEsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtBRm1HSjtBRTVHQTtFQWNnQixtQkFBQTtBRmlHaEI7QUUvR0E7RUFrQmdCLGNBQUE7QUZnR2hCO0FFbEhBO0VBc0JnQixtQkFBQTtBRitGaEI7QUVySEE7RUE4QmdCLG1CQUFBO0FGMEZoQjtBRXhIQTtFQWtDZ0IsY0FBQTtBRnlGaEI7QUUzSEE7RUFzQ2dCLG1CQUFBO0FGd0ZoQjtBRTlIQTtFQThDZ0IsbUJBQUE7QUZtRmhCO0FFaklBO0VBa0RnQixjQUFBO0FGa0ZoQjtBRXBJQTtFQXNEZ0IsbUJBQUE7QUZpRmhCO0FFdklBO0VBOERnQixtQkFBQTtBRjRFaEI7QUUxSUE7RUFrRWdCLGNBQUE7QUYyRWhCO0FFN0lBO0VBc0VnQixtQkFBQTtBRjBFaEI7QUVoSkE7RUE4RWdCLG1CQUFBO0FGcUVoQjtBRW5KQTtFQWtGZ0IsY0FBQTtBRm9FaEI7QUV0SkE7RUFzRmdCLG1CQUFBO0FGbUVoQjtBRTlESTtFQUNJLFdBQUE7QUZnRVI7QUU1SkE7RUFnR1EsV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFRitETixVQUFVO0VDbEVSLHFCQUFBO0VEb0VGLFFBQVE7RUNsRU4sNENBQUE7RUNHSSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBRmtFUjtBQ3hFSTtFRDBFRix1QkFBdUI7RUN4RWpCLGFBQUE7QUQwRVI7QUVwRVE7RUFDSSxVQUFBO0VBQ0Esb0JBQUE7QUZzRVo7QUV0TEE7RUFxSFEsV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtBRm1FUjtBRS9MQTtFQStIWSxVQUFBO0FGbUVaO0FFaEVRO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFRmtFVixVQUFVO0VDbkdSLHFCQUFBO0VEcUdGLFFBQVE7RUNuR04sNENBQUE7RUNpQ1EsNkJBQUE7RUFDQSx3QkFBQTtFQUVBLFdBQUE7QUZvRVo7QUN2R0k7RUR5R0YsdUJBQXVCO0VDdkdqQixhQUFBO0FEeUdSO0FFckVRO0VBQ0kseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0FGdUVaO0FFdE5BO0VBb0pRLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FGcUVSO0FFNU5BO0VBeUpZLFdBQUE7RUFDQSxZQUFBO0FGc0VaO0FFbkVRO0VBQ0ksV0FBQTtBRnFFWiIsImZpbGUiOiJwcm9qZWN0cy9idXNpbmVzc2dhdGUvc3JjL2FwcC9jaGF0LW1zZ3MvY2hhdC1tc2ctY2FyZC1zdGFjay9jaGF0LW1zZy1jYXJkLXN0YWNrLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9lYXJseWFjY2Vzcy9vcGVuc2Fuc2hlYnJldy5jc3MnO1xuLyogY29udGFpbmVyICovXG4vKiBjb2xvcnMgKi9cbi8qIGZvbnRzICovXG4uZm9udDEge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBIZWJyZXcnLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IE5hcmtpc3M7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL05hcmtpc3NCbG9ja0NvbmRlbnNlZC1SZWd1bGFyLVRSSUFMLm90ZlwiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogTmFya2lzcztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL05hcmtpc3NCbG9ja0NvbmRlbnNlZC1Cb2xkLVRSSUFMLm90ZlwiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cbi5mb250MiB7XG4gIGZvbnQtZmFtaWx5OiBOYXJraXNzLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4vKiB0byB0ZXh0ICovXG4udG8tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgSGVicmV3Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzM2MDYyNztcbn1cbi8qIG9wdGlvbnMgdGV4dCAqL1xuLm9wdGlvbnMtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC1mYW1pbHk6IE5hcmtpc3MsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMyQzNDM0I7XG59XG4vKiBmcm9tIHRleHQgKi9cbi5mcm9tLXRleHQge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBOYXJraXNzLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmNhcmQtdGl0bGUge1xuICBmb250LWZhbWlseTogTmFya2lzcywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzM2MDYyNztcbn1cbi5jYXJkLXRleHQge1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBIZWJyZXcnLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMzYwNjI3O1xufVxuLmdhbGxlcnktdGl0bGUge1xuICBmb250LWZhbWlseTogTmFya2lzcywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjMzYwNjI3O1xufVxuLmdhbGxlcnktdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBOYXJraXNzLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICMzNjA2Mjc7XG59XG4vKiBidWJibGVzICovXG4uYm90LW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDBweCAjQ0JENkQ5O1xuICBib3JkZXItcmFkaXVzOiAxMnB4IDFweCAxMnB4IDEycHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIEhlYnJldycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMzNjA2Mjc7XG59XG4uYm90LW9wdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyQzNDM0I7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMHB4ICMyQzNDM0I7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBtYXJnaW46IDAgNHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC1mYW1pbHk6IE5hcmtpc3MsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMyQzNDM0I7XG59XG4vKiB1dGlsaXRpZXMgKi9cbi5uby1zY3JvbGxiYXJzIHtcbiAgLypGaXJlRm94Ki9cbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAvKklFMTArKi9cbiAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XG59XG4ubm8tc2Nyb2xsYmFyczo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAvKkNocm9tZSwgU2FmYXJpLCBFZGdlKi9cbiAgZGlzcGxheTogbm9uZTtcbn1cbjpob3N0IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDIgKiAyMHB4KTtcbn1cbi5zdGFjay13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG4uc3RhY2std3JhcHBlciAuc2NoZW1lLXllbGxvdyA6Om5nLWRlZXAgLnNjaGVtZS1wcmltYXJ5LWJnIHtcbiAgYmFja2dyb3VuZDogI0ZGQ0IxRTtcbn1cbi5zdGFjay13cmFwcGVyIC5zY2hlbWUteWVsbG93IDo6bmctZGVlcCAuc2NoZW1lLXByaW1hcnktZmcge1xuICBjb2xvcjogI0ZGQ0IxRTtcbn1cbi5zdGFjay13cmFwcGVyIC5zY2hlbWUteWVsbG93IDo6bmctZGVlcCAuc2NoZW1lLXNlY29uZGFyeS1iZyB7XG4gIGJhY2tncm91bmQ6ICNGRkNCMUU7XG59XG4uc3RhY2std3JhcHBlciAuc2NoZW1lLWJsdWUgOjpuZy1kZWVwIC5zY2hlbWUtcHJpbWFyeS1iZyB7XG4gIGJhY2tncm91bmQ6ICNBOUYxRTQ7XG59XG4uc3RhY2std3JhcHBlciAuc2NoZW1lLWJsdWUgOjpuZy1kZWVwIC5zY2hlbWUtcHJpbWFyeS1mZyB7XG4gIGNvbG9yOiAjQTlGMUU0O1xufVxuLnN0YWNrLXdyYXBwZXIgLnNjaGVtZS1ibHVlIDo6bmctZGVlcCAuc2NoZW1lLXNlY29uZGFyeS1iZyB7XG4gIGJhY2tncm91bmQ6ICNGMkZBRjY7XG59XG4uc3RhY2std3JhcHBlciAuc2NoZW1lLWdyYXkgOjpuZy1kZWVwIC5zY2hlbWUtcHJpbWFyeS1iZyB7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG59XG4uc3RhY2std3JhcHBlciAuc2NoZW1lLWdyYXkgOjpuZy1kZWVwIC5zY2hlbWUtcHJpbWFyeS1mZyB7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLnN0YWNrLXdyYXBwZXIgLnNjaGVtZS1ncmF5IDo6bmctZGVlcCAuc2NoZW1lLXNlY29uZGFyeS1iZyB7XG4gIGJhY2tncm91bmQ6ICNGOUY3Rjc7XG59XG4uc3RhY2std3JhcHBlciAuc2NoZW1lLXBlYWNoIDo6bmctZGVlcCAuc2NoZW1lLXByaW1hcnktYmcge1xuICBiYWNrZ3JvdW5kOiAjRkZCN0FDO1xufVxuLnN0YWNrLXdyYXBwZXIgLnNjaGVtZS1wZWFjaCA6Om5nLWRlZXAgLnNjaGVtZS1wcmltYXJ5LWZnIHtcbiAgY29sb3I6ICNGRkI3QUM7XG59XG4uc3RhY2std3JhcHBlciAuc2NoZW1lLXBlYWNoIDo6bmctZGVlcCAuc2NoZW1lLXNlY29uZGFyeS1iZyB7XG4gIGJhY2tncm91bmQ6ICNGQ0ZERUU7XG59XG4uc3RhY2std3JhcHBlciAuc2NoZW1lLWdyZWVuIDo6bmctZGVlcCAuc2NoZW1lLXByaW1hcnktYmcge1xuICBiYWNrZ3JvdW5kOiAjNkVERUExO1xufVxuLnN0YWNrLXdyYXBwZXIgLnNjaGVtZS1ncmVlbiA6Om5nLWRlZXAgLnNjaGVtZS1wcmltYXJ5LWZnIHtcbiAgY29sb3I6ICM2RURFQTE7XG59XG4uc3RhY2std3JhcHBlciAuc2NoZW1lLWdyZWVuIDo6bmctZGVlcCAuc2NoZW1lLXNlY29uZGFyeS1iZyB7XG4gIGJhY2tncm91bmQ6ICNGQ0ZERUU7XG59XG4uc3RhY2std3JhcHBlci5vcGVuIHtcbiAgei1pbmRleDogMTA7XG59XG4uc3RhY2std3JhcHBlciAuc3RhY2stc2VsZWN0b3JzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIC8qRmlyZUZveCovXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgLypJRTEwKyovXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xuICBtaW4taGVpZ2h0OiAxNjBweDtcbiAgei1pbmRleDogMTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XG59XG4uc3RhY2std3JhcHBlciAuc3RhY2stc2VsZWN0b3JzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIC8qQ2hyb21lLCBTYWZhcmksIEVkZ2UqL1xuICBkaXNwbGF5OiBub25lO1xufVxuLnN0YWNrLXdyYXBwZXIgLnN0YWNrLXNlbGVjdG9ycy5zbGlkZGVuIHtcbiAgb3BhY2l0eTogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uc3RhY2std3JhcHBlciAuc3RhY2sge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMjBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG4uc3RhY2std3JhcHBlciAuc3RhY2sgYXBwLXRpdGxlLWNhcmQge1xuICB6LWluZGV4OiAxO1xufVxuLnN0YWNrLXdyYXBwZXIgLnN0YWNrLm9wZW4ge1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICAvKkZpcmVGb3gqL1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gIC8qSUUxMCsqL1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcbiAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XG4gIHNjcm9sbC1zbmFwLXN0b3A6IGFsd2F5cztcbiAgei1pbmRleDogMTA7XG59XG4uc3RhY2std3JhcHBlciAuc3RhY2sub3Blbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAvKkNocm9tZSwgU2FmYXJpLCBFZGdlKi9cbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zdGFjay13cmFwcGVyIC5zdGFjayA+ICoge1xuICBzY3JvbGwtc25hcC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xufVxuLnN0YWNrLXdyYXBwZXIgPiAuYm90LW9wdGlvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDE4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMHB4O1xufVxuLnN0YWNrLXdyYXBwZXIgPiAuYm90LW9wdGlvbiBpbWcge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuLnN0YWNrLXdyYXBwZXIgPiAuYm90LW9wdGlvbi5vcGVuIHtcbiAgei1pbmRleDogMTA7XG59XG4iLCJAaW1wb3J0IChjc3MpICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Vhcmx5YWNjZXNzL29wZW5zYW5zaGVicmV3LmNzcyc7XG5cbi8qIGNvbnRhaW5lciAqL1xuQGJhY2tncm91bmQtaW1hZ2U6IHVybChhc3NldHMvaW1nL2JhY2tncm91bmQucG5nKTtcbkBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuQGNvbnRhaW5lci1wYWRkaW5nOiAyMHB4O1xuXG4vKiBjb2xvcnMgKi9cbkB3aGl0ZTogI2ZmZjtcbkBhY2NlbnQtdGV4dDogIzM2MDYyNztcbkBibGFjay03MDA6ICMyQzNDM0I7XG5AYmxhY2stNTAwOiAjNzM3MzczO1xuQGdyYXktZjY6ICNmNmY2ZjY7XG5AZ3JheS05NzogIzk3OTc5NztcbkB3aGl0ZTogI2ZmZmZmZjtcbkBhY2NlbnQtMTAwOiAjRjlGN0Y3O1xuQG9yYW5nZS03MDA6ICM5RjA5MDk7XG5AZGVtb2dyYXBoaWNzLTcwMDogIzBGODA0MjtcblxuLyogZm9udHMgKi9cbi5mb250MSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgSGVicmV3Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn0gXG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBOYXJraXNzO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgc3JjOiB1cmwoXCJhc3NldHMvZm9udHMvTmFya2lzc0Jsb2NrQ29uZGVuc2VkLVJlZ3VsYXItVFJJQUwub3RmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogTmFya2lzcztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBzcmM6IHVybChcImFzc2V0cy9mb250cy9OYXJraXNzQmxvY2tDb25kZW5zZWQtQm9sZC1UUklBTC5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5cbi5mb250MiB7XG4gICAgZm9udC1mYW1pbHk6IE5hcmtpc3MsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi8qIHRvIHRleHQgKi9cbi50by10ZXh0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgLmZvbnQxO1xuICAgIGNvbG9yOiBAYWNjZW50LXRleHQ7XG59XG5cbi8qIG9wdGlvbnMgdGV4dCAqL1xuLm9wdGlvbnMtdGV4dCB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIC5mb250MjtcbiAgICBjb2xvcjogQGJsYWNrLTcwMDtcbn1cblxuLyogZnJvbSB0ZXh0ICovXG4uZnJvbS10ZXh0IHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgLmZvbnQyO1xuICAgIGNvbG9yOiBAd2hpdGU7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgICAuZm9udDI7XG4gICAgY29sb3I6IEBhY2NlbnQtdGV4dDtcbn1cblxuLmNhcmQtdGV4dCB7XG4gICAgLmZvbnQxO1xuICAgIGNvbG9yOiBAYWNjZW50LXRleHQ7XG59XG5cbi5nYWxsZXJ5LXRpdGxlIHtcbiAgICAuZm9udDI7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6IEBhY2NlbnQtdGV4dDtcbn1cblxuLmdhbGxlcnktdGV4dCB7XG4gICAgLmZvbnQyO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiBAYWNjZW50LXRleHQ7XG59XG5cbi8qIGJ1YmJsZXMgKi9cbi5ib3QtbWVzc2FnZSB7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDBweCAjQ0JENkQ5O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMXB4IDEycHggMTJweDtcblxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuXG4gICAgLnRvLXRleHQ7XG59XG5cbi5ib3Qtb3B0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIEBibGFjay03MDA7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAwcHggQGJsYWNrLTcwMDtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgbWFyZ2luOiAwIDRweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIC5vcHRpb25zLXRleHQ7XG59XG5cbi8qIHV0aWxpdGllcyAqL1xuLm5vLXNjcm9sbGJhcnMge1xuICAgIC8qRmlyZUZveCovXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAgIC8qSUUxMCsqL1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAvKkNocm9tZSwgU2FmYXJpLCBFZGdlKi9cbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9IFxufVxuXG4vLyBAYmx1ZWdyZWVuOiAjMDA4MDdjO1xuLy8gQGZhZGVkLWJsdWVncmVlbjogI2U1ZjJmMTtcbi8vIEBjaGFyY29hbDogIzJjM2MzYjtcbi8vIEBhdWJlcmdpbmU6ICM0ODBhMzU7XG4vLyBAc2VhZm9hbS1ibHVlOiAjNmVkZWRhO1xuLy8gQGNvb2wtZ3JleTogIzg5YTlhODtcbi8vIEBwYWxlLWJsdWU6ICNkOWYyZjE7XG4vLyBAd2hpdGU6ICNmNmY2ZjY7XG5cblxuLy8gLmN0YSB7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgIGZsZXg6IDAgMCBhdXRvO1xuLy8gICAgIG1hcmdpbi10b3A6IGF1dG87XG4vLyAgICAgd2lkdGg6IDEwMCU7XG5cbi8vICAgICAuYnV0dG9uIHtcbi8vICAgICAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICAgICAgZmxleC1mbG93OiByb3c7XG4vLyAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4vLyAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IEBzZWFmb2FtLWJsdWU7ICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAcGFsZS1ibHVlO1xuLy8gICAgICAgICBmb250LXNpemU6IDE4cHg7XG4vLyAgICAgICAgIGNvbG9yOiBAYmx1ZWdyZWVuO1xuLy8gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbi8vICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbi8vICAgICAgICAgcGFkZGluZzogNHB4IDIwcHg7XG4vLyAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuLy8gICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbi8vICAgICAgICAgaW1nIHtcbi8vICAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7ICAgXG4vLyAgICAgICAgIH1cblxuLy8gICAgIH1cblxuLy8gfVxuXG4vLyAudmlzdWFsbHktaGlkZGVuIHtcbi8vICAgICBib3JkZXI6IDA7XG4vLyAgICAgY2xpcDogcmVjdCgxcHgsMXB4LDFweCwxcHgpO1xuLy8gICAgIC13ZWJraXQtY2xpcC1wYXRoOiBpbnNldCg1MCUpO1xuLy8gICAgIGNsaXAtcGF0aDogaW5zZXQoNTAlKTtcbi8vICAgICBoZWlnaHQ6IDFweDtcbi8vICAgICBtYXJnaW46IC0xcHg7XG4vLyAgICAgbWFyZ2luLXRvcDogLTFweDtcbi8vICAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyAgICAgcGFkZGluZzogMDtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgd2lkdGg6IDFweDtcbi8vICAgICB3b3JkLXdyYXA6IG5vcm1hbDtcbi8vIH1cblxuLy8gLnBsYWNlaG9sZGVyLXR4IHtcbi8vICAgICBkaXNwbGF5OiBub25lO1xuLy8gfVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vY29tbW9uLmxlc3MnO1xuXG5Ac2NoZW1lLWJsdWUtcHJpbWFyeTogI0E5RjFFNDtcbkBzY2hlbWUtYmx1ZS1zZWNvbmRhcnk6ICNGMkZBRjY7XG5Ac2NoZW1lLXllbGxvdy1wcmltYXJ5OiAjRkZDQjFFO1xuQHNjaGVtZS15ZWxsb3ctc2Vjb25kYXJ5OiAjRkZDQjFFOztcbkBzY2hlbWUtZ3JheS1wcmltYXJ5OiAjRkZGRkZGO1xuQHNjaGVtZS1ncmF5LXNlY29uZGFyeTogQGFjY2VudC0xMDA7XG5Ac2NoZW1lLXBlYWNoLXByaW1hcnk6ICNGRkI3QUM7XG5Ac2NoZW1lLXBlYWNoLXNlY29uZGFyeTogI0ZDRkRFRTtcbkBzY2hlbWUtZ3JlZW4tcHJpbWFyeTogIzZFREVBMTtcbkBzY2hlbWUtZ3JlZW4tc2Vjb25kYXJ5OiAjRkNGREVFO1xuXG5cbjpob3N0IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIH4nKycgMiAqIEBjb250YWluZXItcGFkZGluZyk7XG59XG5cbi5zdGFjay13cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBkaXNwbGF5OiBibG9jaztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuXG4gICAgLnNjaGVtZS15ZWxsb3cge1xuICAgICAgICA6Om5nLWRlZXAge1xuICAgICAgICAgICAgLnNjaGVtZS1wcmltYXJ5LWJnIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBAc2NoZW1lLXllbGxvdy1wcmltYXJ5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2NoZW1lLXByaW1hcnktZmcge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBAc2NoZW1lLXllbGxvdy1wcmltYXJ5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2NoZW1lLXNlY29uZGFyeS1iZyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQHNjaGVtZS15ZWxsb3ctc2Vjb25kYXJ5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNjaGVtZS1ibHVlIHtcbiAgICAgICAgOjpuZy1kZWVwIHtcbiAgICAgICAgICAgIC5zY2hlbWUtcHJpbWFyeS1iZyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQHNjaGVtZS1ibHVlLXByaW1hcnk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zY2hlbWUtcHJpbWFyeS1mZyB7XG4gICAgICAgICAgICAgICAgY29sb3I6IEBzY2hlbWUtYmx1ZS1wcmltYXJ5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2NoZW1lLXNlY29uZGFyeS1iZyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQHNjaGVtZS1ibHVlLXNlY29uZGFyeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zY2hlbWUtZ3JheSB7XG4gICAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgICAgICAuc2NoZW1lLXByaW1hcnktYmcge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IEBzY2hlbWUtZ3JheS1wcmltYXJ5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2NoZW1lLXByaW1hcnktZmcge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBAc2NoZW1lLWdyYXktcHJpbWFyeTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNjaGVtZS1zZWNvbmRhcnktYmcge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IEBzY2hlbWUtZ3JheS1zZWNvbmRhcnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2NoZW1lLXBlYWNoIHtcbiAgICAgICAgOjpuZy1kZWVwIHtcbiAgICAgICAgICAgIC5zY2hlbWUtcHJpbWFyeS1iZyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQHNjaGVtZS1wZWFjaC1wcmltYXJ5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2NoZW1lLXByaW1hcnktZmcge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBAc2NoZW1lLXBlYWNoLXByaW1hcnk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zY2hlbWUtc2Vjb25kYXJ5LWJnIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBAc2NoZW1lLXBlYWNoLXNlY29uZGFyeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zY2hlbWUtZ3JlZW4ge1xuICAgICAgICA6Om5nLWRlZXAge1xuICAgICAgICAgICAgLnNjaGVtZS1wcmltYXJ5LWJnIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBAc2NoZW1lLWdyZWVuLXByaW1hcnk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zY2hlbWUtcHJpbWFyeS1mZyB7XG4gICAgICAgICAgICAgICAgY29sb3I6IEBzY2hlbWUtZ3JlZW4tcHJpbWFyeTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNjaGVtZS1zZWNvbmRhcnktYmcge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IEBzY2hlbWUtZ3JlZW4tc2Vjb25kYXJ5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5vcGVuIHtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgfVxuXG4gICAgLnN0YWNrLXNlbGVjdG9ycyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgICAgICAubm8tc2Nyb2xsYmFycztcbiAgICAgICAgbWluLWhlaWdodDogMTYwcHg7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuXG4gICAgICAgICYuc2xpZGRlbiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc3RhY2sge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgcGFkZGluZzogMjBweDtcblxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAgICAgXG4gICAgICAgIGFwcC10aXRsZS1jYXJkIHtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAmLm9wZW4ge1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgICAgICAgICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gICAgICAgICAgICAubm8tc2Nyb2xsYmFyczsgICAgXG4gICAgICAgICAgICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcbiAgICAgICAgICAgIHNjcm9sbC1zbmFwLXN0b3A6IGFsd2F5cztcbiAgICAgICAgICAgIC8vIHBvc2l0aW9uOiBcbiAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICB9XG5cbiAgICAgICAgJiA+ICoge1xuICAgICAgICAgICAgc2Nyb2xsLXNuYXAtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwMG1zO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgPiAuYm90LW9wdGlvbiB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMHB4O1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmLm9wZW4ge1xuICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatMsgCardStackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat-msg-card-stack',
                templateUrl: './chat-msg-card-stack.component.html',
                styleUrls: ['./chat-msg-card-stack.component.less']
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }, { type: _widgets_service__WEBPACK_IMPORTED_MODULE_6__["WidgetsService"] }, { type: _backend_service__WEBPACK_IMPORTED_MODULE_7__["BackendService"] }]; }, { params: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], stackEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['stackEl', { static: true }]
        }], wrapperEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['wrapperEl', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/chat-msgs/chat-msg-image/chat-msg-image.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/chat-msgs/chat-msg-image/chat-msg-image.component.ts ***!
  \**********************************************************************/
/*! exports provided: ChatMsgImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMsgImageComponent", function() { return ChatMsgImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ChatMsgImageComponent {
    constructor() { }
    ngOnInit() {
    }
    wait() {
        return Promise.resolve(false);
    }
}
ChatMsgImageComponent.ɵfac = function ChatMsgImageComponent_Factory(t) { return new (t || ChatMsgImageComponent)(); };
ChatMsgImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatMsgImageComponent, selectors: [["app-chat-msg-image"]], inputs: { params: "params", content: "content" }, decls: 2, vars: 5, consts: [[1, "container"], [3, "src"]], template: function ChatMsgImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("justify-content", ctx.params.img.justify_content || "center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.params.img.width || "80%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.params.img.asset, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  justify-content: center;\n  width: 100%;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGFtL0NvZGUvaGFzYWRuYS9idXNpbmVzc2dhdGUvdWkvcHJvamVjdHMvYnVzaW5lc3NnYXRlL3NyYy9hcHAvY2hhdC1tc2dzL2NoYXQtbXNnLWltYWdlL2NoYXQtbXNnLWltYWdlLmNvbXBvbmVudC5sZXNzIiwicHJvamVjdHMvYnVzaW5lc3NnYXRlL3NyYy9hcHAvY2hhdC1tc2dzL2NoYXQtbXNnLWltYWdlL2NoYXQtbXNnLWltYWdlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKO0FERkE7RUFJUSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ0NSO0FEUkE7RUFVWSxZQUFBO0FDQ1oiLCJmaWxlIjoicHJvamVjdHMvYnVzaW5lc3NnYXRlL3NyYy9hcHAvY2hhdC1tc2dzL2NoYXQtbXNnLWltYWdlL2NoYXQtbXNnLWltYWdlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7ICAgIFxuICAgICAgICBcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCAuY29udGFpbmVyIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatMsgImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat-msg-image',
                templateUrl: './chat-msg-image.component.html',
                styleUrls: ['./chat-msg-image.component.less']
            }]
    }], function () { return []; }, { params: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/chat-msgs/chat-msg-select-from-list/chat-msg-select-from-list.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/chat-msgs/chat-msg-select-from-list/chat-msg-select-from-list.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ChatMsgSelectFromListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMsgSelectFromListComponent", function() { return ChatMsgSelectFromListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../backend.service */ "./src/app/backend.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const _c0 = ["input"];
function ChatMsgSelectFromListComponent_div_0_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatMsgSelectFromListComponent_div_0_ng_container_5_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.selected(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r4.highlight(item_r3.display), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ChatMsgSelectFromListComponent_div_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatMsgSelectFromListComponent_div_0_ng_container_5_div_1_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.visible(item_r3.display));
} }
function ChatMsgSelectFromListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ChatMsgSelectFromListComponent_div_0_Template_input_keyup_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.search($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatMsgSelectFromListComponent_div_0_ng_container_5_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r0.args.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.items);
} }
class ChatMsgSelectFromListComponent {
    constructor(data, backend) {
        this.data = data;
        this.backend = backend;
        this.args = {};
        this.record = {};
        this.items = [];
        this.done = false;
        this.typed = '';
        this.stack = [];
        this.selection = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
    }
    ngOnInit() {
        this.args = this.params['select-from-list'];
        this.record = this.params.__runner.record;
        console.log('SELECT_FROM_LIST', this.params.__runFast, this.record[this.args.variable]);
        if (this.params.__runFast) {
            if (this.record[this.args.variable]) {
                this.done = true;
                this.selection.next(this.record[this.args.variable]);
                return;
            }
        }
        if (this.args.source === 'business_kinds') {
            this.data.businesses.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((result) => {
                return result.map((x) => {
                    return {
                        value: x.business_kind_name,
                        display: x.business_kind_name
                    };
                });
            })).subscribe((result) => {
                this.items = result;
            });
        }
        if (this.args.source === 'locations') {
            this.data.locations.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe((result) => {
                this.items = result;
            });
        }
    }
    selected(item) {
        if (item.value) {
            this.done = true;
            this.selection.next(item.value);
        }
        else {
            this.stack.unshift({ prefix: item.display, items: this.items });
            this.inputEl.nativeElement.value = item.display + ' ';
            this.items = item.items;
        }
    }
    wait() {
        return this.selection.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((value) => {
            this.record[this.args.variable] = value;
            this.record[this.args.variable2] = value;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => {
            return this.backend.update(this.record);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => {
            const response = this.args.response;
            if (response) {
                return this.params.__runner.fillIn(response);
            }
            else {
                return false;
            }
        })).toPromise();
    }
    highlight(item) {
        if (this.typed) {
            return item.replace(this.typed, `<b>${this.typed}</b>`);
        }
        return item;
    }
    search(x) {
        this.typed = x;
        if (this.stack && this.stack.length > 0 && x.indexOf(this.stack[0].prefix) === -1) {
            const p = this.stack.shift();
            this.items = p.items;
        }
        for (const i of this.items) {
            if (x === i.display && i.items) {
                this.selected(i);
            }
        }
    }
    visible(item) {
        if (this.typed && this.typed.length) {
            return item.indexOf(this.typed) >= 0;
        }
        return true;
    }
}
ChatMsgSelectFromListComponent.ɵfac = function ChatMsgSelectFromListComponent_Factory(t) { return new (t || ChatMsgSelectFromListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"])); };
ChatMsgSelectFromListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatMsgSelectFromListComponent, selectors: [["app-chat-msg-select-from-list"]], viewQuery: function ChatMsgSelectFromListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputEl = _t.first);
    } }, inputs: { params: "params", content: "content" }, decls: 1, vars: 1, consts: [["class", "selector", 4, "ngIf"], [1, "selector"], [1, "input"], ["type", "text", 3, "placeholder", "keyup"], ["input", ""], [1, "options"], [4, "ngFor", "ngForOf"], ["class", "option", 3, "click", 4, "ngIf"], [1, "option", 3, "click"], [3, "innerHtml"]], template: function ChatMsgSelectFromListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChatMsgSelectFromListComponent_div_0_Template, 6, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.done);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["@import 'https://fonts.googleapis.com/earlyaccess/opensanshebrew.css';\n\n\n\n.font1[_ngcontent-%COMP%] {\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n}\n@font-face {\n  font-family: Narkiss;\n  font-weight: normal;\n  src: url('NarkissBlockCondensed-Regular-TRIAL.otf') format(\"opentype\");\n}\n@font-face {\n  font-family: Narkiss;\n  font-weight: bold;\n  src: url('NarkissBlockCondensed-Bold-TRIAL.otf') format(\"opentype\");\n}\n.font2[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n}\n\n.to-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n\n.options-text[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #2C3C3B;\n}\n\n.from-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #ffffff;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n.card-text[_ngcontent-%COMP%] {\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n.gallery-title[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-weight: 700;\n  font-size: 24px;\n  color: #360627;\n}\n.gallery-text[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-weight: 300;\n  font-size: 24px;\n  color: #360627;\n}\n\n.bot-message[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  box-shadow: 0px 2px 0px #CBD6D9;\n  border-radius: 12px 1px 12px 12px;\n  padding: 8px 16px;\n  font-size: 16px;\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n.bot-option[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #2C3C3B;\n  box-shadow: 0px 2px 0px #2C3C3B;\n  border-radius: 24px;\n  padding: 8px 16px;\n  margin: 0 4px;\n  white-space: nowrap;\n  cursor: pointer;\n  font-size: 22px;\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #2C3C3B;\n}\n\n.no-scrollbars[_ngcontent-%COMP%] {\n  \n  scrollbar-width: none;\n  \n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n.no-scrollbars[_ngcontent-%COMP%]::-webkit-scrollbar {\n  \n  display: none;\n}\n[_nghost-%COMP%]   .selector[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  right: 0;\n  display: flex;\n  flex-flow: column;\n  background-color: #ffffff;\n}\n[_nghost-%COMP%]   .selector[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px;\n  flex: 0 0 auto;\n}\n[_nghost-%COMP%]   .selector[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: #f6f6f6;\n  border: 1px solid #979797;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 24px;\n  width: 100%;\n}\n[_nghost-%COMP%]   .selector[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n  flex: 1 1 100%;\n  overflow-y: scroll;\n  \n  scrollbar-width: none;\n  \n  -ms-overflow-style: -ms-autohiding-scrollbar;\n  display: flex;\n  flex-flow: column;\n  width: 100%;\n  padding: 0 16px;\n}\n[_nghost-%COMP%]   .selector[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]::-webkit-scrollbar {\n  \n  display: none;\n}\n[_nghost-%COMP%]   .selector[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .selector[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2J1c2luZXNzZ2F0ZS9zcmMvYXBwL2NoYXQtbXNncy9jaGF0LW1zZy1zZWxlY3QtZnJvbS1saXN0L2NoYXQtbXNnLXNlbGVjdC1mcm9tLWxpc3QuY29tcG9uZW50Lmxlc3MiLCIvVXNlcnMvYWRhbS9Db2RlL2hhc2FkbmEvYnVzaW5lc3NnYXRlL3VpL3Byb2plY3RzL2J1c2luZXNzZ2F0ZS9zcmMvY29tbW9uLmxlc3MiLCIvVXNlcnMvYWRhbS9Db2RlL2hhc2FkbmEvYnVzaW5lc3NnYXRlL3VpL3Byb2plY3RzL2J1c2luZXNzZ2F0ZS9zcmMvYXBwL2NoYXQtbXNncy9jaGF0LW1zZy1zZWxlY3QtZnJvbS1saXN0L2NoYXQtbXNnLXNlbGVjdC1mcm9tLWxpc3QuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUVDQWM7QURDZCxjQUFjO0FBQ2QsV0FBVztBQUNYLFVBQVU7QUNpQlY7RUFDSSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURmSjtBQ2tCQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzRUFBQTtBRGhCSjtBQ21CQTtFQUNJLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtRUFBQTtBRGpCSjtBQ29CQTtFQUNJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRGxCSjtBQUNBLFlBQVk7QUNxQlo7RUFDSSxlQUFBO0VBekJBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQXlCQSxjQUFBO0FEakJKO0FBQ0EsaUJBQWlCO0FDb0JqQjtFQUNJLGVBQUE7RUFkQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFjQSxjQUFBO0FEaEJKO0FBQ0EsY0FBYztBQ21CZDtFQUNJLGVBQUE7RUFyQkEsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBcUJBLGNBQUE7QURmSjtBQ2tCQTtFQTFCSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUEwQkEsY0FBQTtBRGRKO0FDaUJBO0VBakRJLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQWlEQSxjQUFBO0FEYko7QUNnQkE7RUFwQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBb0NBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QURaSjtBQ2VBO0VBM0NJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQTJDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FEWEo7QUFDQSxZQUFZO0FDY1o7RUFDSSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUNBQUE7RUFFQSxpQkFBQTtFQWpEQSxlQUFBO0VBekJBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQXlCQSxjQUFBO0FEdUNKO0FDYUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUVBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQXhEQSxlQUFBO0VBZEEsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBY0EsY0FBQTtBRCtDSjtBQUNBLGNBQWM7QUNZZDtFRFZFLFVBQVU7RUNZUixxQkFBQTtFRFZGLFFBQVE7RUNZTiw0Q0FBQTtBRFZKO0FDV0k7RURURix1QkFBdUI7RUNXakIsYUFBQTtBRFRSO0FFL0dBO0VBRVEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBRmdIUjtBRXpIQTtFQWFZLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBRitHWjtBRTlIQTtFQWtCZ0IsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RURnQlosZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VDaEJZLGVBQUE7RUFDQSxXQUFBO0FGaUhoQjtBRXpJQTtFQTZCWSxjQUFBO0VBQ0Esa0JBQUE7RUYrR1YsVUFBVTtFQzFCUixxQkFBQTtFRDRCRixRQUFRO0VDMUJOLDRDQUFBO0VDckZRLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FGa0haO0FDL0JJO0VEaUNGLHVCQUF1QjtFQy9CakIsYUFBQTtBRGlDUjtBRXpKQTtFQXNDZ0IsYUFBQTtFQUNBLDRDQUFBO0VBQ0EsZUFBQTtBRnNIaEI7QUU5SkE7RURxQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VDS2dCLGVBQUE7QUZ3SHBCIiwiZmlsZSI6InByb2plY3RzL2J1c2luZXNzZ2F0ZS9zcmMvYXBwL2NoYXQtbXNncy9jaGF0LW1zZy1zZWxlY3QtZnJvbS1saXN0L2NoYXQtbXNnLXNlbGVjdC1mcm9tLWxpc3QuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Vhcmx5YWNjZXNzL29wZW5zYW5zaGVicmV3LmNzcyc7XG4vKiBjb250YWluZXIgKi9cbi8qIGNvbG9ycyAqL1xuLyogZm9udHMgKi9cbi5mb250MSB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIEhlYnJldycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogTmFya2lzcztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvTmFya2lzc0Jsb2NrQ29uZGVuc2VkLVJlZ3VsYXItVFJJQUwub3RmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBOYXJraXNzO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvTmFya2lzc0Jsb2NrQ29uZGVuc2VkLUJvbGQtVFJJQUwub3RmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuLmZvbnQyIHtcbiAgZm9udC1mYW1pbHk6IE5hcmtpc3MsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi8qIHRvIHRleHQgKi9cbi50by10ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBIZWJyZXcnLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMzYwNjI3O1xufVxuLyogb3B0aW9ucyB0ZXh0ICovXG4ub3B0aW9ucy10ZXh0IHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LWZhbWlseTogTmFya2lzcywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzJDM0MzQjtcbn1cbi8qIGZyb20gdGV4dCAqL1xuLmZyb20tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IE5hcmtpc3MsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uY2FyZC10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBOYXJraXNzLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMzYwNjI3O1xufVxuLmNhcmQtdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIEhlYnJldycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMzNjA2Mjc7XG59XG4uZ2FsbGVyeS10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBOYXJraXNzLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICMzNjA2Mjc7XG59XG4uZ2FsbGVyeS10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IE5hcmtpc3MsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzM2MDYyNztcbn1cbi8qIGJ1YmJsZXMgKi9cbi5ib3QtbWVzc2FnZSB7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMHB4ICNDQkQ2RDk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHggMXB4IDEycHggMTJweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgSGVicmV3Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzM2MDYyNztcbn1cbi5ib3Qtb3B0aW9uIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJDM0MzQjtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAwcHggIzJDM0MzQjtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIG1hcmdpbjogMCA0cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LWZhbWlseTogTmFya2lzcywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzJDM0MzQjtcbn1cbi8qIHV0aWxpdGllcyAqL1xuLm5vLXNjcm9sbGJhcnMge1xuICAvKkZpcmVGb3gqL1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gIC8qSUUxMCsqL1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcbn1cbi5uby1zY3JvbGxiYXJzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIC8qQ2hyb21lLCBTYWZhcmksIEVkZ2UqL1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3QgLnNlbGVjdG9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbjpob3N0IC5zZWxlY3RvciAuaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTZweDtcbiAgZmxleDogMCAwIGF1dG87XG59XG46aG9zdCAuc2VsZWN0b3IgLmlucHV0IGlucHV0IHtcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk3OTc5NztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgZm9udC1mYW1pbHk6IE5hcmtpc3MsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IC5zZWxlY3RvciAub3B0aW9ucyB7XG4gIGZsZXg6IDEgMSAxMDAlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIC8qRmlyZUZveCovXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgLypJRTEwKyovXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTZweDtcbn1cbjpob3N0IC5zZWxlY3RvciAub3B0aW9uczo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAvKkNocm9tZSwgU2FmYXJpLCBFZGdlKi9cbiAgZGlzcGxheTogbm9uZTtcbn1cbjpob3N0IC5zZWxlY3RvciAub3B0aW9ucyAub3B0aW9uIHtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjpob3N0IC5zZWxlY3RvciAub3B0aW9ucyAub3B0aW9uIHNwYW4ge1xuICBmb250LWZhbWlseTogTmFya2lzcywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDI0cHg7XG59XG4iLCJAaW1wb3J0IChjc3MpICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Vhcmx5YWNjZXNzL29wZW5zYW5zaGVicmV3LmNzcyc7XG5cbi8qIGNvbnRhaW5lciAqL1xuQGJhY2tncm91bmQtaW1hZ2U6IHVybChhc3NldHMvaW1nL2JhY2tncm91bmQucG5nKTtcbkBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuQGNvbnRhaW5lci1wYWRkaW5nOiAyMHB4O1xuXG4vKiBjb2xvcnMgKi9cbkB3aGl0ZTogI2ZmZjtcbkBhY2NlbnQtdGV4dDogIzM2MDYyNztcbkBibGFjay03MDA6ICMyQzNDM0I7XG5AYmxhY2stNTAwOiAjNzM3MzczO1xuQGdyYXktZjY6ICNmNmY2ZjY7XG5AZ3JheS05NzogIzk3OTc5NztcbkB3aGl0ZTogI2ZmZmZmZjtcbkBhY2NlbnQtMTAwOiAjRjlGN0Y3O1xuQG9yYW5nZS03MDA6ICM5RjA5MDk7XG5AZGVtb2dyYXBoaWNzLTcwMDogIzBGODA0MjtcblxuLyogZm9udHMgKi9cbi5mb250MSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgSGVicmV3Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn0gXG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBOYXJraXNzO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgc3JjOiB1cmwoXCJhc3NldHMvZm9udHMvTmFya2lzc0Jsb2NrQ29uZGVuc2VkLVJlZ3VsYXItVFJJQUwub3RmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogTmFya2lzcztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBzcmM6IHVybChcImFzc2V0cy9mb250cy9OYXJraXNzQmxvY2tDb25kZW5zZWQtQm9sZC1UUklBTC5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5cbi5mb250MiB7XG4gICAgZm9udC1mYW1pbHk6IE5hcmtpc3MsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi8qIHRvIHRleHQgKi9cbi50by10ZXh0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgLmZvbnQxO1xuICAgIGNvbG9yOiBAYWNjZW50LXRleHQ7XG59XG5cbi8qIG9wdGlvbnMgdGV4dCAqL1xuLm9wdGlvbnMtdGV4dCB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIC5mb250MjtcbiAgICBjb2xvcjogQGJsYWNrLTcwMDtcbn1cblxuLyogZnJvbSB0ZXh0ICovXG4uZnJvbS10ZXh0IHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgLmZvbnQyO1xuICAgIGNvbG9yOiBAd2hpdGU7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgICAuZm9udDI7XG4gICAgY29sb3I6IEBhY2NlbnQtdGV4dDtcbn1cblxuLmNhcmQtdGV4dCB7XG4gICAgLmZvbnQxO1xuICAgIGNvbG9yOiBAYWNjZW50LXRleHQ7XG59XG5cbi5nYWxsZXJ5LXRpdGxlIHtcbiAgICAuZm9udDI7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6IEBhY2NlbnQtdGV4dDtcbn1cblxuLmdhbGxlcnktdGV4dCB7XG4gICAgLmZvbnQyO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiBAYWNjZW50LXRleHQ7XG59XG5cbi8qIGJ1YmJsZXMgKi9cbi5ib3QtbWVzc2FnZSB7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDBweCAjQ0JENkQ5O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMXB4IDEycHggMTJweDtcblxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuXG4gICAgLnRvLXRleHQ7XG59XG5cbi5ib3Qtb3B0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIEBibGFjay03MDA7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAwcHggQGJsYWNrLTcwMDtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgbWFyZ2luOiAwIDRweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIC5vcHRpb25zLXRleHQ7XG59XG5cbi8qIHV0aWxpdGllcyAqL1xuLm5vLXNjcm9sbGJhcnMge1xuICAgIC8qRmlyZUZveCovXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAgIC8qSUUxMCsqL1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAvKkNocm9tZSwgU2FmYXJpLCBFZGdlKi9cbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9IFxufVxuXG4vLyBAYmx1ZWdyZWVuOiAjMDA4MDdjO1xuLy8gQGZhZGVkLWJsdWVncmVlbjogI2U1ZjJmMTtcbi8vIEBjaGFyY29hbDogIzJjM2MzYjtcbi8vIEBhdWJlcmdpbmU6ICM0ODBhMzU7XG4vLyBAc2VhZm9hbS1ibHVlOiAjNmVkZWRhO1xuLy8gQGNvb2wtZ3JleTogIzg5YTlhODtcbi8vIEBwYWxlLWJsdWU6ICNkOWYyZjE7XG4vLyBAd2hpdGU6ICNmNmY2ZjY7XG5cblxuLy8gLmN0YSB7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgIGZsZXg6IDAgMCBhdXRvO1xuLy8gICAgIG1hcmdpbi10b3A6IGF1dG87XG4vLyAgICAgd2lkdGg6IDEwMCU7XG5cbi8vICAgICAuYnV0dG9uIHtcbi8vICAgICAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICAgICAgZmxleC1mbG93OiByb3c7XG4vLyAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4vLyAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IEBzZWFmb2FtLWJsdWU7ICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAcGFsZS1ibHVlO1xuLy8gICAgICAgICBmb250LXNpemU6IDE4cHg7XG4vLyAgICAgICAgIGNvbG9yOiBAYmx1ZWdyZWVuO1xuLy8gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbi8vICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbi8vICAgICAgICAgcGFkZGluZzogNHB4IDIwcHg7XG4vLyAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuLy8gICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbi8vICAgICAgICAgaW1nIHtcbi8vICAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7ICAgXG4vLyAgICAgICAgIH1cblxuLy8gICAgIH1cblxuLy8gfVxuXG4vLyAudmlzdWFsbHktaGlkZGVuIHtcbi8vICAgICBib3JkZXI6IDA7XG4vLyAgICAgY2xpcDogcmVjdCgxcHgsMXB4LDFweCwxcHgpO1xuLy8gICAgIC13ZWJraXQtY2xpcC1wYXRoOiBpbnNldCg1MCUpO1xuLy8gICAgIGNsaXAtcGF0aDogaW5zZXQoNTAlKTtcbi8vICAgICBoZWlnaHQ6IDFweDtcbi8vICAgICBtYXJnaW46IC0xcHg7XG4vLyAgICAgbWFyZ2luLXRvcDogLTFweDtcbi8vICAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyAgICAgcGFkZGluZzogMDtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgd2lkdGg6IDFweDtcbi8vICAgICB3b3JkLXdyYXA6IG5vcm1hbDtcbi8vIH1cblxuLy8gLnBsYWNlaG9sZGVyLXR4IHtcbi8vICAgICBkaXNwbGF5OiBub25lO1xuLy8gfVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vY29tbW9uLmxlc3MnO1xuXG46aG9zdCB7XG4gICAgLnNlbGVjdG9yIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQHdoaXRlO1xuXG4gICAgICAgIC5pbnB1dCB7XG5cbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvOyBcblxuICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IEBncmF5LWY2O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIEBncmF5LTk3O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICAgICAgICAgICAgICAuZm9udDI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAub3B0aW9ucyB7XG4gICAgICAgICAgICBmbGV4OiAxIDEgMTAwJTtcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgICAgIC5uby1zY3JvbGxiYXJzO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG5cbiAgICAgICAgICAgIC5vcHRpb24ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIC5mb250MjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4OyAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatMsgSelectFromListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat-msg-select-from-list',
                templateUrl: './chat-msg-select-from-list.component.html',
                styleUrls: ['./chat-msg-select-from-list.component.less']
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: _backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"] }]; }, { params: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['input', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/config.service.ts":
/*!***********************************!*\
  !*** ./src/app/config.service.ts ***!
  \***********************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _i18n_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./i18n.service */ "./src/app/i18n.service.ts");





class ConfigService {
    constructor(http, i18n) {
        this.http = http;
        this.i18n = i18n;
        this.config = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.i18n.lang.subscribe((lang) => {
            this.http.get('assets/script.json')
                .subscribe((res) => {
                const config = res;
                config.locale = lang;
                for (const item of config.s[1].keys) {
                    const key = item.name;
                    let value = item.show;
                    if (value['.tx']) {
                        value = value['.tx'][lang] || value['.tx']['_'];
                    }
                    config[key] = value;
                }
                console.log(config);
                this.config.next(config);
            });
        });
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_i18n_service__WEBPACK_IMPORTED_MODULE_3__["I18nService"])); };
ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _i18n_service__WEBPACK_IMPORTED_MODULE_3__["I18nService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class DataService {
    constructor(http) {
        this.http = http;
        this.BUSINESS_DATA_URL = 'assets/businesses.json';
        this.LOCATIONS_DATA_URL = 'assets/locations1.json';
        this.STACKS_DATA_URL = 'assets/stacks.json';
        this.DEMAND_STACKS_DATA_URL = 'assets/demand_stacks.json';
        this.INSTITUTIONS_STACKS_DATA_URL = 'assets/institutions_stack.json';
        this.DEMOGRAPHICS_STACKS_DATA_URL = 'assets/demographics_stack.json';
        this.DEMAND_CATEGORIES = 'assets/demand_categories.json';
        this.NEIGHBORHOODS_GEOJSON = 'assets/neighborhoods.geojson';
        this.COMMERCIAL_AREAS_URL = 'assets/commercial-areas.json';
        this.businesses = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.locations = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.neighborhods = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.demand_categories = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.stacks = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.commercial_areas = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.http.get(this.BUSINESS_DATA_URL).subscribe((response) => {
            this.businesses.next(response);
        });
        this.http.get(this.LOCATIONS_DATA_URL).subscribe((response) => {
            this.locations.next(response);
        });
        this.http.get(this.DEMAND_CATEGORIES).subscribe((response) => {
            this.demand_categories.next(response);
        });
        this.http.get(this.COMMERCIAL_AREAS_URL).subscribe((response) => {
            this.commercial_areas.next(response);
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([
            this.http.get(this.STACKS_DATA_URL),
            this.http.get(this.DEMAND_STACKS_DATA_URL),
            this.http.get(this.INSTITUTIONS_STACKS_DATA_URL),
            this.http.get(this.DEMOGRAPHICS_STACKS_DATA_URL),
        ])
            .subscribe((responses) => {
            console.log('GOT STACKS');
            const stacks = {};
            for (const response of responses) {
                for (const stack of response) {
                    stacks[stack.name] = stack;
                    if (stack.cardsUrl) {
                        stack.cards = [];
                        this.http.get(stack.cardsUrl).subscribe((response) => {
                            stack.cards = response;
                        });
                    }
                }
            }
            this.stacks.next(stacks);
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([
            this.stacks.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()),
            this.http.get(this.NEIGHBORHOODS_GEOJSON),
        ]).subscribe((ret) => {
            const stacks = ret[0];
            const neighborhods = ret[1];
            for (const stack_name of Object.keys(stacks)) {
                const stack = stacks[stack_name];
                if (stack.name.indexOf('demand.') === 0) {
                    stack.geometry = neighborhods;
                }
            }
            this.neighborhods.next(neighborhods);
        });
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/i18n.service.ts":
/*!*********************************!*\
  !*** ./src/app/i18n.service.ts ***!
  \*********************************/
/*! exports provided: I18nService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nService", function() { return I18nService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class I18nService {
    constructor(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.ltr = false;
        this.lang = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.activatedRoute.queryParamMap.subscribe((queryParamMap) => {
            const lang = queryParamMap.get('lang') || '_';
            this.ltr = lang === 'en' || lang === 'es' || lang === 'ru' || lang === 'fr';
            this.lang.next(lang);
        });
    }
}
I18nService.ɵfac = function I18nService_Factory(t) { return new (t || I18nService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
I18nService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: I18nService, factory: I18nService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](I18nService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ltr.directive.ts":
/*!**********************************!*\
  !*** ./src/app/ltr.directive.ts ***!
  \**********************************/
/*! exports provided: LtrDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LtrDirective", function() { return LtrDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _i18n_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n.service */ "./src/app/i18n.service.ts");



class LtrDirective {
    constructor(_, el) {
        if (_.ltr) {
            el.nativeElement.classList.add('ltr');
        }
    }
}
LtrDirective.ɵfac = function LtrDirective_Factory(t) { return new (t || LtrDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_i18n_service__WEBPACK_IMPORTED_MODULE_1__["I18nService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
LtrDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LtrDirective, selectors: [["", "appLtr", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LtrDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appLtr]'
            }]
    }], function () { return [{ type: _i18n_service__WEBPACK_IMPORTED_MODULE_1__["I18nService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var hatool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hatool */ "../../node_modules/hatool/__ivy_ngcc__/fesm2015/hatool.js");
/* harmony import */ var _chat_msgs_chat_msg_image_chat_msg_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chat-msgs/chat-msg-image/chat-msg-image.component */ "./src/app/chat-msgs/chat-msg-image/chat-msg-image.component.ts");
/* harmony import */ var _chat_msgs_chat_msg_select_from_list_chat_msg_select_from_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chat-msgs/chat-msg-select-from-list/chat-msg-select-from-list.component */ "./src/app/chat-msgs/chat-msg-select-from-list/chat-msg-select-from-list.component.ts");
/* harmony import */ var _chat_msgs_chat_msg_card_stack_chat_msg_card_stack_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chat-msgs/chat-msg-card-stack/chat-msg-card-stack.component */ "./src/app/chat-msgs/chat-msg-card-stack/chat-msg-card-stack.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _turf_turf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @turf/turf */ "../../node_modules/@turf/turf/turf.min.js");
/* harmony import */ var _turf_turf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_turf_turf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../map.service */ "./src/app/map.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _backend_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../backend.service */ "./src/app/backend.service.ts");
/* harmony import */ var _i18n_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../i18n.service */ "./src/app/i18n.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _widgets_widget_map_widget_map_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../widgets/widget-map/widget-map.component */ "./src/app/widgets/widget-map/widget-map.component.ts");
/* harmony import */ var _ltr_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../ltr.directive */ "./src/app/ltr.directive.ts");






















function MainPageComponent_htl_hatool_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "htl-hatool", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", ctx_r0.content);
} }
class MainPageComponent {
    constructor(cfg, http, api, data, map, activatedRoute, backend, _) {
        this.cfg = cfg;
        this.http = http;
        this.api = api;
        this.data = data;
        this.map = map;
        this.activatedRoute = activatedRoute;
        this.backend = backend;
        this._ = _;
        this.config = {};
        this.record = {};
        this.TIMEOUT = 10;
        this.activatedRoute.params.subscribe((x) => {
            this.backend.handleItem(x.id);
        });
    }
    initChat() {
        this.cfg.config.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((config) => {
            this.config = config;
            return this.backend.record;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((record) => {
            this.record = record;
        })).subscribe(() => {
            this.content = new hatool__WEBPACK_IMPORTED_MODULE_2__["ContentManager"]();
            this.runner = new hatool__WEBPACK_IMPORTED_MODULE_2__["ScriptRunnerImpl"](this.http, this.content, this.config.locale);
            this.runner.timeout = 250;
            this.runner.registerCustomComponents([
                {
                    keyword: 'img',
                    cls: _chat_msgs_chat_msg_image_chat_msg_image_component__WEBPACK_IMPORTED_MODULE_3__["ChatMsgImageComponent"]
                },
                {
                    keyword: 'select-from-list',
                    cls: _chat_msgs_chat_msg_select_from_list_chat_msg_select_from_list_component__WEBPACK_IMPORTED_MODULE_4__["ChatMsgSelectFromListComponent"]
                },
                {
                    keyword: 'cards',
                    cls: _chat_msgs_chat_msg_card_stack_chat_msg_card_stack_component__WEBPACK_IMPORTED_MODULE_5__["ChatMsgCardStackComponent"]
                },
            ]);
            this.content.sendButtonText = '';
            this.content.inputPlaceholder = this.config.inputPlaceholder;
            this.start();
        });
    }
    ngOnInit() {
        this.initChat();
    }
    check_for_opportunity() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // TODO
            return false;
        });
    }
    calculate_locations(record) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const location = record.location;
            if (location) {
                if (location.pointGeometry) {
                    location.center = location.pointGeometry.geometry;
                }
                else {
                    location.center = {
                        type: 'Point',
                        coordinates: [location.lon, location.lat]
                    };
                }
                const obs = this.data.neighborhods.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((neighborhoods) => {
                    for (const neighborhood of neighborhoods.features) {
                        if (_turf_turf__WEBPACK_IMPORTED_MODULE_7__["booleanContains"](neighborhood, location.center)) {
                            location.neighborhood = neighborhood.properties.title;
                            break;
                        }
                    }
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(() => this.data.commercial_areas), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((commercial_areas) => {
                    for (const commercial_area of commercial_areas) {
                        if (_turf_turf__WEBPACK_IMPORTED_MODULE_7__["booleanContains"](commercial_area.geometry, location.center)) {
                            location.commercial_area = commercial_area.title;
                            break;
                        }
                    }
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(() => {
                    if (!record.location.isochrones) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])([
                            this.map.isochrone(location.center.coordinates, 5),
                            this.map.isochrone(location.center.coordinates, 10)
                        ]);
                    }
                    else {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(record.location.isochrones);
                    }
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((isochrones) => {
                    console.log('GOT ISOCHRONES', isochrones);
                    record.location.isochrones = isochrones;
                }));
                return obs.toPromise();
            }
        });
    }
    check_needs_licensing(record) {
        const business_kind = record.סוג_עסק;
        return this.data.businesses.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((businesses) => {
            const business_record = businesses.filter((b) => b.business_kind_name === business_kind)[0];
            console.log('_business_record', business_record);
            record._business_record = business_record;
            record._num_licensing_agencies = business_record.licensing_agency.length;
            record._licensing_agencies_stacks = business_record.licensing_agency.map((l) => l.value_id);
            return !!record._business_record.license_item && record._business_record.license_item.length > 0;
        })).toPromise();
    }
    check_needs_signage(record) {
        return record._business_record.sign_count > 0;
    }
    calculate_arnona(record) {
        const business_record = record._business_record;
        const location = record.מיקום;
        const arnona_info = {};
        arnona_info.סיווג_נכס = business_record.tariff_zone;
        if (business_record.tariffs['']) {
            // Not zone aware
            arnona_info.תעריף = business_record.tariffs[''];
        }
        else {
            // Zone aware
            arnona_info.אזור = location.arnona_zones[arnona_info.סיווג_נכס] || 'error';
            arnona_info.תעריף = business_record.tariffs[arnona_info.אזור] || 0;
            arnona_info.לא_מצאנו = arnona_info['תעריף'] === 0;
        }
        if (record.גודל_נכס && arnona_info['תעריף'] > 0) {
            const size = parseInt(record.גודל_נכס, 10);
            if (size > 0) {
                arnona_info.עלות_כוללת = arnona_info.תעריף * size / 12;
                arnona_info.עלות_כוללת = arnona_info.עלות_כוללת.toFixed(0);
            }
        }
        arnona_info.תעריף = arnona_info.תעריף.toFixed(2);
        record.ארנונה = arnona_info;
    }
    check_needs_demand(record) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            function update_record(demand) {
                record['demand-stacks'] = [...new Set(demand.map((x) => 'demand.' + x[0].split(' ').join('_')))];
                for (const k of Object.keys(record)) {
                    if (k.indexOf('demand__') === 0) {
                        record[k] = false;
                    }
                }
                for (const x of demand) {
                    record[`demand__${x[0]}__${x[1]}`.split(' ').join('_')] = true;
                }
            }
            if (record._business_record) {
                const demand = record._business_record.demand_category;
                if (demand && demand.length > 0) {
                    update_record(demand);
                    return true;
                }
            }
            return this.data.demand_categories.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((demand) => {
                update_record(demand);
                return false;
            })).toPromise();
        });
    }
    prepare_geo_insights(record) {
        return this.data.stacks.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((stacks) => {
            const features = [];
            features.push(...record.location.isochrones[0].features);
            features.push(...record.location.isochrones[1].features);
            stacks.institutions.isochronesGeometry = {
                type: 'FeatureCollection',
                features: features
            };
            stacks.institutions.cards.forEach((card) => {
                for (const feature of card.pointGeometry.features) {
                    if (_turf_turf__WEBPACK_IMPORTED_MODULE_7__["distance"](feature, record.location.center) < 0.5) {
                        card.test = 'location';
                        return;
                    }
                }
                card.test = '__non_existent__';
            });
        })).toPromise();
    }
    send_client_response_email(record) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const address = record.email_address;
            return this.backend.sendClientEmail(address, record);
        });
    }
    restart() {
        const state = this.runner.state;
        if (this.runnerSub) {
            this.runnerSub.unsubscribe();
            this.runnerSub = null;
        }
        this.initChat();
    }
    start() {
        this.runner.timeout = this.TIMEOUT;
        this.runner.fixme = () => {
            this.restart();
        };
        console.log('CONTENT', this.content);
        this.content.debug = true;
        this.runner.debug = true;
        this.record._state = this.record._state || {};
        this.runner.state = this.record._state;
        this.runnerSub = this.runner.run(this.config, 0, {
            check_for_opportunity: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.check_for_opportunity(); }),
            check_needs_licensing: (record) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.check_needs_licensing(record); }),
            check_needs_signage: (record) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.check_needs_signage(record); }),
            calculate_arnona: (record) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.calculate_arnona(record); }),
            check_needs_demand: (record) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.check_needs_demand(record); }),
            calculate_locations: (record) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.calculate_locations(record); }),
            prepare_geo_insights: (record) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.prepare_geo_insights(record); }),
            send_client_response_email: (record) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.send_client_response_email(record); }),
        }, (key, value, record) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.backend.update(record);
        }), this.record).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(() => {
            this.content.reportUpdated(null);
            this.content.queueFunction(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.content.setQueueTimeout(this.TIMEOUT);
                this.runner.runFast = false;
                this.content.messages.forEach((m) => { m.params.fixme = null; });
            }));
            return this.backend.update(this.record);
        })).subscribe((res) => {
            console.log('done!', res);
        });
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_config_service__WEBPACK_IMPORTED_MODULE_9__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_12__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_map_service__WEBPACK_IMPORTED_MODULE_13__["MapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_backend_service__WEBPACK_IMPORTED_MODULE_15__["BackendService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_i18n_service__WEBPACK_IMPORTED_MODULE_16__["I18nService"])); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 3, vars: 1, consts: [[1, "chat"], ["appLtr", "", 3, "content", 4, "ngIf"], ["appLtr", "", 3, "content"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MainPageComponent_htl_hatool_1_Template, 1, 1, "htl-hatool", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-widget-map");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.content);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _widgets_widget_map_widget_map_component__WEBPACK_IMPORTED_MODULE_18__["WidgetMapComponent"], hatool__WEBPACK_IMPORTED_MODULE_2__["HatoolLibComponent"], _ltr_directive__WEBPACK_IMPORTED_MODULE_19__["LtrDirective"]], styles: ["@import 'https://fonts.googleapis.com/earlyaccess/opensanshebrew.css';\n\n\n\n.font1[_ngcontent-%COMP%] {\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n}\n@font-face {\n  font-family: Narkiss;\n  font-weight: normal;\n  src: url('NarkissBlockCondensed-Regular-TRIAL.otf') format(\"opentype\");\n}\n@font-face {\n  font-family: Narkiss;\n  font-weight: bold;\n  src: url('NarkissBlockCondensed-Bold-TRIAL.otf') format(\"opentype\");\n}\n.font2[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n}\n\n.to-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n\n.options-text[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #2C3C3B;\n}\n\n.from-text[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #ffffff;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n.card-text[_ngcontent-%COMP%] {\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n.gallery-title[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-weight: 700;\n  font-size: 24px;\n  color: #360627;\n}\n.gallery-text[_ngcontent-%COMP%] {\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-weight: 300;\n  font-size: 24px;\n  color: #360627;\n}\n\n.bot-message[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  box-shadow: 0px 2px 0px #CBD6D9;\n  border-radius: 12px 1px 12px 12px;\n  padding: 8px 16px;\n  font-size: 16px;\n  font-family: 'Open Sans Hebrew', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #360627;\n}\n.bot-option[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1px solid #2C3C3B;\n  box-shadow: 0px 2px 0px #2C3C3B;\n  border-radius: 24px;\n  padding: 8px 16px;\n  margin: 0 4px;\n  white-space: nowrap;\n  cursor: pointer;\n  font-size: 22px;\n  font-family: Narkiss, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: #2C3C3B;\n}\n\n.no-scrollbars[_ngcontent-%COMP%] {\n  \n  scrollbar-width: none;\n  \n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n.no-scrollbars[_ngcontent-%COMP%]::-webkit-scrollbar {\n  \n  display: none;\n}\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: center;\n  background: url('background.png');\n}\n[_nghost-%COMP%]   .chat[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 600px;\n  height: calc(100% - max(0px, (100vw - 600px) / 10));\n  border: 1px solid #2C3C3B;\n}\n[_nghost-%COMP%]   app-widget-map[_ngcontent-%COMP%] {\n  z-index: 5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2J1c2luZXNzZ2F0ZS9zcmMvYXBwL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50Lmxlc3MiLCIvVXNlcnMvYWRhbS9Db2RlL2hhc2FkbmEvYnVzaW5lc3NnYXRlL3VpL3Byb2plY3RzL2J1c2luZXNzZ2F0ZS9zcmMvY29tbW9uLmxlc3MiLCIvVXNlcnMvYWRhbS9Db2RlL2hhc2FkbmEvYnVzaW5lc3NnYXRlL3VpL3Byb2plY3RzL2J1c2luZXNzZ2F0ZS9zcmMvYXBwL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUVDQWM7QURDZCxjQUFjO0FBQ2QsV0FBVztBQUNYLFVBQVU7QUNpQlY7RUFDSSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURmSjtBQ2tCQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzRUFBQTtBRGhCSjtBQ21CQTtFQUNJLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtRUFBQTtBRGpCSjtBQ29CQTtFQUNJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRGxCSjtBQUNBLFlBQVk7QUNxQlo7RUFDSSxlQUFBO0VBekJBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQXlCQSxjQUFBO0FEakJKO0FBQ0EsaUJBQWlCO0FDb0JqQjtFQUNJLGVBQUE7RUFkQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFjQSxjQUFBO0FEaEJKO0FBQ0EsY0FBYztBQ21CZDtFQUNJLGVBQUE7RUFyQkEsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBcUJBLGNBQUE7QURmSjtBQ2tCQTtFQTFCSSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUEwQkEsY0FBQTtBRGRKO0FDaUJBO0VBakRJLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQWlEQSxjQUFBO0FEYko7QUNnQkE7RUFwQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBb0NBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QURaSjtBQ2VBO0VBM0NJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQTJDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FEWEo7QUFDQSxZQUFZO0FDY1o7RUFDSSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUNBQUE7RUFFQSxpQkFBQTtFQWpEQSxlQUFBO0VBekJBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQXlCQSxjQUFBO0FEdUNKO0FDYUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUVBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQXhEQSxlQUFBO0VBZEEsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBY0EsY0FBQTtBRCtDSjtBQUNBLGNBQWM7QUNZZDtFRFZFLFVBQVU7RUNZUixxQkFBQTtFRFZGLFFBQVE7RUNZTiw0Q0FBQTtBRFZKO0FDV0k7RURURix1QkFBdUI7RUNXakIsYUFBQTtBRFRSO0FFN0dBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUNBQUE7QUYrR0o7QUV0SEE7RUFVUSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtREFBQTtFQUNBLHlCQUFBO0FGK0dSO0FFNUhBO0VBaUJRLFVBQUE7QUY4R1IiLCJmaWxlIjoicHJvamVjdHMvYnVzaW5lc3NnYXRlL3NyYy9hcHAvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vZWFybHlhY2Nlc3Mvb3BlbnNhbnNoZWJyZXcuY3NzJztcbi8qIGNvbnRhaW5lciAqL1xuLyogY29sb3JzICovXG4vKiBmb250cyAqL1xuLmZvbnQxIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgSGVicmV3Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBOYXJraXNzO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9mb250cy9OYXJraXNzQmxvY2tDb25kZW5zZWQtUmVndWxhci1UUklBTC5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IE5hcmtpc3M7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9mb250cy9OYXJraXNzQmxvY2tDb25kZW5zZWQtQm9sZC1UUklBTC5vdGZcIikgZm9ybWF0KFwib3BlbnR5cGVcIik7XG59XG4uZm9udDIge1xuICBmb250LWZhbWlseTogTmFya2lzcywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLyogdG8gdGV4dCAqL1xuLnRvLXRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIEhlYnJldycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMzNjA2Mjc7XG59XG4vKiBvcHRpb25zIHRleHQgKi9cbi5vcHRpb25zLXRleHQge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtZmFtaWx5OiBOYXJraXNzLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMkMzQzNCO1xufVxuLyogZnJvbSB0ZXh0ICovXG4uZnJvbS10ZXh0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogTmFya2lzcywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5jYXJkLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IE5hcmtpc3MsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMzNjA2Mjc7XG59XG4uY2FyZC10ZXh0IHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgSGVicmV3Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzM2MDYyNztcbn1cbi5nYWxsZXJ5LXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IE5hcmtpc3MsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzM2MDYyNztcbn1cbi5nYWxsZXJ5LXRleHQge1xuICBmb250LWZhbWlseTogTmFya2lzcywgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjMzYwNjI3O1xufVxuLyogYnViYmxlcyAqL1xuLmJvdC1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAwcHggI0NCRDZEOTtcbiAgYm9yZGVyLXJhZGl1czogMTJweCAxcHggMTJweCAxMnB4O1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBIZWJyZXcnLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMzYwNjI3O1xufVxuLmJvdC1vcHRpb24ge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMkMzQzNCO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDBweCAjMkMzQzNCO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgbWFyZ2luOiAwIDRweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtZmFtaWx5OiBOYXJraXNzLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMkMzQzNCO1xufVxuLyogdXRpbGl0aWVzICovXG4ubm8tc2Nyb2xsYmFycyB7XG4gIC8qRmlyZUZveCovXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgLypJRTEwKyovXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xufVxuLm5vLXNjcm9sbGJhcnM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgLypDaHJvbWUsIFNhZmFyaSwgRWRnZSovXG4gIGRpc3BsYXk6IG5vbmU7XG59XG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC5wbmcpO1xufVxuOmhvc3QgLmNoYXQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSBtYXgoMHB4LCAoMTAwdncgLSA2MDBweCkgLyAxMCkpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMkMzQzNCO1xufVxuOmhvc3QgYXBwLXdpZGdldC1tYXAge1xuICB6LWluZGV4OiA1O1xufVxuIiwiQGltcG9ydCAoY3NzKSAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9lYXJseWFjY2Vzcy9vcGVuc2Fuc2hlYnJldy5jc3MnO1xuXG4vKiBjb250YWluZXIgKi9cbkBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLnBuZyk7XG5AYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbkBjb250YWluZXItcGFkZGluZzogMjBweDtcblxuLyogY29sb3JzICovXG5Ad2hpdGU6ICNmZmY7XG5AYWNjZW50LXRleHQ6ICMzNjA2Mjc7XG5AYmxhY2stNzAwOiAjMkMzQzNCO1xuQGJsYWNrLTUwMDogIzczNzM3MztcbkBncmF5LWY2OiAjZjZmNmY2O1xuQGdyYXktOTc6ICM5Nzk3OTc7XG5Ad2hpdGU6ICNmZmZmZmY7XG5AYWNjZW50LTEwMDogI0Y5RjdGNztcbkBvcmFuZ2UtNzAwOiAjOUYwOTA5O1xuQGRlbW9ncmFwaGljcy03MDA6ICMwRjgwNDI7XG5cbi8qIGZvbnRzICovXG4uZm9udDEge1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIEhlYnJldycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59IFxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogTmFya2lzcztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIHNyYzogdXJsKFwiYXNzZXRzL2ZvbnRzL05hcmtpc3NCbG9ja0NvbmRlbnNlZC1SZWd1bGFyLVRSSUFMLm90ZlwiKSBmb3JtYXQoXCJvcGVudHlwZVwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IE5hcmtpc3M7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgc3JjOiB1cmwoXCJhc3NldHMvZm9udHMvTmFya2lzc0Jsb2NrQ29uZGVuc2VkLUJvbGQtVFJJQUwub3RmXCIpIGZvcm1hdChcIm9wZW50eXBlXCIpO1xufVxuXG4uZm9udDIge1xuICAgIGZvbnQtZmFtaWx5OiBOYXJraXNzLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4vKiB0byB0ZXh0ICovXG4udG8tdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIC5mb250MTtcbiAgICBjb2xvcjogQGFjY2VudC10ZXh0O1xufVxuXG4vKiBvcHRpb25zIHRleHQgKi9cbi5vcHRpb25zLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAuZm9udDI7XG4gICAgY29sb3I6IEBibGFjay03MDA7XG59XG5cbi8qIGZyb20gdGV4dCAqL1xuLmZyb20tdGV4dCB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIC5mb250MjtcbiAgICBjb2xvcjogQHdoaXRlO1xufVxuXG4uY2FyZC10aXRsZSB7XG4gICAgLmZvbnQyO1xuICAgIGNvbG9yOiBAYWNjZW50LXRleHQ7XG59XG5cbi5jYXJkLXRleHQge1xuICAgIC5mb250MTtcbiAgICBjb2xvcjogQGFjY2VudC10ZXh0O1xufVxuXG4uZ2FsbGVyeS10aXRsZSB7XG4gICAgLmZvbnQyO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiBAYWNjZW50LXRleHQ7XG59XG5cbi5nYWxsZXJ5LXRleHQge1xuICAgIC5mb250MjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogQGFjY2VudC10ZXh0O1xufVxuXG4vKiBidWJibGVzICovXG4uYm90LW1lc3NhZ2Uge1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAwcHggI0NCRDZEOTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4IDFweCAxMnB4IDEycHg7XG5cbiAgICBwYWRkaW5nOiA4cHggMTZweDtcblxuICAgIC50by10ZXh0O1xufVxuXG4uYm90LW9wdGlvbiB7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBAYmxhY2stNzAwO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggMHB4IEBibGFjay03MDA7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcblxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIG1hcmdpbjogMCA0cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAub3B0aW9ucy10ZXh0O1xufVxuXG4vKiB1dGlsaXRpZXMgKi9cbi5uby1zY3JvbGxiYXJzIHtcbiAgICAvKkZpcmVGb3gqL1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICAvKklFMTArKi9cbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgLypDaHJvbWUsIFNhZmFyaSwgRWRnZSovXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfSBcbn1cblxuLy8gQGJsdWVncmVlbjogIzAwODA3Yztcbi8vIEBmYWRlZC1ibHVlZ3JlZW46ICNlNWYyZjE7XG4vLyBAY2hhcmNvYWw6ICMyYzNjM2I7XG4vLyBAYXViZXJnaW5lOiAjNDgwYTM1O1xuLy8gQHNlYWZvYW0tYmx1ZTogIzZlZGVkYTtcbi8vIEBjb29sLWdyZXk6ICM4OWE5YTg7XG4vLyBAcGFsZS1ibHVlOiAjZDlmMmYxO1xuLy8gQHdoaXRlOiAjZjZmNmY2O1xuXG5cbi8vIC5jdGEge1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgZmxleC1mbG93OiBjb2x1bW47XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBmbGV4OiAwIDAgYXV0bztcbi8vICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuXG4vLyAgICAgLmJ1dHRvbiB7XG4vLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgICAgIGZsZXgtZmxvdzogcm93O1xuLy8gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuLy8gICAgICAgICBib3JkZXI6IHNvbGlkIDFweCBAc2VhZm9hbS1ibHVlOyAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQHBhbGUtYmx1ZTtcbi8vICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuLy8gICAgICAgICBjb2xvcjogQGJsdWVncmVlbjtcbi8vICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4vLyAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4vLyAgICAgICAgIHBhZGRpbmc6IDRweCAyMHB4O1xuLy8gICAgICAgICBtYXJnaW46IDEwcHggMDtcbi8vICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4vLyAgICAgICAgIGltZyB7XG4vLyAgICAgICAgICAgICBtYXJnaW46IDAgNXB4OyAgIFxuLy8gICAgICAgICB9XG5cbi8vICAgICB9XG5cbi8vIH1cblxuLy8gLnZpc3VhbGx5LWhpZGRlbiB7XG4vLyAgICAgYm9yZGVyOiAwO1xuLy8gICAgIGNsaXA6IHJlY3QoMXB4LDFweCwxcHgsMXB4KTtcbi8vICAgICAtd2Via2l0LWNsaXAtcGF0aDogaW5zZXQoNTAlKTtcbi8vICAgICBjbGlwLXBhdGg6IGluc2V0KDUwJSk7XG4vLyAgICAgaGVpZ2h0OiAxcHg7XG4vLyAgICAgbWFyZ2luOiAtMXB4O1xuLy8gICAgIG1hcmdpbi10b3A6IC0xcHg7XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogLTFweDtcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xuLy8gICAgIHBhZGRpbmc6IDA7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHdpZHRoOiAxcHg7XG4vLyAgICAgd29yZC13cmFwOiBub3JtYWw7XG4vLyB9XG5cbi8vIC5wbGFjZWhvbGRlci10eCB7XG4vLyAgICAgZGlzcGxheTogbm9uZTtcbi8vIH1cbiIsIkBpbXBvcnQgJy4uLy4uL2NvbW1vbi5sZXNzJztcblxuQGNoYXQtd2lkdGg6IDYwMHB4O1xuXG46aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgICAgXG4gICAgYmFja2dyb3VuZDogQGJhY2tncm91bmQtaW1hZ2U7XG4gICAgXG4gICAgLmNoYXQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiBAY2hhdC13aWR0aDtcbiAgICAgICAgaGVpZ2h0OiB+J2NhbGMoMTAwJSAtIG1heCgwcHgsICgxMDB2dyAtIDYwMHB4KSAvIDEwKSknO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBAYmxhY2stNzAwO1xuICAgIH1cblxuICAgIGFwcC13aWRnZXQtbWFwIHtcbiAgICAgICAgei1pbmRleDogNTtcbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-main-page',
                templateUrl: './main-page.component.html',
                styleUrls: ['./main-page.component.less']
            }]
    }], function () { return [{ type: _config_service__WEBPACK_IMPORTED_MODULE_9__["ConfigService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"] }, { type: _api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"] }, { type: _data_service__WEBPACK_IMPORTED_MODULE_12__["DataService"] }, { type: _map_service__WEBPACK_IMPORTED_MODULE_13__["MapService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"] }, { type: _backend_service__WEBPACK_IMPORTED_MODULE_15__["BackendService"] }, { type: _i18n_service__WEBPACK_IMPORTED_MODULE_16__["I18nService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/map.service.ts":
/*!********************************!*\
  !*** ./src/app/map.service.ts ***!
  \********************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mapbox-gl */ "../../node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class MapService {
    constructor(http) {
        this.http = http;
        this.ACCESS_TOKEN = 'pk.eyJ1IjoiYWthcml2IiwiYSI6ImNqMWdkMXd0MzAwMGgycXV4dDVhNWUzam4ifQ.0Q6N5ch8nrnp5sLnCpDYZQ';
        mapbox_gl__WEBPACK_IMPORTED_MODULE_0__["accessToken"] = this.ACCESS_TOKEN;
        mapbox_gl__WEBPACK_IMPORTED_MODULE_0__["setRTLTextPlugin"]('https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js', null, true // Lazy load the plugin
        );
    }
    isochrone(coordinates, minutes) {
        const urlBase = 'https://api.mapbox.com/isochrone/v1/mapbox';
        const url = `${urlBase}/walking/${coordinates[0]},${coordinates[1]}` +
            `?contours_minutes=${minutes}&polygons=true&access_token=${this.ACCESS_TOKEN}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((geojson) => {
            for (const feature of geojson.features) {
                feature.properties['iso-distance'] = minutes;
            }
            return geojson;
        }));
    }
}
MapService.ɵfac = function MapService_Factory(t) { return new (t || MapService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
MapService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MapService, factory: MapService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MapService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/widgets.service.ts":
/*!************************************!*\
  !*** ./src/app/widgets.service.ts ***!
  \************************************/
/*! exports provided: WidgetsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsService", function() { return WidgetsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");



class WidgetsService {
    constructor() {
        this.mapBounds = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.mapLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
}
WidgetsService.ɵfac = function WidgetsService_Factory(t) { return new (t || WidgetsService)(); };
WidgetsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WidgetsService, factory: WidgetsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/widgets/widget-map/widget-map.component.ts":
/*!************************************************************!*\
  !*** ./src/app/widgets/widget-map/widget-map.component.ts ***!
  \************************************************************/
/*! exports provided: WidgetMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetMapComponent", function() { return WidgetMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mapbox-gl */ "../../node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../map.service */ "./src/app/map.service.ts");
/* harmony import */ var _widgets_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../widgets.service */ "./src/app/widgets.service.ts");







const _c0 = ["mapEl"];
class WidgetMapComponent {
    constructor(mapService, widgets) {
        this.mapService = mapService;
        this.widgets = widgets;
        this.open = false;
        this.mapObs = null;
        widgets.mapBounds.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])((a, b) => {
            return ((a === b) ||
                (!!a && !!b &&
                    (a.padding === b.padding) &&
                    ((a.bounds === b.bounds) ||
                        (a.bounds.toString() === b.bounds.toString()))));
        })).subscribe((bounds) => {
            if (bounds) {
                if (this.mapObs === null) {
                    this.open = true;
                    this.mapObs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
                    setTimeout(() => {
                        console.log('CREATING MAP', bounds);
                        this.map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["Map"]({
                            container: this.mapEl.nativeElement,
                            style: 'mapbox://styles/akariv/ckhix97sm2bcw19ldri4vu9ds/draft',
                            bounds: bounds.bounds,
                            minZoom: 3,
                        });
                        this.map.on('style.load', () => {
                            this.mapObs.next(this.map);
                            this.widgets.mapLoaded.next(this.map);
                        });
                    }, 0);
                }
                else {
                    this.mapObs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe((map) => {
                        map.fitBounds(bounds.bounds, { padding: bounds.padding });
                    });
                }
            }
            else {
                if (this.mapObs !== null) {
                    this.mapObs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe((map) => {
                        map.remove();
                        this.open = false;
                        this.map = null;
                        this.mapObs = null;
                    });
                    this.widgets.mapLoaded.next(null);
                }
            }
        });
    }
    ngOnInit() {
    }
}
WidgetMapComponent.ɵfac = function WidgetMapComponent_Factory(t) { return new (t || WidgetMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_widgets_service__WEBPACK_IMPORTED_MODULE_5__["WidgetsService"])); };
WidgetMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WidgetMapComponent, selectors: [["app-widget-map"]], viewQuery: function WidgetMapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mapEl = _t.first);
    } }, decls: 2, vars: 2, consts: [[1, "map"], ["mapEl", ""]], template: function WidgetMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.open);
    } }, styles: ["[_nghost-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  display: block;\n  pointer-events: none;\n}\n[_nghost-%COMP%]   .map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  display: none;\n  pointer-events: all;\n}\n[_nghost-%COMP%]   .map.open[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGFtL0NvZGUvaGFzYWRuYS9idXNpbmVzc2dhdGUvdWkvcHJvamVjdHMvYnVzaW5lc3NnYXRlL3NyYy9hcHAvd2lkZ2V0cy93aWRnZXQtbWFwL3dpZGdldC1tYXAuY29tcG9uZW50Lmxlc3MiLCJwcm9qZWN0cy9idXNpbmVzc2dhdGUvc3JjL2FwcC93aWRnZXRzL3dpZGdldC1tYXAvd2lkZ2V0LW1hcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ0NKO0FETkE7RUFRUSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ1I7QURDUTtFQUNJLGNBQUE7QUNDWiIsImZpbGUiOiJwcm9qZWN0cy9idXNpbmVzc2dhdGUvc3JjL2FwcC93aWRnZXRzL3dpZGdldC1tYXAvd2lkZ2V0LW1hcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgLm1hcCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcblxuICAgICAgICAmLm9wZW4ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICB9ICAgIFxufVxuXG4iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuOmhvc3QgLm1hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cbjpob3N0IC5tYXAub3BlbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-widget-map',
                templateUrl: './widget-map.component.html',
                styleUrls: ['./widget-map.component.less']
            }]
    }], function () { return [{ type: _map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"] }, { type: _widgets_service__WEBPACK_IMPORTED_MODULE_5__["WidgetsService"] }]; }, { mapEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mapEl', { static: true }]
        }] }); })();


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
const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBThYMMJrWg1BznrJEaQ49PSw1lG_XHApM',
        authDomain: 'businessgate-beersheva.firebaseapp.com',
        databaseURL: 'https://businessgate-beersheva.firebaseio.com',
        projectId: 'businessgate-beersheva',
        storageBucket: 'businessgate-beersheva.appspot.com',
        messagingSenderId: '292108806732',
        appId: '1:292108806732:web:1b2df43212b5e0202ae2e9',
        measurementId: 'G-MCEC1ECFK6'
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/adam/Code/hasadna/businessgate/ui/projects/businessgate/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map