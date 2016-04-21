System.register(['angular2/core', '../child/child.component', '../onInit/onInit.component'], function(exports_1, context_1) {
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
    var core_1, child_component_1, onInit_component_1;
    var MainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (child_component_1_1) {
                child_component_1 = child_component_1_1;
            },
            function (onInit_component_1_1) {
                onInit_component_1 = onInit_component_1_1;
            }],
        execute: function() {
            MainComponent = (function () {
                function MainComponent() {
                    this.hasChild = true;
                }
                MainComponent = __decorate([
                    core_1.Component({
                        selector: 'main',
                        templateUrl: 'templates/main.template.html',
                        directives: [child_component_1.ChildComponent, onInit_component_1.OnInitAndDestroy]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MainComponent);
                return MainComponent;
            }());
            exports_1("MainComponent", MainComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFBQTtvQkFFRSxhQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNsQixDQUFDO2dCQVREO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLE1BQU07d0JBQ2hCLFdBQVcsRUFBRSw4QkFBOEI7d0JBQzNDLFVBQVUsRUFBRSxDQUFDLGdDQUFjLEVBQUUsbUNBQWdCLENBQUM7cUJBQy9DLENBQUM7O2lDQUFBO2dCQUtGLG9CQUFDO1lBQUQsQ0FIQSxBQUdDLElBQUE7WUFIRCx5Q0FHQyxDQUFBIiwiZmlsZSI6Im1haW4vbWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge09uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0NoaWxkQ29tcG9uZW50fSBmcm9tICcuLi9jaGlsZC9jaGlsZC5jb21wb25lbnQnO1xuaW1wb3J0IHtPbkluaXRBbmREZXN0cm95fSBmcm9tICcuLi9vbkluaXQvb25Jbml0LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21haW4nLFxuICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9tYWluLnRlbXBsYXRlLmh0bWwnLFxuICBkaXJlY3RpdmVzOiBbQ2hpbGRDb21wb25lbnQsIE9uSW5pdEFuZERlc3Ryb3ldXG59KVxuXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCB7XG4gIG5hbWU6IHN0cmluZztcbiAgaGFzQ2hpbGQgPSB0cnVlO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
