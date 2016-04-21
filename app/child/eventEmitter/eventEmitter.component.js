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
    var EventEmitTest;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            EventEmitTest = (function () {
                function EventEmitTest() {
                    this.openEvent = true;
                    this.eventType = "OPEN";
                    this.open = new core_1.EventEmitter();
                    this.close = new core_1.EventEmitter();
                }
                EventEmitTest.prototype.toggle = function () {
                    this.openEvent = !this.openEvent;
                    if (this.openEvent) {
                        this.eventType = "OPEN";
                        this.open.emit('Im open event!');
                    }
                    else {
                        this.eventType = "CLOSE";
                        this.close.emit('Im close event!');
                    }
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], EventEmitTest.prototype, "open", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], EventEmitTest.prototype, "close", void 0);
                EventEmitTest = __decorate([
                    core_1.Component({
                        selector: 'event-emit-test',
                        template: "\n  <div class=\"zippy\">\n    <div (click)=\"toggle()\">Toggle</div>\n    <h1>HI, I'M EMITTING {{eventType}}!</h1>\n  </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], EventEmitTest);
                return EventEmitTest;
            }());
            exports_1("EventEmitTest", EventEmitTest);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkL2V2ZW50RW1pdHRlci9ldmVudEVtaXR0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBQUE7b0JBQ0UsY0FBUyxHQUFZLElBQUksQ0FBQztvQkFDMUIsY0FBUyxHQUFXLE1BQU0sQ0FBQztvQkFDakIsU0FBSSxHQUF5QixJQUFJLG1CQUFZLEVBQUUsQ0FBQztvQkFDaEQsVUFBSyxHQUF5QixJQUFJLG1CQUFZLEVBQUUsQ0FBQztnQkFXN0QsQ0FBQztnQkFWQyw4QkFBTSxHQUFOO29CQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO29CQUNqQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7d0JBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBQ25DLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7d0JBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7b0JBQ3JDLENBQUM7Z0JBQ0gsQ0FBQztnQkFYRDtvQkFBQyxhQUFNLEVBQUU7OzJEQUFBO2dCQUNUO29CQUFDLGFBQU0sRUFBRTs7NERBQUE7Z0JBWlg7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsaUJBQWlCO3dCQUMzQixRQUFRLEVBQUUsK0hBSUg7cUJBQ1IsQ0FBQzs7aUNBQUE7Z0JBZ0JGLG9CQUFDO1lBQUQsQ0FmQSxBQWVDLElBQUE7WUFmRCx5Q0FlQyxDQUFBIiwiZmlsZSI6ImNoaWxkL2V2ZW50RW1pdHRlci9ldmVudEVtaXR0ZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXZlbnQtZW1pdC10ZXN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBjbGFzcz1cInppcHB5XCI+XG4gICAgPGRpdiAoY2xpY2spPVwidG9nZ2xlKClcIj5Ub2dnbGU8L2Rpdj5cbiAgICA8aDE+SEksIEknTSBFTUlUVElORyB7e2V2ZW50VHlwZX19ITwvaDE+XG4gIDwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgRXZlbnRFbWl0VGVzdCB7XG4gIG9wZW5FdmVudDogYm9vbGVhbiA9IHRydWU7XG4gIGV2ZW50VHlwZTogc3RyaW5nID0gXCJPUEVOXCI7XG4gIEBPdXRwdXQoKSBvcGVuOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNsb3NlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMub3BlbkV2ZW50ID0gIXRoaXMub3BlbkV2ZW50O1xuICAgIGlmICh0aGlzLm9wZW5FdmVudCkge1xuICAgICAgdGhpcy5ldmVudFR5cGUgPSBcIk9QRU5cIjtcbiAgICAgIHRoaXMub3Blbi5lbWl0KCdJbSBvcGVuIGV2ZW50IScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmV2ZW50VHlwZSA9IFwiQ0xPU0VcIjtcbiAgICAgIHRoaXMuY2xvc2UuZW1pdCgnSW0gY2xvc2UgZXZlbnQhJyk7XG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
