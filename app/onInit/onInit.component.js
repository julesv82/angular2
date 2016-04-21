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
    var OnInitAndDestroy;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            OnInitAndDestroy = (function () {
                function OnInitAndDestroy() {
                }
                OnInitAndDestroy.prototype.ngOnInit = function () {
                    console.log('ImInitialising!');
                };
                OnInitAndDestroy.prototype.ngOnDestroy = function () {
                    console.log('Im Destroying');
                };
                OnInitAndDestroy = __decorate([
                    core_1.Component({
                        selector: 'init-and-destroy',
                        template: "\n    <h2>I'm Init and Destroy!</h2>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], OnInitAndDestroy);
                return OnInitAndDestroy;
            }());
            exports_1("OnInitAndDestroy", OnInitAndDestroy);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uSW5pdC9vbkluaXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBQUE7Z0JBT0EsQ0FBQztnQkFOQyxtQ0FBUSxHQUFSO29CQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkFDRCxzQ0FBVyxHQUFYO29CQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBWkg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsa0JBQWtCO3dCQUM1QixRQUFRLEVBQUUsMENBRVQ7cUJBQ0YsQ0FBQzs7b0NBQUE7Z0JBUUYsdUJBQUM7WUFBRCxDQVBBLEFBT0MsSUFBQTtZQVBELCtDQU9DLENBQUEiLCJmaWxlIjoib25Jbml0L29uSW5pdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3l9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbml0LWFuZC1kZXN0cm95JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aDI+SSdtIEluaXQgYW5kIERlc3Ryb3khPC9oMj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBPbkluaXRBbmREZXN0cm95IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBuZ09uSW5pdCgpe1xuICAgIGNvbnNvbGUubG9nKCdJbUluaXRpYWxpc2luZyEnKTtcbiAgfVxuICBuZ09uRGVzdHJveSgpe1xuICAgIGNvbnNvbGUubG9nKCdJbSBEZXN0cm95aW5nJyk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
