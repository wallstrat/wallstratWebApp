var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { NotLoginHeaderComponent } from './notLoginHeader.component';
import { LoginHeaderComponent } from './loginHeader.component';
var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule, MatSelectModule, MatIconModule,
            ],
            declarations: [
                NotLoginHeaderComponent,
                LoginHeaderComponent
            ],
            exports: [
                NotLoginHeaderComponent,
                LoginHeaderComponent
            ],
            providers: [
                MatIconRegistry
            ]
        })
    ], HeaderModule);
    return HeaderModule;
}());
export { HeaderModule };
//# sourceMappingURL=header.module.js.map