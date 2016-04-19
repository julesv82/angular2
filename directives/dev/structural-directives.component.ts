import {Component} from 'angular2/core';
import {UnlessDirective} from "./unless.directive";

@Component({
    selector: 'structural-directives',
    template: `
        <section class="directive">
            <h2>*ngIf</h2>
            <div>
                Enter a number higher than 10
                <br>
                <input type="text" #number (keyup)="0">
            </div>
            <div *ngIf="number.value > 10">
                Number is greater than 10
            </div>
        </section>
        <section class="directive">
            <h2>*ngFor</h2>
            <div>
                <ul>
                    <li *ngFor="#item of list">{{item}}</li>
                </ul>
            </div>
        </section>
        <section class="directive">
            <h2>[ngSwitch]</h2>
            <div>
                Enter red, blue or green into the input field
                <br>
                <input type="text" #color (keyup)="0">
            </div>
            <div [ngSwitch]="color.value">
                <template [ngSwitchWhen]="'red'"><span style="color: red; font-weight: bold">Color is Red</span></template>
                <template [ngSwitchWhen]="'green'"><span style="color: green; font-weight: bold">Color is Green</span></template>
                <template [ngSwitchWhen]="'blue'"><span style="color: blue; font-weight: bold">Color is Blue</span></template>
                <template ngSwitchDefault><span>Don't know that color, sorry.</span></template>
            </div>
        </section>
        <section class="directive">
            <h2>Custom directive: *myUnless</h2>
            <div>
                Enter true or false
                <br>
                <input type="text" #condition (keyup)="0">
            </div>
            <div *myUnless="condition.value != 'false'">
                Only shown if 'false' was entered!
            </div>
        </section>
    `,
    directives: [UnlessDirective]
})
export class StructuralDirectivesComponent {
    list = ['Apple', 'Milk', 'Bread'];
}