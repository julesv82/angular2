import {Component} from 'angular2/core';
import {MainComponent} from './main/main.component';

@Component({
  selector: 'my-app',
  template: `
    <main></main>
  `,
  directives: [MainComponent]
})
export class AppComponent {

}
