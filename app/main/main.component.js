System.register(['angular2/core', '../child/child.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, child_component_1;
    var MainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (child_component_1_1) {
                child_component_1 = child_component_1_1;
            }],
        execute: function() {
            MainComponent = (function () {
                function MainComponent() {
                }
                MainComponent = __decorate([
                    core_1.Component({
                        selector: 'main',
                        templateUrl: 'templates/main.template.html',
                        directives: [child_component_1.ChildComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MainComponent);
                return MainComponent;
            }());
            exports_1("MainComponent", MainComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFVQTtnQkFBQTtnQkFFQSxDQUFDO2dCQVJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLE1BQU07d0JBQ2hCLFdBQVcsRUFBRSw4QkFBOEI7d0JBQzNDLFVBQVUsRUFBRSxDQUFDLGdDQUFjLENBQUM7cUJBQzdCLENBQUM7O2lDQUFBO2dCQUlGLG9CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx5Q0FFQyxDQUFBIiwiZmlsZSI6Im1haW4vbWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge09uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0NoaWxkQ29tcG9uZW50fSBmcm9tICcuLi9jaGlsZC9jaGlsZC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYWluJyxcbiAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvbWFpbi50ZW1wbGF0ZS5odG1sJyxcbiAgZGlyZWN0aXZlczogW0NoaWxkQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIE1haW5Db21wb25lbnQge1xuICBuYW1lOiBzdHJpbmc7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
