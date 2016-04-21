import {Component, OnInit, OnDestroy} from 'angular2/core';

@Component({
  selector: 'init-and-destroy',
  template: `
    <h2>I'm Init and Destroy!</h2>
  `
})
export class OnInitAndDestroy implements OnInit, OnDestroy {
  ngOnInit(){
    console.log('ImInitialising!');
  }
  ngOnDestroy(){
    console.log('Im Destroying');
  }
}