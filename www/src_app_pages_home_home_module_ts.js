"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 7157:
/*!*************************************************************!*\
  !*** ./src/app/components/character/character.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharacterComponent": () => (/* binding */ CharacterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _character_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character.component.html?ngResource */ 7052);
/* harmony import */ var _character_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character.component.scss?ngResource */ 5517);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let CharacterComponent = class CharacterComponent {
    constructor() { }
    ngOnInit() { }
};
CharacterComponent.ctorParameters = () => [];
CharacterComponent.propDecorators = {
    character: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
CharacterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-character',
        template: _character_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_character_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CharacterComponent);



/***/ }),

/***/ 4780:
/*!**********************************************************!*\
  !*** ./src/app/components/character/character.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharacterComponentModule": () => (/* binding */ CharacterComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _character_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./character.component */ 7157);







let CharacterComponentModule = class CharacterComponentModule {
};
CharacterComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
        declarations: [_character_component__WEBPACK_IMPORTED_MODULE_0__.CharacterComponent],
        exports: [_character_component__WEBPACK_IMPORTED_MODULE_0__.CharacterComponent]
    })
], CharacterComponentModule);



/***/ }),

/***/ 6610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 6610);
/* harmony import */ var _components_character_character_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/character/character.module */ 4780);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _components_character_character_module__WEBPACK_IMPORTED_MODULE_2__.CharacterComponentModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 8380);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 2260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ 2468);






let HomePage = class HomePage {
    constructor(data, routerOutlet) {
        this.data = data;
        this.routerOutlet = routerOutlet;
        this.chrachterList = [];
        this.startindex = 0;
        this.limit = 20;
        this.searchText = '';
    }
    ngOnInit() {
        this.getCharachterList(true);
    }
    refresh(ev) {
        setTimeout(() => {
            ev.detail.complete();
        }, 3000);
    }
    searchChange($event) {
        this.searchText = $event.target.value;
        this.getCharachterList(true);
    }
    //get Marvel Charachters
    getCharachterList(init) {
        if (init) {
            this.startindex = 0;
            this.chrachterList = [];
        }
        this.data.getCharacterList(this.limit, this.startindex, this.searchText)
            .then(data => {
            this.chrachterList.push(...data.data.data.results);
            console.log("list:" + JSON.stringify(this.chrachterList));
        });
    }
    scrollInfinite(event) {
        this.startindex += 20;
        this.getCharachterList(false);
        setTimeout(() => {
            event.target.complete();
        }, 500);
    }
};
HomePage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRouterOutlet }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 5517:
/*!**************************************************************************!*\
  !*** ./src/app/components/character/character.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n\nimg {\n  margin: 0px;\n  padding: 0px;\n  box-shadow: 0px 0px 5px 0px rgba(72, 72, 72, 0.3);\n  border: 1px solid var(--ion-color-border);\n  border-radius: 8px;\n}\n\n.characterTitle {\n  margin: 5px 0px 5px 5px;\n  font-size: small;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJhY3Rlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0NvZGluZyUyMEFzc2lnbm1lbnQvRmFiZXIvbWFydmVsLXVuaXZlcnNlL3NyYy9hcHAvY29tcG9uZW50cy9jaGFyYWN0ZXIvY2hhcmFjdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpREFBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6ImNoYXJhY3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbn1cblxuaW1nIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoNzIsIDcyLCA3MiwgMC4zKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItYm9yZGVyKTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5jaGFyYWN0ZXJUaXRsZSB7XG4gICAgbWFyZ2luOiA1cHggMHB4IDVweCA1cHg7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuIiwiaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG59XG5cbmltZyB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDcyLCA3MiwgNzIsIDAuMyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5jaGFyYWN0ZXJUaXRsZSB7XG4gIG1hcmdpbjogNXB4IDBweCA1cHggNXB4O1xuICBmb250LXNpemU6IHNtYWxsO1xuICBmb250LXdlaWdodDogNjAwO1xufSJdfQ== */";

/***/ }),

/***/ 2260:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-title h1 {\n  font-weight: 650;\n}\nion-title h5 {\n  font-weight: 600;\n}\nh2 {\n  font-weight: 650;\n  margin-left: 15px;\n  font-size: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQ29kaW5nJTIwQXNzaWdubWVudC9GYWJlci9tYXJ2ZWwtdW5pdmVyc2Uvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZ0JBQUE7QUNBUjtBREVJO0VBQ0ksZ0JBQUE7QUNBUjtBRElBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDREoiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xuICAgIGgxe1xuICAgICAgICBmb250LXdlaWdodDogNjUwO1xuICAgIH1cbiAgICBoNXtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG59XG5cbmgye1xuICAgIGZvbnQtd2VpZ2h0OiA2NTA7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbn0iLCJpb24tdGl0bGUgaDEge1xuICBmb250LXdlaWdodDogNjUwO1xufVxuaW9uLXRpdGxlIGg1IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuaDIge1xuICBmb250LXdlaWdodDogNjUwO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn0iXX0= */";

/***/ }),

/***/ 7052:
/*!**************************************************************************!*\
  !*** ./src/app/components/character/character.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-item *ngIf=\"character\" [routerLink]=\"'/character-details/' + character.id\" [detail]=\"false\" lines=\"none\">\n  <ion-col>\n    <img \n      src=\"{{character.thumbnail.path}}/portrait_incredible.{{character.thumbnail.extension}}\" />\n\n    <ion-text class=\"ion-no-margin\">\n      <h6 class=\"characterTitle\" color=\"primary\">{{character.name}}</h6>\n    </ion-text>\n  </ion-col>\n</ion-item>";

/***/ }),

/***/ 8380:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" mode=\"ios\">\n  <ion-toolbar mode=\"ios\">\n    <h2 color=\"primary\">Marvel Universe</h2>\n  </ion-toolbar>\n  <ion-toolbar mode=\"ios\">\n    <ion-searchbar type=\"text\" showCancelButton=\"focus\" mode=\"ios\" (ionChange)=\"searchChange($event)\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n<ion-content [fullscreen]=\"true\">\n\n\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor=\"let character of chrachterList\" size=\"4\">\n        <app-character [character]=\"character\"></app-character>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"scrollInfinite($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map