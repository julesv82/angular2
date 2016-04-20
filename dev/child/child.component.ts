import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

@Component({
  selector: 'child',
  template: `
    <h2>I'm a child {{name}}</h2>
  `,
  inputs: ['name:childName']
})

export class ChildComponent {
  name: string;
}