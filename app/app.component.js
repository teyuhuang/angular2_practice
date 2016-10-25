"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
// <wiki-search> </wiki-search>
let AppComponent = class AppComponent {
    constructor() {
        this.heroLink = '/heroes';
        this.dashboardLink = '/dashboard';
        this.title = 'Tour of Heroes';
    }
    ngOnInit() { }
};
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="dashboardLink" routerLinkActive="active">dashboard</a>
            <a [routerLink]="heroLink" routerLinkActive="active">Heroes</a>
        </nav>
        
       <router-outlet></router-outlet>
    `,
        styleUrls: ['app.component.css']
    }), 
    __metadata('design:paramtypes', [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map