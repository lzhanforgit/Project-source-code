webpackJsonp([15],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {HttpClient,HttpHeaders,HttpParams,HttpRequest} from '@angular/common/http';


var PositionsService = (function () {
    // url:string='http://10.40.4.3:3000/positions';
    function PositionsService(http) {
        this.http = http;
        // url:string='http://47.94.165.179:3000/positions';
        this.url = 'http://106.14.213.216:8080/positions';
    }
    PositionsService.prototype.getAllPositions = function () {
        return this.http.get(this.url).toPromise().then(function (data) { return data; });
    };
    PositionsService.prototype.getPositionById = function (id) {
        return this.getAllPositions().then(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var item = data_1[_i];
                if (item.id === id) {
                    return item;
                }
            }
        });
    };
    PositionsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || 'error');
    };
    return PositionsService;
}());
PositionsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], PositionsService);

//# sourceMappingURL=positions.service.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_users_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, alertCtrl, toastCtrl, viewCtrl, appCtrl, storage, userSer, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.appCtrl = appCtrl;
        this.storage = storage;
        this.userSer = userSer;
        this.formBuilder = formBuilder;
        this.iTime = 59;
        this.flag = false;
        this.code_mes = '获取验证码';
        this.code_res = '';
        this.registerForm = formBuilder.group({
            userId: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(11), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(11), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])],
            userPassword: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(6)])],
            code: ['']
        });
        this.username = this.registerForm.controls['userId'];
        this.password = this.registerForm.controls['userPassword'];
        this.code = this.registerForm.controls['code'];
    }
    RegisterPage.prototype.regist = function (user) {
        var _this = this;
        if (this.num != user.code) {
            var toast = this.toastCtrl.create({
                message: '验证码错误',
                duration: 3000
            });
            toast.present();
        }
        else {
            //const that = this;
            this.userSer.register(user).then(function (result) {
                if (result.stageCode == '2') {
                    var toast = _this.toastCtrl.create({
                        message: '发生错误了',
                        duration: 3000
                    });
                    toast.present();
                }
                else if (result.stageCode == '1') {
                    /* sessionStorage.setItem('ID', result.Id);
                     sessionStorage.setItem('UserIcon', that.glo.user_icon);
                     sessionStorage.setItem('token', result.token);
                     that.localstorage.set('token', result.token);
                     that.router.navigate(['/index']);
                     that.reg_res = '';*/
                    _this.storage.ready().then(function () {
                        _this.storage.set('isLogin', true);
                        _this.storage.set('userId', result.Id);
                        _this.storage.set('UserIcon', 'http://owkq4s9d1.bkt.clouddn.com/1506739929302.jpeg');
                        _this.storage.set('token', result.token);
                        clearInterval(_this.timer);
                    });
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: '数据库错误！',
                        duration: 3000
                    });
                    toast.present();
                }
            });
        }
    };
    RegisterPage.prototype.getCode = function (user) {
        var _this = this;
        console.log(user);
        this.userSer.getCodeByphone(user).then(function (result) {
            //console.log(result+"111111dad");
            if (result.stageCode == '1') {
                _this.code_res = ' 该手机号已经注册过 ';
                console.log(_this.code_res);
            }
            else if (result.stageCode == 'e004') {
                _this.code_res = '数据库错误！';
                // console.log(this.code_res);
            }
            else {
                if (result) {
                    _this.flag = true;
                    //  console.log(result);
                    _this.num = result.stageCode;
                    _this.code_res = '';
                    console.log(_this.num);
                    _this.RemainTime();
                }
            }
        });
    };
    RegisterPage.prototype.RemainTime = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.code_mes = _this.iTime + '秒后重新获取';
            _this.iTime--;
            console.log(_this.flag);
            if (_this.iTime < 0) {
                clearInterval(_this.timer);
                _this.flag = false;
                _this.code_mes = '获取验证码';
            }
        }, 1000);
    };
    RegisterPage.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    RegisterPage.prototype.toLogin = function () {
        this.viewCtrl.dismiss();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-2 class="login-title">\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back" (click)="back()"></ion-icon>\n      </ion-col>\n      <ion-col col-10 class="login-title">\n        注册\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12><h2 style="text-align: center">欢迎注册味蕾</h2></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <form  [formGroup]="registerForm"  (ngSubmit)="regist(registerForm.value)" novalidate>\n          <ion-item [class.error]="!username.valid && username.touched">\n            <ion-input type="tel" placeholder="请输入手机号"  [formControl]="username" clearInput=true></ion-input>\n          </ion-item>\n          <ion-label *ngIf="username.hasError(\'required\') && username.touched" class="error-message">* 请输入用户名</ion-label>\n          <ion-label *ngIf="(username.hasError(\'minlength\')||username.hasError(\'maxlength\')||username.hasError(\'pattern\')) && username.touched" class="error-message">* 请输入正确的电话号码</ion-label>\n          <ion-item>\n            <ion-input type="password" placeholder="请输入密码"  [formControl]="password" clearInput=true></ion-input>\n          </ion-item>\n          <ion-label *ngIf="password.hasError(\'required\') && password.touched" class="error-message">* 请输入密码</ion-label>\n          <ion-label *ngIf="(password.hasError(\'minlength\')) && password.touched" class="error-message">* 密码长度最少为六位</ion-label>\n\n          <ion-item>\n            <ion-input type="text" placeholder="请输入验证码"  [formControl]="code" clearInput=true></ion-input>\n          </ion-item>\n          <ion-label *ngIf="code.hasError(\'required\') && code.touched" class="error-message">* 请输入验证码</ion-label>\n          <ion-label  class="error-message">{{code_res}}</ion-label>\n          <button ion-button color="secondary" type="button" clear [disabled]="!username.valid || flag" (click)="getCode(registerForm.value)" >{{code_mes}}</button>\n          <button ion-button block color="secondary" type="submit" [disabled]="!registerForm.valid">注册</button>\n        </form>\n\n      </ion-col>\n      <!--end form-->\n    </ion-row>\n\n\n  </ion-grid>\n\n  <ion-footer >\n    <ion-toolbar style="background-color: white !important;">\n      <p style="text-align: center;">\n        已有账号 ？ 去<span (click)="toLogin()" style="color:red">登录</span>\n      </p>\n\n    </ion-toolbar>\n  </ion-footer>\n\n</ion-content>\n'/*ion-inline-end:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\register\register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__providers_users_service__["a" /* UsersService */],
        __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddToMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_users_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_recipe_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_menu_create_menu__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AddToMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddToMenuPage = (function () {
    function AddToMenuPage(navCtrl, navParams, storage, userSer, recipeSer, toastCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.userSer = userSer;
        this.recipeSer = recipeSer;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
    }
    AddToMenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddToMenuPage');
    };
    AddToMenuPage.prototype.close = function () {
        this.navCtrl.pop();
    };
    AddToMenuPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('userId').then(function (val) {
                if (val) {
                    _this.userSer.getMenuGather(val).then(function (data) {
                        // if(data.length) {
                        _this.menus2 = data;
                    });
                }
            });
        });
    };
    AddToMenuPage.prototype.add = function (menuId) {
        var _this = this;
        var val = this.navParams.get('recipeId');
        this.recipeSer.addMenu(val, menuId).then(function (data) {
            if (data.stageCode == '1') {
                _this.flag = false;
                var toast = _this.toastCtrl.create({
                    message: '加入菜单成功',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.onDidDismiss(function () {
                });
                toast.present();
            }
            else {
                _this.flag = false;
                var toast = _this.toastCtrl.create({
                    message: '加入菜单失败',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.onDidDismiss(function () {
                });
                toast.present();
            }
        });
    };
    AddToMenuPage.prototype.del = function (menuId) {
        var _this = this;
        var val = this.navParams.get('recipeId');
        this.recipeSer.delRfromL(val, menuId).then(function (data) {
            if (data.stageCode == '1') {
                _this.recipeSer.getMenuDetails(val).then(function (data) {
                    if (data.length) {
                        _this._name = data[0].name;
                        _this._collect_times = data[0].collect_times;
                        _this._descripe = data[0].descripe;
                        _this._creater = data[0].creater;
                        _this.details = data.length;
                        _this._creater_time = data[0].creater_time.substring(0, 10);
                        _this._creater_id = data[0].creater_id;
                        _this._usericon = data[0].user_icon;
                        _this._recipe = data;
                    }
                });
                // console.log('删除成功');
                _this.flag = true;
                var toast = _this.toastCtrl.create({
                    message: '删除成功',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.onDidDismiss(function () {
                });
                toast.present();
            }
            else {
                _this.flag = true;
                var toast = _this.toastCtrl.create({
                    message: '删除失败',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.onDidDismiss(function () {
                });
                toast.present();
            }
        });
    };
    AddToMenuPage.prototype.createMenu = function () {
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__create_menu_create_menu__["a" /* CreateMenuPage */]);
        modelPage.present();
    };
    return AddToMenuPage;
}());
AddToMenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-to-menu',template:/*ion-inline-start:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\add-to-menu\add-to-menu.html"*/'<!--\n  Generated template for the AddToMenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4 (click)="close()" style="color: #dd3915">关闭</ion-col>\n        <ion-col col-4 style="text-align: center">加入到菜单</ion-col>\n        <ion-col col-4 style="text-align: right">\n          <ion-icon name="add" (click)="createMenu()"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item *ngFor="let item2 of menus2">\n      <ion-thumbnail item-start>\n        <img src="{{item2.cover_pic}}">\n      </ion-thumbnail>\n      <h2>{{item2.name}}</h2>\n      <img *ngIf="flag" item-end src="assets/icon/add.png" height="32" width="32" (click)="add(item2.id)"/>\n      <img *ngIf="!flag" item-end src="assets/icon/added.png" height="32" width="32" (click)="del(item2.id)"/>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\add-to-menu\add-to-menu.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_users_service__["a" /* UsersService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_recipe_service__["a" /* RecipeService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], AddToMenuPage);

//# sourceMappingURL=add-to-menu.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifyInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_users_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__me_me__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ModifyInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModifyInfoPage = (function () {
    /*  cityData= [];//城市数据
     cityName:string = '广东省-广州市'; //初始化城市名*/
    function ModifyInfoPage(navCtrl, navParams, formBuilder, userSer, storage, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.userSer = userSer;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.gender = 'm';
    }
    ModifyInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModifyInfoPage');
    };
    //城市选择器被改变时触发的事件
    ModifyInfoPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('userId').then(function (val) {
                // console.log(user_id);
                _this.myid = val;
                _this.userSer.getMyInfo(val).then(function (data) {
                    console.log(data);
                    if (data) {
                        _this.headpic = data[0].user_icon;
                    }
                    console.log(_this.headpic);
                    _this.myname = data[0].name;
                    // this.mySex = data[0].name;
                    _this.mysignature = data[0].signature;
                });
            });
        });
    };
    ModifyInfoPage.prototype.change = function (e) {
        var file = e.target.files[0];
        // console.log(file);
        var path = file.type;
        var Path = path.substr(path.lastIndexOf('/')).toUpperCase();
        // console.log(Path);
        if (Path == '/JPG' || Path == '/PNG' || Path == '/JPEG') {
            this.preview(file);
            this.warn = '';
        }
        else {
            this.warn = '你上传的不是图片~';
            // alert('你上传的不是图片');
        }
    };
    ModifyInfoPage.prototype.preview = function (file) {
        var img = new Image();
        img.src = URL.createObjectURL(file);
        var url = img.src;
        // const $img = document.getElementsByTagName(img);
        document.getElementById('preview').getElementsByTagName('img')[0].remove();
        img.onload = function () {
            URL.revokeObjectURL(url);
            // img.setAttribute('class','fitcss');
            document.getElementById('preview').appendChild(img);
        };
    };
    ModifyInfoPage.prototype.UpdateInfo = function (e) {
        var _this = this;
        console.log(e.target.parentElement);
        this.Formdata = new FormData(e.target.parentElement);
        console.log(this.Formdata);
        this.userSer.updateInfo(this.Formdata).then(function (result) {
            console.log(result);
            if (result.stageCode == 1) {
                var toast = _this.toastCtrl.create({
                    message: '保存成功',
                    duration: 3000
                });
                toast.present();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__me_me__["a" /* MePage */]);
            }
        });
    };
    ModifyInfoPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    return ModifyInfoPage;
}());
ModifyInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modify-info',template:/*ion-inline-start:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\modify-info\modify-info.html"*/'<!--\n  Generated template for the ModifyInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-3>\n        <ion-icon name="arrow-back" (click)="back()" style="font-size: 25px !important; color: grey;"></ion-icon>\n      </ion-col>\n      <ion-col col-6 style="text-align: center">\n        <ion-note style="color: grey;font-size: 18px;">设置个人信息</ion-note>\n      </ion-col>\n      <ion-col col-3 style="text-align: right">\n        <!--<ion-note style="color: #DD3915;font-size: 15px">保存</ion-note>-->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n<ion-content padding>\n  <form  #UpdateForm="ngForm" novalidate>\n    <input type="hidden" name="Id" [(ngModel)]="myid">\n    <div class="preview" id="preview">\n      <img src="{{headpic}}" alt="">\n      <input type="file" (change)="change($event)" name="user_icon" class="headpic-input">\n    </div>\n    <ion-item>\n      <ion-col col-2>\n        <span style="color: #333333">昵称</span>\n      </ion-col>\n      <ion-col col-10>\n        <input type="text" [(ngModel)]="myname" name="nickname" style="width: 250px;border: transparent" maxlength="15" placeholder="请输入你的昵称"  >\n      </ion-col>\n    </ion-item>\n<!--    <ion-item>\n      <ion-checkbox color="dark" checked="true"></ion-checkbox>\n      <ion-label>男</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-checkbox color="danger"></ion-checkbox>\n      <ion-label>女</ion-label>\n    </ion-item>-->\n    <ion-item>\n      <ion-col col-2>\n        <span style="color: #333333">性别</span>\n      </ion-col>\n      <ion-col col-10>\n          <input type="radio" name="sex" value="男">男\n          <input type="radio" name="sex" value="女">女\n          <input type="radio" name="sex" value="其他">其他\n      </ion-col>\n    </ion-item>\n    <ion-item>\n      <ion-col col-2>\n        <span style="color: #333333">城市</span>\n      </ion-col>\n      <ion-col col-10>\n        <input type="hidden" [value]="\'118\'" name="now_city">\n        <input type="text"  style="width: 250px;border: transparent" maxlength="20"  placeholder="请输入你所居住的城市">\n      </ion-col>\n    </ion-item>\n    <ion-item>\n      <ion-col col-2>\n        <span style="color: #333333">家乡</span>\n      </ion-col>\n      <ion-col col-10>\n        <input type="hidden" [value]="\'99\'" name="home_city">\n        <input type="text"  style="width: 250px;border: transparent" maxlength="20"  placeholder="请输入你的家乡">\n      </ion-col>\n    </ion-item>\n    <ion-item>\n      <ion-col col-2>\n        <span style="color: #333333">职业</span>\n      </ion-col>\n      <ion-col col-10>\n        <!--<input type="text"  name="profession" style="width: 250px;border: transparent" maxlength="20"  placeholder="请输入你的职业">-->\n        <input type="text" name="profession"  style="width: 250px;border: transparent" maxlength="20"  placeholder="请输入你的职业">\n      </ion-col>\n    </ion-item>\n    <ion-item>\n      <ion-col col-2>\n        <span style="color: #333333">简介</span>\n      </ion-col>\n      <ion-col col-10>\n        <input type="text" [(ngModel)]="mysignature" name="introduce" style="width: 250px;border: transparent" maxlength="20"  placeholder="请输入你的昵称"  >\n      </ion-col>\n    </ion-item>\n    <input  class="button" type="button" block color="danger" (click)="UpdateInfo($event)"  value="保存">\n  </form>\n</ion-content>\n'/*ion-inline-end:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\modify-info\modify-info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3__providers_users_service__["a" /* UsersService */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], ModifyInfoPage);

//# sourceMappingURL=modify-info.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadWorkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_recipe_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__me_me__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the UploadWorkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UploadWorkPage = (function () {
    function UploadWorkPage(navCtrl, navParams, recipeSer, toastCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.recipeSer = recipeSer;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
    }
    UploadWorkPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var val = this.navParams.get('recipeId');
        this.recipe_id = val;
        this.storage.ready().then(function () {
            _this.storage.get('userId').then(function (val) {
                console.log(val);
                _this.creater_id = val;
            });
        });
    };
    UploadWorkPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var val = this.navParams.get('recipeId'); //菜谱id
        if (val) {
            this.recipeSer.getDetails(val).then(function (data) {
                // console.log(data);
                _this.details = data;
                _this.recipe_name = data[0].name;
            });
        }
    };
    UploadWorkPage.prototype.close = function () {
        this.navCtrl.pop();
    };
    UploadWorkPage.prototype.change = function (e) {
        var file = e.target.files[0];
        var path = file.type;
        var Path = path.substr(path.lastIndexOf('/')).toUpperCase();
        if (Path == '/JPG' || Path == '/PNG' || Path == '/JPEG') {
            this.preview(file);
        }
        else {
            var toast = this.toastCtrl.create({
                message: '你上传的不是图片',
                duration: 3000
            });
            toast.present();
        }
    };
    UploadWorkPage.prototype.preview = function (file) {
        var img = new Image();
        img.src = URL.createObjectURL(file);
        var url = img.src;
        img.onload = function () {
            URL.revokeObjectURL(url);
            img.setAttribute('class', 'fitcss');
            document.getElementById('intro').innerHTML = '';
            document.getElementById('menu_cover').appendChild(img);
        };
    };
    UploadWorkPage.prototype.UpdateInfo = function (e) {
        var _this = this;
        var that = this;
        that.Formdata = new FormData(e.target.parentElement.parentElement);
        that.recipeSer.addPersonalWorks(that.Formdata).then(function (result) {
            console.log(result);
            if (result) {
                if (result.list_id) {
                    var toast = _this.toastCtrl.create({
                        message: '创建成功',
                        duration: 3000
                    });
                    toast.present();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__me_me__["a" /* MePage */]);
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: '创建失败',
                        duration: 3000
                    });
                    toast.present();
                }
            }
        });
    };
    return UploadWorkPage;
}());
UploadWorkPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-upload-work',template:/*ion-inline-start:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\upload-work\upload-work.html"*/'<!--\n  Generated template for the UploadWorkPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4 (click)="close()" style="color: #dd3915">取消</ion-col>\n        <ion-col col-4 style="text-align: center">上传作品</ion-col>\n        <ion-col col-4 style="text-align: right;color: #dd3915">\n          <span>发布</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <form id="info_form" #UpdateForm="ngForm">\n    <input type="hidden" name="recipe_name" value="{{recipe_name}}">\n    <input type="hidden" name="recipe_id" value="{{recipe_id}}">\n    <input type="hidden" name="creater_id" value="{{creater_id}}">\n    <div id="menu_cover"></div>\n    <input type="file" (change)="change($event)"  class="file" name="cover_pic">\n    <div class="intro">\n      <p id="intro">+作品</p>\n    </div>\n\n    <textarea class="describe" placeholder="心得体会" name="description"></textarea>\n\n    <button ion-button block color="danger" style="margin-top: 30px" type="button" (click)="UpdateInfo($event)">发布</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\upload-work\upload-work.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_recipe_service__["a" /* RecipeService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], UploadWorkPage);

//# sourceMappingURL=upload-work.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_result_search_result__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_property_service__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = (function () {
    function SearchPage(navCtrl, navParams, viewCtrl, glo, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.glo = glo;
        this.modalCtrl = modalCtrl;
        this.searchItem = ['猪蹄', '蛋糕', '早餐', '可乐鸡翅', '蛋挞', '家常菜', '糖醋排骨', '面包', '豆腐', '南瓜饼'];
    }
    SearchPage.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    SearchPage.prototype.search = function (s) {
        this.glo._searchText = s;
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__search_result_search_result__["a" /* SearchResultPage */]);
        modelPage.present();
    };
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\search\search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding class="main">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-2 class="back"><ion-icon ios="ios-arrow-back" md="md-arrow-back" (click)="back()"></ion-icon></ion-col>\n      <ion-col col-8>\n        <input [(ngModel)]="searchText" class="searchInput" type="text" placeholder="搜索菜谱，厨友....">\n        <button class="btn"><ion-icon name="search"></ion-icon></button>\n      </ion-col>\n      <ion-col col-2>\n        <button class="searchBtn" ion-button color="danger" clear (click)="search(searchText)">搜索</button>\n      </ion-col>\n    </ion-row>\n    <ion-row >\n      <ion-col col-12>\n        <span class="popularSearch">流行搜索</span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <ul class="list">\n          <li class="item" *ngFor="let item of searchItem" (click)="search(item)">{{item}}</li>\n        </ul>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\search\search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_global_property_service__["a" /* GlobalPropertyService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateRecipeDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_menu_service_service__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CreateRecipeDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateRecipeDetailPage = (function () {
    function CreateRecipeDetailPage(navCtrl, navParams, menuD, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuD = menuD;
        this.viewCtrl = viewCtrl;
    }
    CreateRecipeDetailPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad CreateRecipeDetailPage');
    };
    CreateRecipeDetailPage.prototype.cancle = function () {
        this.viewCtrl.dismiss();
        //this.navCtrl.push(HomePage);
    };
    CreateRecipeDetailPage.prototype.add = function () {
        /*    var row = document.createElement('ion-row');
            row.className='material';
            row.innerHTML='<ion-col col-6><ion-input style="font-size: 1.2em;width: 100%" placeholder="食材：如鸡蛋" clearInput></ion-input></ion-col>'+
              '<ion-col col-6 style="text-align: center"><ion-input style="font-size: 1.2em;width: 100%" placeholder="用量：如1只" clearInput></ion-input></ion-col>';*/
        var my_tr = document.querySelector('#my_tr').cloneNode(true);
        console.log(my_tr);
        var img = my_tr.querySelector('img');
        img.addEventListener('click', function ($event) {
            // $event.target.parentElement.parentElement.remove();
        });
        var inputs = my_tr.querySelectorAll('input');
        for (var i = 0; i < inputs.length; i++) {
            console.log(inputs[i]);
            inputs[i].value = '';
            // my_tr.appendChild(inputs[i]);
        }
        document.getElementById('mytable').firstElementChild.appendChild(my_tr);
    };
    CreateRecipeDetailPage.prototype.del = function (e) {
        console.log(e.target);
        e.target.parentElement.parentElement.remove();
    };
    CreateRecipeDetailPage.prototype.addstep = function () {
        var step = document.getElementById('my_li').cloneNode(true);
        var img = step.querySelector('img');
        img.addEventListener('click', function ($event) {
            // $event.target.parentElement.parentElement.remove();
        });
        var textArea = step.querySelector('textarea');
        textArea.value = '';
        document.getElementById('step').appendChild(step);
    };
    CreateRecipeDetailPage.prototype.UploadMenu = function (e) {
        var that = this;
        var steps = document.getElementsByClassName('recipe_step');
        var materials = document.getElementsByClassName('material');
        var material_amounts = document.getElementsByClassName('material_amount');
        /*  $('.recipe_step').each(function (n) {
            that.StepStr += $(this).val() + 'weilei.com';
          });
          $('.material').each(function (n) {
            that.MaterialStr += $(this).val() + 'weilei.com';
          });
          $('.material_amount').each(function (n) {
            that.material_amountStr += $(this).val() + 'weilei.com';
          });*/
        // console.log(that.StepStr);
        // console.log(that.MaterialStr);
        // console.log(that.material_amountStr);
        /*setTimeout(function () {that.Formdata = new FormData(e.target.parentElement.parentElement);
          that.menuD.uploadMenu(that.Formdata,function (result) {
            // console.log(result);
            that.StepStr = '';
            that.MaterialStr = '';
            that.material_amountStr = '';
            // location.reload();
            //that.router.navigate(['/menu-details/' + result.recipe_id]);
          });}, 1000);*/
    };
    return CreateRecipeDetailPage;
}());
CreateRecipeDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-recipe-detail',template:/*ion-inline-start:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\create-recipe-detail\create-recipe-detail.html"*/'<!--\n  Generated template for the CreateRecipeDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-2>\n        <span style="color: #dd3915" (click)="cancle()">取消</span>\n      </ion-col>\n      <ion-col col-8 style="text-align: center">\n        <span>创建菜谱</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-header>\n\n\n<ion-content>\n  <form>\n    <!--<ion-input type="file"></ion-input>-->\n\n    <div class="recipe_name">\n      <input id="recipe_name" name="recipe_name"  type="text" placeholder="添加菜谱名称">\n    </div>\n    <div class="recipe_cover"></div>\n    <input name="recipe_cover1" type="file" (change)="change($event)"  class="file" >\n    <div class="intro">\n      <p>+菜谱封面</p>\n      <p>最佳尺寸：1280*1024</p>\n    </div>\n\n    <textarea name="recipe_description" required class="description-txt" cols="10" rows="10" placeholder="点击添加菜谱描述"></textarea>\n\n\n    <p style="font-size: 1.3em;margin-left: 10px">用料</p>\n    <ion-grid>\n      <table cellspacing="0" id="mytable">\n        <tr id="my_tr">\n          <td class="first"><input class="material"  name="material" type="text" placeholder="食材：如鸡蛋"></td>\n          <td class="second"><input class="material_amount" type="text" placeholder="用量：如1只"></td>\n          <td class="third"><img class="del" src="../../assets/img/close.png" height="11" width="11"/></td>\n        </tr>\n        <tr>\n          <td class="first"><input class="material" name="material" type="text" placeholder="食材：如鸡蛋"></td>\n          <td class="second"><input class="material_amount" type="text" placeholder="用量：如1只"></td>\n          <td class="third"><img class="del" (click)="del($event)" src="../../assets/img/close.png" height="11" width="11"/></td>\n        </tr>\n      </table>\n\n\n      <ion-row>\n        <ion-col col-6>\n          <span style="font-size: 1.1em;color: #dd3915" (click)="add()">再增加一行</span>\n        </ion-col>\n        <!--<ion-col col-6 style="text-align: right">-->\n          <!--<span style="font-size: 1.1em;color: #dd3915">调整用料</span>-->\n        <!--</ion-col>-->\n      </ion-row>\n    </ion-grid>\n\n\n    <h2>做法</h2>\n    <div class="steps_container">\n      <ol id="step">\n\n        <li class="steps_container_li" id="my_li">\n          <div class="add_step">\n            <textarea class="recipe_step" name="recipe_step" required="required"cols="30" rows="10" placeholder="点击添加菜谱步骤"></textarea>\n          </div>\n          <div class="del_line">\n            <img src="../../assets/img/close.png"   height="11" width="11"/>\n          </div>\n        </li>\n\n        <li class="steps_container_li">\n          <div class="add_step">\n            <textarea class="recipe_step" name="recipe_step" required="required" cols="30" rows="10" placeholder="点击添加菜谱步骤"></textarea>\n          </div>\n          <div class="del_line">\n            <img src="../../assets/img/close.png" (click)="del($event)" height="11" width="11"/>\n          </div>\n        </li>\n\n\n      </ol>\n      <div class="add">\n        <input type="button" value="追加菜谱步骤" (click)="addstep()">\n      </div>\n    </div>\n\n    <div class="tips_container">\n      <div class="tips_container_title">小贴士</div>\n      <div class="description">\n        <textarea class="description_txt" name="tips" cols="10" rows="10" placeholder="点击添加小贴士"></textarea>\n      </div>\n    </div>\n\n    <div class="upload">\n      <input class="uploadbtn" type="button"  (click)="UploadMenu($event)" value="发布菜谱">\n    </div>\n  </form>\n  <!--<ion-file>+菜谱封面</ion-file>-->\n</ion-content>\n'/*ion-inline-end:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\create-recipe-detail\create-recipe-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_menu_service_service__["a" /* MenuServiceService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
], CreateRecipeDetailPage);

//# sourceMappingURL=create-recipe-detail.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifyPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_users_service__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ModifyPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModifyPasswordPage = (function () {
    function ModifyPasswordPage(navCtrl, navParams, 
        // private storage:Storage,
        userSer, formBuilder, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userSer = userSer;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.iTime = 59;
        this.flag = false;
        this.code_mes = '获取验证码';
        this.code_res = '';
        this.modifywordForm = formBuilder.group({
            userId: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(11), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(11), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])],
            userPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)])],
            code: ['']
        });
        this.username = this.modifywordForm.controls['userId'];
        this.password = this.modifywordForm.controls['userPassword'];
        this.code = this.modifywordForm.controls['code'];
    }
    ModifyPasswordPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad ModifyPasswordPage');
    };
    ModifyPasswordPage.prototype.ionViewWillEnter = function () {
    };
    ModifyPasswordPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ModifyPasswordPage.prototype.getreCode = function (user) {
        var _this = this;
        // console.log(user);
        this.userSer.getReCodeByphone(user).then(function (result) {
            // console.log(result+"111111dad");
            if (result.stageCode == '1') {
                _this.code_res = ' 该手机号还没有注册过 ';
                // console.log(this.code_res);
            }
            else if (result.stageCode == 'e004') {
                _this.code_res = '数据库错误！';
                // console.log(this.code_res);
            }
            else {
                if (result) {
                    // this.flag = true;
                    //  console.log(result);
                    _this.num = result.stageCode;
                    _this.code_res = '';
                    // console.log(this.num);
                    _this.RemainTime();
                }
            }
        });
    };
    ModifyPasswordPage.prototype.RemainTime = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.code_mes = _this.iTime + '秒后重新获取';
            _this.iTime--;
            // console.log(this.flag);
            if (_this.iTime < 0) {
                clearInterval(_this.timer);
                _this.flag = false;
                _this.code_mes = '获取验证码';
            }
        }, 1000);
    };
    ModifyPasswordPage.prototype.modifyword = function (user) {
        var _this = this;
        if (this.num != user.code) {
            var toast = this.toastCtrl.create({
                message: '验证码错误',
                duration: 3000
            });
            toast.present();
        }
        else {
            //const that = this;
            this.userSer.retrieve(user).then(function (result) {
                if (result.stageCode == '2') {
                    var toast = _this.toastCtrl.create({
                        message: '发生错误了',
                        duration: 3000
                    });
                    toast.present();
                }
                else if (result.stageCode == '1') {
                    //修改密码成功
                    var toast = _this.toastCtrl.create({
                        message: '修改密码成功！',
                        duration: 3000
                    });
                    toast.present();
                    clearInterval(_this.timer);
                    /*          this.storage.ready().then(()=>{
                                this.storage.set('isLogin',true);
                                this.storage.set('userId',result.Id);
                                this.storage.set('UserIcon','http://owkq4s9d1.bkt.clouddn.com/1506739929302.jpeg');
                                this.storage.set('token',result.token);
                              });*/
                    // this.navCtrl.push(TabsPage);
                    // this.navCtrl.pop();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: '数据库错误！',
                        duration: 3000
                    });
                    toast.present();
                }
            });
        }
    };
    return ModifyPasswordPage;
}());
ModifyPasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modify-password',template:/*ion-inline-start:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\modify-password\modify-password.html"*/'<!--\n  Generated template for the ModifyPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-3>\n        <ion-icon name="arrow-back" (click)="back()" style="font-size: 25px !important; color: grey;"></ion-icon>\n      </ion-col>\n      <ion-col col-6 style="text-align: center">\n        <ion-note style="color: grey;font-size: 18px;">修改密码</ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n<!--    <ion-row>\n      <ion-col col-2 class="login-title">\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back" (click)="back()"></ion-icon>\n      </ion-col>\n      <ion-col col-10 class="login-title">\n\n      </ion-col>\n    </ion-row>-->\n    <!--<ion-row>-->\n      <!--<ion-col col-12><h2 style="text-align: center">欢迎注册味蕾</h2></ion-col>-->\n    <!--</ion-row>-->\n    <ion-row>\n      <ion-col col-12>\n        <form  [formGroup]="modifywordForm"  (ngSubmit)="modifyword(modifywordForm.value)" novalidate>\n          <ion-item [class.error]="!username.valid && username.touched">\n            <ion-input type="tel" placeholder="请输入手机号"  [formControl]="username" clearInput=true></ion-input>\n          </ion-item>\n          <ion-label *ngIf="username.hasError(\'required\') && username.touched" class="error-message">* 请输入手机号码</ion-label>\n          <ion-label *ngIf="(username.hasError(\'minlength\')||username.hasError(\'maxlength\')||username.hasError(\'pattern\')) && username.touched" class="error-message">* 请输入正确的电话号码</ion-label>\n          <ion-item>\n            <ion-input type="password" placeholder="请设置新密码"  [formControl]="password" clearInput=true></ion-input>\n          </ion-item>\n          <ion-label *ngIf="password.hasError(\'required\') && password.touched" class="error-message">* 请输入密码</ion-label>\n          <ion-label *ngIf="(password.hasError(\'minlength\')) && password.touched" class="error-message">* 密码长度最少为六位</ion-label>\n\n          <ion-item>\n            <ion-input type="text" placeholder="请输入验证码"  [formControl]="code" clearInput=true></ion-input>\n          </ion-item>\n          <ion-label *ngIf="code.hasError(\'required\') && code.touched" class="error-message">* 请输入验证码</ion-label>\n          <ion-label  class="error-message">{{code_res}}</ion-label>\n          <button ion-button color="secondary" type="button" clear [disabled]="!username.valid || flag" (click)="getreCode(modifywordForm.value)" >{{code_mes}}</button>\n          <button ion-button block color="secondary" type="submit" [disabled]="!modifywordForm.valid">修改</button>\n        </form>\n      </ion-col>\n      <!--end form-->\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\modify-password\modify-password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_users_service__["a" /* UsersService */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], ModifyPasswordPage);

//# sourceMappingURL=modify-password.js.map

/***/ }),

/***/ 138:
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
webpackEmptyAsyncContext.id = 138;

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersService = (function () {
    function UsersService(http, storage) {
        this.http = http;
        this.storage = storage;
        /*url:string='http://localhost:3000/users';*/
        // url:string='http://localhost:3000/users';
        // url:string='http://47.94.165.179:3000/users';
        this.url = 'http://localhost:3000/users';
    }
    UsersService.prototype.login = function (user) {
        return this.http.post(this.url + '/login', user).toPromise().then(function (data) { return data; });
    };
    UsersService.prototype.getCodeByphone = function (phone) {
        // console.log(phone);
        return this.http.post(this.url + '/code', phone).toPromise().then(function (result) {
            // console.log("1111--->service");
            return result;
        });
    };
    UsersService.prototype.register = function (user) {
        return this.http.post(this.url + '/regist', user).toPromise().then(function (result) {
            return result;
        });
    };
    UsersService.prototype.getMyInfo = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "id": id + '' });
        return this.http.get(this.url + '/info', { headers: headers }).toPromise().then(function (data) {
            // console.log(data);
            return data;
        });
    };
    UsersService.prototype.getMenu = function (id) {
        //console.log(id+"here!");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "id": id + '' });
        return this.http.get(this.url + '/menus', { headers: headers }).toPromise().then(function (data) {
            // console.log(data);
            return data;
        });
    };
    UsersService.prototype.getMenuGather = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "id": id + '' });
        return this.http.get(this.url + '/personallists', { headers: headers }).toPromise().then(function (data) {
            return data;
        });
    };
    UsersService.prototype.getPersonalWoks = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "id": id + '' });
        return this.http.get(this.url + '/works', { headers: headers }).toPromise().then(function (data) {
            return data;
        });
    };
    UsersService.prototype.checkZan = function (work_id, user_id) {
        return this.http.post(this.url + '/checkThumb', { 'work_id': work_id, 'user_id': user_id }).toPromise().then(function (date) {
            return date;
        });
    };
    UsersService.prototype.zan = function (work_id, user_id) {
        return this.http.post(this.url + '/thumbWork', { 'work_id': work_id, 'user_id': user_id }).toPromise().then(function (date) {
            return date;
        });
    };
    UsersService.prototype.unzan = function (work_id, user_id) {
        return this.http.post(this.url + '/UnthumbWork', { 'work_id': work_id, 'user_id': user_id }).toPromise().then(function (date) {
            return date;
        });
    };
    UsersService.prototype.updateInfo = function (infoFormData) {
        return this.http.post(this.url + '/UpdateInfo', infoFormData).toPromise().then(function (date) {
            return date;
        });
    };
    UsersService.prototype.getFans = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "id": id + '' });
        return this.http.get(this.url + '/Befollowed', { headers: headers }).toPromise().then(function (data) {
            return data;
        });
    };
    UsersService.prototype.getFocus = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "id": id + '' });
        return this.http.get(this.url + '/follow', { headers: headers }).toPromise().then(function (data) {
            return data;
        });
    };
    UsersService.prototype.getAllmessages = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "id": id + '' });
        return this.http.get(this.url + '/comments', { headers: headers }).toPromise().then(function (data) {
            return data;
        });
    };
    UsersService.prototype.delMessage = function (id) {
        return this.http.post(this.url + '/delcomment', { 'id': id }).toPromise().then(function (data) {
            // console.log(data);
            return data;
        });
    };
    UsersService.prototype.addComment = function (master_id, commenter_id, message) {
        return this.http.post(this.url + '/addcomment', { 'master_id': master_id, 'commenter_id': commenter_id, 'content': message }).toPromise().then(function (data) {
            return data;
        });
    };
    UsersService.prototype.checkFollow = function (master_id, user_id) {
        return this.http.post(this.url + '/checkFollow', { 'follower_id': master_id, 'user_id': user_id }).toPromise().then(function (data) {
            return data;
        });
    };
    UsersService.prototype.follow = function (master_id, user_id) {
        return this.http.post(this.url + '/followUser', { 'follower_id': master_id, 'user_id': user_id }).toPromise().then(function (data) {
            return data;
        });
    };
    UsersService.prototype.unfollow = function (master_id, user_id) {
        return this.http.post(this.url + '/UnfollowUser', { 'follower_id': master_id, 'user_id': user_id }).toPromise().then(function (data) {
            return data;
        });
    };
    UsersService.prototype.getReCodeByphone = function (phone) {
        // console.log(phone);
        return this.http.post(this.url + '/Resetcode', phone).toPromise().then(function (data) {
            // console.log("1111--->service");
            return data;
        });
    };
    UsersService.prototype.retrieve = function (user) {
        return this.http.post(this.url + '/ResetPssword', user).toPromise().then(function (data) {
            return data;
        });
    };
    UsersService.prototype.delWork = function (work_id) {
        return this.http.post(this.url + '/delPersonalWork', { 'id': work_id }).toPromise().then(function (date) {
            return date;
        });
    };
    UsersService.prototype.getUnfollowUsers = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ id: id + '' });
        return this.http.get(this.url + '/UnfollowUsers', { headers: headers }).toPromise().then(function (data) {
            return data;
        });
    };
    UsersService.prototype.getCollectRecipes = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "id": id + '' });
        return this.http.get(this.url + '/collect_recipes', { headers: headers }).toPromise().then(function (data) {
            return data;
        });
    };
    UsersService.prototype.getFavorite = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "id": id + '' });
        return this.http.get(this.url + '/collect_lists', { headers: headers }).toPromise().then(function (data) {
            return data;
        });
    };
    return UsersService;
}());
UsersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], UsersService);

//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-to-menu/add-to-menu.module": [
		315,
		14
	],
	"../pages/create-menu/create-menu.module": [
		316,
		13
	],
	"../pages/create-recipe-detail/create-recipe-detail.module": [
		317,
		12
	],
	"../pages/create-recipe/create-recipe.module": [
		318,
		11
	],
	"../pages/login-or-register/login-or-register.module": [
		319,
		10
	],
	"../pages/menu-datail/menu-datail.module": [
		320,
		9
	],
	"../pages/message-board/message-board.module": [
		321,
		8
	],
	"../pages/modify-info/modify-info.module": [
		322,
		7
	],
	"../pages/modify-password/modify-password.module": [
		323,
		6
	],
	"../pages/my-fans/my-fans.module": [
		324,
		5
	],
	"../pages/my-focus/my-focus.module": [
		325,
		4
	],
	"../pages/recipe-detail/recipe-detail.module": [
		326,
		3
	],
	"../pages/search-result/search-result.module": [
		327,
		2
	],
	"../pages/search/search.module": [
		328,
		1
	],
	"../pages/upload-work/upload-work.module": [
		329,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 180;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_info_service_service__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_or_register_login_or_register__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactPage = (function () {
    function ContactPage(navCtrl, navParams, modalCtrl, infoSer, storage, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.infoSer = infoSer;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
    }
    ContactPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.i = 1;
        // console.log('ionViewDidLoad PersonalPage');
        this.storage.ready().then(function () {
            _this.storage.get('userId').then(function (val) {
                // console.log(user_id);
                if (!val) {
                    var modelPage = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__login_or_register_login_or_register__["a" /* LoginOrRegisterPage */]);
                    modelPage.present();
                }
                else {
                    console.log("1111");
                    _this.infoSer.getSocialUpdate(val).then(function (data) {
                        console.log(data);
                        if (data && data.length) {
                            _this.Allupdate = data.slice(0, 4);
                            _this.Alldata = data;
                        }
                        else {
                            _this.Allupdate = null;
                        }
                    });
                }
            });
        });
    };
    ContactPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation', infiniteScroll);
        setTimeout(function () {
            if (_this.Alldata.slice(4 * _this.i, 4 * _this.i + 4).length > 0) {
                _this.Allupdate = _this.Allupdate.concat(_this.Alldata.slice(4 * _this.i, 4 * _this.i + 4));
                _this.i++;
            }
            else {
                infiniteScroll.enabled = false;
                var toast = _this.toastCtrl.create({
                    message: '已经到底啦！',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.onDidDismiss(function () {
                    // console.log('删除成功');
                });
                toast.present();
            }
            infiniteScroll.complete();
        }, 1000);
    };
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <p class="title">好友动态</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <ion-card *ngFor="let item of Allupdate">\n\n          <ion-item>\n            <ion-avatar item-start>\n              <img src="{{item.user_icon}}">\n            </ion-avatar>\n            <h2>{{item.user_name}}  <span style="color:red;">创建菜谱</span></h2>\n            <p>{{item.reccipe_name}}</p>\n          </ion-item>\n\n          <img src="{{item.cover_pic}}">\n\n          <ion-card-content>\n            <p>{{item.descripe}}</p>\n          </ion-card-content>\n\n          <ion-row>\n            <ion-col>\n              <button ion-button icon-left clear small>\n                <ion-icon name="thumbs-up"></ion-icon>\n                <div>{{item.cook_times}} 做过 </div>\n              </button>\n            </ion-col>\n            <ion-col>\n              <button ion-button icon-left clear small>\n                <ion-icon name="text"></ion-icon>\n                <div>{{item.collect_times}} 收藏</div>\n              </button>\n            </ion-col>\n            <ion-col center text-center>\n              <ion-note>\n                {{item.create_time.substr(0,10)}}\n              </ion-note>\n            </ion-col>\n          </ion-row>\n\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n      <ion-infinite-scroll-content loadingText="加载中..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_info_service_service__["a" /* InfoServiceService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InfoServiceService = (function () {
    function InfoServiceService(http) {
        this.http = http;
        //url= 'http://47.94.165.179:3000/info';
        this.url = 'http://localhost:3000/info';
    }
    /*getProvinces(callback){
      this.http.get(this.url + '/provinces').subscribe(function(result){
        callback(result);
      });
    }*/
    InfoServiceService.prototype.getSocialUpdate = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ id: id + '' });
        return this.http.get(this.url + '/social_update', { headers: headers }).toPromise().then(function (result) {
            return result;
        });
    };
    return InfoServiceService;
}());
InfoServiceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], InfoServiceService);

//# sourceMappingURL=info-service.service.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__personal_personal__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_positions_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_users_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_menu_service_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__menu_datail_menu_datail__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__recipe_detail_recipe_detail__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__charts_charts__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__menu_type_menu_type__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__create_recipe_create_recipe__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var HomePage = (function () {
    function HomePage(navCtrl, viewCtrl, appCtrl, storage, userSer, menuSer, modalCtrl, positionSer) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.appCtrl = appCtrl;
        this.storage = storage;
        this.userSer = userSer;
        this.menuSer = menuSer;
        this.modalCtrl = modalCtrl;
        this.positionSer = positionSer;
        this.imgs = [
            {
                'img': 'carouse01.png',
                'links': 'www.baidu.com'
            },
            {
                'img': 'carouse02.png',
                'links': 'www.baidu.com'
            },
            {
                'img': 'carouse03.png',
                'links': 'www.baidu.com'
            }
        ];
        this.indexs = [1, 2, 3];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('userId').then(function (val) {
                console.log(val);
                _this.menuSer.getIndexMenus().then(function (data) {
                    _this.indexMenus = data.slice(20, 26);
                    //console.log(111);
                    //console.log(this.indexMenus+'首页菜谱');
                });
                _this.menuSer.getIndexList().then(function (data) {
                    if (data.length) {
                        _this.indexLists = data.slice(0, 12);
                        // console.log(this.indexLists+'首页菜单');
                    }
                });
                if (!val) {
                    // alert(1);
                }
                else {
                    console.log("here");
                    _this.userSer.getUnfollowUsers(val).then(function (data) {
                        //console.log(data+'首页达人推荐');
                        _this.UnfollowUsers = data;
                    });
                }
            });
        });
    };
    HomePage.prototype.toPersonal = function (id) {
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__personal_personal__["a" /* PersonalPage */], { "personalId": id });
        modelPage.present();
    };
    HomePage.prototype.slideChanged = function () {
        // let activeIndex=this.mySlides.getActiveIndex();
        // console.log(activeIndex);
        this.mySlides.startAutoplay();
    };
    HomePage.prototype.showImg = function (img) {
        // console.log(img);
    };
    HomePage.prototype.itemSelected = function (item) {
        // this.viewCtrl.dismiss();
        // item && this.navCtrl.push(PostDetailPage,{"post_id":item.postId});
        // this.appCtrl.getRootNav().push(PostDetailPage);
        // let modelPage=this.modalCtrl.create(PostDetailPage,{"post_id":item.id});
        // modelPage.onDidDismiss(data => {
        //   console.log(data);
        // });
        // modelPage.present();
    };
    HomePage.prototype.toRecipeDetail = function (id) {
        //console.log(id);
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__recipe_detail_recipe_detail__["a" /* RecipeDetailPage */], { "recipeId": id });
        modelPage.present();
    };
    HomePage.prototype.toMenuDetail = function (id) {
        /* console.log(id);*/
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__menu_datail_menu_datail__["a" /* MenuDatailPage */], { "menuId": id });
        modelPage.present();
    };
    HomePage.prototype.toCreate = function () {
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__create_recipe_create_recipe__["a" /* CreateRecipePage */]);
        modelPage.present();
    };
    HomePage.prototype.toSearch = function () {
        //alert("here!");
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
        modelPage.present();
    };
    HomePage.prototype.MenuType = function () {
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__menu_type_menu_type__["a" /* MenuTypePage */]);
        modelPage.present();
    };
    HomePage.prototype.Charts = function () {
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__charts_charts__["a" /* ChartsPage */]);
        modelPage.present();
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
], HomePage.prototype, "mySlides", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-2>\n        <ion-icon name="add" style="font-size: 25px !important; color: grey;" (click)="toCreate()"></ion-icon>\n      </ion-col>\n      <ion-col col-8 style="text-align: center">\n        <!--<ion-note style="color: grey;font-size: 22px;">味蕾</ion-note>-->\n        <input class="searchInput" type="text" placeholder="搜索..." (click)="toSearch()">\n      </ion-col>\n      <ion-col col-2 style="text-align: right" >\n        <ion-icon name="settings" style="color: #2d2d2d;font-size: 25px"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <ion-slides autoplay="2000" loop="true" (ionSlideDidChange)="slideChanged()" #mySlides>\n          <ion-slide *ngFor="let item of imgs" style="height: 141px">\n            <img src="assets/img/{{item?.img}}"  alt="" (click)="showImg(item?.links)">\n          </ion-slide>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n    <ion-row class="tabs">\n      <ion-col col-3 style="text-align: center">\n        <img style="width: 48px;height: 48px;" src="../../assets/img/mbe风格_布丁.png" alt="">\n        <p>流行菜单</p>\n      </ion-col >\n      <ion-col col-3 (click)="MenuType()">\n        <img style="width: 48px;height: 48px;"  src="../../assets/img/mbe风格_披萨.png" alt="">\n        <p>菜谱分类</p>\n      </ion-col >\n      <ion-col col-3 (click)="Charts()">\n        <img style="width: 48px;height: 48px;"   src="../../assets/img/mbe风格_浓汤.png" alt="">\n        <p>排行榜</p>\n      </ion-col >\n      <ion-col col-3>\n        <img style="width: 48px;height: 48px;"  src="../../assets/img/mbe风格_面包.png" alt="">\n        <p>待补充</p>\n      </ion-col >\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <p style="margin:0;padding:0">时令食材</p>\n        <ion-slides  pager>\n\n          <ion-slide style="background-color: white;height: 150px;">\n            <img (click)="toSearch()" style="width: 45%;" src="http://owigmgx25.bkt.clouddn.com/cover_pic%E5%AE%B6%E4%B9%A1%E6%89%81%E8%B1%86%E8%82%89%E9%A5%AD.png" alt="">\n            <img style="width: 45%;" width="40%"  src="http://owigmgx25.bkt.clouddn.com/cover_pic%E5%AE%B6%E4%B9%A1%E6%89%81%E8%B1%86%E8%82%89%E9%A5%AD.png" alt="">\n          </ion-slide>\n\n          <ion-slide style="background-color: white">\n            <img style="width: 45%;" src="http://owigmgx25.bkt.clouddn.com/cover_pic%E5%AE%B6%E4%B9%A1%E6%89%81%E8%B1%86%E8%82%89%E9%A5%AD.png" alt="">\n            <img style="width: 45%;" src="http://owigmgx25.bkt.clouddn.com/cover_pic%E5%AE%B6%E4%B9%A1%E6%89%81%E8%B1%86%E8%82%89%E9%A5%AD.png" alt="">\n          </ion-slide>\n\n          <ion-slide style="background-color: white">\n            <img style="width: 45%;" src="http://owigmgx25.bkt.clouddn.com/cover_pic%E5%AE%B6%E4%B9%A1%E6%89%81%E8%B1%86%E8%82%89%E9%A5%AD.png" alt="">\n            <img style="width: 45%;" src="http://owigmgx25.bkt.clouddn.com/cover_pic%E5%AE%B6%E4%B9%A1%E6%89%81%E8%B1%86%E8%82%89%E9%A5%AD.png" alt="">\n          </ion-slide>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <p>达人推荐</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-3 *ngFor="let user of UnfollowUsers?.slice(0,8)">\n        <img (click)="toPersonal(user.id)" class="userIcon" src="{{user?.user_icon}}" alt="">\n        <p style="font-size: 10px;color:black;">{{user?.name}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <p style="margin:0;padding:0">菜谱推荐</p>\n        <ion-slides  pager>\n          <ion-slide style="background-color: white;height: 150px;" *ngFor="let m of indexs;let i = index;">\n            <ion-row>\n              <ion-col col-6 *ngFor="let menu of indexMenus?.slice(i*2,i*2+2)">\n                <img style="height:110px;width:160px;" src="{{menu?.cover_pic}}" alt="" (click)="toRecipeDetail(menu.id)">\n              </ion-col>\n            </ion-row>\n          </ion-slide>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n    <ion-col col-12>\n      <p>菜单推荐</p>\n      <ion-slides  pager>\n\n        <ion-slide style="background-color: white;" *ngFor="let list of indexLists?.slice(0,3)" (click)="toMenuDetail(list.id)">\n          <ion-row  class="card-background-page">\n            <ion-col col-12>\n              <ion-card style="height: 300px;">\n                <img style="width: 100%;height: 60%;" src="{{list.cover_pic}}"/>\n                <ion-card-content>\n                  <ion-card-title>\n                    {{list.name}}\n                  </ion-card-title>\n                  <p>\n                   {{list.descripe.substring(0,20)+"..."}}\n                  </p>\n                </ion-card-content>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n  </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\home\home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__providers_positions_service__["a" /* PositionsService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_5__providers_users_service__["a" /* UsersService */],
        __WEBPACK_IMPORTED_MODULE_6__providers_menu_service_service__["a" /* MenuServiceService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_positions_service__["a" /* PositionsService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_charts_charts__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__personal_personal__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recipe_detail_recipe_detail__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_menu_service_service__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HotMenuPage = (function () {
    function HotMenuPage(navCtrl, viewCtrl, MenuD, modalCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.MenuD = MenuD;
        this.modalCtrl = modalCtrl;
    }
    HotMenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HotMenuPage');
    };
    HotMenuPage.prototype.back = function () {
        this.viewCtrl.dismiss();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_charts_charts__["a" /* ChartsPage */]);
    };
    HotMenuPage.prototype.ngOnInit = function () {
        var that = this;
        that.MenuD.getIndexMenu(function (result) {
            that.AllMenus = result;
        });
    };
    HotMenuPage.prototype.toPersonal = function (id) {
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__personal_personal__["a" /* PersonalPage */], { "personalId": id });
        modelPage.present();
    };
    HotMenuPage.prototype.toRecipeDetail = function (id) {
        // console.log(id);
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__recipe_detail_recipe_detail__["a" /* RecipeDetailPage */], { "recipeId": id });
        modelPage.present();
    };
    return HotMenuPage;
}());
HotMenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-hot-menu',template:/*ion-inline-start:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\hot-menu\hot-menu.html"*/'\n<ion-header class="hot-menu">\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4 (click)="back()">\n        <ion-icon name="arrow-back"  style="font-size: 30px !important; color: black;"></ion-icon>\n      </ion-col>\n      <ion-col col-4>\n        <ion-note>热门菜谱</ion-note>\n      </ion-col>\n      <ion-col col-4  >\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-header>\n\n\n<ion-content class="hot-menu" padding>\n  <ion-item class="hot-m"  *ngFor="let item of AllMenus | orderbycollect">\n    <ion-thumbnail item-start (click)="toRecipeDetail(item.id)">\n      <img  src="{{item?.cover_pic}}" >\n    </ion-thumbnail>\n    <div  class="single_menu">\n      <div class="menu_name" ><a >{{item?.name}}</a></div>\n      <div class="include_menunum">{{item.descripe.substring(0,7)+"..."}}</div>\n\n      <div class="author" (click)="toPersonal(item.id)"><a >{{item?.creater}} </a>创建</div>\n      <div class="state"><a >{{item?.collect_times}} 收藏</a></div>\n    </div>\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\hot-menu\hot-menu.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__providers_menu_service_service__["a" /* MenuServiceService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_menu_service_service__["a" /* MenuServiceService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], HotMenuPage);

//# sourceMappingURL=hot-menu.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotMenusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_charts_charts__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__personal_personal__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_datail_menu_datail__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_menu_service_service__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HotMenusPage = (function () {
    function HotMenusPage(navCtrl, viewCtrl, MenuD, modalCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.MenuD = MenuD;
        this.modalCtrl = modalCtrl;
    }
    HotMenusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HotMenusPage');
    };
    HotMenusPage.prototype.back = function () {
        this.viewCtrl.dismiss();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_charts_charts__["a" /* ChartsPage */]);
    };
    HotMenusPage.prototype.ngOnInit = function () {
        var that = this;
        that.MenuD.getIndex(function (result) {
            that.Alllists = result;
        });
    };
    HotMenusPage.prototype.toPersonal = function (id) {
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__personal_personal__["a" /* PersonalPage */], { "personalId": id });
        modelPage.present();
    };
    HotMenusPage.prototype.toMenuDetail = function (id) {
        console.log(id);
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__menu_datail_menu_datail__["a" /* MenuDatailPage */], { "menuId": id });
        modelPage.present();
    };
    return HotMenusPage;
}());
HotMenusPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-hot-menus',template:/*ion-inline-start:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\hot-menus\hot-menus.html"*/'\n<ion-header class="hot-menus">\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n        <ion-icon name="arrow-back" (click)="back()" style="font-size: 30px !important; color: black;"></ion-icon>\n      </ion-col>\n      <ion-col col-4>\n        <ion-note>热门菜单</ion-note>\n      </ion-col>\n      <ion-col col-4  >\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-header>\n\n\n<ion-content class="hot-menus" padding>\n  <ion-item *ngFor="let item of Alllists | orderbycollect">\n    <ion-thumbnail item-start  (click)="toMenuDetail(item.id)">\n        <img class="img" src="{{item.cover_pic}}" width="200" height="136">\n    </ion-thumbnail>\n    <div class="single_menu_gather" >\n      <div class="menu_gather_name"><a>{{item.name}}</a></div>\n      <div class="include_menunum">{{item.descripe.substring(0,7)+"..."}}</div>\n      <div class="author" (click)="toPersonal(item.id)"><a>{{item.creater}}</a> 创建 </div>\n      <div class="state"><a >{{item?.collect_times}} 收藏</a></div>\n    </div>\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\hot-menus\hot-menus.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__providers_menu_service_service__["a" /* MenuServiceService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_menu_service_service__["a" /* MenuServiceService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], HotMenusPage);

//# sourceMappingURL=hot-menus.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_charts_charts__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__personal_personal__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recipe_detail_recipe_detail__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_menu_service_service__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewMenuPage = (function () {
    function NewMenuPage(navCtrl, viewCtrl, MenuD, modalCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.MenuD = MenuD;
        this.modalCtrl = modalCtrl;
    }
    NewMenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewMenuPage');
    };
    NewMenuPage.prototype.back = function () {
        this.viewCtrl.dismiss();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_charts_charts__["a" /* ChartsPage */]);
    };
    NewMenuPage.prototype.ngOnInit = function () {
        var that = this;
        that.MenuD.getIndexMenu(function (result) {
            that.AllMenus = result;
        });
    };
    NewMenuPage.prototype.toPersonal = function (id) {
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__personal_personal__["a" /* PersonalPage */], { "personalId": id });
        modelPage.present();
    };
    NewMenuPage.prototype.toRecipeDetaill = function (id) {
        // console.log(id);
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__recipe_detail_recipe_detail__["a" /* RecipeDetailPage */], { "recipeId": id });
        modelPage.present();
    };
    return NewMenuPage;
}());
NewMenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-new-menu',template:/*ion-inline-start:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\new-menu\new-menu.html"*/'<!--\n  Generated template for the NewMenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="new-menu">\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n        <ion-icon name="arrow-back" (click)="back()" style="font-size: 30px !important; color: black;"></ion-icon>\n      </ion-col>\n      <ion-col col-4>\n        <ion-note>最新菜谱</ion-note>\n      </ion-col>\n      <ion-col col-4  >\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-header>\n\n\n<ion-content class="new-menu" padding>\n  <ion-item *ngFor="let item1 of AllMenus | orderbytime ">\n    <ion-thumbnail item-start (click)="toRecipeDetaill(item1.id)" >\n      <img src="{{item1.cover_pic}}"  height="136" width="215"/>\n    </ion-thumbnail>\n    <div  class="single_menu">\n      <div class="menu_name"><a >{{item1.name}}</a></div>\n      <div class="include_menunum"><a >{{item1.descripe.substring(0,7)+"..."}}</a></div>\n      <div class="author" (click)="toPersonal(item1.id)"><a >{{item1.creater.substring(0,5)}}</a>创建</div>\n      <div class="state"><a >{{item1.create_time.substring(0,10)}}</a></div>\n    </div>\n  </ion-item>\n</ion-content>\n\n'/*ion-inline-end:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\new-menu\new-menu.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__providers_menu_service_service__["a" /* MenuServiceService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_menu_service_service__["a" /* MenuServiceService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], NewMenuPage);

//# sourceMappingURL=new-menu.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewMenusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_charts_charts__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__personal_personal__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_datail_menu_datail__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_menu_service_service__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the NewMenusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewMenusPage = (function () {
    function NewMenusPage(navCtrl, MenuD, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.MenuD = MenuD;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
    }
    NewMenusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewMenusPage');
    };
    NewMenusPage.prototype.back = function () {
        this.viewCtrl.dismiss();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_charts_charts__["a" /* ChartsPage */]);
    };
    NewMenusPage.prototype.ngOnInit = function () {
        var that = this;
        that.MenuD.getIndex(function (result) {
            that.Alllists = result;
        });
    };
    NewMenusPage.prototype.toPersonal = function (id) {
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__personal_personal__["a" /* PersonalPage */], { "personalId": id });
        modelPage.present();
    };
    NewMenusPage.prototype.toMenuDetail = function (id) {
        console.log(id);
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__menu_datail_menu_datail__["a" /* MenuDatailPage */], { "menuId": id });
        modelPage.present();
    };
    return NewMenusPage;
}());
NewMenusPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-new-menus',template:/*ion-inline-start:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\new-menus\new-menus.html"*/'<!--\n  Generated template for the NewMenusPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="new-menus">\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n        <ion-icon name="arrow-back" (click)="back()" style="font-size: 30px !important; color: black;"></ion-icon>\n      </ion-col>\n      <ion-col col-4>\n        <ion-note>最新菜单</ion-note>\n      </ion-col>\n      <ion-col col-4  >\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-header>\n\n\n<ion-content class="new-menus" padding>\n\n  <ion-item *ngFor="let item of Alllists | orderbytime">\n    <ion-thumbnail item-start (click)="toMenuDetail(item.id)">\n      <img src="{{item.cover_pic}}" height="136" width="215">\n    </ion-thumbnail>\n    <div class="single_menu" >\n      <div class="menu_gather_name"><a>{{item.name}}</a></div>\n      <div class="include_menunum">{{item.descripe.substring(0,7)+"..."}}</div>\n      <div class="author" (click)="toPersonal(item.id)"><a>{{item.creater}}</a> 创建 </div>\n      <div class="state"><a>{{item.create_time.substring(0,10)}}</a> </div>\n    </div>\n  </ion-item>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\new-menus\new-menus.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__providers_menu_service_service__["a" /* MenuServiceService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_menu_service_service__["a" /* MenuServiceService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
], NewMenusPage);

//# sourceMappingURL=new-menus.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuTypePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_result_search_result__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_menu_service_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_property_service__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { SearchPage } from '../../pages/search/search';



var MenuTypePage = (function () {
    function MenuTypePage(navCtrl, navParams, viewCtrl, MenuD) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.MenuD = MenuD;
        // imgs = [
        //   {
        //     'img': '下午茶.jpg',
        //   }
        //   ,
        //   {
        //     'img': '下饭菜.jpg',
        //   },
        //   {
        //     'img': '甜品.jpg',
        //   },
        //   {
        //     'img': '烘培.jpg',
        //   },
        // ];
        this.hot = [];
        this.sweet = [];
        this.meat = [];
        this.shoup = [];
        this.vagetable = [];
        this.i = 0;
    }
    MenuTypePage.prototype.ionViewDidLoad = function () {
    };
    MenuTypePage.prototype.back = function () {
        this.viewCtrl.dismiss();
        // this.navCtrl.push(HomePage);
    };
    MenuTypePage.prototype.ngOnInit = function () {
        var that = this;
        that.MenuD.getclssify(function (result) {
            if (result) {
                for (that.i = 0; that.i < result.length; that.i++) {
                    if (result[that.i].class_id == 1) {
                        that.hot.push(result[that.i]);
                        // console.log(that.hot);
                    }
                    else if (result[that.i].class_id == 2) {
                        that.sweet.push(result[that.i]);
                    }
                    else if (result[that.i].class_id == 3) {
                        that.meat.push(result[that.i]);
                    }
                    else if (result[that.i].class_id == 4) {
                        that.shoup.push(result[that.i]);
                    }
                    else {
                        that.vagetable.push(result[that.i]);
                    }
                }
            }
        });
    };
    MenuTypePage.prototype.jumpsearch = function (text) {
        // sessionStorage.setItem('text', text);
        // console.log(text);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_result_search_result__["a" /* SearchResultPage */], { tosearch: text });
        // this.router.navigate(['/search/recipe']);
    };
    return MenuTypePage;
}());
MenuTypePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-menu-type',template:/*ion-inline-start:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\menu-type\menu-type.html"*/'<ion-header class="menu-type">\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n        <ion-icon name="arrow-back" (click)="back()" style="font-size: 30px !important; color:black;"></ion-icon>\n      </ion-col>\n      <ion-col col-4>\n        <ion-note>菜谱分类</ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="hot-type">\n    <h1>热门专题</h1>\n    <div class="hot">\n       <div *ngFor="let item of hot;let index=index">\n      <a (click)="jumpsearch(item.tag_name)"><span class="pop-category-name" >{{item.tag_name}}</span></a>\n      </div>\n    </div>\n  </div>\n  <div class="hot-type">\n    <h1>烘培甜品</h1>\n    <div class="hot">\n       <div *ngFor="let item of sweet;let index=index">\n          <a (click)="jumpsearch(item.tag_name)">\n            <span class="pop-category-name">{{item.tag_name}}</span>\n          </a>\n        </div>\n    </div>\n  </div>\n  <div class="hot-type">\n    <h1>肉类</h1>\n    <div class="hot">\n      <div *ngFor="let item of meat ;let index=index">\n          <a (click)="jumpsearch(item.tag_name)">\n            <span class="pop-category-name">{{item.tag_name}}</span>\n          </a>\n        </div>\n    </div>\n  </div>\n  <div class="hot-type">\n    <h1>汤粥主食</h1>\n    <div class="hot">\n      <div *ngFor="let item of shoup;let index=index">\n          <a (click)="jumpsearch(item.tag_name)">\n            <span class="pop-category-name">{{item.tag_name}}</span>\n          </a>\n        </div>\n\n    </div>\n  </div>\n  <div class="hot-type">\n    <h1>蔬菜水果</h1>\n    <div class="hot">\n      <div *ngFor="let item of vagetable;let index=index">\n          <a (click)="jumpsearch(item.tag_name)" >\n            <span class="pop-category-name">{{item.tag_name}}</span>\n          </a>\n        </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\menu-type\menu-type.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_menu_service_service__["a" /* MenuServiceService */], __WEBPACK_IMPORTED_MODULE_4__providers_global_property_service__["a" /* GlobalPropertyService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_menu_service_service__["a" /* MenuServiceService */]])
], MenuTypePage);

//# sourceMappingURL=menu-type.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_or_register_login_or_register__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modify_password_modify_password__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingPage = (function () {
    function SettingPage(navCtrl, navParams, viewCtrl, storage, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
    }
    SettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingPage');
    };
    SettingPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    SettingPage.prototype.toChangePassword = function () {
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__modify_password_modify_password__["a" /* ModifyPasswordPage */]);
        modelPage.present();
    };
    SettingPage.prototype.login_out = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.remove('isLogin');
            _this.storage.remove('userId');
            _this.storage.remove('token');
        });
        this.viewCtrl.dismiss();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_or_register_login_or_register__["a" /* LoginOrRegisterPage */]);
    };
    return SettingPage;
}());
SettingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-setting',template:/*ion-inline-start:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\setting\setting.html"*/'<!--\n  Generated template for the SettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-3>\n        <ion-icon name="arrow-back" (click)="back()" style="font-size: 25px !important; color: grey;"></ion-icon>\n      </ion-col>\n      <ion-col col-6 style="text-align: center">\n        <ion-note style="color: grey;font-size: 18px;">设置</ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list >\n    <button ion-item (click)="toChangePassword()">\n      修改密码\n      <ion-icon ios="ios-arrow-forward" md="md-arrow-forward"></ion-icon>\n    </button>\n  </ion-list>\n  <ion-list>\n    <button ion-button style="background-color: #DD3915;color: white" full (click)="login_out()">退出登录</button>\n  </ion-list >\n</ion-content>\n'/*ion-inline-end:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\setting\setting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], SettingPage);

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Storage } from '@ionic/storage';

var MenuServiceService = (function () {
    // url= 'http://47.94.165.179:3000/menu';
    function MenuServiceService(http) {
        this.http = http;
        this.url = 'http://localhost:3000/menu';
    }
    MenuServiceService.prototype.searchMenus = function () {
        // console.log('service');
        return this.http.get(this.url + '/indexmenu').toPromise().then(function (result) {
            return result;
        });
    };
    MenuServiceService.prototype.getIndexMenus = function () {
        return this.http.get(this.url + '/indexmenu').toPromise().then(function (result) {
            return result;
        });
    };
    MenuServiceService.prototype.getIndexList = function () {
        return this.http.get(this.url + '/indexlist').toPromise().then(function (result) {
            return result;
        });
    };
    MenuServiceService.prototype.getIndexMenu = function (callback) {
        this.http.get(this.url + '/indexmenu').subscribe(function (result) {
            callback(result);
        });
    };
    MenuServiceService.prototype.getIndex = function (callback) {
        this.http.get(this.url + '/indexlist').subscribe(function (result) {
            callback(result);
        });
    };
    MenuServiceService.prototype.getclssify = function (callback) {
        this.http.get(this.url + '/classes').subscribe(function (result) {
            callback(result);
        });
    };
    MenuServiceService.prototype.getMenudetail = function (menuid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ id: menuid + '' });
        return this.http.get(this.url + '/Menudetails', { headers: headers }).toPromise().then(function (result) {
            return result;
        });
    };
    MenuServiceService.prototype.delRecipeFromMenu = function (recipeId, menuId) {
        return this.http.post(this.url + '/deleteRfromList', { 'recipe_id': recipeId, 'list_id': menuId }).toPromise().then(function (result) {
            return result;
        });
    };
    return MenuServiceService;
}());
MenuServiceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], MenuServiceService);

//# sourceMappingURL=menu-service.service.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_recipe_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_to_menu_add_to_menu__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_or_register_login_or_register__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__upload_work_upload_work__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the RecipeDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecipeDetailPage = (function () {
    function RecipeDetailPage(navCtrl, modalCtrl, navParams, recipeSer, storage, viewCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.recipeSer = recipeSer;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
    }
    RecipeDetailPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad RecipeDetailPage');
    };
    RecipeDetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // console.log(this.navParams.get('recipeId'));
        var val = this.navParams.get('recipeId'); //菜谱id
        if (val) {
            this.recipeSer.getDetails(val).then(function (data) {
                // console.log(data);
                _this.details = data;
                _this._name = data[0].name;
                _this._cover_pic = data[0].cover_pic;
                _this._descripe = data[0].descripe;
                _this._cook_times = data[0].cook_times;
                _this._collect_times = data[0].collect_times;
                _this._create_time = data[0].create_time;
                _this._tips = data[0].tips;
                _this._creater = data[0].creater;
                _this._creater_id = data[0].creater_id;
            });
            this.recipeSer.getSteps(val).then(function (data) {
                // console.log(data);
                if (data.length) {
                    _this.steps = data;
                }
            });
            this.recipeSer.getMenuWorks(val).then(function (data) {
                if (data.length) {
                    _this.MenuWorks = data;
                }
                else {
                    document.getElementById('work').style.display = 'none';
                }
                _this.length = data.length;
            });
            this.recipeSer.getMenuLists(val).then(function (data) {
                if (data.length) {
                    _this.MenuLists = data;
                }
                else {
                    document.getElementById('menu').style.display = 'none';
                }
            });
            this.storage.ready().then(function () {
                _this.storage.get('userId').then(function (userid) {
                    _this.recipeSer.checkcollect(val, userid).then(function (data) {
                        console.log(data.stageCode + 'stagecode');
                        if (data.stageCode == 1) {
                            _this.flag = false;
                        }
                        else {
                            _this.flag = true;
                        }
                    });
                });
            });
        }
    };
    RecipeDetailPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    RecipeDetailPage.prototype.addToMenu = function () {
        var val = this.navParams.get('recipeId');
        var modalPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__add_to_menu_add_to_menu__["a" /* AddToMenuPage */], { "recipeId": val });
        modalPage.present();
    };
    RecipeDetailPage.prototype.toUpload = function () {
        var val = this.navParams.get('recipeId');
        var modalPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__upload_work_upload_work__["a" /* UploadWorkPage */], { "recipeId": val });
        modalPage.present();
    };
    RecipeDetailPage.prototype.slideChanged = function () {
        var currentIndex = this.mySlides.getActiveIndex();
        this.mySlides.startAutoplay();
    };
    RecipeDetailPage.prototype.collect = function () {
        var _this = this;
        var val = this.navParams.get('recipeId'); //菜谱id
        this.storage.ready().then(function () {
            _this.storage.get('userId').then(function (id) {
                if (id) {
                    _this.recipeSer.collectRecipe(val, id).then(function (data) {
                        _this.flag = false;
                        return data;
                    });
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: '请先登录',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.onDidDismiss(function () {
                    });
                    toast.present();
                    _this.viewCtrl.dismiss();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_or_register_login_or_register__["a" /* LoginOrRegisterPage */]);
                }
            });
        });
    };
    RecipeDetailPage.prototype.uncollect = function () {
        var _this = this;
        var val = this.navParams.get('recipeId'); //菜谱id
        this.storage.ready().then(function () {
            _this.storage.get('userId').then(function (id) {
                if (id) {
                    _this.recipeSer.uncollectRecipe(val, id).then(function (data) {
                        _this.flag = true;
                        return data;
                    });
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: '请先登录',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast.onDidDismiss(function () {
                    });
                    toast.present();
                    _this.viewCtrl.dismiss();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_or_register_login_or_register__["a" /* LoginOrRegisterPage */]);
                }
            });
        });
    };
    return RecipeDetailPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
], RecipeDetailPage.prototype, "mySlides", void 0);
RecipeDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-recipe-detail',template:/*ion-inline-start:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\recipe-detail\recipe-detail.html"*/'<!--\n  Generated template for the RecipeDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-icon name="ios-arrow-back" (click)="back()" style="font-size: 30px !important;"></ion-icon>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <img  class="recipe_cover" src="{{_cover_pic}}">\n  <p class="recipe_name">{{_name}}</p>\n  <p class="recipe_do_it">{{_cook_times}}人做过这道菜</p>\n  <hr>\n\n  <ion-card class="recipe_intro" style="box-shadow: none!important;">\n    <ion-item>\n      <ion-avatar item-start>\n        <h2>作者:{{_creater}}</h2>\n      </ion-avatar>\n\n    </ion-item>\n    <ion-card-content>\n      <p style="font-size: 1.2em">{{_descripe}}</p>\n    </ion-card-content>\n  </ion-card>\n\n  <!--用料-->\n  <ion-list>\n    <ion-item style="font-weight: 700">用料</ion-item>\n    <ion-item *ngFor="let item of details">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-6>{{item?.goods}}</ion-col>\n          <ion-col col-6>{{item?.count}}</ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n\n  <!--步骤-->\n  <ion-list>\n    <ion-item *ngFor="let step of steps;let _index=index">\n      <h2 style="font-weight: 700">步骤{{_index+1}}</h2>\n      <p class="step">{{step?.step}}</p>\n    </ion-item>\n  </ion-list>\n\n  <!--小贴士-->\n  <div id="tip">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12 style="font-size: 1.4em;font-weight: 700">小贴士</ion-col>\n      </ion-row>\n    </ion-grid>\n    <p class="step">{{_tips}}</p>\n  </div>\n\n  <!--作品-->\n  <div id="work">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-8 style="font-size: 1.4em;font-weight: 700">大家做的这道菜</ion-col>\n        <ion-col col-4 style="font-size: 1.3em;color: #dd3915">{{length||0}}个作品</ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-slides class="lunbo" (ionSlideDidChange)="slideChanged()" >\n      <ion-slide class="single" *ngFor="let work of MenuWorks" style="margin-left: 10px">\n        <img class="work_cover" src="{{work?.cover_pic}}" width="100" height="100">\n        <div class="info">\n          <img style="width: 50px;height: 50px;border-radius: 50%" src="{{work?.user_icon}}" align="middle">{{work?.creater}}\n          <p class="desc">{{work?.descripe.substring(0,20)+"..."}}</p>\n          <p class="desc">{{work?.create_time.substring(0,10)}}</p>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n\n  <!--被加入的菜单-->\n  <ion-grid id="menu">\n    <ion-row>\n      <ion-col col-12 style="font-size: 1.4em;font-weight: 700">被加入的菜单</ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-list>\n    <ion-item *ngFor="let menu of MenuLists;let _index=index">\n      <ion-thumbnail item-start>\n        <img class="menu_cover" src="{{menu.cover_pic}}">\n      </ion-thumbnail>\n      <h2>{{menu.list_name}}</h2>\n      <br>\n      <p>23道菜谱</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-note style="margin-left: 10px">菜谱创建于{{_create_time}}</ion-note>\n\n</ion-content>\n\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4 style="text-align: center" *ngIf="flag" (click)="collect()">\n        <ion-icon name="heart" style="font-size: 20px !important"></ion-icon>\n        <span>收藏</span>\n      </ion-col>\n      <ion-col col-4 style="text-align: center" *ngIf="!flag" (click)="uncollect()">\n        <ion-icon name="heart" style="font-size: 20px !important;color: #dd3915"></ion-icon>\n        <span>已收藏</span>\n      </ion-col>\n      <ion-col col-4 style="text-align: center" (click)="addToMenu()">\n        <ion-icon name="ios-albums-outline" style="font-size: 20px !important"></ion-icon>\n        加菜单\n      </ion-col>\n      <ion-col col-4 style="text-align: center" (click)="toUpload()">\n        <ion-icon name="ios-camera-outline" style="font-size: 20px !important;" ></ion-icon>\n        传作品\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n\n'/*ion-inline-end:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\recipe-detail\recipe-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_recipe_service__["a" /* RecipeService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], RecipeDetailPage);

//# sourceMappingURL=recipe-detail.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_focus_my_focus__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_fans_my_fans__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message_board_message_board__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_users_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__recipe_detail_recipe_detail__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {ModifyInfoPage} from '../modify-info/modify-info';


// import {SettingPage} from '../setting/setting';




/**
 * Generated class for the PersonalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var PersonalPage = (function () {
    function PersonalPage(navCtrl, navParams, modalCtrl, storage, userSer, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.userSer = userSer;
        this.alertCtrl = alertCtrl;
        this.mycreate = 'recipe';
        this.zanFlag = [];
        this.personalId = this.navParams.get('personalId');
        this.storage.ready().then(function () {
            _this.storage.get('userId').then(function (myid) {
                _this.myid = myid;
            });
        });
    }
    PersonalPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    PersonalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonalPage');
    };
    PersonalPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log(this.personalId);
        this.userSer.getMyInfo(this.personalId).then(function (data) {
            _this.headpic = data[0].user_icon;
            _this.name = data[0].name;
            _this.Sex = data[0].sex;
            _this.signature = data[0].signature;
        });
        this.userSer.getFocus(this.personalId).then(function (data) {
            _this.FoucsNum = data.length;
        });
        this.userSer.getFans(this.personalId).then(function (data) {
            _this.Fans = data.length;
            // console.log(this.myFans+'个粉丝');
        });
        this.userSer.getMenu(this.personalId).then(function (data) {
            if (data.length > 0) {
                _this.recipes2 = data;
                console.log(_this.recipes2);
                _this.norecipsFlag1 = false;
            }
            else {
                _this.norecipsFlag1 = true;
            }
        });
        this.userSer.getMenuGather(this.personalId).then(function (data) {
            if (data.length) {
                _this.menus2 = data;
                console.log(_this.menus2);
                _this.nomenuFlag1 = false;
            }
            else {
                _this.nomenuFlag1 = true;
            }
        });
        this.userSer.getPersonalWoks(this.personalId).then(function (data) {
            if (data.length > 0) {
                _this.products = data;
                // console.log(this.products);
                _this.noproducttFlag1 = false;
                var _loop_1 = function (i) {
                    _this.userSer.checkZan(data[i].id, _this.myid).then(function (result) {
                        if (result.stageCode == 1) {
                            _this.zanFlag[i] = false;
                        }
                        else {
                            _this.zanFlag[i] = true;
                        }
                    });
                };
                for (var i = 0; i < data.length; i++) {
                    _loop_1(i);
                }
            }
            else {
                _this.noproducttFlag1 = true;
            }
        });
        this.storage.ready().then(function () {
            _this.storage.get('userId').then(function (myid) {
                if (myid) {
                    _this.userSer.checkFollow(_this.personalId, myid).then(function (result) {
                        if (result.stageCode == 1) {
                            _this.followFlag = false;
                        }
                        else {
                            _this.followFlag = true;
                        }
                    });
                }
            });
        });
    };
    PersonalPage.prototype.zan = function (index) {
        var _this = this;
        this.workId = this.products[index].id;
        // console.log(this.workId+':作品的id');
        // console.log(this.myid+'：我的id');;
        if (this.myid) {
            this.zanFlag[index] = false;
            // console.log(this.zanFlag[index]+'：赞的flag');
            this.userSer.zan(this.workId, this.myid).then(function (data) {
                console.log(data);
            });
            this.products[index].thumb_numbers += 1;
        }
        else {
            //去登陆
            var alert_1 = this.alertCtrl.create({
                title: '你还没有登陆，要去登陆吗？',
                buttons: [
                    {
                        text: '取消',
                        role: '取消',
                        handler: function () {
                        }
                    },
                    {
                        text: '登陆',
                        handler: function () {
                            var modelPage = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
                            modelPage.present();
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    PersonalPage.prototype.unzan = function (index) {
        var _this = this;
        this.workId = this.products[index].id;
        // console.log(this.workId+':作品的id');
        // console.log(this.myid+'：我的id');;
        if (this.myid) {
            this.zanFlag[index] = true;
            // console.log(this.zanFlag[index]+'：赞的flag');
            this.userSer.unzan(this.workId, this.myid).then(function (data) {
                // console.log(data);
            });
            this.products[index].thumb_numbers -= 1;
        }
        else {
            //去登陆
            var alert_2 = this.alertCtrl.create({
                title: '你还没有登陆，要去登陆吗？',
                buttons: [
                    {
                        text: '取消',
                        role: '取消',
                        handler: function () {
                        }
                    },
                    {
                        text: '登陆',
                        handler: function () {
                            var modelPage = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
                            modelPage.present();
                        }
                    }
                ]
            });
            alert_2.present();
        }
    };
    PersonalPage.prototype.follow = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('userId').then(function (myid) {
                if (myid) {
                    _this.followFlag = false;
                    _this.userSer.follow(_this.personalId, myid).then(function (result) {
                        console.log(result);
                    });
                }
                else {
                    var alert_3 = _this.alertCtrl.create({
                        title: '你还没有登陆，要去登陆吗？',
                        buttons: [
                            {
                                text: '取消',
                                role: '取消',
                                handler: function () {
                                }
                            },
                            {
                                text: '登陆',
                                handler: function () {
                                    var modelPage = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
                                    modelPage.present();
                                }
                            }
                        ]
                    });
                    alert_3.present();
                }
            });
        });
    };
    PersonalPage.prototype.unfollow = function () {
        var _this = this;
        this.followFlag = true;
        this.storage.ready().then(function () {
            _this.storage.get('userId').then(function (myid) {
                _this.userSer.unfollow(_this.personalId, myid).then(function (result) {
                    console.log(result);
                });
            });
        });
    };
    PersonalPage.prototype.toMyFocus = function () {
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__my_focus_my_focus__["a" /* MyFocusPage */], { "personalId": this.personalId });
        modelPage.present();
    };
    PersonalPage.prototype.toMyFans = function () {
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__my_fans_my_fans__["a" /* MyFansPage */], { "personalId": this.personalId });
        modelPage.present();
    };
    PersonalPage.prototype.toMessageboard = function () {
        this.personalId = this.navParams.get('personalId');
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__message_board_message_board__["a" /* MessageBoardPage */], { "personal_id": this.personalId });
        modelPage.present();
    };
    PersonalPage.prototype.toRecipeDetail = function (id) {
        console.log(id);
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__recipe_detail_recipe_detail__["a" /* RecipeDetailPage */], { "recipeId": id });
        modelPage.present();
    };
    return PersonalPage;
}());
PersonalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-personal',template:/*ion-inline-start:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\personal\personal.html"*/'<!--\n  Generated template for the PersonalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-3>\n        <ion-icon name="arrow-back" (click)="back()" style="font-size: 25px !important; color: grey;"></ion-icon>\n      </ion-col>\n      <ion-col col-6 style="text-align: center">\n        <ion-note style="color: grey;font-size: 18px;">个人主页</ion-note>\n      </ion-col>\n      <!--<ion-col col-3 style="text-align: right" >-->\n      <!--<ion-note style="color: gold;font-size: 15px">保存</ion-note>-->\n      <!--</ion-col>-->\n    </ion-row>\n  </ion-grid>\n</ion-header>\n<ion-content>\n  <div class="blur-background">\n    <img class="blur" src="{{headpic}}" alt="">\n    <img class="user-icon" src="{{headpic}}" alt="">\n    <div class="blur-title">\n      <ion-icon name="female" style="color: pink;font-size: 20px"></ion-icon>\n      <!--叫我甜甜君-->\n      {{name}}\n    </div>\n    <div class="blur-subtitle"></div>\n    <div class="blur-subtitle">\n      <span>{{signature}}</span><br><br>\n      关注 <span (click)="toMyFocus()" style="color: gold">{{FoucsNum}}</span>&nbsp;&nbsp;&nbsp;粉丝 <span\n      (click)="toMyFans()" style="color: gold">{{Fans}}</span></div>\n  </div>\n  <ion-item padding="false">\n    <ion-row style="border-bottom:1px solid gainsboro">\n      <ion-col col-6 style="text-align: center">\n        <button ion-button *ngIf="followFlag" color="danger"  (click)="follow()" style="width: 72.8px!important;">关注</button>\n        <button ion-button *ngIf="!followFlag" color="dark" (click)="unfollow()">已关注</button>\n      </ion-col>\n      <ion-col col-6 style="text-align: center" (click)="toMessageboard()">\n        <button ion-button color="secondary" style="width: 72.8px!important;">留言</button>\n      </ion-col>\n    </ion-row>\n    <div style="text-align: center;margin-top: 20px">我的创作</div>\n    <!--<ion-row >\n      <ion-col col-4>\n        <div class="switch">菜谱</div>\n      </ion-col>\n    </ion-row>-->\n    <div padding>\n      <ion-segment [(ngModel)]="mycreate">\n        <ion-segment-button value="recipe" style="">\n          菜谱\n        </ion-segment-button>\n        <ion-segment-button value="menu">\n          菜单\n        </ion-segment-button>\n        <ion-segment-button value="product">\n          跟学作品\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n    <div [ngSwitch]="mycreate">\n      <ion-list *ngSwitchCase="\'recipe\'">\n        <ion-item *ngIf="norecipsFlag1">\n          <p class="hint">ta还没有创建过菜谱~</p>\n        </ion-item>\n        <ion-item *ngFor="let item of recipes2">\n          <ion-thumbnail item-start>\n            <img src="{{item.cover_pic}}" (click)="toRecipeDetail(item.id)" style="width: 130px!important;height: 86.6px!important;">\n          </ion-thumbnail>\n          <h2>{{item.name}}</h2>\n          <ion-note>做过{{item.cook_times}}次</ion-note>\n          <br>\n          <ion-note>被收藏{{item.collect_times}}次</ion-note>\n        </ion-item>\n      </ion-list>\n      <ion-list *ngSwitchCase="\'menu\'" >\n        <ion-item *ngIf="nomenuFlag1">\n          <p class="hint">ta还没有创建过菜单~</p>\n        </ion-item>\n        <ion-item *ngFor="let item2 of menus2">\n          <ion-thumbnail item-start>\n            <img src="{{item2.cover_pic}}"   style="width: 130px!important;height: 86.6px!important;">\n          </ion-thumbnail>\n          <h2>{{item2.name}}</h2>\n          <ion-note>{{item2.descripe}}</ion-note>\n          <ion-note>by {{item2.creater}}</ion-note>\n        </ion-item>\n      </ion-list>\n      <ion-list *ngSwitchCase="\'product\'" >\n        <ion-item *ngIf="noproducttFlag1">\n          <p class="hint">ta还没有上传过作品~</p>\n        </ion-item>\n        <ion-item *ngFor="let item of products;let first=first;let i=index">\n          <ion-thumbnail item-start>\n            <img src="{{item.cover_pic}}" style="width: 130px!important;height: 86.6px!important;">\n          </ion-thumbnail>\n          <h2>{{item.name}}</h2>\n          <ion-note>\n            <ion-icon *ngIf="zanFlag[i]" (click)="zan(i)" ios="ios-thumbs-up" md="md-thumbs-up"></ion-icon>\n            <ion-icon *ngIf="!zanFlag[i]" (click)="unzan(i)"  ios="ios-thumbs-up" style="color: #DD3915" md="md-thumbs-up"></ion-icon>\n            {{item.thumb_numbers}}个赞</ion-note>\n        </ion-item>\n      </ion-list>\n    </div>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\personal\personal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_6__providers_users_service__["a" /* UsersService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], PersonalPage);

//# sourceMappingURL=personal.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(251);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_me_me__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_modify_info_modify_info__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_setting_setting__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_my_focus_my_focus__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_my_fans_my_fans__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_message_board_message_board__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_or_register_login_or_register__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_register_register__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_login_login__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_search_search__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_search_result_search_result__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_personal_personal__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_modify_password_modify_password__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_create_recipe_create_recipe__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_create_recipe_detail_create_recipe_detail__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_recipe_detail_recipe_detail__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_add_to_menu_add_to_menu__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_create_menu_create_menu__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_menu_datail_menu_datail__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_post_detail_post_detail__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_menu_type_menu_type__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_charts_charts__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_hot_menu_hot_menu__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_hot_menus_hot_menus__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_new_menu_new_menu__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_new_menus_new_menus__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_upload_work_upload_work__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_splash_screen__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pipes_search_recipe_pipe__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pipes_orderby_collect_pipe_pipe__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pipes_orderby_time_pipe_pipe__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pipes_search_user_pipe_pipe__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pipes_orderbycollect_pipe__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pipes_orderbytime_pipe__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_positions_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_users_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_global_property_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_menu_service_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__providers_info_service_service__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__providers_recipe_service__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









 //修改

 //我关注的人
 //关注我的人















// 菜单，菜谱，分类，收藏
 //菜谱分类
 //排行榜
 //热门菜谱
 //热门菜单
 //最新菜谱
 //最新菜单
// 上传作品




//pipe




 //收藏排序
 //时间排序
//service







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_me_me__["a" /* MePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_post_detail_post_detail__["a" /* PostDetailPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_personal_personal__["a" /* PersonalPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_setting_setting__["a" /* SettingPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_modify_info_modify_info__["a" /* ModifyInfoPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_my_focus_my_focus__["a" /* MyFocusPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_my_fans_my_fans__["a" /* MyFansPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_message_board_message_board__["a" /* MessageBoardPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_login_or_register_login_or_register__["a" /* LoginOrRegisterPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_search_result_search_result__["a" /* SearchResultPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_38__pipes_search_recipe_pipe__["a" /* SearchRecipePipe */],
            __WEBPACK_IMPORTED_MODULE_39__pipes_orderby_collect_pipe_pipe__["a" /* OrderbyCollectPipePipe */],
            __WEBPACK_IMPORTED_MODULE_40__pipes_orderby_time_pipe_pipe__["a" /* OrderbyTimePipePipe */],
            __WEBPACK_IMPORTED_MODULE_41__pipes_search_user_pipe_pipe__["a" /* SearchUserPipePipe */],
            __WEBPACK_IMPORTED_MODULE_20__pages_modify_password_modify_password__["a" /* ModifyPasswordPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_menu_type_menu_type__["a" /* MenuTypePage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_charts_charts__["a" /* ChartsPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_hot_menu_hot_menu__["a" /* HotMenuPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_hot_menus_hot_menus__["a" /* HotMenusPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_new_menu_new_menu__["a" /* NewMenuPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_new_menus_new_menus__["a" /* NewMenusPage */],
            __WEBPACK_IMPORTED_MODULE_42__pipes_orderbycollect_pipe__["a" /* OrderbycollectPipe */],
            __WEBPACK_IMPORTED_MODULE_43__pipes_orderbytime_pipe__["a" /* OrderbytimePipe */],
            __WEBPACK_IMPORTED_MODULE_21__pages_create_recipe_create_recipe__["a" /* CreateRecipePage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_create_recipe_detail_create_recipe_detail__["a" /* CreateRecipeDetailPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_recipe_detail_recipe_detail__["a" /* RecipeDetailPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_add_to_menu_add_to_menu__["a" /* AddToMenuPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_create_menu_create_menu__["a" /* CreateMenuPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_menu_datail_menu_datail__["a" /* MenuDatailPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_upload_work_upload_work__["a" /* UploadWorkPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/add-to-menu/add-to-menu.module#AddToMenuPageModule', name: 'AddToMenuPage', segment: 'add-to-menu', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/create-menu/create-menu.module#CreateMenuPageModule', name: 'CreateMenuPage', segment: 'create-menu', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/create-recipe-detail/create-recipe-detail.module#CreateRecipeDetailPageModule', name: 'CreateRecipeDetailPage', segment: 'create-recipe-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/create-recipe/create-recipe.module#CreateRecipePageModule', name: 'CreateRecipePage', segment: 'create-recipe', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login-or-register/login-or-register.module#LoginOrRegisterPageModule', name: 'LoginOrRegisterPage', segment: 'login-or-register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/menu-datail/menu-datail.module#MenuDatailPageModule', name: 'MenuDatailPage', segment: 'menu-datail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/message-board/message-board.module#MessageBoardPageModule', name: 'MessageBoardPage', segment: 'message-board', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modify-info/modify-info.module#ModifyInfoPageModule', name: 'ModifyInfoPage', segment: 'modify-info', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modify-password/modify-password.module#ModifyPasswordPageModule', name: 'ModifyPasswordPage', segment: 'modify-password', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/my-fans/my-fans.module#MyFansPageModule', name: 'MyFansPage', segment: 'my-fans', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/my-focus/my-focus.module#MyFocusPageModule', name: 'MyFocusPage', segment: 'my-focus', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/recipe-detail/recipe-detail.module#RecipeDetailPageModule', name: 'RecipeDetailPage', segment: 'recipe-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/search-result/search-result.module#SearchResultPageModule', name: 'SearchResultPage', segment: 'search-result', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/upload-work/upload-work.module#UploadWorkPageModule', name: 'UploadWorkPage', segment: 'upload-work', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_37__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_44__angular_common_http__["b" /* HttpClientModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_me_me__["a" /* MePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_post_detail_post_detail__["a" /* PostDetailPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_personal_personal__["a" /* PersonalPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_setting_setting__["a" /* SettingPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_modify_info_modify_info__["a" /* ModifyInfoPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_my_focus_my_focus__["a" /* MyFocusPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_my_fans_my_fans__["a" /* MyFansPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_message_board_message_board__["a" /* MessageBoardPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_login_or_register_login_or_register__["a" /* LoginOrRegisterPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_search_result_search_result__["a" /* SearchResultPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_modify_password_modify_password__["a" /* ModifyPasswordPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_menu_type_menu_type__["a" /* MenuTypePage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_charts_charts__["a" /* ChartsPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_hot_menu_hot_menu__["a" /* HotMenuPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_hot_menus_hot_menus__["a" /* HotMenusPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_new_menu_new_menu__["a" /* NewMenuPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_new_menus_new_menus__["a" /* NewMenusPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_create_recipe_create_recipe__["a" /* CreateRecipePage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_create_recipe_detail_create_recipe_detail__["a" /* CreateRecipeDetailPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_recipe_detail_recipe_detail__["a" /* RecipeDetailPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_add_to_menu_add_to_menu__["a" /* AddToMenuPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_create_menu_create_menu__["a" /* CreateMenuPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_menu_datail_menu_datail__["a" /* MenuDatailPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_upload_work_upload_work__["a" /* UploadWorkPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_35__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_36__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_45__providers_positions_service__["a" /* PositionsService */],
            __WEBPACK_IMPORTED_MODULE_46__providers_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_47__providers_global_property_service__["a" /* GlobalPropertyService */],
            __WEBPACK_IMPORTED_MODULE_48__providers_menu_service_service__["a" /* MenuServiceService */],
            __WEBPACK_IMPORTED_MODULE_49__providers_info_service_service__["a" /* InfoServiceService */],
            __WEBPACK_IMPORTED_MODULE_50__providers_recipe_service__["a" /* RecipeService */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginOrRegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginOrRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginOrRegisterPage = (function () {
    function LoginOrRegisterPage(navCtrl, navParams, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
    }
    LoginOrRegisterPage.prototype.toLogin = function () {
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        modelPage.present();
    };
    LoginOrRegisterPage.prototype.toRegister = function () {
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
        modelPage.present();
    };
    LoginOrRegisterPage.prototype.toHomepage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
        this.viewCtrl.dismiss();
    };
    LoginOrRegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginOrRegisterPage');
    };
    return LoginOrRegisterPage;
}());
LoginOrRegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login-or-register',template:/*ion-inline-start:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\login-or-register\login-or-register.html"*/'<!--\n  Generated template for the LoginOrRegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding>\n  <ion-slides style="height:80%;" pager>\n\n    <ion-slide style="background-color: white">\n      <h2>开始准备好好吃饭</h2>\n      <p>好好吃饭用心生活，比什么都幸福，保存你最喜欢的美食，分享你的三餐，关注厨房里的达人</p>\n    </ion-slide>\n\n    <ion-slide style="background-color: white">\n      <h2>slide2</h2>\n    </ion-slide>\n\n    <ion-slide style="background-color: white">\n      <h2>slide3</h2>\n    </ion-slide>\n  </ion-slides>\n  <div style="height:20%;text-align: center">\n    <div class="btns" style="overflow: hidden; padding-top:30px; text-align: center">\n      <button ion-button color="danger"  (click)="toLogin()" >登录</button>\n      <button ion-button color="danger" (click)="toRegister()" >注册</button>\n    </div>\n    <button ion-button color="danger" clear (click)="toHomepage()">先去看看</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\login-or-register\login-or-register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
], LoginOrRegisterPage);

//# sourceMappingURL=login-or-register.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_or_register_login_or_register__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, storage) {
        var _this = this;
        this.storage = storage;
        platform.ready().then(function () {
            _this.storage.ready().then(function () {
                _this.storage.get('isLogin').then(function (val) {
                    console.log(val);
                    if (val) {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
                    }
                    else {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_or_register_login_or_register__["a" /* LoginOrRegisterPage */];
                    }
                });
            });
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_positions_service__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PostDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PostDetailPage = (function () {
    function PostDetailPage(navCtrl, navParams, viewCtrl, positionSer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.positionSer = positionSer;
        this.pet = 'kittens';
    }
    PostDetailPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var id = this.navParams.get('post_id');
        this.positionSer.getPositionById(id).then(function (post) {
            _this.post = post;
            console.log(post);
        });
    };
    PostDetailPage.prototype.back = function () {
        this.navCtrl.pop();
        // this.navCtrl.push(TabsPage);
        // this.viewCtrl.dismiss({"newName":"lzhan"});
    };
    PostDetailPage.prototype.closeView = function () {
        this.viewCtrl.dismiss();
    };
    PostDetailPage.prototype.ionViewWillLeave = function () {
        console.log('detail----444444444');
    };
    return PostDetailPage;
}());
PostDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-post-detail',template:/*ion-inline-start:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\post-detail\post-detail.html"*/'<!--\n  Generated template for the PostDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <button ion-button (click)="back()">back</button>\n  <button ion-button (click)="closeView()">close</button>\n\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="pet">\n      <ion-segment-button value="puppies">\n        Puppies\n      </ion-segment-button>\n      <ion-segment-button value="kittens">\n        Kittens\n      </ion-segment-button>\n      <ion-segment-button value="ducklings">\n        Ducklings\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <h1>{{post?.name}}</h1>\n  <div [ngSwitch]="pet">\n    <ion-list *ngSwitchCase="\'puppies\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-puppy-1.jpg">\n        </ion-thumbnail>\n        <h2>Ruby</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-puppy-2.jpg">\n        </ion-thumbnail>\n        <h2>Oscar</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-puppy-4.jpg">\n        </ion-thumbnail>\n        <h2>Zoey</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-puppy-3.jpg">\n        </ion-thumbnail>\n        <h2>Otto</h2>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'kittens\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-kitten-1.jpg">\n        </ion-thumbnail>\n        <h2>Luna</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-kitten-3.jpg">\n        </ion-thumbnail>\n        <h2>Milo</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-kitten-4.jpg">\n        </ion-thumbnail>\n        <h2>Bandit</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-kitten-2.jpg">\n        </ion-thumbnail>\n        <h2>Nala</h2>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'ducklings\'">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-duckling-1.jpg">\n        </ion-thumbnail>\n        <h2>Daffy</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-duckling-2.jpg">\n        </ion-thumbnail>\n        <h2>Huey</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-duckling-3.jpg">\n        </ion-thumbnail>\n        <h2>Dewey</h2>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img src="assets/img/thumbnail-duckling-4.jpg">\n        </ion-thumbnail>\n        <h2>Louie</h2>\n      </ion-item>\n    </ion-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\post-detail\post-detail.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_positions_service__["a" /* PositionsService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_positions_service__["a" /* PositionsService */]])
], PostDetailPage);

//# sourceMappingURL=post-detail.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchRecipePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchRecipePipe = (function () {
    function SearchRecipePipe() {
    }
    SearchRecipePipe.prototype.transform = function (value, args) {
        if (args) {
            if (value) {
                var new_recipe = value.filter(function (menu, index) {
                    // console.log(menu.name);
                    if (menu.name.indexOf(args) != -1) {
                        return menu;
                    }
                });
            }
            return new_recipe;
        }
        else {
            return value;
        }
    };
    return SearchRecipePipe;
}());
SearchRecipePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'searchRecipe',
    })
], SearchRecipePipe);

//# sourceMappingURL=search-recipe.pipe.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuDatailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__personal_personal__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_menu_service_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recipe_detail_recipe_detail__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {UsersService} from '../../providers/users.service';





/**
 * Generated class for the MenuDatailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuDatailPage = (function () {
    function MenuDatailPage(navCtrl, navParams, storage, 
        // private userSer: UsersService,
        modalCtrl, MenuD, toastCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.MenuD = MenuD;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.menuId = this.navParams.get('menuId');
        this.storage.ready().then(function () {
            _this.storage.get('userId').then(function (myid) {
                _this.myid = myid;
            });
        });
    }
    MenuDatailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.MenuD.getMenudetail(this.menuId).then(function (data) {
            console.log(data);
            if (data.length > 0) {
                // this.menuDetails=data;
                _this.menu_name = data[0].name;
                _this.menu_collect_times = data[0].collect_times;
                _this.menu_descripe = data[0].descripe;
                _this.menu_creater = data[0].creater;
                _this.details = data.length;
                _this.menu_create_time = data[0].creater_time.substring(0, 10);
                _this.menu_creater_id = data[0].creater_id;
                _this.menu_usericon = data[0].user_icon;
                _this.menu_recipe = data;
                if (_this.menu_creater_id == _this.myid) {
                    _this.delFlag = true;
                }
                else {
                    _this.delFlag = false;
                }
            }
        });
    };
    MenuDatailPage.prototype.toRecipeDetail1 = function (id) {
        // console.log(id);
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__recipe_detail_recipe_detail__["a" /* RecipeDetailPage */], { "recipeId": id });
        modelPage.present();
    };
    MenuDatailPage.prototype.toPersonal1 = function (personalId) {
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__personal_personal__["a" /* PersonalPage */], { "personalId": personalId });
        modelPage.present();
    };
    MenuDatailPage.prototype.delRecipeFromMenu = function (recipeid) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '你确定要移除该菜谱吗?',
            buttons: [
                {
                    text: '取消',
                    role: '取消',
                    handler: function () {
                        // console.log('取消删除');
                    }
                },
                {
                    text: '删除',
                    handler: function () {
                        // console.log('确定删除');
                        _this.MenuD.delRecipeFromMenu(recipeid, _this.menuId).then(function (data) {
                            console.log(data);
                            if (data.stageCode == 1) {
                                //删除成功则重新获取一次菜单中的的菜谱
                                _this.MenuD.getMenudetail(_this.menuId).then(function (data) {
                                    console.log(data);
                                    if (data.length > 0) {
                                        _this.menu_recipe = data;
                                        if (_this.menu_creater_id == _this.myid) {
                                            _this.delFlag = true;
                                        }
                                        else {
                                            _this.delFlag = false;
                                        }
                                    }
                                    else {
                                        //该菜单中没有菜谱的情况还没写。。。
                                    }
                                    var toast = _this.toastCtrl.create({
                                        message: '该菜谱已从这个菜单移除',
                                        duration: 3000,
                                        position: 'bottom'
                                    });
                                    toast.onDidDismiss(function () {
                                        // console.log('删除成功');
                                    });
                                    toast.present();
                                });
                            }
                            else {
                                //删除失败
                                var toast = _this.toastCtrl.create({
                                    message: '移除菜谱失败',
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                toast.onDidDismiss(function () {
                                    // console.log('删除失败');
                                });
                                toast.present();
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    MenuDatailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuDatailPage');
    };
    MenuDatailPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    return MenuDatailPage;
}());
MenuDatailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-menu-datail',template:/*ion-inline-start:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\menu-datail\menu-datail.html"*/'<!--\n  Generated template for the MenuDatailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-3>\n        <ion-icon name="arrow-back" (click)="back()" style="font-size: 25px !important; color: grey;"></ion-icon>\n      </ion-col>\n      <ion-col col-6 style="text-align: center">\n        <ion-note style="color: grey;font-size: 18px;">菜单详情</ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n<ion-content>\n  <ion-row>\n    <ion-col col-12>\n      <p style="color: #333333;font-size: 25px;text-align: center">{{menu_name}}</p>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-12>\n      <p style="color: #999999; font-size: 13px;text-align: center"  (click)="toPersonal1(menu_creater_id)">\n        来自: <span style="color: #DD3915">{{menu_creater}}</span>\n      </p>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-12>\n      <p style=" font-size:17px;text-align: center">{{menu_descripe}}</p>\n    </ion-col>\n  </ion-row>\n  <hr>\n\n  <ion-list>\n    <ion-item *ngFor="let item of menu_recipe">\n      <img src="{{item.recipe_pic}}" (click)="toRecipeDetail1(item.id)" alt="">\n      <ion-row>\n        <ion-col col-11 (click)="toRecipeDetail1(item.id)">\n          {{item.recipe_name}}\n        </ion-col>\n        <ion-col col-1="">\n          <ion-icon *ngIf="delFlag" ios="ios-trash-outline" md="md-trash" (click)="delRecipeFromMenu(item.id)" style="color: #999999;"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <ion-note>被做过{{item.cook_times}}次</ion-note>\n        </ion-col>\n        <ion-col col-6 style="text-align: right">\n          <ion-note (click)="toPersonal1(item.recipe_creater_id)">by:{{item.recipe_creater}}</ion-note>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\menu-datail\menu-datail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_menu_service_service__["a" /* MenuServiceService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], MenuDatailPage);

//# sourceMappingURL=menu-datail.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderbyCollectPipePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderbyCollectPipePipe = (function () {
    function OrderbyCollectPipePipe() {
    }
    OrderbyCollectPipePipe.prototype.transform = function (menu, args) {
        var new_menus = [];
        new_menus = menu;
        if (new_menus) {
            new_menus.sort(function (a, b) {
                return b.collect_times - a.collect_times;
            });
        }
        // console.log(new_menus);
        return new_menus;
    };
    return OrderbyCollectPipePipe;
}());
OrderbyCollectPipePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'orderbyCollectPipe'
    })
], OrderbyCollectPipePipe);

//# sourceMappingURL=orderby-collect-pipe.pipe.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderbyTimePipePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderbyTimePipePipe = (function () {
    function OrderbyTimePipePipe() {
    }
    OrderbyTimePipePipe.prototype.transform = function (menu, args) {
        var new_menus = new Array();
        new_menus = menu;
        if (new_menus) {
            new_menus.sort(function (a, b) {
                return Date.parse(b.create_time) - Date.parse(a.create_time);
            });
        }
        // console.log(new_menus);
        return new_menus;
    };
    return OrderbyTimePipePipe;
}());
OrderbyTimePipePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'orderbyTimePipe'
    })
], OrderbyTimePipePipe);

//# sourceMappingURL=orderby-time-pipe.pipe.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchUserPipePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchUserPipePipe = (function () {
    function SearchUserPipePipe() {
    }
    SearchUserPipePipe.prototype.transform = function (value, args) {
        // console.log(value);
        if (args) {
            if (value) {
                var new_user = value.filter(function (user, index) {
                    // console.log(menu.name);
                    if (user.name.indexOf(args) != -1) {
                        return user;
                    }
                });
            }
            return new_user;
        }
        else {
            return value;
        }
    };
    return SearchUserPipePipe;
}());
SearchUserPipePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'searchUserPipe'
    })
], SearchUserPipePipe);

//# sourceMappingURL=search-user-pipe.pipe.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderbycollectPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderbycollectPipe = (function () {
    function OrderbycollectPipe() {
    }
    OrderbycollectPipe.prototype.transform = function (menus, args) {
        this.new_menus = menus;
        if (this.new_menus) {
            this.new_menus.sort(function (a, b) {
                return b.collect_times - a.collect_times;
            });
        }
        // console.log(this.new_menus);
        return this.new_menus;
    };
    return OrderbycollectPipe;
}());
OrderbycollectPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'orderbycollect'
    })
], OrderbycollectPipe);

//# sourceMappingURL=orderbycollect.pipe.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderbytimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderbytimePipe = (function () {
    function OrderbytimePipe() {
    }
    OrderbytimePipe.prototype.transform = function (menus, args) {
        this.new_menus = menus;
        if (this.new_menus) {
            this.new_menus.sort(function (a, b) {
                // console.log(this.new_menus);
                return Date.parse(b.create_time) - Date.parse(a.create_time);
            });
        }
        return this.new_menus;
    };
    return OrderbytimePipe;
}());
OrderbytimePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'orderbytime'
    })
], OrderbytimePipe);

//# sourceMappingURL=orderbytime.pipe.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_hot_menu_hot_menu__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_hot_menus_hot_menus__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_new_menu_new_menu__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_new_menus_new_menus__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_recipe_detail_recipe_detail__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_menu_datail_menu_datail__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_menu_service_service__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ChartsPage = (function () {
    function ChartsPage(navCtrl, modalCtrl, MenuD, viewCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.MenuD = MenuD;
        this.viewCtrl = viewCtrl;
    }
    ChartsPage.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    ChartsPage.prototype.hotMenu = function () {
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__pages_hot_menu_hot_menu__["a" /* HotMenuPage */]);
        modelPage.present();
    };
    ChartsPage.prototype.hotMenus = function () {
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__pages_hot_menus_hot_menus__["a" /* HotMenusPage */]);
        modelPage.present();
    };
    ChartsPage.prototype.newMenu = function () {
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_new_menu_new_menu__["a" /* NewMenuPage */]);
        modelPage.present();
    };
    ChartsPage.prototype.newMenus = function () {
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_new_menus_new_menus__["a" /* NewMenusPage */]);
        modelPage.present();
    };
    ChartsPage.prototype.ngOnInit = function () {
        var that = this;
        that.MenuD.getIndexMenu(function (result) {
            that.AllMenush = result;
        });
        that.MenuD.getIndex(function (result) {
            that.Alllistsh = result;
        });
        that.MenuD.getIndexMenu(function (result) {
            that.AllMenus = result;
        });
        that.MenuD.getIndex(function (result) {
            that.Alllists = result;
        });
    };
    ChartsPage.prototype.toRecipeDetail = function (id) {
        // console.log(id);
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__pages_recipe_detail_recipe_detail__["a" /* RecipeDetailPage */], { "recipeId": id });
        modelPage.present();
    };
    ChartsPage.prototype.toMenuDetail = function (id) {
        console.log(id);
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__pages_menu_datail_menu_datail__["a" /* MenuDatailPage */], { "menuId": id });
        modelPage.present();
    };
    return ChartsPage;
}());
ChartsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-charts',template:/*ion-inline-start:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\charts\charts.html"*/'\n<ion-header class="charts">\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n        <ion-icon name="arrow-back" (click)="back()" style="font-size: 30px !important; color: black;"></ion-icon>\n      </ion-col>\n      <ion-col col-4>\n        <ion-note>排行榜</ion-note>\n      </ion-col>\n      <ion-col col-4  >\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-header>\n\n\n<ion-content class="menu-hot charts" padding>\n\n  <div class="menu">\n    <div class="menu-h">热门菜谱</div>\n    <div class="menu-more" ><a (click)="hotMenu()">查看更多</a></div>\n  </div>\n\n  <ion-slides class="lunbo"   >\n    <ion-slide *ngFor="let item4 of AllMenush |orderbycollect ">\n      <a (click)="toRecipeDetail(item4.id)"><img style="" src="{{item4?.cover_pic}}"></a>\n      <div class="info">\n        <header class="title">{{item4?.name}}</header>\n      </div>\n    </ion-slide>\n\n  </ion-slides>\n\n  <div class="menu">\n    <div class="menu-h">热门菜单</div>\n    <div class="menu-more"><a (click)="hotMenus()">查看更多</a></div>\n  </div>\n  <ion-slides class="lunbo"  >\n    <ion-slide  *ngFor="let item1 of Alllistsh |orderbycollect ">\n      <a ><img src="{{item1.cover_pic}}" (click)="toMenuDetail(item1.id)"></a>\n      <div class="info">\n        <header class="title">{{item1.name}}</header>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n\n  <div class="menu">\n    <div class="menu-h">最新菜谱</div>\n    <div class="menu-more"><a (click)="newMenu()">查看更多</a></div>\n  </div>\n  <ion-slides class="lunbo"  >\n    <ion-slide *ngFor="let item3 of  AllMenus |orderbytime ">\n      <a (click)="toRecipeDetail(item3.id)"><img src="{{item3.cover_pic}}" height="136" width="215"/></a>\n      <div class="info">\n        <header class="title">{{item3.name}}</header>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n  <div class="menu">\n    <div class="menu-h" >最新菜单</div>\n    <div class="menu-more"><a (click)="newMenus()">查看更多</a></div>\n  </div>\n  <ion-slides class="lunbo"  >\n    <ion-slide *ngFor="let item2 of Alllists |orderbytime" (click)="toMenuDetail(item2.id)">\n      <a > <img src="{{item2?.cover_pic}}"></a>\n      <div class="info">\n        <header class="title">{{item2?.name}}</header>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\charts\charts.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_8__providers_menu_service_service__["a" /* MenuServiceService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_8__providers_menu_service_service__["a" /* MenuServiceService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
], ChartsPage);

//# sourceMappingURL=charts.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecipeService = (function () {
    function RecipeService(http, storage) {
        this.http = http;
        this.storage = storage;
        // url:string='http://10.40.4.3:3000/menu';
        // url:string='http://47.94.165.179:3000/menu';
        this.url = 'http://localhost:3000/menu';
    }
    RecipeService.prototype.getDetails = function (id) {
        // console.log(id + '------------->Service');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "id": id + '' });
        // console.log(headers);
        return this.http.get(this.url + '/details', { headers: headers }).toPromise().then(function (data) {
            return data;
        });
    };
    RecipeService.prototype.getSteps = function (id) {
        // console.log(id + '------------->Service');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "id": id + '' });
        // console.log(headers);
        return this.http.get(this.url + '/steps', { headers: headers }).toPromise().then(function (data) {
            return data;
        });
    };
    RecipeService.prototype.getMenuWorks = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "id": id + '' });
        return this.http.get(this.url + '/Menuworks', { headers: headers }).toPromise().then(function (data) {
            return data;
        });
    };
    RecipeService.prototype.getMenuLists = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "id": id + '' });
        return this.http.get(this.url + '/Menulists', { headers: headers }).toPromise().then(function (data) {
            return data;
        });
    };
    RecipeService.prototype.addMenu = function (recipeid, menuid) {
        return this.http.post(this.url + '/addRintoList', { 'recipe_id': recipeid, 'list_id': menuid }).toPromise().then(function (data) {
            return data;
        });
    };
    RecipeService.prototype.delRfromL = function (recipeid, menuid) {
        return this.http.post(this.url + '/deleteRfromList', { 'recipe_id': recipeid, 'list_id': menuid }).toPromise().then(function (data) {
            return data;
        });
    };
    RecipeService.prototype.getMenuDetails = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ "id": id + '' });
        return this.http.get(this.url + '/Menudetails', { headers: headers }).toPromise().then(function (data) {
            return data;
        });
    };
    RecipeService.prototype.checkcollect = function (recipeid, userid) {
        return this.http.post(this.url + '/checkCollect', { 'reciper_id': recipeid, 'user_id': userid }).toPromise().then(function (data) {
            return data;
        });
    };
    RecipeService.prototype.collectRecipe = function (recipeid, userid) {
        return this.http.post(this.url + '/collectReciper', { 'reciper_id': recipeid, 'user_id': userid }).toPromise().then(function (data) {
            return data;
        });
    };
    RecipeService.prototype.uncollectRecipe = function (recipeid, userid) {
        return this.http.post(this.url + '/UncollectReciper', { 'reciper_id': recipeid, 'user_id': userid }).toPromise().then(function (data) {
            return data;
        });
    };
    RecipeService.prototype.addList = function (formData) {
        return this.http.post(this.url + '/addList', formData).toPromise().then(function (result) {
            return result;
        });
    };
    RecipeService.prototype.addPersonalWorks = function (formData) {
        return this.http.post(this.url + '/addPersonalWork', formData).toPromise().then(function (data) {
            return data;
        });
    };
    return RecipeService;
}());
RecipeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], RecipeService);

//# sourceMappingURL=recipe.service.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modify_info_modify_info__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_focus_my_focus__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_fans_my_fans__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__setting_setting__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__message_board_message_board__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_users_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_or_register_login_or_register__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__recipe_detail_recipe_detail__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__create_recipe_create_recipe__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__menu_datail_menu_datail__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__about_about__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















/**
 * Generated class for the MePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MePage = (function () {
    function MePage(navCtrl, navParams, modalCtrl, storage, userSer, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.userSer = userSer;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.mycreate = 'recipe';
    }
    MePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // console.log('ionViewDidLoad PersonalPage');
        this.storage.ready().then(function () {
            _this.storage.get('userId').then(function (val) {
                // console.log(user_id);
                if (!val) {
                    var modelPage = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__login_or_register_login_or_register__["a" /* LoginOrRegisterPage */]);
                    modelPage.present();
                }
                else {
                    _this.userSer.getMyInfo(val).then(function (data) {
                        // console.log(data);
                        if (data) {
                            _this.headpic = data[0].user_icon;
                            _this.myname = data[0].name;
                            _this.mySex = data[0].name;
                            _this.mysignature = data[0].signature;
                        }
                        // console.log(this.headpic);
                    });
                    _this.userSer.getFocus(val).then(function (data) {
                        _this.myFoucsNum = data.length;
                    });
                    _this.userSer.getFans(val).then(function (data) {
                        _this.myFans = data.length;
                        // console.log(this.myFans+'个粉丝');
                    });
                    _this.userSer.getMenu(val).then(function (data) {
                        if (data.length > 0) {
                            _this.recipes2 = data;
                            // console.log(this.recipes2);
                            _this.norecipsFlag = false;
                        }
                        else {
                            _this.norecipsFlag = true;
                        }
                    });
                    _this.userSer.getMenuGather(val).then(function (data) {
                        if (data.length) {
                            _this.menus2 = data;
                            // console.log(this.menus2);
                            _this.nomenuFlag = false;
                        }
                        else {
                            _this.nomenuFlag = true;
                        }
                    });
                    _this.userSer.getPersonalWoks(val).then(function (data) {
                        if (data.length > 0) {
                            _this.products = data;
                            // console.log(this.products);
                            _this.noproducttFlag = false;
                        }
                        else {
                            _this.noproducttFlag = true;
                        }
                    });
                }
            });
        });
    };
    MePage.prototype.toCreate = function () {
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__create_recipe_create_recipe__["a" /* CreateRecipePage */]);
        modelPage.present();
    };
    MePage.prototype.toAbout = function (id) {
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_13__about_about__["a" /* AboutPage */], { "personalId": id });
        modelPage.present();
    };
    MePage.prototype.toRecipeDetail = function (id) {
        // console.log(id);
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__recipe_detail_recipe_detail__["a" /* RecipeDetailPage */], { "recipeId": id });
        modelPage.present();
    };
    MePage.prototype.toMenuDetail = function (id) {
        // console.log(id);
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__menu_datail_menu_datail__["a" /* MenuDatailPage */], { "menuId": id });
        modelPage.present();
    };
    MePage.prototype.tomModifyInfo = function () {
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modify_info_modify_info__["a" /* ModifyInfoPage */]);
        modelPage.present();
    };
    MePage.prototype.toMyFocus = function () {
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__my_focus_my_focus__["a" /* MyFocusPage */]);
        modelPage.present();
    };
    MePage.prototype.toMyFans = function () {
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__my_fans_my_fans__["a" /* MyFansPage */]);
        modelPage.present();
    };
    MePage.prototype.toSetting = function () {
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__setting_setting__["a" /* SettingPage */]);
        modelPage.present();
    };
    MePage.prototype.toMessageboard = function () {
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__message_board_message_board__["a" /* MessageBoardPage */]);
        modelPage.present();
    };
    MePage.prototype.delWork = function (index) {
        var _this = this;
        this.workid = this.products[index].id;
        var alert = this.alertCtrl.create({
            title: '你确定要删除该作品吗?',
            buttons: [
                {
                    text: '取消',
                    role: '取消',
                    handler: function () {
                        // console.log('取消删除');
                    }
                },
                {
                    text: '删除',
                    handler: function () {
                        // console.log('确定删除');
                        _this.userSer.delWork(_this.workid).then(function (data) {
                            console.log(data);
                            if (data.stageCode == 1) {
                                //删除成功则重新获取一次所有作品
                                _this.storage.ready().then(function () {
                                    _this.storage.get('userId').then(function (myid) {
                                        // console.log(myid);
                                        if (myid) {
                                            _this.userSer.getPersonalWoks(myid).then(function (data) {
                                                if (data.length > 0) {
                                                    _this.products = data;
                                                    // console.log(this.products);
                                                    _this.noproducttFlag = false;
                                                }
                                                else {
                                                    _this.noproducttFlag = true;
                                                }
                                            });
                                        }
                                    });
                                });
                                var toast = _this.toastCtrl.create({
                                    message: '该作品删除成功',
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                toast.onDidDismiss(function () {
                                    // console.log('删除成功');
                                });
                                toast.present();
                            }
                            else {
                                //删除失败
                                var toast = _this.toastCtrl.create({
                                    message: '删除留言失败',
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                toast.onDidDismiss(function () {
                                    // console.log('删除失败');
                                });
                                toast.present();
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    return MePage;
}());
MePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-me',template:/*ion-inline-start:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\me\me.html"*/'<!--\n  Generated template for the MePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n        <ion-icon name="add" style="font-size: 25px !important; color: grey;" (click)="toCreate()"></ion-icon>\n      </ion-col>\n      <ion-col col-4 style="text-align: center">\n        <ion-note style="color: grey;font-size: 22px;">我的</ion-note>\n      </ion-col>\n      <ion-col col-4 style="text-align: right">\n        <ion-icon name="ios-settings-outline" (click)="toSetting()" style="color: #2d2d2d;font-size: 27px"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content>\n  <div class="blur-background">\n<!--    <img class="blur" src="../../assets/img/dog.jpg" (click)="tomModifyInfo()" alt="">\n    <img class="user-icon" src="../../assets/img/dog.jpg" alt="">-->\n    <img class="blur" src="{{headpic}}" (click)="tomModifyInfo()" alt="">\n    <img class="user-icon" src="{{headpic}}" alt="">\n    <div class="modify" (click)="tomModifyInfo()">\n      <ion-icon name="create" style="font-size: 15px;color: #ffffff">编辑资料</ion-icon>\n    </div>\n    <div class="blur-title">\n      <ion-icon name="female" style="color: pink;font-size: 20px"></ion-icon>\n      <!--叫我甜甜君-->\n      {{myname}}\n    </div>\n    <div class="blur-subtitle"></div>\n    <div class="blur-subtitle">\n      <span>{{mysignature}}</span><br><br>\n      关注 <span (click)="toMyFocus()" style="color: gold">{{myFoucsNum}}</span>&nbsp;&nbsp;&nbsp;粉丝 <span\n      (click)="toMyFans()" style="color: gold">{{myFans}}</span></div>\n  </div>\n  <ion-item padding="false">\n    <ion-row style="border-bottom:1px solid gainsboro">\n      <ion-col  col-6 style="text-align: center" (click)="toAbout()">\n        <ion-icon name="ios-heart-outline" style="color: #DD3915;font-size: 30px"></ion-icon>\n        <br>\n        <ion-note style="color: grey" >我的收藏</ion-note>\n      </ion-col>\n      <ion-col col-6 style="text-align: center" (click)="toMessageboard()">\n        <ion-icon name="ios-create-outline" style="color: #DD3915;font-size: 30px"></ion-icon>\n        <br>\n        <ion-note style="color: grey">留言板</ion-note>\n      </ion-col>\n    </ion-row>\n    <div style="text-align: center;margin-top: 20px">我的创作</div>\n    <!--<ion-row >\n      <ion-col col-4>\n        <div class="switch">菜谱</div>\n      </ion-col>\n    </ion-row>-->\n    <div padding>\n      <ion-segment [(ngModel)]="mycreate">\n        <ion-segment-button value="recipe" style="">\n          菜谱\n        </ion-segment-button>\n        <ion-segment-button value="menu">\n          菜单\n        </ion-segment-button>\n        <ion-segment-button value="product">\n          跟学作品\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n    <div [ngSwitch]="mycreate">\n      <ion-list  *ngSwitchCase="\'recipe\'">\n        <ion-item  *ngIf="norecipsFlag">\n          <p class="hint">你还没有创建过菜谱~</p>\n        </ion-item>\n        <ion-item *ngFor="let item of recipes2">\n          <ion-thumbnail item-start>\n            <img src="{{item.cover_pic}}"  (click)="toRecipeDetail(item.id)" style="width: 130px!important;height: 86.6px!important;">\n          </ion-thumbnail>\n          <h2>{{item.name}}</h2>\n          <ion-note>做过{{item.cook_times}}次</ion-note>\n          <br>\n          <ion-note>被收藏{{item.collect_times}}次</ion-note>\n        </ion-item>\n      </ion-list>\n      <ion-list *ngSwitchCase="\'menu\'" >\n        <ion-item *ngIf="nomenuFlag">\n          <p class="hint">你还没有创建过菜单~</p>\n        </ion-item>\n        <ion-item *ngFor="let item2 of menus2">\n          <ion-thumbnail item-start>\n            <img src="{{item2.cover_pic}}" (click)="toMenuDetail(item2.id)" style="width: 130px!important;height: 86.6px!important;">\n          </ion-thumbnail>\n          <h2>{{item2.name}}</h2>\n          <ion-note>{{item2.descripe}}</ion-note>\n          <ion-note>by {{item2.creater}}</ion-note>\n        </ion-item>\n      </ion-list>\n      <ion-list *ngSwitchCase="\'product\'" >\n        <ion-item *ngIf="noproducttFlag">\n          <p class="hint">你还没有上传过作品~</p>\n        </ion-item>\n        <ion-item *ngFor="let item of products;let first=first;let i=index">\n          <ion-thumbnail item-start>\n            <img src="{{item.cover_pic}}" style="width: 130px!important;height: 86.6px!important;">\n          </ion-thumbnail>\n          <h2>{{item.name}}</h2>\n          <ion-note>\n            {{item.thumb_numbers}}个赞</ion-note>\n          <ion-icon ios="ios-trash-outline" md="md-trash" (click)="delWork(i)" style="color: #999999;"></ion-icon>\n        </ion-item>\n      </ion-list>\n    </div>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\me\me.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_8__providers_users_service__["a" /* UsersService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], MePage);

//# sourceMappingURL=me.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__me_me__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage(navParma) {
        this.navParma = navParma;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__me_me__["a" /* MePage */];
    }
    TabsPage.prototype.ionViewLoaded = function () {
        var i = this.navParma.get('i') || 0;
        this.tabRef.select(i);
        var id = this.navParma.get('userId') + this.navParma.get('name');
        console.log(id);
    };
    TabsPage.prototype.goPerson = function () {
        console.log('haha');
    };
    return TabsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('rootTabs'),
    __metadata("design:type", Object)
], TabsPage.prototype, "tabRef", void 0);
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\tabs\tabs.html"*/'<!--<ion-tabs selectedIndex="3" #rootTabs>-->\n<ion-tabs #rootTabs>\n  <ion-tab  [root]="tab1Root" tabTitle="首页" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="收藏" tabIcon="heart"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="动态" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="我" tabIcon="person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalPropertyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlobalPropertyService = (function () {
    //hiddenNavs = false;
    // _recipeName:any="wda";
    // user_icon = 'http://owigmgx25.bkt.clouddn.com/head_pic02.jpg' ;
    function GlobalPropertyService() {
    }
    return GlobalPropertyService;
}());
GlobalPropertyService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GlobalPropertyService);

//# sourceMappingURL=global-property.service.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_users_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, alertCtrl, toastCtrl, viewCtrl, appCtrl, storage, userSer, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.appCtrl = appCtrl;
        this.storage = storage;
        this.userSer = userSer;
        this.formBuilder = formBuilder;
        this.loginForm = formBuilder.group({
            userId: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(11), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(11), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])],
            userPassword: ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(6)])]
        });
        this.username = this.loginForm.controls['userId'];
        this.password = this.loginForm.controls['userPassword'];
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function (user) {
        var _this = this;
        console.log(user);
        this.userSer.login(user).then(function (result) {
            console.log(result);
            if (result) {
                if (result.stageCode == 1) {
                    _this.storage.ready().then(function () {
                        _this.storage.set('isLogin', true);
                        _this.storage.set('userId', result.Id);
                        _this.storage.set('token', result.token);
                    });
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: '用户名或密码错误',
                        duration: 3000
                    });
                    toast.present();
                }
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: '服务器异常',
                    duration: 3000
                });
                toast.present();
            }
        });
    };
    LoginPage.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    LoginPage.prototype.toRegister = function () {
        this.viewCtrl.dismiss();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content padding>\n  <ion-grid>\n\n    <ion-row>\n      <ion-col col-2 class="login-title">\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back" (click)="back()"></ion-icon>\n      </ion-col>\n      <ion-col col-10 class="login-title">\n        登录\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12><h2 style="text-align: center">欢迎登录味蕾</h2></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <form  [formGroup]="loginForm" (ngSubmit)="login(loginForm.value)" novalidate>\n          <ion-item [class.error]="!username.valid && username.touched">\n            <ion-input type="tel" placeholder="请输入用户名"  [formControl]="username" clearInput=true></ion-input>\n          </ion-item>\n          <ion-label *ngIf="username.hasError(\'required\') && username.touched" class="error-message">* 请输入用户名</ion-label>\n          <ion-label *ngIf="(username.hasError(\'minlength\')||username.hasError(\'maxlength\')||username.hasError(\'pattern\')) && username.touched" class="error-message">* 请输入正确的电话号码</ion-label>\n          <ion-item>\n            <ion-input type="password" placeholder="请输入密码"  [formControl]="password" clearInput=true></ion-input>\n          </ion-item>\n          <ion-label *ngIf="password.hasError(\'required\') && password.touched" class="error-message">* 请输入密码</ion-label>\n          <ion-label *ngIf="(password.hasError(\'minlength\')) && password.touched" class="error-message">* 密码长度最少为六位</ion-label>\n          <button ion-button block color="secondary" type="submit" [disabled]="!loginForm.valid">登录</button>\n        </form>\n\n      </ion-col>\n      <!--end form-->\n      <ion-col col-8>\n      </ion-col>\n      <ion-col col-4>\n        <a href="#">忘记密码 ？</a>\n      </ion-col>\n    </ion-row>\n\n\n  </ion-grid>\n\n  <ion-footer >\n    <ion-toolbar style="background-color: white !important;">\n      <p style="text-align: center;">\n        没有账号 ？ 去<span (click)="toRegister()"  style="color:red">注册</span>\n      </p>\n\n    </ion-toolbar>\n  </ion-footer>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\login\login.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__providers_users_service__["a" /* UsersService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_5__providers_users_service__["a" /* UsersService */],
        __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_recipe_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__me_me__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CreateMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateMenuPage = (function () {
    function CreateMenuPage(navCtrl, navParams, recipeSer, toastCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.recipeSer = recipeSer;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        // this.menuInfoForm = formBuilder.group({
        //   Menu_title: ['', Validators.compose([Validators.required])],
        //   Describe:['', Validators.compose([Validators.required])],
        //   Menu_cover:['',Validators.compose([Validators.required])]
        // });
        // this.menu_title = this.menuInfoForm.controls['Menu_title'];
        // this.describe = this.menuInfoForm.controls['Describe'];
        // this.menu_cover=this.menuInfoForm.controls['Menu_cover'];
    }
    CreateMenuPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('userId').then(function (val) {
                console.log(val);
                _this.creater_id = val;
            });
        });
    };
    CreateMenuPage.prototype.close = function () {
        this.navCtrl.pop();
    };
    CreateMenuPage.prototype.change = function (e) {
        var file = e.target.files[0];
        var path = file.type;
        var Path = path.substr(path.lastIndexOf('/')).toUpperCase();
        if (Path == '/JPG' || Path == '/PNG' || Path == '/JPEG') {
            this.preview(file);
        }
        else {
            var toast = this.toastCtrl.create({
                message: '你上传的不是图片',
                duration: 3000
            });
            toast.present();
        }
    };
    CreateMenuPage.prototype.preview = function (file) {
        var img = new Image();
        img.src = URL.createObjectURL(file);
        var url = img.src;
        img.onload = function () {
            URL.revokeObjectURL(url);
            img.setAttribute('class', 'fitcss');
            document.getElementById('intro').innerHTML = '';
            document.getElementById('menu_cover').appendChild(img);
        };
    };
    //
    // createMenu(infoForm){
    //   console.log(infoForm);
    //   this.recipeSer.addList(infoForm).then((result)=> {
    //     // console.log('1111');
    //     console.log('111'+result);
    //     if(result) {
    //       if (result.stageCode == 1) {
    //         let toast = this.toastCtrl.create({
    //           message: '创建成功',
    //           duration: 3000
    //         });
    //         toast.present();
    //         // this.navCtrl.push(MePage);
    //       }
    //     }
    //   })
    // }
    CreateMenuPage.prototype.UpdateInfo = function (e) {
        var _this = this;
        var that = this;
        that.Formdata = new FormData(e.target.parentElement.parentElement);
        that.recipeSer.addList(that.Formdata).then(function (result) {
            console.log(result);
            if (result) {
                if (result.list_id) {
                    var toast = _this.toastCtrl.create({
                        message: '创建成功',
                        duration: 3000
                    });
                    toast.present();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__me_me__["a" /* MePage */]);
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: '创建失败',
                        duration: 3000
                    });
                    toast.present();
                }
            }
        });
    };
    return CreateMenuPage;
}());
CreateMenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-menu',template:/*ion-inline-start:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\create-menu\create-menu.html"*/'<!--\n  Generated template for the CreateMenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4 (click)="close()" style="color: #dd3915">取消</ion-col>\n        <ion-col col-4 style="text-align: center">创建一个菜单</ion-col>\n        <ion-col col-4 style="text-align: right;color: #dd3915">\n          <span>创建</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <!--<form [formGroup]="menuInfoForm" (ngSubmit)="createMenu(menuInfoForm.value)" novalidate>-->\n\n    <!--<div id="menu_cover"></div>-->\n    <!--<input type="file" (change)="change($event)"  class="file" [formControl]="menu_cover">-->\n    <!--<div class="intro">-->\n      <!--<p id="intro">+菜单封面</p>-->\n    <!--</div>-->\n    <!--<ion-input style="font-size: 1.2em;width: 100%;background-color:#fcfcfc;margin-top: 30px" placeholder="菜单标题" clearInput [formControl]="menu_title"></ion-input>-->\n\n    <!--<textarea class="describe" placeholder="写一段描述" [formControl]="describe"></textarea>-->\n\n    <!--<button ion-button block color="danger" style="margin-top: 30px" type="submit">创建</button>-->\n  <!--</form>-->\n\n  <form id="info_form" #UpdateForm="ngForm">\n    <input type="hidden" name="creater_id" value="{{creater_id}}">\n    <div id="menu_cover"></div>\n    <input type="file" (change)="change($event)"  class="file" name="menu_cover">\n    <div class="intro">\n      <p id="intro">+菜单封面</p>\n    </div>\n    <input name="menu_name" style="font-size: 1.2em;width: 100%;height: 35px;background-color:#fcfcfc;margin-top: 30px;border: none" placeholder="菜单标题" >\n\n    <textarea class="describe" placeholder="写一段描述" name="introduce"></textarea>\n\n    <button ion-button block color="danger" style="margin-top: 30px" type="button" (click)="UpdateInfo($event)">创建</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\create-menu\create-menu.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_recipe_service__["a" /* RecipeService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], CreateMenuPage);

//# sourceMappingURL=create-menu.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyFocusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_users_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__personal_personal__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MyFocusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyFocusPage = (function () {
    function MyFocusPage(navCtrl, navParams, storage, userSer, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.userSer = userSer;
        this.modalCtrl = modalCtrl;
        this.personalId = this.navParams.get('personalId');
    }
    MyFocusPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad MyFocusPage');
    };
    MyFocusPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('userId').then(function (myid) {
                if (myid) {
                    var val = myid;
                    if (_this.personalId && _this.personalId != myid) {
                        console.log(_this.personalId);
                        val = _this.personalId;
                    }
                    else {
                        val = myid;
                    }
                    console.log(val);
                    _this.userSer.getFocus(val).then(function (data) {
                        console.log(data);
                        _this.allFocus = data;
                    });
                }
            });
        });
    };
    MyFocusPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    MyFocusPage.prototype.toPersonal = function (index) {
        console.log('hhh');
        this.personal_id = this.allFocus[index].id;
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__personal_personal__["a" /* PersonalPage */], { "personalId": this.personal_id });
        modelPage.present();
    };
    return MyFocusPage;
}());
MyFocusPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-focus',template:/*ion-inline-start:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\my-focus\my-focus.html"*/'<!--\n  Generated template for the MyFocusPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-3>\n        <ion-icon name="arrow-back" (click)="back()" style="font-size: 25px !important; color: grey;"></ion-icon>\n      </ion-col>\n      <ion-col col-6 style="text-align: center">\n        <ion-note style="color: grey;font-size: 18px;">我关注的人</ion-note>\n      </ion-col>\n      <!--<ion-col col-3 style="text-align: right" >-->\n        <!--<ion-note style="color: gold;font-size: 15px">保存</ion-note>-->\n      <!--</ion-col>-->\n    </ion-row>\n  </ion-grid>\n</ion-header>\n<ion-content padding>\n  <ion-list>\n  <ion-item *ngFor="let item of allFocus;let first=first;let i=index">\n    <ion-thumbnail item-start >\n      <img (click)="toPersonal(i)" style="border-radius: 50%;width: 70px;height: 70px" src="{{item.user_icon}}">\n    </ion-thumbnail>\n    <h2 (click)="toPersonal(i)">{{item.name}}</h2>\n    <!--<p>Hayao Miyazaki • 1988</p>-->\n    <!--<button ion-button clear item-end>关注</button>-->\n  </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\my-focus\my-focus.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_users_service__["a" /* UsersService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], MyFocusPage);

//# sourceMappingURL=my-focus.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyFansPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_users_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__personal_personal__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MyFansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyFansPage = (function () {
    function MyFansPage(navCtrl, navParams, storage, userSer, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.userSer = userSer;
        this.modalCtrl = modalCtrl;
    }
    MyFansPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad MyFansPage');
    };
    MyFansPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('userId').then(function (myid) {
                if (myid) {
                    _this.userSer.getFans(myid).then(function (data) {
                        console.log(data);
                        _this.allFans = data;
                    });
                }
            });
        });
    };
    MyFansPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    MyFansPage.prototype.toPersonal = function (index) {
        this.personal_id = this.allFans[index].id;
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__personal_personal__["a" /* PersonalPage */], { "personalId": this.personal_id });
        modelPage.present();
    };
    return MyFansPage;
}());
MyFansPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-fans',template:/*ion-inline-start:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\my-fans\my-fans.html"*/'<!--\n  Generated template for the MyFansPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-3>\n        <ion-icon name="arrow-back" (click)="back()" style="font-size: 25px !important; color: grey;"></ion-icon>\n      </ion-col>\n      <ion-col col-6 style="text-align: center">\n        <ion-note style="color: grey;font-size: 18px;">关注我的人</ion-note>\n      </ion-col>\n      <!--<ion-col col-3 style="text-align: right" >-->\n      <!--<ion-note style="color: gold;font-size: 15px">保存</ion-note>-->\n      <!--</ion-col>-->\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item *ngFor="let item of allFans;let first=first;let i=index">\n      <ion-thumbnail item-start>\n        <img (click)="toPersonal(i)" style="border-radius: 50%;width: 70px;height: 70px" src="{{item.user_icon}}">\n      </ion-thumbnail>\n      <h2 (click)="toPersonal(i)">{{item.name}}</h2>\n      <!--<p>Hayao Miyazaki • 1988</p>-->\n      <!--<button ion-button clear item-end>关注</button>-->\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\my-fans\my-fans.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_users_service__["a" /* UsersService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], MyFansPage);

//# sourceMappingURL=my-fans.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageBoardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_users_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_or_register_login_or_register__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__personal_personal__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the MessageBoardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessageBoardPage = (function () {
    function MessageBoardPage(navCtrl, navParams, storage, userSer, alertCtrl, toastCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.userSer = userSer;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.shanchuFlag = false;
        this.nomessageFlag = false;
        this.personalId = this.navParams.get('personal_id');
        console.log(this.personalId);
    }
    MessageBoardPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad MessageBoardPage');
    };
    MessageBoardPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('userId').then(function (myid) {
                // console.log(myid);
                var Id = myid;
                if (myid) {
                    if (_this.personalId) {
                        if (_this.personalId != myid) {
                            _this.shanchuFlag = false;
                            Id = _this.personalId;
                        }
                        else {
                            _this.shanchuFlag = true;
                            Id = myid;
                        }
                    }
                    else {
                        _this.shanchuFlag = true;
                        Id = myid;
                    }
                    _this.userSer.getAllmessages(Id).then(function (data) {
                        if (data.length > 0) {
                            _this.allMessage = data.reverse();
                            console.log(_this.allMessage);
                            _this.nomessageFlag = false;
                        }
                        else {
                            _this.nomessageFlag = true;
                        }
                    });
                }
            });
        });
    };
    MessageBoardPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    MessageBoardPage.prototype.toPersonal = function (index) {
        console.log('hhh');
        this.personal_id = this.allMessage[index].commenter_id;
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__personal_personal__["a" /* PersonalPage */], { "personalId": this.personal_id });
        modelPage.present();
    };
    MessageBoardPage.prototype.delMessage = function (index) {
        var _this = this;
        // console.log(index);
        var alert = this.alertCtrl.create({
            title: '你确定要删除这条留言吗?',
            buttons: [
                {
                    text: '取消',
                    role: '取消',
                    handler: function () {
                        // console.log('取消删除');
                    }
                },
                {
                    text: '删除',
                    handler: function () {
                        // console.log('确定删除');
                        _this.message_id = _this.allMessage[index].id;
                        // console.log(this.message_id);
                        _this.userSer.delMessage(_this.message_id).then(function (data) {
                            // console.log(data);
                            if (data.stageCode == 1) {
                                //删除成功则重新获取一次所有留言
                                _this.storage.ready().then(function () {
                                    _this.storage.get('userId').then(function (myid) {
                                        // console.log(myid);
                                        if (myid) {
                                            _this.userSer.getAllmessages(myid).then(function (data) {
                                                // console.log(data);
                                                console.log(data.length);
                                                if (data.length > 0) {
                                                    _this.allMessage = data.reverse();
                                                    _this.nomessageFlag = false;
                                                }
                                                else {
                                                    _this.allMessage = null;
                                                    _this.nomessageFlag = true;
                                                }
                                            });
                                        }
                                    });
                                });
                                var toast = _this.toastCtrl.create({
                                    message: '该条留言删除成功',
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                toast.onDidDismiss(function () {
                                    // console.log('删除成功');
                                });
                                toast.present();
                            }
                            else {
                                //删除失败
                                var toast = _this.toastCtrl.create({
                                    message: '删除留言失败',
                                    duration: 3000,
                                    position: 'bottom'
                                });
                                toast.onDidDismiss(function () {
                                    // console.log('删除失败');
                                });
                                toast.present();
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    //别人的个人中心和我的个人中心留言不相同
    MessageBoardPage.prototype.toSend = function (message) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('userId').then(function (id) {
                // console.log(id);
                var val = id;
                if (id) {
                    if (_this.personalId) {
                        if (_this.personalId == id) {
                            //有id和personalid但是两个相同，则是自己给自己留言
                            val = id;
                        }
                        else {
                            //有id也有personalid，但是不相同，则是给别人留言
                            val = _this.personalId;
                        }
                    }
                    else {
                        //有id没有personalId，则是自己给自己留言
                        val = id;
                    }
                    _this.userSer.addComment(val, id, message).then(function (data) {
                        // console.log(data);
                        if (data.stageCode == 1) {
                            //留言成功则重新获取一次所有留言
                            _this.userSer.getAllmessages(val).then(function (data) {
                                // console.log(data);
                                if (data.length > 0) {
                                    _this.allMessage = data.reverse();
                                    console.log(_this.allMessage);
                                    _this.nomessageFlag = false;
                                }
                                else {
                                    _this.nomessageFlag = true;
                                }
                            });
                            var toast = _this.toastCtrl.create({
                                message: '您的留言发表成功',
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.onDidDismiss(function () {
                                // console.log('留言成功');
                            });
                            toast.present();
                        }
                        else {
                            //留言失败
                            var toast = _this.toastCtrl.create({
                                message: '您的留言发表失败',
                                duration: 3000,
                                position: 'bottom'
                            });
                            toast.onDidDismiss(function () {
                                // console.log('留言失败');
                            });
                            toast.present();
                        }
                        // $('#message_textarea').val('');
                    });
                }
                else {
                    //连id都没有，则不能发布留言，去登录注册
                    var modelPage = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__login_or_register_login_or_register__["a" /* LoginOrRegisterPage */]);
                    modelPage.present();
                }
            });
        });
    };
    return MessageBoardPage;
}());
MessageBoardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-message-board',template:/*ion-inline-start:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\message-board\message-board.html"*/'<!--\n  Generated template for the MessageBoardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-3>\n        <ion-icon name="arrow-back" (click)="back()" style="font-size: 25px !important; color: grey;"></ion-icon>\n      </ion-col>\n      <ion-col col-6 style="text-align: center">\n        <ion-note style="color: grey;font-size: 18px;">我的留言板</ion-note>\n      </ion-col>\n      <ion-col col-3 style="text-align: right">\n        <!--<ion-note style="color: #DD3915;font-size: 15px">写留言</ion-note>-->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n<ion-content padding>\n  <ion-item>\n    <ion-textarea placeholder="请输入留言..." [(ngModel)]="messageTxt"></ion-textarea>\n  </ion-item>\n  <button ion-button block style="background-color:#DD3915;color: #ffffff " (click)="toSend(messageTxt)">留言</button>\n  <ion-list *ngIf="nomessageFlag">\n    <p class="hint">还没有人来留言哦~</p>\n  </ion-list>\n  <ion-list >\n    <ion-item *ngFor="let item of allMessage;let first=first;let i=index">\n      <ion-thumbnail item-start>\n        <img (click)="toPersonal(i)" style="width: 50px!important;height: 50px!important;" src="{{item.user_icon}}">\n        <h3 class="person_name" (click)="toPersonal(i)">{{item.commenter}}</h3>\n      </ion-thumbnail>\n      <h3>{{item.content}}</h3>\n      <p style="font-size: 12px;color: #999999">\n        <span *ngIf="shanchuFlag" (click)="delMessage(i)">删除</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <span>{{item.comment_date.substring(0,10)}}</span></p>\n      <!--<button ion-button clear item-end>关注</button>-->\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\message-board\message-board.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_users_service__["a" /* UsersService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], MessageBoardPage);

//# sourceMappingURL=message-board.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_menu_service_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recipe_detail_recipe_detail__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_property_service__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SearchResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchResultPage = (function () {
    function SearchResultPage(navCtrl, viewCtrl, MeniuSer, modalCtrl, glo, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.MeniuSer = MeniuSer;
        this.modalCtrl = modalCtrl;
        this.glo = glo;
        this.navParams = navParams;
        this.pet = 'default';
    }
    SearchResultPage.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    SearchResultPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var adsname = this.navParams.get('tosearch');
        if (adsname) {
            this.glo._searchText = adsname;
        }
        this._searchText = this.glo._searchText;
        this.MeniuSer.searchMenus().then(function (data) {
            _this.searchMenus = data;
            // console.log(data);
        });
    };
    SearchResultPage.prototype.toRecipeDetail = function (id) {
        //console.log(id);
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__recipe_detail_recipe_detail__["a" /* RecipeDetailPage */], { "recipeId": id });
        modelPage.present();
    };
    return SearchResultPage;
}());
SearchResultPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search-result',template:/*ion-inline-start:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\search-result\search-result.html"*/'<!--\n  Generated template for the SearchResultPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-2 class="back"><ion-icon ios="ios-arrow-back" md="md-arrow-back" (click)="back()"></ion-icon></ion-col>\n      <ion-col col-8>\n        <input class="searchInput" type="text" placeholder="搜索菜谱，厨友...">\n        <button class="btn"><ion-icon name="search"></ion-icon></button>\n      </ion-col>\n      <ion-col col-2>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12>\n        <div padding>\n          <ion-segment [(ngModel)]="pet">\n            <ion-segment-button value="default">\n              智能排序\n            </ion-segment-button>\n            <ion-segment-button value="collect">\n              做过最多\n            </ion-segment-button>\n\n            <ion-segment-button value="cook">\n              最新菜谱\n            </ion-segment-button>\n          </ion-segment>\n        </div>\n\n        <div [ngSwitch]="pet">\n          <ion-list *ngSwitchCase="\'default\'">\n            <ion-item *ngFor="let menu of searchMenus | searchRecipe:_searchText" (click)="toRecipeDetail(menu.id)">\n              <ion-thumbnail item-start>\n                <img src="{{menu.cover_pic}}">\n              </ion-thumbnail>\n              <h2>{{menu.name}}</h2>\n              <p class="describe">{{menu.descripe.substring(0,7)+"..."}}</p>\n              <p class="creater">{{menu.creater}}</p>\n              <span>{{menu.collect_times}}收藏  </span><span>{{menu.cook_times}}做过</span>\n            </ion-item>\n\n\n\n          </ion-list>\n\n          <ion-list *ngSwitchCase="\'collect\'">\n            <ion-item *ngFor="let menu of searchMenus | searchRecipe:_searchText | orderbyCollectPipe" (click)="toRecipeDetail(menu.id)">\n              <ion-thumbnail item-start>\n                <img src="{{menu.cover_pic}}">\n              </ion-thumbnail>\n              <h2>{{menu.name}}</h2>\n              <p class="describe">{{menu.descripe.substring(0,7)+"..."}}</p>\n              <p class="creater">{{menu.creater}}</p>\n              <span>{{menu.collect_times}}收藏  </span><span>{{menu.cook_times}}做过</span>\n            </ion-item>\n          </ion-list>\n\n          <ion-list *ngSwitchCase="\'cook\'">\n            <ion-item *ngFor="let menu of searchMenus | searchRecipe:_searchText | orderbyTimePipe" (click)="toRecipeDetail(menu.id)">\n              <ion-thumbnail item-start>\n                <img src="{{menu.cover_pic}}">\n              </ion-thumbnail>\n              <h2>{{menu.name}}</h2>\n              <p class="describe">{{menu.descripe.substring(0,7)+"..."}}</p>\n              <p class="creater">{{menu.creater}}</p>\n              <span>{{menu.collect_times}}收藏  </span><span>{{menu.cook_times}}做过</span>\n            </ion-item>\n          </ion-list>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\search-result\search-result.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_menu_service_service__["a" /* MenuServiceService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_global_property_service__["a" /* GlobalPropertyService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], SearchResultPage);

//# sourceMappingURL=search-result.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateRecipePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_users_service__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_recipe_detail_create_recipe_detail__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_or_register_login_or_register__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_menu_create_menu__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the CreateRecipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateRecipePage = (function () {
    function CreateRecipePage(navCtrl, navParams, modalCtrl, storage, userSer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.userSer = userSer;
    }
    CreateRecipePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateRecipePage');
    };
    CreateRecipePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // console.log('ionViewDidLoad PersonalPage');
        this.storage.ready().then(function () {
            _this.storage.get('userId').then(function (val) {
                // console.log(user_id);
                if (!val) {
                    var modelPage = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__login_or_register_login_or_register__["a" /* LoginOrRegisterPage */]);
                    modelPage.present();
                }
                else {
                    _this.userSer.getMyInfo(val).then(function (data) {
                        // console.log(data);
                        _this.user_head = data[0].user_icon;
                        // console.log(this.headpic);
                    });
                }
            });
        });
    };
    CreateRecipePage.prototype.close = function () {
        this.navCtrl.pop();
    };
    CreateRecipePage.prototype.create_recipe_name = function () {
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__create_recipe_detail_create_recipe_detail__["a" /* CreateRecipeDetailPage */]);
        modelPage.present();
    };
    CreateRecipePage.prototype.createMenu = function () {
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__create_menu_create_menu__["a" /* CreateMenuPage */]);
        modelPage.present();
    };
    return CreateRecipePage;
}());
CreateRecipePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-recipe',template:/*ion-inline-start:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\create-recipe\create-recipe.html"*/'<!--\n  Generated template for the CreateRecipePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-2>\n        <ion-icon name="close" (click)="close()" style="font-size: 25px !important; color: grey;"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n\n<ion-content style="text-align: center">\n\n  <div>\n    <img class="user_head" src="{{user_head}}"/>\n  </div>\n  <p style="font-size: 1.5em">分享的人是厨房里的天使</p>\n  <div class="create">\n    <div class="create_left" (click)="create_recipe_name()">\n      <img src="../../assets/img/create-recipe.jpg" height="180" width="110"/>\n      <p>创建菜谱</p>\n    </div>\n    <div class="create_right" (click)="createMenu()">\n      <img src="../../assets/img/create-menu.jpg" height="180" width="110"/>\n      <p>创建菜单</p>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\create-recipe\create-recipe.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_users_service__["a" /* UsersService */]])
], CreateRecipePage);

//# sourceMappingURL=create-recipe.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recipe_detail_recipe_detail__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_datail_menu_datail__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_users_service__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AboutPage = (function () {
    function AboutPage(navCtrl, navParams, storage, userSer, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.userSer = userSer;
        this.modalCtrl = modalCtrl;
        this.pet = '收藏的菜谱';
    }
    AboutPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var that = this;
        this.storage.ready().then(function () {
            _this.storage.get('userId').then(function (myid) {
                if (myid) {
                    var val = myid;
                    // console.log(val);
                    that.userSer.getCollectRecipes(val).then(function (data) {
                        if (data.length > 0) {
                            _this.PersonalMenu = data;
                            _this.flag = false;
                        }
                        else {
                            _this.flag = true;
                        }
                    });
                    that.userSer.getFavorite(val).then(function (data) {
                        // console.log(data);
                        if (data.length) {
                            _this.favorite = data;
                            _this.flag = false;
                        }
                        else {
                            _this.flag = true;
                        }
                    });
                }
            });
        });
    };
    AboutPage.prototype.toRecipeDetail = function (id) {
        // console.log(id);
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__recipe_detail_recipe_detail__["a" /* RecipeDetailPage */], { "recipeId": id });
        modelPage.present();
    };
    AboutPage.prototype.toMenuDetail = function (id) {
        //   console.log(id);
        var modelPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__menu_datail_menu_datail__["a" /* MenuDatailPage */], { "menuId": id });
        modelPage.present();
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\about\about.html"*/'\n<ion-content class="classify">\n  <ion-list padding>\n    <div >\n      <ion-segment [(ngModel)]="pet">\n        <ion-segment-button value="收藏的菜谱" >\n          收藏的菜谱\n        </ion-segment-button>\n        <ion-segment-button value="收藏的菜单">\n          收藏的菜单\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n    <div [ngSwitch]="pet"  >\n      <ion-list *ngSwitchCase="\'收藏的菜谱\'">\n        <h3 class="hint" *ngIf="flag">还没有收藏过菜谱哟~</h3>\n        <ion-item *ngFor="let menu of PersonalMenu" (click)="toRecipeDetail(menu.reciper_id)">\n          <ion-thumbnail item-start>\n            <img src="{{menu.cover_pic}}" height="216" width="280"/>\n          </ion-thumbnail>\n          <div  class="single_menu">\n            <div class="menu_name"><a >{{menu.name.substring(0,7)}}</a></div>\n            <div class="include_menunum">{{menu.descripe.substring(0,7)+"..."}}</div>\n            <div class="author"><a >{{menu.creater}}</a></div>\n          </div>\n        </ion-item>\n\n      </ion-list>\n\n      <ion-list *ngSwitchCase="\'收藏的菜单\'">\n\n\n        <h3 class="hint" *ngIf="flag">还没有收藏过菜单哟~</h3>\n        <ion-item *ngFor="let item of favorite" (click)="toMenuDetail(item.reciper_id)">\n          <ion-thumbnail item-start>\n            <img src="{{item.cover_pic}}" height="136" width="215"/>\n          </ion-thumbnail>\n          <div class="single_menu" >\n            <div class="menu_gather_name"><a>{{item.name.substring(0,7) }}</a></div>\n            <div class="include_menunum">{{item.descripe.substring(0,7)+"..."}}</div>\n            <div class="author"><a>{{item.creater}}</a> </div>\n          </div>\n        </ion-item>\n      </ion-list>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\H5\小组项目-味蕾\weilei-app\csApp\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_5__providers_users_service__["a" /* UsersService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ })

},[233]);
//# sourceMappingURL=main.js.map