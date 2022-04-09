"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_comic-details_comic-details_module_ts"],{

/***/ 8001:
/*!*********************************************************************!*\
  !*** ./src/app/pages/comic-details/comic-details-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComicDetailsPageRoutingModule": () => (/* binding */ ComicDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _comic_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comic-details.page */ 1761);




const routes = [
    {
        path: '',
        component: _comic_details_page__WEBPACK_IMPORTED_MODULE_0__.ComicDetailsPage
    }
];
let ComicDetailsPageRoutingModule = class ComicDetailsPageRoutingModule {
};
ComicDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ComicDetailsPageRoutingModule);



/***/ }),

/***/ 7800:
/*!*************************************************************!*\
  !*** ./src/app/pages/comic-details/comic-details.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComicDetailsPageModule": () => (/* binding */ ComicDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _comic_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comic-details-routing.module */ 8001);
/* harmony import */ var _comic_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comic-details.page */ 1761);







let ComicDetailsPageModule = class ComicDetailsPageModule {
};
ComicDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _comic_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComicDetailsPageRoutingModule
        ],
        declarations: [_comic_details_page__WEBPACK_IMPORTED_MODULE_1__.ComicDetailsPage]
    })
], ComicDetailsPageModule);



/***/ }),

/***/ 1761:
/*!***********************************************************!*\
  !*** ./src/app/pages/comic-details/comic-details.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComicDetailsPage": () => (/* binding */ ComicDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _comic_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comic-details.page.html?ngResource */ 5702);
/* harmony import */ var _comic_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comic-details.page.scss?ngResource */ 2577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ 2468);






let ComicDetailsPage = class ComicDetailsPage {
    constructor(data, activatedRoute) {
        this.data = data;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.getComicData(parseInt(id));
    }
    getComicData(id) {
        this.data.getComicById(id)
            .then(data => {
            this.comic = data.data.data.results[0];
            //console.log("comicData:" + JSON.stringify(this.comic));
        });
    }
};
ComicDetailsPage.ctorParameters = () => [
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
ComicDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-comic-details',
        template: _comic_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_comic_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ComicDetailsPage);



/***/ }),

/***/ 2577:
/*!************************************************************************!*\
  !*** ./src/app/pages/comic-details/comic-details.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: transparent;\n  --border-color: transparent;\n}\n\n.container {\n  padding: 20px;\n}\n\n.characterImageContainer {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nimg {\n  width: 50%;\n  margin-top: 10px;\n  padding: 0px;\n  box-shadow: 0px 0px 5px 0px rgba(72, 72, 72, 0.3);\n  border: 1px solid var(--ion-color-border);\n  border-radius: 8px;\n  background-color: linear-gradient(to bottom, #1a1240 35%, #6528af 70%, #736eed 100%);\n}\n\nh1 {\n  margin: 30px 0px;\n  font-weight: bold;\n  font-size: 22px;\n  text-align: left;\n}\n\np {\n  line-height: 22px;\n  font-weight: 400;\n  font-size: medium;\n}\n\n.label {\n  color: var(--ion-color-primary);\n}\n\n.price {\n  margin: 0px;\n  margin-bottom: 10px;\n}\n\nion-grid {\n  margin: 0px 0px;\n  padding: 10px 0px;\n  align-items: center;\n  justify-content: center;\n}\n\nion-row {\n  margin: 10px 0px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWljLWRldGFpbHMucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQ29kaW5nJTIwQXNzaWdubWVudC9GYWJlci9tYXJ2ZWwtdW5pdmVyc2Uvc3JjL2FwcC9wYWdlcy9jb21pYy1kZXRhaWxzL2NvbWljLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSwyQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaURBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0ZBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBRUksK0JBQUE7QUNBSjs7QURJQTtFQUVJLFdBQUE7RUFDQSxtQkFBQTtBQ0ZKOztBREtBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0ZKOztBREtBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FDRkoiLCJmaWxlIjoiY29taWMtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5jaGFyYWN0ZXJJbWFnZUNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5pbWcge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoNzIsIDcyLCA3MiwgMC4zKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItYm9yZGVyKTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzFhMTI0MCAzNSUsICM2NTI4YWYgNzAlLCAjNzM2ZWVkIDEwMCUpO1xufVxuXG5oMSB7XG4gICAgbWFyZ2luOiAzMHB4IDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxucCB7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbn1cblxuLmxhYmVse1xuXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcblxufVxuXG4ucHJpY2V7XG5cbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5pb24tZ3JpZHtcbiAgICBtYXJnaW46IDBweCAwcHg7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgICAgXG59XG5cbmlvbi1yb3d7XG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiIsImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmNoYXJhY3RlckltYWdlQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5pbWcge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDcyLCA3MiwgNzIsIDAuMyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMxYTEyNDAgMzUlLCAjNjUyOGFmIDcwJSwgIzczNmVlZCAxMDAlKTtcbn1cblxuaDEge1xuICBtYXJnaW46IDMwcHggMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5wIHtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xufVxuXG4ubGFiZWwge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4ucHJpY2Uge1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuaW9uLWdyaWQge1xuICBtYXJnaW46IDBweCAwcHg7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW9uLXJvdyB7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";

/***/ }),

/***/ 5702:
/*!************************************************************************!*\
  !*** ./src/app/pages/comic-details/comic-details.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button [text]=\"''\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Comic Details\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content [fullscreen]=\"true\" *ngIf=\"comic\" [scrollEvents]=\"true\">\n\n  <div class=\"container\">\n\n\n    <div class=\"characterImageContainer\">\n\n      <img src=\"{{comic.thumbnail.path}}/portrait_incredible.{{comic.thumbnail.extension}}\" />\n\n    </div>\n\n    <h1 color=\"primary\" class=\"ion-text-center\">{{comic.title}}</h1>\n\n    <p class=\"ion-text-justify\">{{ comic.description }}</p>\n\n    <ion-grid>\n\n      <ion-row>\n        <ion-col size=\"4\">\n          <span class=\"label\">Format :</span>\n        </ion-col>\n\n        <ion-col size=\"8\">\n          <span>{{comic.format}}</span>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"4\">\n          <span class=\"label\">Page Count :</span>\n        </ion-col>\n\n        <ion-col size=\"8\">\n          <span>{{comic.pageCount}}</span>\n        </ion-col>\n\n      </ion-row>\n      \n\n      <ion-row>\n        <ion-col size=\"4\">\n          <span class=\"label\">Price :</span>\n        </ion-col>\n\n        <ion-col size=\"8\">\n          <p class=\"price\" *ngFor=\"let price of comic.prices\">\n            ${{price .price}}({{price.type}})\n          </p>\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n  </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_comic-details_comic-details_module_ts.js.map