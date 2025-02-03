(self["webpackChunkmanagement_portal_clr"] = self["webpackChunkmanagement_portal_clr"] || []).push([["main"],{

/***/ 52961:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule),
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 44424);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth.guard */ 27061);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1888);
/*
 * Copyright (c) 2024 Maritime Connectivity Platform Consortium
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




const routes = [{
  path: 'pages',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_common_translateHelper_ts-src_app_components_components_module_ts"), __webpack_require__.e("src_app_pages_pages_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages.module */ 36400)).then(m => m.PagesModule),
  canActivateChild: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.authGuard]
}, {
  path: '',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_common_translateHelper_ts-src_app_components_components_module_ts"), __webpack_require__.e("src_app_landing_landing_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./landing/landing.module */ 52576)).then(m => m.LandingModule)
}
//*
//{ path: '', redirectTo: 'pages', pathMatch: 'full' },
//{ path: '**', redirectTo: 'pages' },
//*/
];
const config = {
  useHash: false
};
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, config), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 35429:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1888);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 44424);
/* harmony import */ var gramli_angular_notifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gramli-angular-notifier */ 1059);



class AppComponent {
  constructor() {
    this.title = 'management-portal-clr';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 2,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet")(1, "notifier-container");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, gramli_angular_notifier__WEBPACK_IMPORTED_MODULE_2__.NotifierContainerComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 96370:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppConfig: () => (/* binding */ AppConfig)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 91083);
/* harmony import */ var _common_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/version */ 72741);
/*
 * Copyright (c) 2024 Maritime Connectivity Platform Consortium
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


class AppConfig {
  static _initialize() {
    AppConfig.IR_BASE_PATH = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.irBasePath.replace(/\/$/, '');
    AppConfig.SR_BASE_PATH = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hasServiceRegistry ? _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.srBasePath.replace(/\/$/, '') : '';
    AppConfig.ENVIRONMENT_TITLE = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.environmentTitle;
    AppConfig.IDP_NAMESPACE = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.idpNamespace;
    AppConfig.HAS_SERVICE_REGISTRY = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hasServiceRegistry;
    AppConfig.OIDC_BASE_PATH = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.oidcBasePath.replace(/\/$/, '');
    AppConfig.ENVIRONMENT_NAME = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.environmentName;
    AppConfig.IR_PROVIDER = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.irProvider;
    AppConfig.IR_CONTACT = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.irContact;
    AppConfig.SR_PROVIDER = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.srProvider;
    AppConfig.SR_CONTACT = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.srContact;
    AppConfig.HAS_MSR_LEDGER = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hasMSRLedger;
    AppConfig.LEDGER_PATH = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hasMSRLedger ? _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ledgerPath : '';
    AppConfig.MP_PROVIDER = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mpProvider;
    AppConfig.MP_NAME = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mpName;
    AppConfig.TERMS_OF_USE = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.termsOfUse;
    AppConfig.MP_CONTACT = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mpContact;
    AppConfig.MP_VERSION = _common_version__WEBPACK_IMPORTED_MODULE_1__.mpVersion;
    AppConfig.FOOTER_NAME = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.footerName;
    AppConfig.FOOTER_LINK = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.footerLink;
    AppConfig.LOGO_IMG = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.logoImg;
  }
}
AppConfig._initialize();

/***/ }),

/***/ 19256:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   HttpLoaderFactory: () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1888);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 29218);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 95445);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 52961);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 35429);
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @clr/angular */ 81577);
/* harmony import */ var _backend_api_identity_registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backend-api/identity-registry */ 9136);
/* harmony import */ var _backend_api_service_registry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backend-api/service-registry */ 90719);
/* harmony import */ var _backend_api_secom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./backend-api/secom */ 67063);
/* harmony import */ var _auth_auth_init__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.init */ 73608);
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! keycloak-angular */ 88566);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 92726);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 48070);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ 15328);
/* harmony import */ var gramli_angular_notifier__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! gramli-angular-notifier */ 1059);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.config */ 96370);
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth.interceptor */ 14807);



















// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__.TranslateHttpLoader(http);
}
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_core__WEBPACK_IMPORTED_MODULE_9__.APP_INITIALIZER,
      useFactory: _auth_auth_init__WEBPACK_IMPORTED_MODULE_5__.initializeKeycloak,
      multi: true,
      deps: [keycloak_angular__WEBPACK_IMPORTED_MODULE_10__.KeycloakService]
    }, {
      provide: _backend_api_identity_registry__WEBPACK_IMPORTED_MODULE_2__.BASE_PATH,
      useValue: _app_config__WEBPACK_IMPORTED_MODULE_6__.AppConfig.IR_BASE_PATH
    }, {
      provide: _backend_api_service_registry__WEBPACK_IMPORTED_MODULE_3__.BASE_PATH,
      useValue: _app_config__WEBPACK_IMPORTED_MODULE_6__.AppConfig.SR_BASE_PATH
    }, {
      provide: _backend_api_secom__WEBPACK_IMPORTED_MODULE_4__.BASE_PATH,
      useValue: _app_config__WEBPACK_IMPORTED_MODULE_6__.AppConfig.SR_BASE_PATH
    }, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS,
      useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__.AuthInterceptor,
      multi: true
    }, (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.withInterceptorsFromDi)())],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, gramli_angular_notifier__WEBPACK_IMPORTED_MODULE_14__.NotifierModule, _clr_angular__WEBPACK_IMPORTED_MODULE_15__.ClarityModule, _backend_api_identity_registry__WEBPACK_IMPORTED_MODULE_2__.ApiModule, _backend_api_service_registry__WEBPACK_IMPORTED_MODULE_3__.ApiModule, _backend_api_secom__WEBPACK_IMPORTED_MODULE_4__.ApiModule, keycloak_angular__WEBPACK_IMPORTED_MODULE_10__.KeycloakAngularModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule.forRoot({
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient]
      }
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, gramli_angular_notifier__WEBPACK_IMPORTED_MODULE_14__.NotifierModule, _clr_angular__WEBPACK_IMPORTED_MODULE_15__.ClarityModule, _backend_api_identity_registry__WEBPACK_IMPORTED_MODULE_2__.ApiModule, _backend_api_service_registry__WEBPACK_IMPORTED_MODULE_3__.ApiModule, _backend_api_secom__WEBPACK_IMPORTED_MODULE_4__.ApiModule, keycloak_angular__WEBPACK_IMPORTED_MODULE_10__.KeycloakAngularModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule]
  });
})();

/***/ }),

/***/ 27061:
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authGuard: () => (/* binding */ authGuard)
/* harmony export */ });
/* harmony import */ var _home_runner_work_management_portal_clr_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 18540);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1888);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 44424);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 84595);




const authGuard = /*#__PURE__*/function () {
  var _ref = (0,_home_runner_work_management_portal_clr_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (route, state) {
    const authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService);
    const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
    const authenticated = yield authService.isAuthenticated();
    if (!authenticated) {
      yield router.navigate(['/login']);
      return false;
    }
    return authenticated;
  });
  return function authGuard(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 73608:
/*!***********************************!*\
  !*** ./src/app/auth/auth.init.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeKeycloak: () => (/* binding */ initializeKeycloak)
/* harmony export */ });
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.config */ 96370);
/*
 * Copyright (c) 2024 Maritime Connectivity Platform Consortium
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const initializeKeycloak = keycloak => {
  return () => keycloak.init({
    config: {
      url: _app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.OIDC_BASE_PATH + '/auth/',
      realm: 'MCP',
      clientId: 'MCP-Portal'
    },
    enableBearerInterceptor: true,
    bearerPrefix: 'Bearer',
    initOptions: {
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html',
      checkLoginIframe: false
    }
  });
};

/***/ }),

/***/ 14807:
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 15790);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 97761);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1888);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 44424);




class AuthInterceptor {
  constructor(router) {
    this.router = router;
  }
  intercept(req, next) {
    return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(error => {
      if (error.status === 401) {
        // Redirect to the login page
        this.router.navigate(['/login']);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(error);
    }));
  }
  static #_ = this.ɵfac = function AuthInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: AuthInterceptor,
    factory: AuthInterceptor.ɵfac
  });
}

/***/ }),

/***/ 4377:
/*!*****************************************!*\
  !*** ./src/app/auth/auth.permission.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthPermission: () => (/* binding */ AuthPermission),
/* harmony export */   AuthPermissionForMSR: () => (/* binding */ AuthPermissionForMSR),
/* harmony export */   PermissionResolver: () => (/* binding */ PermissionResolver),
/* harmony export */   hasAdminPermissionInMIR: () => (/* binding */ hasAdminPermissionInMIR),
/* harmony export */   rolesToPermission: () => (/* binding */ rolesToPermission)
/* harmony export */ });
/* harmony import */ var _backend_api_identity_registry_model_role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../backend-api/identity-registry/model/role */ 66488);
/*
 * Copyright (c) 2023 Maritime Connectivity Platform Consortium
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var RoleNameEnum = _backend_api_identity_registry_model_role__WEBPACK_IMPORTED_MODULE_0__.Role.RoleNameEnum;
var AuthPermission;
(function (AuthPermission) {
  AuthPermission[AuthPermission["User"] = 1] = "User";
  AuthPermission[AuthPermission["OrgAdmin"] = 2] = "OrgAdmin";
  AuthPermission[AuthPermission["SiteAdmin"] = 4] = "SiteAdmin";
  AuthPermission[AuthPermission["UserAdmin"] = 8] = "UserAdmin";
  AuthPermission[AuthPermission["VesselAdmin"] = 16] = "VesselAdmin";
  AuthPermission[AuthPermission["ServiceAdmin"] = 32] = "ServiceAdmin";
  AuthPermission[AuthPermission["DeviceAdmin"] = 64] = "DeviceAdmin";
  AuthPermission[AuthPermission["MMSAdmin"] = 128] = "MMSAdmin";
  AuthPermission[AuthPermission["ApproveOrg"] = 256] = "ApproveOrg";
  AuthPermission[AuthPermission["EntityAdmin"] = 512] = "EntityAdmin";
})(AuthPermission || (AuthPermission = {}));
var AuthPermissionForMSR;
(function (AuthPermissionForMSR) {
  AuthPermissionForMSR[AuthPermissionForMSR["User"] = 1] = "User";
  AuthPermissionForMSR[AuthPermissionForMSR["OrgServiceAdmin"] = 2] = "OrgServiceAdmin";
  AuthPermissionForMSR[AuthPermissionForMSR["LedgerAdmin"] = 4] = "LedgerAdmin";
  AuthPermissionForMSR[AuthPermissionForMSR["MSRAdmin"] = 8] = "MSRAdmin";
})(AuthPermissionForMSR || (AuthPermissionForMSR = {}));
const rolesToPermission = roles => {
  let permission = AuthPermission.User;
  if (!roles) {
    return permission;
  }
  for (const roleString of roles) {
    switch (roleString) {
      case RoleNameEnum.ORGADMIN:
        {
          permission = permission | AuthPermission.OrgAdmin;
          break;
        }
      case RoleNameEnum.SITEADMIN:
        {
          permission = permission | AuthPermission.SiteAdmin;
          break;
        }
      case RoleNameEnum.USERADMIN:
        {
          permission = permission | AuthPermission.UserAdmin;
          break;
        }
      case RoleNameEnum.DEVICEADMIN:
        {
          permission = permission | AuthPermission.DeviceAdmin;
          break;
        }
      case RoleNameEnum.VESSELADMIN:
        {
          permission = permission | AuthPermission.VesselAdmin;
          break;
        }
      case RoleNameEnum.SERVICEADMIN:
        {
          permission = permission | AuthPermission.ServiceAdmin;
          break;
        }
      case RoleNameEnum.ENTITYADMIN:
        {
          permission = permission | AuthPermission.EntityAdmin;
          break;
        }
      case RoleNameEnum.MMSADMIN:
        {
          permission = permission | AuthPermission.MMSAdmin;
          break;
        }
      case RoleNameEnum.APPROVEORG:
        {
          permission = permission | AuthPermission.ApproveOrg;
          break;
        }
      default:
        permission = permission | AuthPermission.User;
    }
  }
  return permission;
};
class PermissionResolver {
  static isSiteAdmin(permission) {
    return (permission & AuthPermission.SiteAdmin) > 0;
  }
  static isOrgAdmin(permission) {
    return (permission & AuthPermission.OrgAdmin) > 0 || this.isSiteAdmin(permission);
  }
  static isEntityAdmin(permission) {
    return (permission & AuthPermission.EntityAdmin) > 0 || this.isOrgAdmin(permission);
  }
  static isUserAdmin(permission) {
    return (permission & AuthPermission.UserAdmin) > 0 || this.isEntityAdmin(permission);
  }
  static isVesselAdmin(permission) {
    return (permission & AuthPermission.VesselAdmin) > 0 || this.isEntityAdmin(permission);
  }
  static isDeviceAdmin(permission) {
    return (permission & AuthPermission.DeviceAdmin) > 0 || this.isEntityAdmin(permission);
  }
  static isServiceAdmin(permission) {
    return (permission & AuthPermission.ServiceAdmin) > 0 || this.isEntityAdmin(permission);
  }
  static canApproveOrg(permission) {
    return (permission & AuthPermission.ApproveOrg) > 0 || this.isSiteAdmin(permission);
  }
  static isMSRAdmin(roles) {
    return roles && roles.length > 0 && roles.includes('admin');
  }
  static isLedgerAdmin(roles) {
    return roles && roles.length > 0 && roles.includes('ledger_admin');
  }
  static isOrgServiceAdmin(roles) {
    return roles && roles.length > 0 && roles.includes('service_admin');
  }
}
const hasAdminPermissionInMIR = (myPermission, permissionRole) => {
  switch (permissionRole) {
    case AuthPermission.User:
      return true;
    case AuthPermission.SiteAdmin:
      return PermissionResolver.isSiteAdmin(myPermission);
    case AuthPermission.OrgAdmin:
      return PermissionResolver.isOrgAdmin(myPermission);
    case AuthPermission.ApproveOrg:
      return PermissionResolver.canApproveOrg(myPermission);
    case AuthPermission.EntityAdmin:
      return PermissionResolver.isEntityAdmin(myPermission);
    case AuthPermission.ServiceAdmin:
      return PermissionResolver.isServiceAdmin(myPermission);
    case AuthPermission.DeviceAdmin:
      return PermissionResolver.isDeviceAdmin(myPermission);
    case AuthPermission.VesselAdmin:
      return PermissionResolver.isVesselAdmin(myPermission);
    case AuthPermission.UserAdmin:
      return PermissionResolver.isUserAdmin(myPermission);
    default:
      return false;
  }
};

/***/ }),

/***/ 84595:
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_management_portal_clr_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 18540);
/* harmony import */ var _auth_permission__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.permission */ 4377);
/* harmony import */ var _common_menuType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/menuType */ 95166);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 87624);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1888);
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! keycloak-angular */ 88566);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 44424);







class AuthService {
  constructor(keycloakService, router) {
    this.keycloakService = keycloakService;
    this.router = router;
    this.isAuthenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
    this.isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
    this.protectFromEmptyToken = () => {
      const tokenParsed = this.keycloakService.getKeycloakInstance().tokenParsed;
      if (!tokenParsed) {
        this.router.navigate(['/login']);
        throw new Error('User is not authenticated');
      }
    };
  }
  login() {
    var _this = this;
    return (0,_home_runner_work_management_portal_clr_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = window.location;
      yield _this.keycloakService.login({
        redirectUri: url.protocol + '//' + url.host + '/pages'
      });
      // Check authentication status after login
      //this.isAuthenticated();
    })();
  }
  setAuthenticated(isAuthenticated) {
    this.isAuthenticatedSubject.next(isAuthenticated);
  }
  logout() {
    var _this2 = this;
    return (0,_home_runner_work_management_portal_clr_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = window.location;
      yield _this2.keycloakService.logout(url.protocol + '//' + url.host + '/login');
    })();
  }
  isAuthenticated() {
    var _this3 = this;
    return (0,_home_runner_work_management_portal_clr_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const authenticated = yield _this3.keycloakService.isLoggedIn();
      _this3.setAuthenticated(authenticated);
      return Promise.resolve(authenticated);
    })();
  }
  getToken() {
    var _this4 = this;
    return (0,_home_runner_work_management_portal_clr_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.protectFromEmptyToken();
      return _this4.keycloakService.getToken();
    })();
  }
  getOrgMrn() {
    var _this5 = this;
    return (0,_home_runner_work_management_portal_clr_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.protectFromEmptyToken();
      return _this5.keycloakService.getKeycloakInstance().tokenParsed["org"];
    })();
  }
  getUserName() {
    var _this6 = this;
    return (0,_home_runner_work_management_portal_clr_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.protectFromEmptyToken();
      return _this6.keycloakService.getKeycloakInstance().tokenParsed["name"];
    })();
  }
  getUserMrn() {
    var _this7 = this;
    return (0,_home_runner_work_management_portal_clr_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.protectFromEmptyToken();
      return _this7.keycloakService.getKeycloakInstance().tokenParsed["mrn"];
    })();
  }
  getUserRoles() {
    var _this8 = this;
    return (0,_home_runner_work_management_portal_clr_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8.protectFromEmptyToken();
      return _this8.keycloakService.getKeycloakInstance().tokenParsed["roles"];
    })();
  }
  getUserPermission() {
    var _this9 = this;
    return (0,_home_runner_work_management_portal_clr_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this9.protectFromEmptyToken();
      return new Promise(/*#__PURE__*/function () {
        var _ref = (0,_home_runner_work_management_portal_clr_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
          const roles = yield _this9.keycloakService.getKeycloakInstance().tokenParsed["roles"];
          if (!roles) {
            resolve(_auth_permission__WEBPACK_IMPORTED_MODULE_1__.AuthPermission.User);
          }
          resolve((0,_auth_permission__WEBPACK_IMPORTED_MODULE_1__.rolesToPermission)(roles));
        });
        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  hasPermission(context, forMyOrg = false) {
    var _this10 = this;
    return (0,_home_runner_work_management_portal_clr_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this10.protectFromEmptyToken();
      return new Promise(/*#__PURE__*/function () {
        var _ref2 = (0,_home_runner_work_management_portal_clr_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
          if (!_this10.keycloakService.isLoggedIn()) resolve(false);
          _this10.getUserPermission().then(permission => {
            if (!permission) {
              resolve(false);
            }
            if ((0,_auth_permission__WEBPACK_IMPORTED_MODULE_1__.hasAdminPermissionInMIR)(permission, _auth_permission__WEBPACK_IMPORTED_MODULE_1__.AuthPermission.SiteAdmin)) {
              // super admin
              resolve(true);
            } else if (context === _common_menuType__WEBPACK_IMPORTED_MODULE_2__.ItemType.User) {
              resolve((0,_auth_permission__WEBPACK_IMPORTED_MODULE_1__.hasAdminPermissionInMIR)(permission, _auth_permission__WEBPACK_IMPORTED_MODULE_1__.AuthPermission.UserAdmin));
            } else if (context === _common_menuType__WEBPACK_IMPORTED_MODULE_2__.ItemType.Device) {
              resolve((0,_auth_permission__WEBPACK_IMPORTED_MODULE_1__.hasAdminPermissionInMIR)(permission, _auth_permission__WEBPACK_IMPORTED_MODULE_1__.AuthPermission.DeviceAdmin));
            } else if (context === _common_menuType__WEBPACK_IMPORTED_MODULE_2__.ItemType.Vessel) {
              resolve((0,_auth_permission__WEBPACK_IMPORTED_MODULE_1__.hasAdminPermissionInMIR)(permission, _auth_permission__WEBPACK_IMPORTED_MODULE_1__.AuthPermission.VesselAdmin));
            } else if (context === _common_menuType__WEBPACK_IMPORTED_MODULE_2__.ItemType.MMS) {
              resolve((0,_auth_permission__WEBPACK_IMPORTED_MODULE_1__.hasAdminPermissionInMIR)(permission, _auth_permission__WEBPACK_IMPORTED_MODULE_1__.AuthPermission.MMSAdmin));
            } else if (context === _common_menuType__WEBPACK_IMPORTED_MODULE_2__.ItemType.Service) {
              resolve((0,_auth_permission__WEBPACK_IMPORTED_MODULE_1__.hasAdminPermissionInMIR)(permission, _auth_permission__WEBPACK_IMPORTED_MODULE_1__.AuthPermission.ServiceAdmin));
            } else if (forMyOrg && context === _common_menuType__WEBPACK_IMPORTED_MODULE_2__.ItemType.Organization || context === _common_menuType__WEBPACK_IMPORTED_MODULE_2__.ItemType.Role) {
              // for my own organization management
              resolve((0,_auth_permission__WEBPACK_IMPORTED_MODULE_1__.hasAdminPermissionInMIR)(permission, _auth_permission__WEBPACK_IMPORTED_MODULE_1__.AuthPermission.OrgAdmin));
            } else if (context === _common_menuType__WEBPACK_IMPORTED_MODULE_2__.ItemType.Organization) {
              resolve((0,_auth_permission__WEBPACK_IMPORTED_MODULE_1__.hasAdminPermissionInMIR)(permission, _auth_permission__WEBPACK_IMPORTED_MODULE_1__.AuthPermission.SiteAdmin));
            } else {
              resolve(false);
            }
          });
        });
        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }
  static #_ = this.ɵfac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](keycloak_angular__WEBPACK_IMPORTED_MODULE_5__.KeycloakService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: AuthService,
    factory: AuthService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 82700:
/*!*************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/api.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiModule: () => (/* binding */ ApiModule)
/* harmony export */ });
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration */ 85586);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 92726);
/* harmony import */ var _api_agentController_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/agentController.service */ 91427);
/* harmony import */ var _api_certificateController_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/certificateController.service */ 19069);
/* harmony import */ var _api_deviceController_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/deviceController.service */ 78996);
/* harmony import */ var _api_logoController_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/logoController.service */ 67765);
/* harmony import */ var _api_mmsController_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/mmsController.service */ 51105);
/* harmony import */ var _api_organizationController_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/organizationController.service */ 29093);
/* harmony import */ var _api_roleController_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api/roleController.service */ 32238);
/* harmony import */ var _api_serviceController_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api/serviceController.service */ 53697);
/* harmony import */ var _api_userController_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./api/userController.service */ 83621);
/* harmony import */ var _api_vesselController_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api/vesselController.service */ 98920);
/* harmony import */ var _api_vesselImageController_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./api/vesselImageController.service */ 72269);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../app.config */ 96370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 1888);
















class ApiModule {
  static forRoot(configurationFactory) {
    return {
      ngModule: ApiModule,
      providers: [{
        provide: _configuration__WEBPACK_IMPORTED_MODULE_0__.Configuration,
        useFactory: configurationFactory
      }]
    };
  }
  constructor(parentModule, http) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' + 'See also https://github.com/angular/angular/issues/20575');
    }
  }
  static #_ = this.ɵfac = function ApiModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ApiModule)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](ApiModule, 12), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient, 8));
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
    type: ApiModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
    providers: [_api_agentController_service__WEBPACK_IMPORTED_MODULE_1__.AgentControllerService, _api_certificateController_service__WEBPACK_IMPORTED_MODULE_2__.CertificateControllerService, _api_deviceController_service__WEBPACK_IMPORTED_MODULE_3__.DeviceControllerService, _api_logoController_service__WEBPACK_IMPORTED_MODULE_4__.LogoControllerService, _api_mmsController_service__WEBPACK_IMPORTED_MODULE_5__.MmsControllerService, {
      provide: _api_organizationController_service__WEBPACK_IMPORTED_MODULE_6__.OrganizationControllerService,
      useFactory: http => {
        return new _api_organizationController_service__WEBPACK_IMPORTED_MODULE_6__.OrganizationControllerService(http, _app_config__WEBPACK_IMPORTED_MODULE_12__.AppConfig.IR_BASE_PATH, new _configuration__WEBPACK_IMPORTED_MODULE_0__.Configuration());
      },
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient]
    }, _api_roleController_service__WEBPACK_IMPORTED_MODULE_7__.RoleControllerService, _api_serviceController_service__WEBPACK_IMPORTED_MODULE_8__.ServiceControllerService, _api_userController_service__WEBPACK_IMPORTED_MODULE_9__.UserControllerService, _api_vesselController_service__WEBPACK_IMPORTED_MODULE_10__.VesselControllerService, _api_vesselImageController_service__WEBPACK_IMPORTED_MODULE_11__.VesselImageControllerService]
  });
}

/***/ }),

/***/ 91427:
/*!******************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/api/agentController.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgentControllerService: () => (/* binding */ AgentControllerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 92726);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 40192);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 39573);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 85586);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1888);







class AgentControllerService {
  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = 'https://test-api.maritimeconnectivity.net';
    this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
    this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }
  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  canConsumeForm(consumes) {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }
  createAgent(body, orgMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling createAgent.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling createAgent.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/agent`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  deleteAgent(orgMrn, agentId, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling deleteAgent.');
    }
    if (agentId === null || agentId === undefined) {
      throw new Error('Required parameter agentId was null or undefined when calling deleteAgent.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('delete', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/agent/${encodeURIComponent(String(agentId))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getActingOnBehalfOf(orgMrn, page, size, sort, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getActingOnBehalfOf.');
    }
    let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({
      encoder: new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpUrlEncodingCodec()
    });
    if (page !== undefined && page !== null) {
      queryParameters = queryParameters.set('page', page);
    }
    if (size !== undefined && size !== null) {
      queryParameters = queryParameters.set('size', size);
    }
    if (sort) {
      sort.forEach(element => {
        queryParameters = queryParameters.append('sort', element);
      });
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/acting-on-behalf-of`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getAgent(orgMrn, agentId, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getAgent.');
    }
    if (agentId === null || agentId === undefined) {
      throw new Error('Required parameter agentId was null or undefined when calling getAgent.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/agent/${encodeURIComponent(String(agentId))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getAgents(orgMrn, page, size, sort, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getAgents.');
    }
    let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({
      encoder: new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpUrlEncodingCodec()
    });
    if (page !== undefined && page !== null) {
      queryParameters = queryParameters.set('page', page);
    }
    if (size !== undefined && size !== null) {
      queryParameters = queryParameters.set('size', size);
    }
    if (sort) {
      sort.forEach(element => {
        queryParameters = queryParameters.append('sort', element);
      });
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/agents`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  updateAgent(body, orgMrn, agentId, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling updateAgent.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling updateAgent.');
    }
    if (agentId === null || agentId === undefined) {
      throw new Error('Required parameter agentId was null or undefined when calling updateAgent.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/agent/${encodeURIComponent(String(agentId))}`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  static #_ = this.ɵfac = function AgentControllerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AgentControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: AgentControllerService,
    factory: AgentControllerService.ɵfac
  });
}

/***/ }),

/***/ 80903:
/*!**********************************************************!*\
  !*** ./src/app/backend-api/identity-registry/api/api.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APIS: () => (/* binding */ APIS),
/* harmony export */   AgentControllerService: () => (/* reexport safe */ _agentController_service__WEBPACK_IMPORTED_MODULE_0__.AgentControllerService),
/* harmony export */   CertificateControllerService: () => (/* reexport safe */ _certificateController_service__WEBPACK_IMPORTED_MODULE_1__.CertificateControllerService),
/* harmony export */   DeviceControllerService: () => (/* reexport safe */ _deviceController_service__WEBPACK_IMPORTED_MODULE_2__.DeviceControllerService),
/* harmony export */   LogoControllerService: () => (/* reexport safe */ _logoController_service__WEBPACK_IMPORTED_MODULE_3__.LogoControllerService),
/* harmony export */   MmsControllerService: () => (/* reexport safe */ _mmsController_service__WEBPACK_IMPORTED_MODULE_4__.MmsControllerService),
/* harmony export */   OrganizationControllerService: () => (/* reexport safe */ _organizationController_service__WEBPACK_IMPORTED_MODULE_5__.OrganizationControllerService),
/* harmony export */   RoleControllerService: () => (/* reexport safe */ _roleController_service__WEBPACK_IMPORTED_MODULE_6__.RoleControllerService),
/* harmony export */   ServiceControllerService: () => (/* reexport safe */ _serviceController_service__WEBPACK_IMPORTED_MODULE_7__.ServiceControllerService),
/* harmony export */   UserControllerService: () => (/* reexport safe */ _userController_service__WEBPACK_IMPORTED_MODULE_8__.UserControllerService),
/* harmony export */   VesselControllerService: () => (/* reexport safe */ _vesselController_service__WEBPACK_IMPORTED_MODULE_9__.VesselControllerService),
/* harmony export */   VesselImageControllerService: () => (/* reexport safe */ _vesselImageController_service__WEBPACK_IMPORTED_MODULE_10__.VesselImageControllerService)
/* harmony export */ });
/* harmony import */ var _agentController_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agentController.service */ 91427);
/* harmony import */ var _certificateController_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./certificateController.service */ 19069);
/* harmony import */ var _deviceController_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deviceController.service */ 78996);
/* harmony import */ var _logoController_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logoController.service */ 67765);
/* harmony import */ var _mmsController_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mmsController.service */ 51105);
/* harmony import */ var _organizationController_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organizationController.service */ 29093);
/* harmony import */ var _roleController_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./roleController.service */ 32238);
/* harmony import */ var _serviceController_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./serviceController.service */ 53697);
/* harmony import */ var _userController_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./userController.service */ 83621);
/* harmony import */ var _vesselController_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vesselController.service */ 98920);
/* harmony import */ var _vesselImageController_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vesselImageController.service */ 72269);






















const APIS = [_agentController_service__WEBPACK_IMPORTED_MODULE_0__.AgentControllerService, _certificateController_service__WEBPACK_IMPORTED_MODULE_1__.CertificateControllerService, _deviceController_service__WEBPACK_IMPORTED_MODULE_2__.DeviceControllerService, _logoController_service__WEBPACK_IMPORTED_MODULE_3__.LogoControllerService, _mmsController_service__WEBPACK_IMPORTED_MODULE_4__.MmsControllerService, _organizationController_service__WEBPACK_IMPORTED_MODULE_5__.OrganizationControllerService, _roleController_service__WEBPACK_IMPORTED_MODULE_6__.RoleControllerService, _serviceController_service__WEBPACK_IMPORTED_MODULE_7__.ServiceControllerService, _userController_service__WEBPACK_IMPORTED_MODULE_8__.UserControllerService, _vesselController_service__WEBPACK_IMPORTED_MODULE_9__.VesselControllerService, _vesselImageController_service__WEBPACK_IMPORTED_MODULE_10__.VesselImageControllerService];

/***/ }),

/***/ 19069:
/*!************************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/api/certificateController.service.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CertificateControllerService: () => (/* binding */ CertificateControllerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 92726);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../variables */ 39573);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configuration */ 85586);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1888);






class CertificateControllerService {
  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = 'https://test-api.maritimeconnectivity.net';
    this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration();
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }
  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  canConsumeForm(consumes) {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }
  getCRL(caAlias, observe = 'body', reportProgress = false) {
    if (caAlias === null || caAlias === undefined) {
      throw new Error('Required parameter caAlias was null or undefined when calling getCRL.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/x-pem-file'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/certificates/crl/${encodeURIComponent(String(caAlias))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getOCSP(caAlias, ocspRequest, observe = 'body', reportProgress = false) {
    if (caAlias === null || caAlias === undefined) {
      throw new Error('Required parameter caAlias was null or undefined when calling getOCSP.');
    }
    if (ocspRequest === null || ocspRequest === undefined) {
      throw new Error('Required parameter ocspRequest was null or undefined when calling getOCSP.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/ocsp-response'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/certificates/ocsp/${encodeURIComponent(String(caAlias))}/${encodeURIComponent(String(ocspRequest))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  postOCSP(body, caAlias, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling postOCSP.');
    }
    if (caAlias === null || caAlias === undefined) {
      throw new Error('Required parameter caAlias was null or undefined when calling postOCSP.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/ocsp-response'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/ocsp-request'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/certificates/ocsp/${encodeURIComponent(String(caAlias))}`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  static #_ = this.ɵfac = function CertificateControllerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CertificateControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_0__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration, 8));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: CertificateControllerService,
    factory: CertificateControllerService.ɵfac
  });
}

/***/ }),

/***/ 78996:
/*!*******************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/api/deviceController.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeviceControllerService: () => (/* binding */ DeviceControllerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 92726);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 40192);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 39573);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 85586);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1888);







class DeviceControllerService {
  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = 'https://test-api.maritimeconnectivity.net';
    this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
    this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }
  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  canConsumeForm(consumes) {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }
  createDevice(body, orgMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling createDevice.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling createDevice.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/device`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  deleteDevice(orgMrn, deviceMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling deleteDevice.');
    }
    if (deviceMrn === null || deviceMrn === undefined) {
      throw new Error('Required parameter deviceMrn was null or undefined when calling deleteDevice.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('delete', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/device/${encodeURIComponent(String(deviceMrn))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getDevice(orgMrn, deviceMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getDevice.');
    }
    if (deviceMrn === null || deviceMrn === undefined) {
      throw new Error('Required parameter deviceMrn was null or undefined when calling getDevice.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/device/${encodeURIComponent(String(deviceMrn))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getDeviceCert(orgMrn, deviceMrn, serialNumber, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getDeviceCert.');
    }
    if (deviceMrn === null || deviceMrn === undefined) {
      throw new Error('Required parameter deviceMrn was null or undefined when calling getDeviceCert.');
    }
    if (serialNumber === null || serialNumber === undefined) {
      throw new Error('Required parameter serialNumber was null or undefined when calling getDeviceCert.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/device/${encodeURIComponent(String(deviceMrn))}/certificate/${encodeURIComponent(String(serialNumber))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getOrganizationDevices(orgMrn, page, size, sort, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getOrganizationDevices.');
    }
    let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({
      encoder: new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpUrlEncodingCodec()
    });
    if (page !== undefined && page !== null) {
      queryParameters = queryParameters.set('page', page);
    }
    if (size !== undefined && size !== null) {
      queryParameters = queryParameters.set('size', size);
    }
    if (sort) {
      sort.forEach(element => {
        queryParameters = queryParameters.append('sort', element);
      });
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/devices`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  newDeviceCertFromCsr(body, orgMrn, deviceMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling newDeviceCertFromCsr.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling newDeviceCertFromCsr.');
    }
    if (deviceMrn === null || deviceMrn === undefined) {
      throw new Error('Required parameter deviceMrn was null or undefined when calling newDeviceCertFromCsr.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json', 'application/pem-certificate-chain'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/x-pem-file', 'text/plain'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/device/${encodeURIComponent(String(deviceMrn))}/certificate/issue-new/csr`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  revokeDeviceCert(body, orgMrn, deviceMrn, certId, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling revokeDeviceCert.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling revokeDeviceCert.');
    }
    if (deviceMrn === null || deviceMrn === undefined) {
      throw new Error('Required parameter deviceMrn was null or undefined when calling revokeDeviceCert.');
    }
    if (certId === null || certId === undefined) {
      throw new Error('Required parameter certId was null or undefined when calling revokeDeviceCert.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/device/${encodeURIComponent(String(deviceMrn))}/certificate/${encodeURIComponent(String(certId))}/revoke`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  updateDevice(body, orgMrn, deviceMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling updateDevice.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling updateDevice.');
    }
    if (deviceMrn === null || deviceMrn === undefined) {
      throw new Error('Required parameter deviceMrn was null or undefined when calling updateDevice.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/device/${encodeURIComponent(String(deviceMrn))}`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  static #_ = this.ɵfac = function DeviceControllerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DeviceControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: DeviceControllerService,
    factory: DeviceControllerService.ɵfac
  });
}

/***/ }),

/***/ 67765:
/*!*****************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/api/logoController.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogoControllerService: () => (/* binding */ LogoControllerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 92726);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../variables */ 39573);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configuration */ 85586);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1888);






class LogoControllerService {
  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = 'https://test-api.maritimeconnectivity.net';
    this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration();
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }
  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  canConsumeForm(consumes) {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }
  createLogoPost(orgMrn, body, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling createLogoPost.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['image/png', 'image/jpeg'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/logo`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  deleteLogo(orgMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling deleteLogo.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('delete', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/logo`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getLogo(orgMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getLogo.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['image/png', 'application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/logo`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  updateLogoPut(body, orgMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling updateLogoPut.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling updateLogoPut.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['image/png', 'image/jpeg'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/logo`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  static #_ = this.ɵfac = function LogoControllerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LogoControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_0__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration, 8));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: LogoControllerService,
    factory: LogoControllerService.ɵfac
  });
}

/***/ }),

/***/ 51105:
/*!****************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/api/mmsController.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MmsControllerService: () => (/* binding */ MmsControllerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 92726);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 40192);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 39573);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 85586);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1888);







class MmsControllerService {
  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = 'https://test-api.maritimeconnectivity.net';
    this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
    this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }
  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  canConsumeForm(consumes) {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }
  createMMS(body, orgMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling createMMS.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling createMMS.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/mms`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  deleteMMS(orgMrn, mmsMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling deleteMMS.');
    }
    if (mmsMrn === null || mmsMrn === undefined) {
      throw new Error('Required parameter mmsMrn was null or undefined when calling deleteMMS.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('delete', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/mms/${encodeURIComponent(String(mmsMrn))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getMMS(orgMrn, mmsMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getMMS.');
    }
    if (mmsMrn === null || mmsMrn === undefined) {
      throw new Error('Required parameter mmsMrn was null or undefined when calling getMMS.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/mms/${encodeURIComponent(String(mmsMrn))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getMMSCert(orgMrn, mmsMrn, serialNumber, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getMMSCert.');
    }
    if (mmsMrn === null || mmsMrn === undefined) {
      throw new Error('Required parameter mmsMrn was null or undefined when calling getMMSCert.');
    }
    if (serialNumber === null || serialNumber === undefined) {
      throw new Error('Required parameter serialNumber was null or undefined when calling getMMSCert.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/mms/${encodeURIComponent(String(mmsMrn))}/certificate/${encodeURIComponent(String(serialNumber))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getOrganizationMMSes(orgMrn, page, size, sort, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getOrganizationMMSes.');
    }
    let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({
      encoder: new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpUrlEncodingCodec()
    });
    if (page !== undefined && page !== null) {
      queryParameters = queryParameters.set('page', page);
    }
    if (size !== undefined && size !== null) {
      queryParameters = queryParameters.set('size', size);
    }
    if (sort) {
      sort.forEach(element => {
        queryParameters = queryParameters.append('sort', element);
      });
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/mmses`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  newMMSCertFromCsr(body, orgMrn, mmsMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling newMMSCertFromCsr.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling newMMSCertFromCsr.');
    }
    if (mmsMrn === null || mmsMrn === undefined) {
      throw new Error('Required parameter mmsMrn was null or undefined when calling newMMSCertFromCsr.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json', 'application/pem-certificate-chain'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/x-pem-file', 'text/plain'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/mms/${encodeURIComponent(String(mmsMrn))}/certificate/issue-new/csr`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  revokeMMSCert(body, orgMrn, mmsMrn, certId, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling revokeMMSCert.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling revokeMMSCert.');
    }
    if (mmsMrn === null || mmsMrn === undefined) {
      throw new Error('Required parameter mmsMrn was null or undefined when calling revokeMMSCert.');
    }
    if (certId === null || certId === undefined) {
      throw new Error('Required parameter certId was null or undefined when calling revokeMMSCert.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/mms/${encodeURIComponent(String(mmsMrn))}/certificate/${encodeURIComponent(String(certId))}/revoke`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  updateMMS(body, orgMrn, mmsMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling updateMMS.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling updateMMS.');
    }
    if (mmsMrn === null || mmsMrn === undefined) {
      throw new Error('Required parameter mmsMrn was null or undefined when calling updateMMS.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/mms/${encodeURIComponent(String(mmsMrn))}`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  static #_ = this.ɵfac = function MmsControllerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MmsControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: MmsControllerService,
    factory: MmsControllerService.ɵfac
  });
}

/***/ }),

/***/ 29093:
/*!*************************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/api/organizationController.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrganizationControllerService: () => (/* binding */ OrganizationControllerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 92726);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 40192);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 39573);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 85586);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1888);







class OrganizationControllerService {
  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = 'https://test-api.maritimeconnectivity.net';
    this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
    this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }
  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  canConsumeForm(consumes) {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }
  applyOrganization(body, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling applyOrganization.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/apply`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  approveOrganization(orgMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling approveOrganization.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/approve`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  deleteOrg(orgMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling deleteOrg.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('delete', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getOrgCert(orgMrn, serialNumber, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getOrgCert.');
    }
    if (serialNumber === null || serialNumber === undefined) {
      throw new Error('Required parameter serialNumber was null or undefined when calling getOrgCert.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/certificate/${encodeURIComponent(String(serialNumber))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getOrganization(page, size, sort, observe = 'body', reportProgress = false) {
    let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({
      encoder: new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpUrlEncodingCodec()
    });
    if (page !== undefined && page !== null) {
      queryParameters = queryParameters.set('page', page);
    }
    if (size !== undefined && size !== null) {
      queryParameters = queryParameters.set('size', size);
    }
    if (sort) {
      sort.forEach(element => {
        queryParameters = queryParameters.append('sort', element);
      });
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/orgs`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getOrganization1(orgMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getOrganization1.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getOrganizationById(orgId, observe = 'body', reportProgress = false) {
    if (orgId === null || orgId === undefined) {
      throw new Error('Required parameter orgId was null or undefined when calling getOrganizationById.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/id/${encodeURIComponent(String(orgId))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getUnapprovedOrganizations(page, size, sort, observe = 'body', reportProgress = false) {
    let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({
      encoder: new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpUrlEncodingCodec()
    });
    if (page !== undefined && page !== null) {
      queryParameters = queryParameters.set('page', page);
    }
    if (size !== undefined && size !== null) {
      queryParameters = queryParameters.set('size', size);
    }
    if (sort) {
      sort.forEach(element => {
        queryParameters = queryParameters.append('sort', element);
      });
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/unapprovedorgs`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  newOrgCertFromCsr(body, orgMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling newOrgCertFromCsr.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling newOrgCertFromCsr.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json', 'application/pem-certificate-chain'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/x-pem-file', 'text/plain'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/certificate/issue-new/csr`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  revokeOrgCert(body, orgMrn, certId, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling revokeOrgCert.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling revokeOrgCert.');
    }
    if (certId === null || certId === undefined) {
      throw new Error('Required parameter certId was null or undefined when calling revokeOrgCert.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/certificate/${encodeURIComponent(String(certId))}/revoke`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  updateOrganization(body, orgMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling updateOrganization.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling updateOrganization.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  static #_ = this.ɵfac = function OrganizationControllerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || OrganizationControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: OrganizationControllerService,
    factory: OrganizationControllerService.ɵfac
  });
}

/***/ }),

/***/ 32238:
/*!*****************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/api/roleController.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoleControllerService: () => (/* binding */ RoleControllerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 92726);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../variables */ 39573);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configuration */ 85586);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1888);






class RoleControllerService {
  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = 'https://test-api.maritimeconnectivity.net';
    this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration();
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }
  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  canConsumeForm(consumes) {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }
  createRole(body, orgMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling createRole.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling createRole.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/role`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  deleteRole(orgMrn, roleId, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling deleteRole.');
    }
    if (roleId === null || roleId === undefined) {
      throw new Error('Required parameter roleId was null or undefined when calling deleteRole.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('delete', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/role/${encodeURIComponent(String(roleId))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getAvailableRoles(orgMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getAvailableRoles.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/role/available-roles`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getMyRole(orgMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getMyRole.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/role/myroles`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getRole(orgMrn, roleId, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getRole.');
    }
    if (roleId === null || roleId === undefined) {
      throw new Error('Required parameter roleId was null or undefined when calling getRole.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/role/${encodeURIComponent(String(roleId))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getRoles(orgMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getRoles.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/roles`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  updateRole(body, orgMrn, roleId, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling updateRole.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling updateRole.');
    }
    if (roleId === null || roleId === undefined) {
      throw new Error('Required parameter roleId was null or undefined when calling updateRole.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/role/${encodeURIComponent(String(roleId))}`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  static #_ = this.ɵfac = function RoleControllerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RoleControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_0__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration, 8));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: RoleControllerService,
    factory: RoleControllerService.ɵfac
  });
}

/***/ }),

/***/ 53697:
/*!********************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/api/serviceController.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceControllerService: () => (/* binding */ ServiceControllerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 92726);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 40192);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 39573);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 85586);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1888);







class ServiceControllerService {
  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = 'https://test-api.maritimeconnectivity.net';
    this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
    this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }
  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  canConsumeForm(consumes) {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }
  createService(body, orgMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling createService.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling createService.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  deleteService(orgMrn, serviceMrn, version, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling deleteService.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling deleteService.');
    }
    if (version === null || version === undefined) {
      throw new Error('Required parameter version was null or undefined when calling deleteService.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('delete', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/${encodeURIComponent(String(version))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  deleteService1(orgMrn, serviceMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling deleteService1.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling deleteService1.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('delete', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getOrganizationServices(orgMrn, page, size, sort, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getOrganizationServices.');
    }
    let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({
      encoder: new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpUrlEncodingCodec()
    });
    if (page !== undefined && page !== null) {
      queryParameters = queryParameters.set('page', page);
    }
    if (size !== undefined && size !== null) {
      queryParameters = queryParameters.set('size', size);
    }
    if (sort) {
      sort.forEach(element => {
        queryParameters = queryParameters.append('sort', element);
      });
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/services`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getService(orgMrn, serviceMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getService.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling getService.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getServiceCert(orgMrn, serviceMrn, version, serialNumber, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getServiceCert.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling getServiceCert.');
    }
    if (version === null || version === undefined) {
      throw new Error('Required parameter version was null or undefined when calling getServiceCert.');
    }
    if (serialNumber === null || serialNumber === undefined) {
      throw new Error('Required parameter serialNumber was null or undefined when calling getServiceCert.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/${encodeURIComponent(String(version))}/certificate/${encodeURIComponent(String(serialNumber))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getServiceCert1(orgMrn, serviceMrn, serialNumber, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getServiceCert1.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling getServiceCert1.');
    }
    if (serialNumber === null || serialNumber === undefined) {
      throw new Error('Required parameter serialNumber was null or undefined when calling getServiceCert1.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/certificate/${encodeURIComponent(String(serialNumber))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getServiceJbossXml(orgMrn, serviceMrn, version, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getServiceJbossXml.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling getServiceJbossXml.');
    }
    if (version === null || version === undefined) {
      throw new Error('Required parameter version was null or undefined when calling getServiceJbossXml.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/${encodeURIComponent(String(version))}/jbossxml`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getServiceJbossXml1(orgMrn, serviceMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getServiceJbossXml1.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling getServiceJbossXml1.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/jbossxml`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getServiceKeycloakJson(orgMrn, serviceMrn, version, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getServiceKeycloakJson.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling getServiceKeycloakJson.');
    }
    if (version === null || version === undefined) {
      throw new Error('Required parameter version was null or undefined when calling getServiceKeycloakJson.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/${encodeURIComponent(String(version))}/keycloakjson`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getServiceKeycloakJson1(orgMrn, serviceMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getServiceKeycloakJson1.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling getServiceKeycloakJson1.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/keycloakjson`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getServiceVersion(orgMrn, serviceMrn, version, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getServiceVersion.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling getServiceVersion.');
    }
    if (version === null || version === undefined) {
      throw new Error('Required parameter version was null or undefined when calling getServiceVersion.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/${encodeURIComponent(String(version))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getServices(orgMrn, serviceMrn, pageable, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getServices.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling getServices.');
    }
    if (pageable === null || pageable === undefined) {
      throw new Error('Required parameter pageable was null or undefined when calling getServices.');
    }
    let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({
      encoder: new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpUrlEncodingCodec()
    });
    if (pageable !== undefined && pageable !== null) {
      queryParameters = queryParameters.set('pageable', pageable);
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/services/${encodeURIComponent(String(serviceMrn))}`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  migrateServiceMrn(body, orgMrn, serviceMrn, version, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling migrateServiceMrn.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling migrateServiceMrn.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling migrateServiceMrn.');
    }
    if (version === null || version === undefined) {
      throw new Error('Required parameter version was null or undefined when calling migrateServiceMrn.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('patch', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/${encodeURIComponent(String(version))}/migrate`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  newServiceCertFromCsr(body, orgMrn, serviceMrn, version, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling newServiceCertFromCsr.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling newServiceCertFromCsr.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling newServiceCertFromCsr.');
    }
    if (version === null || version === undefined) {
      throw new Error('Required parameter version was null or undefined when calling newServiceCertFromCsr.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json', 'application/pem-certificate-chain'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/x-pem-file', 'text/plain'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/${encodeURIComponent(String(version))}/certificate/issue-new/csr`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  newServiceCertFromCsr1(body, orgMrn, serviceMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling newServiceCertFromCsr1.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling newServiceCertFromCsr1.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling newServiceCertFromCsr1.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json', 'application/pem-certificate-chain'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/x-pem-file', 'text/plain'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/certificate/issue-new/csr`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  revokeServiceCert(body, orgMrn, serviceMrn, version, certId, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling revokeServiceCert.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling revokeServiceCert.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling revokeServiceCert.');
    }
    if (version === null || version === undefined) {
      throw new Error('Required parameter version was null or undefined when calling revokeServiceCert.');
    }
    if (certId === null || certId === undefined) {
      throw new Error('Required parameter certId was null or undefined when calling revokeServiceCert.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/${encodeURIComponent(String(version))}/certificate/${encodeURIComponent(String(certId))}/revoke`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  revokeServiceCert1(body, orgMrn, serviceMrn, certId, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling revokeServiceCert1.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling revokeServiceCert1.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling revokeServiceCert1.');
    }
    if (certId === null || certId === undefined) {
      throw new Error('Required parameter certId was null or undefined when calling revokeServiceCert1.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/certificate/${encodeURIComponent(String(certId))}/revoke`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  updateService(body, orgMrn, serviceMrn, version, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling updateService.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling updateService.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling updateService.');
    }
    if (version === null || version === undefined) {
      throw new Error('Required parameter version was null or undefined when calling updateService.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/${encodeURIComponent(String(version))}`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  updateService1(body, orgMrn, serviceMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling updateService1.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling updateService1.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling updateService1.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  static #_ = this.ɵfac = function ServiceControllerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ServiceControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: ServiceControllerService,
    factory: ServiceControllerService.ɵfac
  });
}

/***/ }),

/***/ 83621:
/*!*****************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/api/userController.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserControllerService: () => (/* binding */ UserControllerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 92726);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 40192);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 39573);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 85586);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1888);







class UserControllerService {
  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = 'https://test-api.maritimeconnectivity.net';
    this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
    this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }
  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  canConsumeForm(consumes) {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }
  createUser(body, orgMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling createUser.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling createUser.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/user`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  deleteUser(orgMrn, userMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling deleteUser.');
    }
    if (userMrn === null || userMrn === undefined) {
      throw new Error('Required parameter userMrn was null or undefined when calling deleteUser.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('delete', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/user/${encodeURIComponent(String(userMrn))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getOrganizationUsers(orgMrn, page, size, sort, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getOrganizationUsers.');
    }
    let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({
      encoder: new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpUrlEncodingCodec()
    });
    if (page !== undefined && page !== null) {
      queryParameters = queryParameters.set('page', page);
    }
    if (size !== undefined && size !== null) {
      queryParameters = queryParameters.set('size', size);
    }
    if (sort) {
      sort.forEach(element => {
        queryParameters = queryParameters.append('sort', element);
      });
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/users`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getUser(orgMrn, userMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getUser.');
    }
    if (userMrn === null || userMrn === undefined) {
      throw new Error('Required parameter userMrn was null or undefined when calling getUser.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/user/${encodeURIComponent(String(userMrn))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getUserCert(orgMrn, userMrn, serialNumber, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getUserCert.');
    }
    if (userMrn === null || userMrn === undefined) {
      throw new Error('Required parameter userMrn was null or undefined when calling getUserCert.');
    }
    if (serialNumber === null || serialNumber === undefined) {
      throw new Error('Required parameter serialNumber was null or undefined when calling getUserCert.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/user/${encodeURIComponent(String(userMrn))}/certificate/${encodeURIComponent(String(serialNumber))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  newUserCertFromCsr(body, orgMrn, userMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling newUserCertFromCsr.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling newUserCertFromCsr.');
    }
    if (userMrn === null || userMrn === undefined) {
      throw new Error('Required parameter userMrn was null or undefined when calling newUserCertFromCsr.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json', 'application/pem-certificate-chain'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/x-pem-file', 'text/plain'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/user/${encodeURIComponent(String(userMrn))}/certificate/issue-new/csr`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  revokeUserCert(body, orgMrn, userMrn, certId, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling revokeUserCert.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling revokeUserCert.');
    }
    if (userMrn === null || userMrn === undefined) {
      throw new Error('Required parameter userMrn was null or undefined when calling revokeUserCert.');
    }
    if (certId === null || certId === undefined) {
      throw new Error('Required parameter certId was null or undefined when calling revokeUserCert.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/user/${encodeURIComponent(String(userMrn))}/certificate/${encodeURIComponent(String(certId))}/revoke`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  updateUser(body, orgMrn, userMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling updateUser.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling updateUser.');
    }
    if (userMrn === null || userMrn === undefined) {
      throw new Error('Required parameter userMrn was null or undefined when calling updateUser.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/user/${encodeURIComponent(String(userMrn))}`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  static #_ = this.ɵfac = function UserControllerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || UserControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: UserControllerService,
    factory: UserControllerService.ɵfac
  });
}

/***/ }),

/***/ 98920:
/*!*******************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/api/vesselController.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VesselControllerService: () => (/* binding */ VesselControllerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 92726);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 40192);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 39573);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 85586);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1888);







class VesselControllerService {
  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = 'https://test-api.maritimeconnectivity.net';
    this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
    this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }
  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  canConsumeForm(consumes) {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }
  createVessel(body, orgMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling createVessel.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling createVessel.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/vessel`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  deleteVessel(orgMrn, vesselMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling deleteVessel.');
    }
    if (vesselMrn === null || vesselMrn === undefined) {
      throw new Error('Required parameter vesselMrn was null or undefined when calling deleteVessel.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('delete', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/vessel/${encodeURIComponent(String(vesselMrn))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getOrganizationVessels(orgMrn, page, size, sort, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getOrganizationVessels.');
    }
    let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({
      encoder: new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpUrlEncodingCodec()
    });
    if (page !== undefined && page !== null) {
      queryParameters = queryParameters.set('page', page);
    }
    if (size !== undefined && size !== null) {
      queryParameters = queryParameters.set('size', size);
    }
    if (sort) {
      sort.forEach(element => {
        queryParameters = queryParameters.append('sort', element);
      });
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/vessels`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getVessel(orgMrn, vesselMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getVessel.');
    }
    if (vesselMrn === null || vesselMrn === undefined) {
      throw new Error('Required parameter vesselMrn was null or undefined when calling getVessel.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/vessel/${encodeURIComponent(String(vesselMrn))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getVesselCert(orgMrn, vesselMrn, serialNumber, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getVesselCert.');
    }
    if (vesselMrn === null || vesselMrn === undefined) {
      throw new Error('Required parameter vesselMrn was null or undefined when calling getVesselCert.');
    }
    if (serialNumber === null || serialNumber === undefined) {
      throw new Error('Required parameter serialNumber was null or undefined when calling getVesselCert.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/vessel/${encodeURIComponent(String(vesselMrn))}/certificate/${encodeURIComponent(String(serialNumber))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getVesselServices(orgMrn, vesselMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getVesselServices.');
    }
    if (vesselMrn === null || vesselMrn === undefined) {
      throw new Error('Required parameter vesselMrn was null or undefined when calling getVesselServices.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/vessel/${encodeURIComponent(String(vesselMrn))}/services`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  newVesselCertFromCsr(body, orgMrn, vesselMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling newVesselCertFromCsr.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling newVesselCertFromCsr.');
    }
    if (vesselMrn === null || vesselMrn === undefined) {
      throw new Error('Required parameter vesselMrn was null or undefined when calling newVesselCertFromCsr.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json', 'application/pem-certificate-chain'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/x-pem-file', 'text/plain'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/vessel/${encodeURIComponent(String(vesselMrn))}/certificate/issue-new/csr`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  revokeVesselCert(body, orgMrn, vesselMrn, certId, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling revokeVesselCert.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling revokeVesselCert.');
    }
    if (vesselMrn === null || vesselMrn === undefined) {
      throw new Error('Required parameter vesselMrn was null or undefined when calling revokeVesselCert.');
    }
    if (certId === null || certId === undefined) {
      throw new Error('Required parameter certId was null or undefined when calling revokeVesselCert.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/vessel/${encodeURIComponent(String(vesselMrn))}/certificate/${encodeURIComponent(String(certId))}/revoke`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  updateVessel(body, orgMrn, vesselMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling updateVessel.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling updateVessel.');
    }
    if (vesselMrn === null || vesselMrn === undefined) {
      throw new Error('Required parameter vesselMrn was null or undefined when calling updateVessel.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/vessel/${encodeURIComponent(String(vesselMrn))}`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  static #_ = this.ɵfac = function VesselControllerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || VesselControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: VesselControllerService,
    factory: VesselControllerService.ɵfac
  });
}

/***/ }),

/***/ 72269:
/*!************************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/api/vesselImageController.service.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VesselImageControllerService: () => (/* binding */ VesselImageControllerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 92726);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../variables */ 39573);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configuration */ 85586);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1888);






class VesselImageControllerService {
  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = 'https://test-api.maritimeconnectivity.net';
    this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration();
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }
  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  canConsumeForm(consumes) {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }
  createVesselImagePost(orgMrn, vesselMrn, body, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling createVesselImagePost.');
    }
    if (vesselMrn === null || vesselMrn === undefined) {
      throw new Error('Required parameter vesselMrn was null or undefined when calling createVesselImagePost.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['image/png', 'image/jpeg'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/vessel/${encodeURIComponent(String(vesselMrn))}/vesselImage`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  deleteVesselImage(orgMrn, vesselMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling deleteVesselImage.');
    }
    if (vesselMrn === null || vesselMrn === undefined) {
      throw new Error('Required parameter vesselMrn was null or undefined when calling deleteVesselImage.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('delete', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/vessel/${encodeURIComponent(String(vesselMrn))}/vesselImage`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getVesselImage(orgMrn, vesselMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getVesselImage.');
    }
    if (vesselMrn === null || vesselMrn === undefined) {
      throw new Error('Required parameter vesselMrn was null or undefined when calling getVesselImage.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['image/png', 'application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/vessel/${encodeURIComponent(String(vesselMrn))}/vesselImage`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  updateVesselImagePut(body, orgMrn, vesselMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling updateVesselImagePut.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling updateVesselImagePut.');
    }
    if (vesselMrn === null || vesselMrn === undefined) {
      throw new Error('Required parameter vesselMrn was null or undefined when calling updateVesselImagePut.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['image/png', 'image/jpeg'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/vessel/${encodeURIComponent(String(vesselMrn))}/vesselImage`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  static #_ = this.ɵfac = function VesselImageControllerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || VesselImageControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_0__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration, 8));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: VesselImageControllerService,
    factory: VesselImageControllerService.ɵfac
  });
}

/***/ }),

/***/ 85586:
/*!****************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/configuration.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Configuration: () => (/* binding */ Configuration)
/* harmony export */ });
class Configuration {
  constructor(configurationParameters = {}) {
    this.apiKeys = configurationParameters.apiKeys;
    this.username = configurationParameters.username;
    this.password = configurationParameters.password;
    this.accessToken = configurationParameters.accessToken;
    this.basePath = configurationParameters.basePath;
    this.withCredentials = configurationParameters.withCredentials;
  }
  /**
   * Select the correct content-type to use for a request.
   * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
   * If no content type is found return the first found type if the contentTypes is not empty
   * @param contentTypes - the array of content types that are available for selection
   * @returns the selected content-type or <code>undefined</code> if no selection could be made.
   */
  selectHeaderContentType(contentTypes) {
    if (contentTypes.length == 0) {
      return undefined;
    }
    let type = contentTypes.find(x => this.isJsonMime(x));
    if (type === undefined) {
      return contentTypes[0];
    }
    return type;
  }
  /**
   * Select the correct accept content-type to use for a request.
   * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
   * If no content type is found return the first found type if the contentTypes is not empty
   * @param accepts - the array of content types that are available for selection.
   * @returns the selected content-type or <code>undefined</code> if no selection could be made.
   */
  selectHeaderAccept(accepts) {
    if (accepts.length == 0) {
      return undefined;
    }
    let type = accepts.find(x => this.isJsonMime(x));
    if (type === undefined) {
      return accepts[0];
    }
    return type;
  }
  /**
   * Check if the given MIME is a JSON MIME.
   * JSON MIME examples:
   *   application/json
   *   application/json; charset=UTF8
   *   APPLICATION/JSON
   *   application/vnd.company+json
   * @param mime - MIME (Multipurpose Internet Mail Extensions)
   * @return True if the given MIME is JSON, false otherwise.
   */
  isJsonMime(mime) {
    const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
    return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
  }
}

/***/ }),

/***/ 40192:
/*!**********************************************************!*\
  !*** ./src/app/backend-api/identity-registry/encoder.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomHttpUrlEncodingCodec: () => (/* binding */ CustomHttpUrlEncodingCodec)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 92726);

/**
* CustomHttpUrlEncodingCodec
* Fix plus sign (+) not encoding, so sent as blank space
* See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
*/
class CustomHttpUrlEncodingCodec extends _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpUrlEncodingCodec {
  encodeKey(k) {
    k = super.encodeKey(k);
    return k.replace(/\+/gi, '%2B');
  }
  encodeValue(v) {
    v = super.encodeValue(v);
    return v.replace(/\+/gi, '%2B');
  }
}

/***/ }),

/***/ 9136:
/*!********************************************************!*\
  !*** ./src/app/backend-api/identity-registry/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APIS: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.APIS),
/* harmony export */   AgentControllerService: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.AgentControllerService),
/* harmony export */   AllowedAgentRole: () => (/* reexport safe */ _model_models__WEBPACK_IMPORTED_MODULE_1__.AllowedAgentRole),
/* harmony export */   ApiModule: () => (/* reexport safe */ _api_module__WEBPACK_IMPORTED_MODULE_4__.ApiModule),
/* harmony export */   BASE_PATH: () => (/* reexport safe */ _variables__WEBPACK_IMPORTED_MODULE_2__.BASE_PATH),
/* harmony export */   COLLECTION_FORMATS: () => (/* reexport safe */ _variables__WEBPACK_IMPORTED_MODULE_2__.COLLECTION_FORMATS),
/* harmony export */   CertificateControllerService: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.CertificateControllerService),
/* harmony export */   CertificateRevocation: () => (/* reexport safe */ _model_models__WEBPACK_IMPORTED_MODULE_1__.CertificateRevocation),
/* harmony export */   Configuration: () => (/* reexport safe */ _configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration),
/* harmony export */   DeviceControllerService: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.DeviceControllerService),
/* harmony export */   IdentityProviderAttribute: () => (/* reexport safe */ _model_models__WEBPACK_IMPORTED_MODULE_1__.IdentityProviderAttribute),
/* harmony export */   LogoControllerService: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.LogoControllerService),
/* harmony export */   MmsControllerService: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.MmsControllerService),
/* harmony export */   Organization: () => (/* reexport safe */ _model_models__WEBPACK_IMPORTED_MODULE_1__.Organization),
/* harmony export */   OrganizationControllerService: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.OrganizationControllerService),
/* harmony export */   Role: () => (/* reexport safe */ _model_models__WEBPACK_IMPORTED_MODULE_1__.Role),
/* harmony export */   RoleControllerService: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.RoleControllerService),
/* harmony export */   Service: () => (/* reexport safe */ _model_models__WEBPACK_IMPORTED_MODULE_1__.Service),
/* harmony export */   ServiceControllerService: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.ServiceControllerService),
/* harmony export */   UserControllerService: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.UserControllerService),
/* harmony export */   VesselAttribute: () => (/* reexport safe */ _model_models__WEBPACK_IMPORTED_MODULE_1__.VesselAttribute),
/* harmony export */   VesselControllerService: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.VesselControllerService),
/* harmony export */   VesselImageControllerService: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.VesselImageControllerService)
/* harmony export */ });
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/api */ 80903);
/* harmony import */ var _model_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/models */ 95962);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables */ 39573);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuration */ 85586);
/* harmony import */ var _api_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.module */ 82700);






/***/ }),

/***/ 34151:
/*!**************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/agent.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 20137:
/*!*************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/allowedAgentRole.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllowedAgentRole: () => (/* binding */ AllowedAgentRole)
/* harmony export */ });
/**
 * Maritime Connectivity Platform Identity Registry API
 * The MCP Identity Registry API can be used for managing entities in the Maritime Connectivity Platform.<br>Two versions of the API are available - one that requires authentication using OpenID Connect and one that requires authentication using a X.509 client certificate.<br>The OpenAPI descriptions for the two versions are available <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-oidc\">here</a> and <a href=\"https://test-api-x509.maritimeconnectivity.net/v3/api-docs/mcp-idreg-x509\">here</a>.<br>Additionally, a SECOM based API is also available for which the OpenAPI description can be found <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-secom\">here</a>.
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var AllowedAgentRole;
(function (AllowedAgentRole) {
  AllowedAgentRole.RoleNameEnum = {
    ORGADMIN: 'ROLE_ORG_ADMIN',
    ENTITYADMIN: 'ROLE_ENTITY_ADMIN',
    USERADMIN: 'ROLE_USER_ADMIN',
    VESSELADMIN: 'ROLE_VESSEL_ADMIN',
    SERVICEADMIN: 'ROLE_SERVICE_ADMIN',
    DEVICEADMIN: 'ROLE_DEVICE_ADMIN',
    MMSADMIN: 'ROLE_MMS_ADMIN',
    USER: 'ROLE_USER'
  };
})(AllowedAgentRole || (AllowedAgentRole = {}));

/***/ }),

/***/ 12201:
/*!********************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/certificate.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Maritime Connectivity Platform Identity Registry API
 * The MCP Identity Registry API can be used for managing entities in the Maritime Connectivity Platform.<br>Two versions of the API are available - one that requires authentication using OpenID Connect and one that requires authentication using a X.509 client certificate.<br>The OpenAPI descriptions for the two versions are available <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-oidc\">here</a> and <a href=\"https://test-api-x509.maritimeconnectivity.net/v3/api-docs/mcp-idreg-x509\">here</a>.<br>Additionally, a SECOM based API is also available for which the OpenAPI description can be found <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-secom\">here</a>.
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 87277:
/*!******************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/certificateRevocation.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CertificateRevocation: () => (/* binding */ CertificateRevocation)
/* harmony export */ });
/**
 * Maritime Connectivity Platform Identity Registry API
 * The MCP Identity Registry API can be used for managing entities in the Maritime Connectivity Platform.<br>Two versions of the API are available - one that requires authentication using OpenID Connect and one that requires authentication using a X.509 client certificate.<br>The OpenAPI descriptions for the two versions are available <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-oidc\">here</a> and <a href=\"https://test-api-x509.maritimeconnectivity.net/v3/api-docs/mcp-idreg-x509\">here</a>.<br>Additionally, a SECOM based API is also available for which the OpenAPI description can be found <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-secom\">here</a>.
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var CertificateRevocation;
(function (CertificateRevocation) {
  CertificateRevocation.RevocationReasonEnum = {
    Unspecified: 'unspecified',
    Keycompromise: 'keycompromise',
    Cacompromise: 'cacompromise',
    Affiliationchanged: 'affiliationchanged',
    Superseded: 'superseded',
    Cessationofoperation: 'cessationofoperation',
    Certificatehold: 'certificatehold',
    Removefromcrl: 'removefromcrl',
    Privilegewithdrawn: 'privilegewithdrawn',
    Aacompromise: 'aacompromise'
  };
})(CertificateRevocation || (CertificateRevocation = {}));

/***/ }),

/***/ 23538:
/*!***************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/device.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 80951:
/*!**********************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/identityProviderAttribute.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IdentityProviderAttribute: () => (/* binding */ IdentityProviderAttribute)
/* harmony export */ });
/**
 * Maritime Connectivity Platform Identity Registry API
 * The MCP Identity Registry API can be used for managing entities in the Maritime Connectivity Platform.<br>Two versions of the API are available - one that requires authentication using OpenID Connect and one that requires authentication using a X.509 client certificate.<br>The OpenAPI descriptions for the two versions are available <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-oidc\">here</a> and <a href=\"https://test-api-x509.maritimeconnectivity.net/v3/api-docs/mcp-idreg-x509\">here</a>.<br>Additionally, a SECOM based API is also available for which the OpenAPI description can be found <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-secom\">here</a>.
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var IdentityProviderAttribute;
(function (IdentityProviderAttribute) {
  IdentityProviderAttribute.AttributeNameEnum = {
    ImportUrlValidateSignatureSigningCertificateSingleLogoutServiceUrlPostBindingResponsePostBindingAuthnRequestSingleSignOnServiceUrlWantAuthnRequestsSignedUserInfoUrlTokenUrlAuthorizationUrlLogoutUrlIssuerPublicKeySignatureVerifierClientIdClientSecretproviderTypeFirstNameAttrLastNameAttrEmailAttrUsernameAttrPermissionsAttr: 'importUrl, validateSignature, signingCertificate, singleLogoutServiceUrl, postBindingResponse, postBindingAuthnRequest, singleSignOnServiceUrl, wantAuthnRequestsSigned, userInfoUrl, tokenUrl, authorizationUrl, logoutUrl, issuer, publicKeySignatureVerifier, clientId, clientSecret,providerType, firstNameAttr, lastNameAttr, emailAttr, usernameAttr, permissionsAttr'
  };
})(IdentityProviderAttribute || (IdentityProviderAttribute = {}));

/***/ }),

/***/ 38957:
/*!************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/mMS.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 95962:
/*!***************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/models.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllowedAgentRole: () => (/* reexport safe */ _allowedAgentRole__WEBPACK_IMPORTED_MODULE_1__.AllowedAgentRole),
/* harmony export */   CertificateRevocation: () => (/* reexport safe */ _certificateRevocation__WEBPACK_IMPORTED_MODULE_3__.CertificateRevocation),
/* harmony export */   IdentityProviderAttribute: () => (/* reexport safe */ _identityProviderAttribute__WEBPACK_IMPORTED_MODULE_5__.IdentityProviderAttribute),
/* harmony export */   Organization: () => (/* reexport safe */ _organization__WEBPACK_IMPORTED_MODULE_9__.Organization),
/* harmony export */   Role: () => (/* reexport safe */ _role__WEBPACK_IMPORTED_MODULE_19__.Role),
/* harmony export */   Service: () => (/* reexport safe */ _service__WEBPACK_IMPORTED_MODULE_20__.Service),
/* harmony export */   VesselAttribute: () => (/* reexport safe */ _vesselAttribute__WEBPACK_IMPORTED_MODULE_25__.VesselAttribute)
/* harmony export */ });
/* harmony import */ var _agent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agent */ 34151);
/* harmony import */ var _allowedAgentRole__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allowedAgentRole */ 20137);
/* harmony import */ var _certificate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./certificate */ 12201);
/* harmony import */ var _certificateRevocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./certificateRevocation */ 87277);
/* harmony import */ var _device__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./device */ 23538);
/* harmony import */ var _identityProviderAttribute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./identityProviderAttribute */ 80951);
/* harmony import */ var _mMS__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mMS */ 38957);
/* harmony import */ var _orgMrnLogoBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./orgMrnLogoBody */ 40090);
/* harmony import */ var _orgMrnLogoBody1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./orgMrnLogoBody1 */ 75295);
/* harmony import */ var _organization__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./organization */ 51387);
/* harmony import */ var _pageAgent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pageAgent */ 96178);
/* harmony import */ var _pageDevice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pageDevice */ 49521);
/* harmony import */ var _pageMMS__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pageMMS */ 72772);
/* harmony import */ var _pageOrganization__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pageOrganization */ 264);
/* harmony import */ var _pageService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pageService */ 51388);
/* harmony import */ var _pageUser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pageUser */ 37608);
/* harmony import */ var _pageVessel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pageVessel */ 94477);
/* harmony import */ var _pageable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pageable */ 20075);
/* harmony import */ var _pageableObject__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pageableObject */ 63184);
/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./role */ 66488);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./service */ 333);
/* harmony import */ var _servicePatch__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./servicePatch */ 73139);
/* harmony import */ var _sortObject__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sortObject */ 25359);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user */ 72995);
/* harmony import */ var _vessel__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./vessel */ 87178);
/* harmony import */ var _vesselAttribute__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./vesselAttribute */ 24160);
/* harmony import */ var _vesselMrnVesselImageBody__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./vesselMrnVesselImageBody */ 69076);
/* harmony import */ var _vesselMrnVesselImageBody1__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./vesselMrnVesselImageBody1 */ 92277);





























/***/ }),

/***/ 40090:
/*!***********************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/orgMrnLogoBody.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Maritime Connectivity Platform Identity Registry API
 * The MCP Identity Registry API can be used for managing entities in the Maritime Connectivity Platform.<br>Two versions of the API are available - one that requires authentication using OpenID Connect and one that requires authentication using a X.509 client certificate.<br>The OpenAPI descriptions for the two versions are available <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-oidc\">here</a> and <a href=\"https://test-api-x509.maritimeconnectivity.net/v3/api-docs/mcp-idreg-x509\">here</a>.<br>Additionally, a SECOM based API is also available for which the OpenAPI description can be found <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-secom\">here</a>.
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 75295:
/*!************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/orgMrnLogoBody1.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Maritime Connectivity Platform Identity Registry API
 * The MCP Identity Registry API can be used for managing entities in the Maritime Connectivity Platform.<br>Two versions of the API are available - one that requires authentication using OpenID Connect and one that requires authentication using a X.509 client certificate.<br>The OpenAPI descriptions for the two versions are available <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-oidc\">here</a> and <a href=\"https://test-api-x509.maritimeconnectivity.net/v3/api-docs/mcp-idreg-x509\">here</a>.<br>Additionally, a SECOM based API is also available for which the OpenAPI description can be found <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-secom\">here</a>.
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 51387:
/*!*********************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/organization.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Organization: () => (/* binding */ Organization)
/* harmony export */ });
var Organization;
(function (Organization) {
  Organization.FederationTypeEnum = {
    TestIdp: 'test-idp',
    OwnIdp: 'own-idp',
    ExternalIdp: 'external-idp'
  };
})(Organization || (Organization = {}));

/***/ }),

/***/ 96178:
/*!******************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/pageAgent.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 49521:
/*!*******************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/pageDevice.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 72772:
/*!****************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/pageMMS.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 264:
/*!*************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/pageOrganization.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 51388:
/*!********************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/pageService.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 37608:
/*!*****************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/pageUser.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 94477:
/*!*******************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/pageVessel.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 20075:
/*!*****************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/pageable.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Maritime Connectivity Platform Identity Registry API
 * The MCP Identity Registry API can be used for managing entities in the Maritime Connectivity Platform.<br>Two versions of the API are available - one that requires authentication using OpenID Connect and one that requires authentication using a X.509 client certificate.<br>The OpenAPI descriptions for the two versions are available <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-oidc\">here</a> and <a href=\"https://test-api-x509.maritimeconnectivity.net/v3/api-docs/mcp-idreg-x509\">here</a>.<br>Additionally, a SECOM based API is also available for which the OpenAPI description can be found <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-secom\">here</a>.
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 63184:
/*!***********************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/pageableObject.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 66488:
/*!*************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/role.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Role: () => (/* binding */ Role)
/* harmony export */ });
/**
 * Maritime Connectivity Platform Identity Registry API
 * The MCP Identity Registry API can be used for managing entities in the Maritime Connectivity Platform.<br>Two versions of the API are available - one that requires authentication using OpenID Connect and one that requires authentication using a X.509 client certificate.<br>The OpenAPI descriptions for the two versions are available <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-oidc\">here</a> and <a href=\"https://test-api-x509.maritimeconnectivity.net/v3/api-docs/mcp-idreg-x509\">here</a>.<br>Additionally, a SECOM based API is also available for which the OpenAPI description can be found <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-secom\">here</a>.
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var Role;
(function (Role) {
  let RoleNameEnum;
  (function (RoleNameEnum) {
    RoleNameEnum["SITEADMIN"] = "ROLE_SITE_ADMIN";
    RoleNameEnum["ORGADMIN"] = "ROLE_ORG_ADMIN";
    RoleNameEnum["USER"] = "ROLE_USER";
    RoleNameEnum["ENTITYADMIN"] = "ROLE_ENTITY_ADMIN";
    RoleNameEnum["USERADMIN"] = "ROLE_USER_ADMIN";
    RoleNameEnum["VESSELADMIN"] = "ROLE_VESSEL_ADMIN";
    RoleNameEnum["SERVICEADMIN"] = "ROLE_SERVICE_ADMIN";
    RoleNameEnum["APPROVEORG"] = "ROLE_APPROVE_ORG";
    RoleNameEnum["DEVICEADMIN"] = "ROLE_DEVICE_ADMIN";
    RoleNameEnum["MMSADMIN"] = "ROLE_MMS_ADMIN";
  })(RoleNameEnum = Role.RoleNameEnum || (Role.RoleNameEnum = {}));
  ;
})(Role || (Role = {}));

/***/ }),

/***/ 333:
/*!****************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Service: () => (/* binding */ Service)
/* harmony export */ });
var Service;
(function (Service) {
  Service.OidcAccessTypeEnum = {
    PublicBearerOnlyConfidential: 'public, bearer-only, confidential'
  };
})(Service || (Service = {}));

/***/ }),

/***/ 73139:
/*!*********************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/servicePatch.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Maritime Connectivity Platform Identity Registry API
 * The MCP Identity Registry API can be used for managing entities in the Maritime Connectivity Platform.<br>Two versions of the API are available - one that requires authentication using OpenID Connect and one that requires authentication using a X.509 client certificate.<br>The OpenAPI descriptions for the two versions are available <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-oidc\">here</a> and <a href=\"https://test-api-x509.maritimeconnectivity.net/v3/api-docs/mcp-idreg-x509\">here</a>.<br>Additionally, a SECOM based API is also available for which the OpenAPI description can be found <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-secom\">here</a>.
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 25359:
/*!*******************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/sortObject.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Maritime Connectivity Platform Identity Registry API
 * The MCP Identity Registry API can be used for managing entities in the Maritime Connectivity Platform.<br>Two versions of the API are available - one that requires authentication using OpenID Connect and one that requires authentication using a X.509 client certificate.<br>The OpenAPI descriptions for the two versions are available <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-oidc\">here</a> and <a href=\"https://test-api-x509.maritimeconnectivity.net/v3/api-docs/mcp-idreg-x509\">here</a>.<br>Additionally, a SECOM based API is also available for which the OpenAPI description can be found <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-secom\">here</a>.
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 72995:
/*!*************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/user.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 87178:
/*!***************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/vessel.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 24160:
/*!************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/vesselAttribute.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VesselAttribute: () => (/* binding */ VesselAttribute)
/* harmony export */ });
/**
 * Maritime Connectivity Platform Identity Registry API
 * The MCP Identity Registry API can be used for managing entities in the Maritime Connectivity Platform.<br>Two versions of the API are available - one that requires authentication using OpenID Connect and one that requires authentication using a X.509 client certificate.<br>The OpenAPI descriptions for the two versions are available <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-oidc\">here</a> and <a href=\"https://test-api-x509.maritimeconnectivity.net/v3/api-docs/mcp-idreg-x509\">here</a>.<br>Additionally, a SECOM based API is also available for which the OpenAPI description can be found <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-secom\">here</a>.
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var VesselAttribute;
(function (VesselAttribute) {
  VesselAttribute.AttributeNameEnum = {
    ImoNumber: 'imo-number',
    MmsiNumber: 'mmsi-number',
    Callsign: 'callsign',
    Flagstate: 'flagstate',
    AisClass: 'ais-class',
    PortOfRegister: 'port-of-register'
  };
})(VesselAttribute || (VesselAttribute = {}));

/***/ }),

/***/ 69076:
/*!*********************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/vesselMrnVesselImageBody.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Maritime Connectivity Platform Identity Registry API
 * The MCP Identity Registry API can be used for managing entities in the Maritime Connectivity Platform.<br>Two versions of the API are available - one that requires authentication using OpenID Connect and one that requires authentication using a X.509 client certificate.<br>The OpenAPI descriptions for the two versions are available <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-oidc\">here</a> and <a href=\"https://test-api-x509.maritimeconnectivity.net/v3/api-docs/mcp-idreg-x509\">here</a>.<br>Additionally, a SECOM based API is also available for which the OpenAPI description can be found <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-secom\">here</a>.
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 92277:
/*!**********************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/vesselMrnVesselImageBody1.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Maritime Connectivity Platform Identity Registry API
 * The MCP Identity Registry API can be used for managing entities in the Maritime Connectivity Platform.<br>Two versions of the API are available - one that requires authentication using OpenID Connect and one that requires authentication using a X.509 client certificate.<br>The OpenAPI descriptions for the two versions are available <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-oidc\">here</a> and <a href=\"https://test-api-x509.maritimeconnectivity.net/v3/api-docs/mcp-idreg-x509\">here</a>.<br>Additionally, a SECOM based API is also available for which the OpenAPI description can be found <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-secom\">here</a>.
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 39573:
/*!************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/variables.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BASE_PATH: () => (/* binding */ BASE_PATH),
/* harmony export */   COLLECTION_FORMATS: () => (/* binding */ COLLECTION_FORMATS)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1888);

const BASE_PATH = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('basePath');
const COLLECTION_FORMATS = {
  'csv': ',',
  'tsv': '   ',
  'ssv': ' ',
  'pipes': '|'
};

/***/ }),

/***/ 58313:
/*!*************************************************!*\
  !*** ./src/app/backend-api/secom/api.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiModule: () => (/* binding */ ApiModule)
/* harmony export */ });
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration */ 58969);
/* harmony import */ var _api_sECOM_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/sECOM.service */ 30076);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1888);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 92726);




class ApiModule {
  static forRoot(configurationFactory) {
    return {
      ngModule: ApiModule,
      providers: [{
        provide: _configuration__WEBPACK_IMPORTED_MODULE_0__.Configuration,
        useFactory: configurationFactory
      }]
    };
  }
  constructor(parentModule, http) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' + 'See also https://github.com/angular/angular/issues/20575');
    }
  }
  static #_ = this.ɵfac = function ApiModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ApiModule)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ApiModule, 12), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient, 8));
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: ApiModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    providers: [_api_sECOM_service__WEBPACK_IMPORTED_MODULE_1__.SECOMService]
  });
}

/***/ }),

/***/ 15544:
/*!**********************************************!*\
  !*** ./src/app/backend-api/secom/api/api.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APIS: () => (/* binding */ APIS),
/* harmony export */   SECOMService: () => (/* reexport safe */ _sECOM_service__WEBPACK_IMPORTED_MODULE_0__.SECOMService)
/* harmony export */ });
/* harmony import */ var _sECOM_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sECOM.service */ 30076);


const APIS = [_sECOM_service__WEBPACK_IMPORTED_MODULE_0__.SECOMService];

/***/ }),

/***/ 30076:
/*!********************************************************!*\
  !*** ./src/app/backend-api/secom/api/sECOM.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SECOMService: () => (/* binding */ SECOMService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 92726);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 76639);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 55694);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 58969);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.config */ 96370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1888);








class SECOMService {
  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = _app_config__WEBPACK_IMPORTED_MODULE_3__.AppConfig.SR_BASE_PATH;
    this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders();
    this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }
  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  canConsumeForm(consumes) {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }
  search(body, page, pageSize, observe = 'body', reportProgress = false) {
    let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams({
      encoder: new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpUrlEncodingCodec()
    });
    if (page !== undefined && page !== null) {
      queryParameters = queryParameters.set('page', page);
    }
    if (pageSize !== undefined && pageSize !== null) {
      queryParameters = queryParameters.set('pageSize', pageSize);
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/api/secom/v1/searchService`, {
      body: body,
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  static #_ = this.ɵfac = function SECOMService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SECOMService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: SECOMService,
    factory: SECOMService.ɵfac
  });
}

/***/ }),

/***/ 58969:
/*!****************************************************!*\
  !*** ./src/app/backend-api/secom/configuration.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Configuration: () => (/* binding */ Configuration)
/* harmony export */ });
class Configuration {
  constructor(configurationParameters = {}) {
    this.apiKeys = configurationParameters.apiKeys;
    this.username = configurationParameters.username;
    this.password = configurationParameters.password;
    this.accessToken = configurationParameters.accessToken;
    this.basePath = configurationParameters.basePath;
    this.withCredentials = configurationParameters.withCredentials;
  }
  /**
   * Select the correct content-type to use for a request.
   * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
   * If no content type is found return the first found type if the contentTypes is not empty
   * @param contentTypes - the array of content types that are available for selection
   * @returns the selected content-type or <code>undefined</code> if no selection could be made.
   */
  selectHeaderContentType(contentTypes) {
    if (contentTypes.length == 0) {
      return undefined;
    }
    let type = contentTypes.find(x => this.isJsonMime(x));
    if (type === undefined) {
      return contentTypes[0];
    }
    return type;
  }
  /**
   * Select the correct accept content-type to use for a request.
   * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
   * If no content type is found return the first found type if the contentTypes is not empty
   * @param accepts - the array of content types that are available for selection.
   * @returns the selected content-type or <code>undefined</code> if no selection could be made.
   */
  selectHeaderAccept(accepts) {
    if (accepts.length == 0) {
      return undefined;
    }
    let type = accepts.find(x => this.isJsonMime(x));
    if (type === undefined) {
      return accepts[0];
    }
    return type;
  }
  /**
   * Check if the given MIME is a JSON MIME.
   * JSON MIME examples:
   *   application/json
   *   application/json; charset=UTF8
   *   APPLICATION/JSON
   *   application/vnd.company+json
   * @param mime - MIME (Multipurpose Internet Mail Extensions)
   * @return True if the given MIME is JSON, false otherwise.
   */
  isJsonMime(mime) {
    const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
    return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
  }
}

/***/ }),

/***/ 76639:
/*!**********************************************!*\
  !*** ./src/app/backend-api/secom/encoder.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomHttpUrlEncodingCodec: () => (/* binding */ CustomHttpUrlEncodingCodec)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 92726);

/**
* CustomHttpUrlEncodingCodec
* Fix plus sign (+) not encoding, so sent as blank space
* See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
*/
class CustomHttpUrlEncodingCodec extends _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpUrlEncodingCodec {
  encodeKey(k) {
    k = super.encodeKey(k);
    return k.replace(/\+/gi, '%2B');
  }
  encodeValue(v) {
    v = super.encodeValue(v);
    return v.replace(/\+/gi, '%2B');
  }
}

/***/ }),

/***/ 67063:
/*!********************************************!*\
  !*** ./src/app/backend-api/secom/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APIS: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.APIS),
/* harmony export */   ApiModule: () => (/* reexport safe */ _api_module__WEBPACK_IMPORTED_MODULE_4__.ApiModule),
/* harmony export */   BASE_PATH: () => (/* reexport safe */ _variables__WEBPACK_IMPORTED_MODULE_2__.BASE_PATH),
/* harmony export */   COLLECTION_FORMATS: () => (/* reexport safe */ _variables__WEBPACK_IMPORTED_MODULE_2__.COLLECTION_FORMATS),
/* harmony export */   Configuration: () => (/* reexport safe */ _configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration),
/* harmony export */   SECOMService: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.SECOMService),
/* harmony export */   SearchObjectResult: () => (/* reexport safe */ _model_models__WEBPACK_IMPORTED_MODULE_1__.SearchObjectResult),
/* harmony export */   SearchParameters: () => (/* reexport safe */ _model_models__WEBPACK_IMPORTED_MODULE_1__.SearchParameters)
/* harmony export */ });
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/api */ 15544);
/* harmony import */ var _model_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/models */ 30811);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables */ 55694);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuration */ 58969);
/* harmony import */ var _api_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.module */ 58313);






/***/ }),

/***/ 30811:
/*!***************************************************!*\
  !*** ./src/app/backend-api/secom/model/models.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchObjectResult: () => (/* reexport safe */ _searchObjectResult__WEBPACK_IMPORTED_MODULE_1__.SearchObjectResult),
/* harmony export */   SearchParameters: () => (/* reexport safe */ _searchParameters__WEBPACK_IMPORTED_MODULE_2__.SearchParameters)
/* harmony export */ });
/* harmony import */ var _searchFilterObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchFilterObject */ 27308);
/* harmony import */ var _searchObjectResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchObjectResult */ 77859);
/* harmony import */ var _searchParameters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./searchParameters */ 66249);




/***/ }),

/***/ 27308:
/*!***************************************************************!*\
  !*** ./src/app/backend-api/secom/model/searchFilterObject.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 77859:
/*!***************************************************************!*\
  !*** ./src/app/backend-api/secom/model/searchObjectResult.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchObjectResult: () => (/* binding */ SearchObjectResult)
/* harmony export */ });
/**
 * MCP Service Registry (MSR) - SECOM Interfaces
 * Maritime Connectivity Platform Service Registry, developed by the MCC MSR WG
 *
 * OpenAPI spec version: 1.0
 * Contact: Nikolaos.Vastardis@gla-rad.org
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var SearchObjectResult;
(function (SearchObjectResult) {
  SearchObjectResult.DataProductTypeEnum = {
    OTHER: 'OTHER',
    S57: 'S57',
    S101: 'S101',
    S102: 'S102',
    S104: 'S104',
    S111: 'S111',
    S122: 'S122',
    S123: 'S123',
    S124: 'S124',
    S125: 'S125',
    S126: 'S126',
    S127: 'S127',
    S128: 'S128',
    S129: 'S129',
    S131: 'S131',
    S210: 'S210',
    S211: 'S211',
    S212: 'S212',
    S401: 'S401',
    S402: 'S402',
    S411: 'S411',
    S412: 'S412',
    S413: 'S413',
    S414: 'S414',
    S421: 'S421',
    RTZ: 'RTZ',
    EPC: 'EPC'
  };
})(SearchObjectResult || (SearchObjectResult = {}));

/***/ }),

/***/ 66249:
/*!*************************************************************!*\
  !*** ./src/app/backend-api/secom/model/searchParameters.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchParameters: () => (/* binding */ SearchParameters)
/* harmony export */ });
/**
 * MCP Service Registry (MSR) - SECOM Interfaces
 * Maritime Connectivity Platform Service Registry, developed by the MCC MSR WG
 *
 * OpenAPI spec version: 1.0
 * Contact: Nikolaos.Vastardis@gla-rad.org
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var SearchParameters;
(function (SearchParameters) {
  SearchParameters.DataProductTypeEnum = {
    OTHER: 'OTHER',
    S57: 'S57',
    S101: 'S101',
    S102: 'S102',
    S104: 'S104',
    S111: 'S111',
    S122: 'S122',
    S123: 'S123',
    S124: 'S124',
    S125: 'S125',
    S126: 'S126',
    S127: 'S127',
    S128: 'S128',
    S129: 'S129',
    S131: 'S131',
    S210: 'S210',
    S211: 'S211',
    S212: 'S212',
    S401: 'S401',
    S402: 'S402',
    S411: 'S411',
    S412: 'S412',
    S413: 'S413',
    S414: 'S414',
    S421: 'S421',
    RTZ: 'RTZ',
    EPC: 'EPC'
  };
})(SearchParameters || (SearchParameters = {}));

/***/ }),

/***/ 55694:
/*!************************************************!*\
  !*** ./src/app/backend-api/secom/variables.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BASE_PATH: () => (/* binding */ BASE_PATH),
/* harmony export */   COLLECTION_FORMATS: () => (/* binding */ COLLECTION_FORMATS)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1888);

const BASE_PATH = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('basePath');
const COLLECTION_FORMATS = {
  'csv': ',',
  'tsv': '   ',
  'ssv': ' ',
  'pipes': '|'
};

/***/ }),

/***/ 66561:
/*!************************************************************!*\
  !*** ./src/app/backend-api/service-registry/api.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiModule: () => (/* binding */ ApiModule)
/* harmony export */ });
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration */ 23729);
/* harmony import */ var _api_docController_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/docController.service */ 80307);
/* harmony import */ var _api_instanceController_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/instanceController.service */ 15032);
/* harmony import */ var _api_ledgerRequestController_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/ledgerRequestController.service */ 67691);
/* harmony import */ var _api_xmlController_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/xmlController.service */ 36288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1888);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 92726);







class ApiModule {
  static forRoot(configurationFactory) {
    return {
      ngModule: ApiModule,
      providers: [{
        provide: _configuration__WEBPACK_IMPORTED_MODULE_0__.Configuration,
        useFactory: configurationFactory
      }]
    };
  }
  constructor(parentModule, http) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' + 'See also https://github.com/angular/angular/issues/20575');
    }
  }
  static #_ = this.ɵfac = function ApiModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ApiModule)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](ApiModule, 12), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient, 8));
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: ApiModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    providers: [_api_docController_service__WEBPACK_IMPORTED_MODULE_1__.DocControllerService, _api_instanceController_service__WEBPACK_IMPORTED_MODULE_2__.InstanceControllerService, _api_ledgerRequestController_service__WEBPACK_IMPORTED_MODULE_3__.LedgerRequestControllerService, _api_xmlController_service__WEBPACK_IMPORTED_MODULE_4__.XmlControllerService]
  });
}

/***/ }),

/***/ 2880:
/*!*********************************************************!*\
  !*** ./src/app/backend-api/service-registry/api/api.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APIS: () => (/* binding */ APIS),
/* harmony export */   DocControllerService: () => (/* reexport safe */ _docController_service__WEBPACK_IMPORTED_MODULE_0__.DocControllerService),
/* harmony export */   InstanceControllerService: () => (/* reexport safe */ _instanceController_service__WEBPACK_IMPORTED_MODULE_1__.InstanceControllerService),
/* harmony export */   LedgerRequestControllerService: () => (/* reexport safe */ _ledgerRequestController_service__WEBPACK_IMPORTED_MODULE_2__.LedgerRequestControllerService),
/* harmony export */   XmlControllerService: () => (/* reexport safe */ _xmlController_service__WEBPACK_IMPORTED_MODULE_3__.XmlControllerService)
/* harmony export */ });
/* harmony import */ var _docController_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docController.service */ 80307);
/* harmony import */ var _instanceController_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceController.service */ 15032);
/* harmony import */ var _ledgerRequestController_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ledgerRequestController.service */ 67691);
/* harmony import */ var _xmlController_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./xmlController.service */ 36288);








const APIS = [_docController_service__WEBPACK_IMPORTED_MODULE_0__.DocControllerService, _instanceController_service__WEBPACK_IMPORTED_MODULE_1__.InstanceControllerService, _ledgerRequestController_service__WEBPACK_IMPORTED_MODULE_2__.LedgerRequestControllerService, _xmlController_service__WEBPACK_IMPORTED_MODULE_3__.XmlControllerService];

/***/ }),

/***/ 80307:
/*!***************************************************************************!*\
  !*** ./src/app/backend-api/service-registry/api/docController.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocControllerService: () => (/* binding */ DocControllerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 92726);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 46903);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 20422);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 23729);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1888);







class DocControllerService {
  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = 'https://msr.maritimeconnectivity.net';
    this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
    this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }
  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  canConsumeForm(consumes) {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }
  createDoc(body, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling createDoc.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/api/docs`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  deleteDoc(id, observe = 'body', reportProgress = false) {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling deleteDoc.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = [];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('delete', `${this.basePath}/api/docs/${encodeURIComponent(String(id))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getDoc(id, observe = 'body', reportProgress = false) {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getDoc.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/api/docs/${encodeURIComponent(String(id))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getDocs(page, size, sort, observe = 'body', reportProgress = false) {
    let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({
      encoder: new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpUrlEncodingCodec()
    });
    if (page !== undefined && page !== null) {
      queryParameters = queryParameters.set('page', page);
    }
    if (size !== undefined && size !== null) {
      queryParameters = queryParameters.set('size', size);
    }
    if (sort) {
      sort.forEach(element => {
        queryParameters = queryParameters.append('sort', element);
      });
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/api/docs`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  updateDoc(body, id, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling updateDoc.');
    }
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling updateDoc.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', `${this.basePath}/api/docs/${encodeURIComponent(String(id))}`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  static #_ = this.ɵfac = function DocControllerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DocControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: DocControllerService,
    factory: DocControllerService.ɵfac
  });
}

/***/ }),

/***/ 15032:
/*!********************************************************************************!*\
  !*** ./src/app/backend-api/service-registry/api/instanceController.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstanceControllerService: () => (/* binding */ InstanceControllerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 92726);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 46903);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 20422);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 23729);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1888);







class InstanceControllerService {
  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = 'https://msr.maritimeconnectivity.net';
    this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
    this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }
  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  canConsumeForm(consumes) {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }
  createInstance(body, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling createInstance.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/api/instances`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  deleteInstance(id, observe = 'body', reportProgress = false) {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling deleteInstance.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = [];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('delete', `${this.basePath}/api/instances/${encodeURIComponent(String(id))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getInstance(id, observe = 'body', reportProgress = false) {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getInstance.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/api/instances/${encodeURIComponent(String(id))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getInstanceByMRNAndVersion(mrn, version, observe = 'body', reportProgress = false) {
    if (mrn === null || mrn === undefined) {
      throw new Error('Required parameter mrn was null or undefined when calling getInstanceByMRNAndVersion.');
    }
    if (version === null || version === undefined) {
      throw new Error('Required parameter version was null or undefined when calling getInstanceByMRNAndVersion.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/api/instances/mrn/${encodeURIComponent(String(mrn))}/${encodeURIComponent(String(version))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getInstances(page, size, sort, observe = 'body', reportProgress = false) {
    let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({
      encoder: new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpUrlEncodingCodec()
    });
    if (page !== undefined && page !== null) {
      queryParameters = queryParameters.set('page', page);
    }
    if (size !== undefined && size !== null) {
      queryParameters = queryParameters.set('size', size);
    }
    if (sort) {
      sort.forEach(element => {
        queryParameters = queryParameters.append('sort', element);
      });
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/api/instances`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getInstancesByMRN(mrn, observe = 'body', reportProgress = false) {
    if (mrn === null || mrn === undefined) {
      throw new Error('Required parameter mrn was null or undefined when calling getInstancesByMRN.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/api/instances/mrn/${encodeURIComponent(String(mrn))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  updateInstance(body, id, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling updateInstance.');
    }
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling updateInstance.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', `${this.basePath}/api/instances/${encodeURIComponent(String(id))}`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  updateInstanceLedgerStatus(id, ledgerStatus, observe = 'body', reportProgress = false) {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling updateInstanceLedgerStatus.');
    }
    if (ledgerStatus === null || ledgerStatus === undefined) {
      throw new Error('Required parameter ledgerStatus was null or undefined when calling updateInstanceLedgerStatus.');
    }
    let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({
      encoder: new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpUrlEncodingCodec()
    });
    if (ledgerStatus !== undefined && ledgerStatus !== null) {
      queryParameters = queryParameters.set('ledgerStatus', ledgerStatus);
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = [];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('put', `${this.basePath}/api/instances/${encodeURIComponent(String(id))}/ledger-status`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  updateInstanceStatus(id, status, observe = 'body', reportProgress = false) {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling updateInstanceStatus.');
    }
    if (status === null || status === undefined) {
      throw new Error('Required parameter status was null or undefined when calling updateInstanceStatus.');
    }
    let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({
      encoder: new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpUrlEncodingCodec()
    });
    if (status !== undefined && status !== null) {
      queryParameters = queryParameters.set('status', status);
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = [];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('put', `${this.basePath}/api/instances/${encodeURIComponent(String(id))}/status`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  static #_ = this.ɵfac = function InstanceControllerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || InstanceControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: InstanceControllerService,
    factory: InstanceControllerService.ɵfac
  });
}

/***/ }),

/***/ 67691:
/*!*************************************************************************************!*\
  !*** ./src/app/backend-api/service-registry/api/ledgerRequestController.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LedgerRequestControllerService: () => (/* binding */ LedgerRequestControllerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 92726);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 46903);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 20422);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 23729);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1888);







class LedgerRequestControllerService {
  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = 'https://msr.maritimeconnectivity.net';
    this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
    this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }
  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  canConsumeForm(consumes) {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }
  createLedgerRequest(body, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling createLedgerRequest.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/api/ledgerrequests`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  deleteLedgerRequest(id, observe = 'body', reportProgress = false) {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling deleteLedgerRequest.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = [];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('delete', `${this.basePath}/api/ledgerrequests/${encodeURIComponent(String(id))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getLedgerRequest(id, observe = 'body', reportProgress = false) {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getLedgerRequest.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/api/ledgerrequests/${encodeURIComponent(String(id))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getLedgerRequests(page, size, sort, observe = 'body', reportProgress = false) {
    let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({
      encoder: new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpUrlEncodingCodec()
    });
    if (page !== undefined && page !== null) {
      queryParameters = queryParameters.set('page', page);
    }
    if (size !== undefined && size !== null) {
      queryParameters = queryParameters.set('size', size);
    }
    if (sort) {
      sort.forEach(element => {
        queryParameters = queryParameters.append('sort', element);
      });
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/api/ledgerrequests`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  updateRequestStatus(id, status, observe = 'body', reportProgress = false) {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling updateRequestStatus.');
    }
    if (status === null || status === undefined) {
      throw new Error('Required parameter status was null or undefined when calling updateRequestStatus.');
    }
    let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({
      encoder: new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpUrlEncodingCodec()
    });
    if (status !== undefined && status !== null) {
      queryParameters = queryParameters.set('status', status);
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('put', `${this.basePath}/api/ledgerrequests/${encodeURIComponent(String(id))}/status`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  static #_ = this.ɵfac = function LedgerRequestControllerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LedgerRequestControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: LedgerRequestControllerService,
    factory: LedgerRequestControllerService.ɵfac
  });
}

/***/ }),

/***/ 36288:
/*!***************************************************************************!*\
  !*** ./src/app/backend-api/service-registry/api/xmlController.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XmlControllerService: () => (/* binding */ XmlControllerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 92726);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 46903);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 20422);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 23729);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1888);







class XmlControllerService {
  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = 'https://msr.maritimeconnectivity.net';
    this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
    this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }
  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  canConsumeForm(consumes) {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }
  createXml(body, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling createXml.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/api/xmls`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  deleteXml(id, observe = 'body', reportProgress = false) {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling deleteXml.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = [];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('delete', `${this.basePath}/api/xmls/${encodeURIComponent(String(id))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getAllXmls(page, size, sort, observe = 'body', reportProgress = false) {
    let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({
      encoder: new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpUrlEncodingCodec()
    });
    if (page !== undefined && page !== null) {
      queryParameters = queryParameters.set('page', page);
    }
    if (size !== undefined && size !== null) {
      queryParameters = queryParameters.set('size', size);
    }
    if (sort) {
      sort.forEach(element => {
        queryParameters = queryParameters.append('sort', element);
      });
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/api/xmls`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getG1128Schema(schema, observe = 'body', reportProgress = false) {
    if (schema === null || schema === undefined) {
      throw new Error('Required parameter schema was null or undefined when calling getG1128Schema.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/xml'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/api/xmls/schemas/${encodeURIComponent(String(schema))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getXml(id, observe = 'body', reportProgress = false) {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getXml.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/api/xmls/${encodeURIComponent(String(id))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  updateXml(body, id, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling updateXml.');
    }
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling updateXml.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', `${this.basePath}/api/xmls/${encodeURIComponent(String(id))}`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  validateXmlWithG1128Schema(body, schema, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling validateXmlWithG1128Schema.');
    }
    if (schema === null || schema === undefined) {
      throw new Error('Required parameter schema was null or undefined when calling validateXmlWithG1128Schema.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/xml'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/api/xmls/validate/${encodeURIComponent(String(schema))}`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  static #_ = this.ɵfac = function XmlControllerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || XmlControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: XmlControllerService,
    factory: XmlControllerService.ɵfac
  });
}

/***/ }),

/***/ 23729:
/*!***************************************************************!*\
  !*** ./src/app/backend-api/service-registry/configuration.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Configuration: () => (/* binding */ Configuration)
/* harmony export */ });
class Configuration {
  constructor(configurationParameters = {}) {
    this.apiKeys = configurationParameters.apiKeys;
    this.username = configurationParameters.username;
    this.password = configurationParameters.password;
    this.accessToken = configurationParameters.accessToken;
    this.basePath = configurationParameters.basePath;
    this.withCredentials = configurationParameters.withCredentials;
  }
  /**
   * Select the correct content-type to use for a request.
   * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
   * If no content type is found return the first found type if the contentTypes is not empty
   * @param contentTypes - the array of content types that are available for selection
   * @returns the selected content-type or <code>undefined</code> if no selection could be made.
   */
  selectHeaderContentType(contentTypes) {
    if (contentTypes.length == 0) {
      return undefined;
    }
    let type = contentTypes.find(x => this.isJsonMime(x));
    if (type === undefined) {
      return contentTypes[0];
    }
    return type;
  }
  /**
   * Select the correct accept content-type to use for a request.
   * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
   * If no content type is found return the first found type if the contentTypes is not empty
   * @param accepts - the array of content types that are available for selection.
   * @returns the selected content-type or <code>undefined</code> if no selection could be made.
   */
  selectHeaderAccept(accepts) {
    if (accepts.length == 0) {
      return undefined;
    }
    let type = accepts.find(x => this.isJsonMime(x));
    if (type === undefined) {
      return accepts[0];
    }
    return type;
  }
  /**
   * Check if the given MIME is a JSON MIME.
   * JSON MIME examples:
   *   application/json
   *   application/json; charset=UTF8
   *   APPLICATION/JSON
   *   application/vnd.company+json
   * @param mime - MIME (Multipurpose Internet Mail Extensions)
   * @return True if the given MIME is JSON, false otherwise.
   */
  isJsonMime(mime) {
    const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
    return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
  }
}

/***/ }),

/***/ 46903:
/*!*********************************************************!*\
  !*** ./src/app/backend-api/service-registry/encoder.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomHttpUrlEncodingCodec: () => (/* binding */ CustomHttpUrlEncodingCodec)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 92726);

/**
* CustomHttpUrlEncodingCodec
* Fix plus sign (+) not encoding, so sent as blank space
* See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
*/
class CustomHttpUrlEncodingCodec extends _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpUrlEncodingCodec {
  encodeKey(k) {
    k = super.encodeKey(k);
    return k.replace(/\+/gi, '%2B');
  }
  encodeValue(v) {
    v = super.encodeValue(v);
    return v.replace(/\+/gi, '%2B');
  }
}

/***/ }),

/***/ 90719:
/*!*******************************************************!*\
  !*** ./src/app/backend-api/service-registry/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APIS: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.APIS),
/* harmony export */   ApiModule: () => (/* reexport safe */ _api_module__WEBPACK_IMPORTED_MODULE_4__.ApiModule),
/* harmony export */   BASE_PATH: () => (/* reexport safe */ _variables__WEBPACK_IMPORTED_MODULE_2__.BASE_PATH),
/* harmony export */   COLLECTION_FORMATS: () => (/* reexport safe */ _variables__WEBPACK_IMPORTED_MODULE_2__.COLLECTION_FORMATS),
/* harmony export */   Configuration: () => (/* reexport safe */ _configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration),
/* harmony export */   DocControllerService: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.DocControllerService),
/* harmony export */   InstanceControllerService: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.InstanceControllerService),
/* harmony export */   InstanceDto: () => (/* reexport safe */ _model_models__WEBPACK_IMPORTED_MODULE_1__.InstanceDto),
/* harmony export */   LedgerRequestControllerService: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.LedgerRequestControllerService),
/* harmony export */   LedgerRequestDto: () => (/* reexport safe */ _model_models__WEBPACK_IMPORTED_MODULE_1__.LedgerRequestDto),
/* harmony export */   XmlControllerService: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.XmlControllerService)
/* harmony export */ });
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/api */ 2880);
/* harmony import */ var _model_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/models */ 54259);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables */ 20422);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuration */ 23729);
/* harmony import */ var _api_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.module */ 66561);






/***/ }),

/***/ 4783:
/*!******************************************************************!*\
  !*** ./src/app/backend-api/service-registry/model/coordinate.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Maritime Connectivity Platform Service Registry API
 * Maritime Connectivity Platform Service Registry, developed by the MCC MSR WG
 *
 * OpenAPI spec version: 0.0.8
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 99054:
/*!**************************************************************************!*\
  !*** ./src/app/backend-api/service-registry/model/coordinateSequence.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Maritime Connectivity Platform Service Registry API
 * Maritime Connectivity Platform Service Registry, developed by the MCC MSR WG
 *
 * OpenAPI spec version: 0.0.8
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 45050:
/*!*********************************************************************************!*\
  !*** ./src/app/backend-api/service-registry/model/coordinateSequenceFactory.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Maritime Connectivity Platform Service Registry API
 * Maritime Connectivity Platform Service Registry, developed by the MCC MSR WG
 *
 * OpenAPI spec version: 0.0.8
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 89770:
/*!**************************************************************!*\
  !*** ./src/app/backend-api/service-registry/model/docDto.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Maritime Connectivity Platform Service Registry API
 * Maritime Connectivity Platform Service Registry, developed by the MCC MSR WG
 *
 * OpenAPI spec version: 0.0.8
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 63629:
/*!****************************************************************!*\
  !*** ./src/app/backend-api/service-registry/model/envelope.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Maritime Connectivity Platform Service Registry API
 * Maritime Connectivity Platform Service Registry, developed by the MCC MSR WG
 *
 * OpenAPI spec version: 0.0.8
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 65841:
/*!****************************************************************!*\
  !*** ./src/app/backend-api/service-registry/model/geometry.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 26279:
/*!***********************************************************************!*\
  !*** ./src/app/backend-api/service-registry/model/geometryFactory.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 56461:
/*!*******************************************************************!*\
  !*** ./src/app/backend-api/service-registry/model/instanceDto.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstanceDto: () => (/* binding */ InstanceDto)
/* harmony export */ });
var InstanceDto;
(function (InstanceDto) {
  InstanceDto.StatusEnum = {
    PROVISIONAL: 'PROVISIONAL',
    RELEASED: 'RELEASED',
    DEPRECATED: 'DEPRECATED',
    DELETED: 'DELETED'
  };
  InstanceDto.DataProductTypeEnum = {
    OTHER: 'OTHER',
    S57: 'S57',
    S101: 'S101',
    S102: 'S102',
    S104: 'S104',
    S111: 'S111',
    S122: 'S122',
    S123: 'S123',
    S124: 'S124',
    S125: 'S125',
    S126: 'S126',
    S127: 'S127',
    S128: 'S128',
    S129: 'S129',
    S131: 'S131',
    S210: 'S210',
    S211: 'S211',
    S212: 'S212',
    S401: 'S401',
    S402: 'S402',
    S411: 'S411',
    S412: 'S412',
    S413: 'S413',
    S414: 'S414',
    S421: 'S421',
    RTZ: 'RTZ',
    EPC: 'EPC'
  };
  InstanceDto.LedgerRequestStatusEnum = {
    INACTIVE: 'INACTIVE',
    CREATED: 'CREATED',
    VETTING: 'VETTING',
    VETTED: 'VETTED',
    REQUESTING: 'REQUESTING',
    SUCCEEDED: 'SUCCEEDED',
    FAILED: 'FAILED',
    REJECTED: 'REJECTED'
  };
})(InstanceDto || (InstanceDto = {}));

/***/ }),

/***/ 91266:
/*!************************************************************************!*\
  !*** ./src/app/backend-api/service-registry/model/ledgerRequestDto.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LedgerRequestDto: () => (/* binding */ LedgerRequestDto)
/* harmony export */ });
/**
 * Maritime Connectivity Platform Service Registry API
 * Maritime Connectivity Platform Service Registry, developed by the MCC MSR WG
 *
 * OpenAPI spec version: 0.0.8
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var LedgerRequestDto;
(function (LedgerRequestDto) {
  LedgerRequestDto.StatusEnum = {
    INACTIVE: 'INACTIVE',
    CREATED: 'CREATED',
    VETTING: 'VETTING',
    VETTED: 'VETTED',
    REQUESTING: 'REQUESTING',
    SUCCEEDED: 'SUCCEEDED',
    FAILED: 'FAILED',
    REJECTED: 'REJECTED'
  };
})(LedgerRequestDto || (LedgerRequestDto = {}));

/***/ }),

/***/ 54259:
/*!**************************************************************!*\
  !*** ./src/app/backend-api/service-registry/model/models.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstanceDto: () => (/* reexport safe */ _instanceDto__WEBPACK_IMPORTED_MODULE_7__.InstanceDto),
/* harmony export */   LedgerRequestDto: () => (/* reexport safe */ _ledgerRequestDto__WEBPACK_IMPORTED_MODULE_8__.LedgerRequestDto)
/* harmony export */ });
/* harmony import */ var _coordinate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coordinate */ 4783);
/* harmony import */ var _coordinateSequence__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coordinateSequence */ 99054);
/* harmony import */ var _coordinateSequenceFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coordinateSequenceFactory */ 45050);
/* harmony import */ var _docDto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./docDto */ 89770);
/* harmony import */ var _envelope__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./envelope */ 63629);
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./geometry */ 65841);
/* harmony import */ var _geometryFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./geometryFactory */ 26279);
/* harmony import */ var _instanceDto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instanceDto */ 56461);
/* harmony import */ var _ledgerRequestDto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ledgerRequestDto */ 91266);
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./point */ 55023);
/* harmony import */ var _precisionModel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./precisionModel */ 6784);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./type */ 21433);
/* harmony import */ var _xmlDto__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./xmlDto */ 11947);














/***/ }),

/***/ 55023:
/*!*************************************************************!*\
  !*** ./src/app/backend-api/service-registry/model/point.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 6784:
/*!**********************************************************************!*\
  !*** ./src/app/backend-api/service-registry/model/precisionModel.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 21433:
/*!************************************************************!*\
  !*** ./src/app/backend-api/service-registry/model/type.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Maritime Connectivity Platform Service Registry API
 * Maritime Connectivity Platform Service Registry, developed by the MCC MSR WG
 *
 * OpenAPI spec version: 0.0.8
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 11947:
/*!**************************************************************!*\
  !*** ./src/app/backend-api/service-registry/model/xmlDto.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Maritime Connectivity Platform Service Registry API
 * Maritime Connectivity Platform Service Registry, developed by the MCC MSR WG
 *
 * OpenAPI spec version: 0.0.8
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 20422:
/*!***********************************************************!*\
  !*** ./src/app/backend-api/service-registry/variables.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BASE_PATH: () => (/* binding */ BASE_PATH),
/* harmony export */   COLLECTION_FORMATS: () => (/* binding */ COLLECTION_FORMATS)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1888);

const BASE_PATH = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('basePath');
const COLLECTION_FORMATS = {
  'csv': ',',
  'tsv': '   ',
  'ssv': ' ',
  'pipes': '|'
};

/***/ }),

/***/ 95166:
/*!************************************!*\
  !*** ./src/app/common/menuType.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntityType: () => (/* binding */ EntityType),
/* harmony export */   EntityTypes: () => (/* binding */ EntityTypes),
/* harmony export */   ItemType: () => (/* binding */ ItemType),
/* harmony export */   MIRItemType: () => (/* binding */ MIRItemType),
/* harmony export */   MenuTypeIconNames: () => (/* binding */ MenuTypeIconNames),
/* harmony export */   MenuTypeNames: () => (/* binding */ MenuTypeNames),
/* harmony export */   MrnAttributeInMSR: () => (/* binding */ MrnAttributeInMSR),
/* harmony export */   itemTypeToString: () => (/* binding */ itemTypeToString),
/* harmony export */   timestampKeys: () => (/* binding */ timestampKeys)
/* harmony export */ });
/*
 * Copyright (c) 2024 Maritime Connectivity Platform Consortium
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * enum for menu types being used for routing
 */
var ItemType;
(function (ItemType) {
  ItemType["None"] = "none";
  ItemType["Device"] = "device";
  ItemType["Organization"] = "organization";
  ItemType["Service"] = "service";
  ItemType["User"] = "user";
  ItemType["Vessel"] = "vessel";
  ItemType["MMS"] = "mms";
  ItemType["Role"] = "role";
  ItemType["Agent"] = "agent";
  ItemType["Instance"] = "instance";
  ItemType["Design"] = "design";
  ItemType["InstanceOfOrg"] = "instanceorg";
  ItemType["OrgCandidate"] = "orgcandidate";
  ItemType["LedgerInstance"] = "ledgerInstance";
  ItemType["Certificate"] = "certificate";
  ItemType["SearchObjectResult"] = "searchobjectresult";
})(ItemType || (ItemType = {}));
/**
 * scope of resource type in MIR
 */
const MIRItemType = [ItemType.Device, ItemType.Vessel, ItemType.User, ItemType.Service, ItemType.Role, ItemType.Agent];
const timestampKeys = ['start', 'end', 'revokedAt', 'createdAt', 'updatedAt'];
/**
 * enum of MCP entity types. Entity is a subset of resource.
 */
var EntityType;
(function (EntityType) {
  EntityType["Device"] = "device";
  EntityType["Organization"] = "organization";
  EntityType["Service"] = "service";
  EntityType["User"] = "user";
  EntityType["Vessel"] = "vessel";
  EntityType["MMS"] = "mms";
})(EntityType || (EntityType = {}));
var MrnAttributeInMSR;
(function (MrnAttributeInMSR) {
  MrnAttributeInMSR["Instance"] = "instanceId";
  MrnAttributeInMSR["Design"] = "implementsServiceDesign";
})(MrnAttributeInMSR || (MrnAttributeInMSR = {}));
/**
 * scope of MCP entity types
 */
const EntityTypes = [EntityType.Device, EntityType.Organization, EntityType.Service, EntityType.User, EntityType.Vessel, EntityType.MMS];
/**
 * readable names for MenuTypes
 */
const MenuTypeNames = {
  vessel: 'vessel',
  device: 'device',
  user: 'user',
  organization: 'organization',
  service: 'service',
  role: 'role',
  agent: 'agent',
  mms: 'mms',
  instance: 'service instance',
  instanceorg: 'service instance',
  orgcandidate: 'unapproved organization',
  orgsvc: 'owned service'
};
/**
 * icon names for each MenuType
 */
const MenuTypeIconNames = {
  vessel: 'ship',
  device: 'hdd',
  user: 'user',
  organization: 'flag',
  service: 'cog',
  role: 'id-badge',
  agent: 'user',
  mms: 'forward',
  instance: 'compass',
  instanceorg: 'compass',
  orgcandidate: 'clipboard'
};
const capitalize = s => s[0].toUpperCase() + s.slice(1);
const itemTypeToString = itemType => {
  if (itemType === ItemType.Instance || itemType === ItemType.SearchObjectResult) {
    return 'Service instance';
  } else if (itemType === ItemType.OrgCandidate) {
    return 'Organization candidate';
  }
  return capitalize(itemType.toString());
};

/***/ }),

/***/ 72741:
/*!***********************************!*\
  !*** ./src/app/common/version.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mpVersion: () => (/* binding */ mpVersion)
/* harmony export */ });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../package.json */ 8330);

const mpVersion = _package_json__WEBPACK_IMPORTED_MODULE_0__.version;

/***/ }),

/***/ 91083:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
/*
 * Copyright (c) 2024 Maritime Connectivity Platform Consortium
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const environment = {
  production: false,
  irBasePath: 'https://test-api.maritimeconnectivity.net',
  irProvider: 'MCP Consortium',
  irContact: 'info@maritimeconnectivity.net',
  oidcBasePath: 'https://test-maritimeid.maritimeconnectivity.net',
  hasServiceRegistry: true,
  srBasePath: 'https://msr-test.maritimeconnectivity.net',
  srProvider: 'MCP Consortium',
  srContact: 'info@maritimeconnectivity.net',
  hasMSRLedger: false,
  ledgerPath: 'https://test-ledger.maritimeconnectivity.net',
  mpProvider: 'MCP Consortium',
  mpContact: 'info@maritimeconnectivity.net',
  environmentTitle: 'MCC Testbed TEST',
  mpName: 'MCC MCP Testbed',
  termsOfUse: 'By applying for access to the MCP testbed, you agree not to store any personal information on the platform such as names and email addresses. Please use generic names, such as \'John Doe\' and generic email addresses such as \'info@company.com\'. It does need to be a working email address though, since access will be granted through this email address. Furthermore, if anyone chooses to federate an identity registry into the MCP testbed, this should only contain test data - not actual personal information. This is due to the European Union General Data Protection Regulation (GDPR). For more information, contact the MCC secretariat.',
  idpNamespace: 'mcc-test',
  environmentName: 'test',
  footerName: 'Maritime Connectivity Platform Consortium',
  footerLink: 'https://maritimeconnectivity.net',
  logoImg: 'assets/images/logo.svg',
  loginBgImg: ''
};

/***/ }),

/***/ 20998:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 29218);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 19256);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 71132:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 26037:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 8330:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"management-portal-clr","version":"0.6.2","license":"Apache license 2.0","repository":{"type":"git","url":"git+https://github.com/maritimeconnectivity/management-portal-clr.git"},"bugs":{"url":"https://github.com/maritimeconnectivity/management-portal-clr/issues"},"scripts":{"ng":"ng","start":"ng serve","build":"ng build","watch":"ng build --watch --configuration development","test":"ng test","lint":"ng lint"},"private":true,"dependencies":{"@angular/animations":"^18.2.3","@angular/common":"^18.2.3","@angular/compiler":"^18.2.3","@angular/core":"^18.2.3","@angular/forms":"^18.2.3","@angular/platform-browser":"^18.2.3","@angular/platform-browser-dynamic":"^18.2.3","@angular/router":"^18.2.3","@bluehalo/ngx-leaflet":"^18.0.2","@bluehalo/ngx-leaflet-draw":"^18.0.4","@cds/core":"^6.13.0","@clr/angular":"^17.3.0","@clr/ui":"^17.3.0","@ngx-translate/core":"^15.0.0","@ngx-translate/http-loader":"^8.0.0","@swimlane/ngx-charts":"^20.5.0","@terraformer/wkt":"^2.2.1","asn1js":"^3.0.5","d3-scale":"^4.0.2","d3-selection":"^3.0.0","d3-shape":"^3.2.0","file-saver":"^2.0.5","gramli-angular-notifier":"^16.0.2","jszip":"^3.10.1","keycloak-angular":"^16.0.1","keycloak-js":"^25.0.5","leaflet":"^1.9.4","leaflet-draw":"^1.0.2","lucene-query-string-builder":"^1.0.8","pkijs":"^3.2.4","pvtsutils":"^1.3.5","pvutils":"^1.1.3","rxjs":"~7.8.0","shortid":"^2.2.16","tslib":"^2.3.0","wkt":"link:@types/@terraformer/wkt","zone.js":"^0.14.10"},"devDependencies":{"@angular-devkit/build-angular":"^18.2.3","@angular/cli":"^18.2.3","@types/d3-scale":"^4.0.8","@types/d3-selection":"^3.0.11","@types/d3-shape":"^3.1.6","@types/file-saver":"^2.0.7","@types/geojson":"^7946.0.14","@types/jasmine":"~4.3.0","@types/leaflet":"^1.9.14","@types/leaflet-draw":"^1.0.11","@types/lucene-query-string-builder":"^1.0.0","@types/terraformer__wkt":"^2.0.3","angular-cli-ghpages":"2.0.3","angular-eslint":"18.3.1","eslint":"^9.9.1","jasmine-core":"~4.5.0","karma":"~6.4.0","karma-chrome-launcher":"~3.1.0","karma-coverage":"~2.2.0","karma-jasmine":"~5.1.0","karma-jasmine-html-reporter":"~2.0.0","typescript":"~5.5","typescript-eslint":"8.2.0"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(20998)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map