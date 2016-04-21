import {Component, OnInit, Input} from 'angular2/core';
import {EventEmitTest} from './eventEmitter/eventEmitter.component';

@Component({
  selector: 'child',
  template: `
    <h2>I'm a child {{name}}</h2>
    <h3>My nickname is {{nickname}}</h3>
    <event-emit-test (open)="eventData = $event" (close)="eventData = $event"></event-emit-test>
    <p>I'M CHILD AND HERE IS MY EVENT DATA: {{eventData}}</p>
  `,
  inputs: ['name:childName'],
  directives: [EventEmitTest]
})

export class ChildComponent {
  name: string;
  eventData: string = "FOOBAR";
  @Input('nickname') nickname: string;
}