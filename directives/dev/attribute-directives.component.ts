import {Component} from 'angular2/core';
import {HightlightDirective} from "./highlight.directive";

@Component({
    selector: 'attribute-directives',
    template: `
        <section class="directive">
            <h2>[ngStyle]</h2>
            <div>
                Enter '1' in the input fields if you want to activate a style
                <br>
                Red color
                <input type="text" #color (keyup)="0">
                Underlined
                <input type="text" #underlined (keyup)="0">
            </div><br>
            <!-- Obviously it would be faster to write ...{'color': color.value}... and let the user set a color in the input field -->
            <div [ngStyle]="{'color': color.value == '1' ? 'red' : '', 'text-decoration': underlined.value == '1' ? 'underline' : ''}">
                Watch this text!
            </div>
        </section>
        <section class="directive">
            <h2>[ngClass]</h2>
            <div>
                Enter '1' in the input fields if you want to activate a style
                <br>
                Red color
                <input type="text" #colorClass (keyup)="0">
                Underlined
                <input type="text" #underlinedClass (keyup)="0">
            </div><br>
            <!-- Obviously it would be faster to write ...{'color': color.value}... and let the user set a color in the input field -->
            <div [ngClass]="{red: colorClass.value == '1', underlined: underlinedClass.value == '1'}">
                Watch this text!
            </div>
        </section>
        <section class="directive">
            <h2>Custom directive [myHighlight]</h2>
            <div [myHighlight]="'red'">
                Is highlighted!
            </div>
        </section>
    `,
    directives: [HightlightDirective]
})
export class AttributeDirectivesComponent {

}