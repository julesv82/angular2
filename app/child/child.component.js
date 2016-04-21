System.register(['angular2/core', './eventEmitter/eventEmitter.component'], function(exports_1, context_1) {
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
    var core_1, eventEmitter_component_1;
    var ChildComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (eventEmitter_component_1_1) {
                eventEmitter_component_1 = eventEmitter_component_1_1;
            }],
        execute: function() {
            ChildComponent = (function () {
                function ChildComponent() {
                    this.eventData = "FOOBAR";
                }
                __decorate([
                    core_1.Input('nickname'), 
                    __metadata('design:type', String)
                ], ChildComponent.prototype, "nickname", void 0);
                ChildComponent = __decorate([
                    core_1.Component({
                        selector: 'child',
                        template: "\n    <h2>I'm a child {{name}}</h2>\n    <h3>My nickname is {{nickname}}</h3>\n    <event-emit-test (open)=\"eventData = $event\" (close)=\"eventData = $event\"></event-emit-test>\n    <p>I'M CHILD AND HERE IS MY EVENT DATA: {{eventData}}</p>\n  ",
                        inputs: ['name:childName'],
                        directives: [eventEmitter_component_1.EventEmitTest]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChildComponent);
                return ChildComponent;
            }());
            exports_1("ChildComponent", ChildComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkL2NoaWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBO2dCQUFBO29CQUVFLGNBQVMsR0FBVyxRQUFRLENBQUM7Z0JBRS9CLENBQUM7Z0JBREM7b0JBQUMsWUFBSyxDQUFDLFVBQVUsQ0FBQzs7Z0VBQUE7Z0JBZnBCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLE9BQU87d0JBQ2pCLFFBQVEsRUFBRSx3UEFLVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzt3QkFDMUIsVUFBVSxFQUFFLENBQUMsc0NBQWEsQ0FBQztxQkFDNUIsQ0FBQzs7a0NBQUE7Z0JBTUYscUJBQUM7WUFBRCxDQUpBLEFBSUMsSUFBQTtZQUpELDJDQUlDLENBQUEiLCJmaWxlIjoiY2hpbGQvY2hpbGQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgSW5wdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtFdmVudEVtaXRUZXN0fSBmcm9tICcuL2V2ZW50RW1pdHRlci9ldmVudEVtaXR0ZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hpbGQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxoMj5JJ20gYSBjaGlsZCB7e25hbWV9fTwvaDI+XG4gICAgPGgzPk15IG5pY2tuYW1lIGlzIHt7bmlja25hbWV9fTwvaDM+XG4gICAgPGV2ZW50LWVtaXQtdGVzdCAob3Blbik9XCJldmVudERhdGEgPSAkZXZlbnRcIiAoY2xvc2UpPVwiZXZlbnREYXRhID0gJGV2ZW50XCI+PC9ldmVudC1lbWl0LXRlc3Q+XG4gICAgPHA+SSdNIENISUxEIEFORCBIRVJFIElTIE1ZIEVWRU5UIERBVEE6IHt7ZXZlbnREYXRhfX08L3A+XG4gIGAsXG4gIGlucHV0czogWyduYW1lOmNoaWxkTmFtZSddLFxuICBkaXJlY3RpdmVzOiBbRXZlbnRFbWl0VGVzdF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBDaGlsZENvbXBvbmVudCB7XG4gIG5hbWU6IHN0cmluZztcbiAgZXZlbnREYXRhOiBzdHJpbmcgPSBcIkZPT0JBUlwiO1xuICBASW5wdXQoJ25pY2tuYW1lJykgbmlja25hbWU6IHN0cmluZztcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
