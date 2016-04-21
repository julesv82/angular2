import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'event-emit-test',
  template: `
  <div class="zippy">
    <div (click)="toggle()">Toggle</div>
    <h1>HI, I'M EMITTING {{eventType}}!</h1>
  </div>`
})
export class EventEmitTest {
  openEvent: boolean = true;
  eventType: string = "OPEN";
  @Output() open: EventEmitter<string> = new EventEmitter();
  @Output() close: EventEmitter<string> = new EventEmitter();
  toggle() {
    this.openEvent = !this.openEvent;
    if (this.openEvent) {
      this.eventType = "OPEN";
      this.open.emit('Im open event!');
    } else {
      this.eventType = "CLOSE";
      this.close.emit('Im close event!');
    }
  }
}