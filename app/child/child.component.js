System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ChildComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ChildComponent = (function () {
                function ChildComponent() {
                }
                ChildComponent = __decorate([
                    core_1.Component({
                        selector: 'child',
                        template: "\n    <h2>I'm a child {{name}}</h2>\n  ",
                        inputs: ['name:childName']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChildComponent);
                return ChildComponent;
            }());
            exports_1("ChildComponent", ChildComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkL2NoaWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBO2dCQUFBO2dCQUVBLENBQUM7Z0JBVkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsT0FBTzt3QkFDakIsUUFBUSxFQUFFLHlDQUVUO3dCQUNELE1BQU0sRUFBRSxDQUFDLGdCQUFnQixDQUFDO3FCQUMzQixDQUFDOztrQ0FBQTtnQkFJRixxQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsMkNBRUMsQ0FBQSIsImZpbGUiOiJjaGlsZC9jaGlsZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge09uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NoaWxkJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aDI+SSdtIGEgY2hpbGQge3tuYW1lfX08L2gyPlxuICBgLFxuICBpbnB1dHM6IFsnbmFtZTpjaGlsZE5hbWUnXVxufSlcblxuZXhwb3J0IGNsYXNzIENoaWxkQ29tcG9uZW50IHtcbiAgbmFtZTogc3RyaW5nO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
