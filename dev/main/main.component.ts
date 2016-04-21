import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {ChildComponent} from '../child/child.component';
import {OnInitAndDestroy} from '../onInit/onInit.component';

@Component({
  selector: 'main',
  templateUrl: 'templates/main.template.html',
  directives: [ChildComponent, OnInitAndDestroy]
})

export class MainComponent {
  name: string;
  hasChild = true;
}