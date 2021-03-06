var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { CoinGraphComponent } from './coin-graph/coin.graph.component';
var BodyComponent = /** @class */ (function () {
    function BodyComponent() {
    }
    BodyComponent.prototype.ngAfterViewInit = function () {
    };
    BodyComponent.prototype.updateRequestSymbol = function (symbol) {
        // console.log("value from event, " symbol);
        this.graphComponent.displayGraph(symbol);
    };
    __decorate([
        ViewChild(CoinGraphComponent),
        __metadata("design:type", CoinGraphComponent)
    ], BodyComponent.prototype, "graphComponent", void 0);
    BodyComponent = __decorate([
        Component({
            selector: 'app-body',
            templateUrl: './body.component.html',
            styleUrls: ['./body.component.css'],
        })
    ], BodyComponent);
    return BodyComponent;
}());
export { BodyComponent };
//# sourceMappingURL=body.component.js.map