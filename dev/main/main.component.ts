import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {ChildComponent} from '../child/child.component';

@Component({
  selector: 'main',
  templateUrl: 'templates/main.template.html',
  directives: [ChildComponent]
})

export class MainComponent {
  name: string;
}