import {Component} from 'angular2/core';
import {StructuralDirectivesComponent} from "./structural-directives.component";
import {AttributeDirectivesComponent} from "./attribute-directives.component";

@Component({
    selector: 'app',
    template: `
        <structural-directives></structural-directives>
        <br>
        <attribute-directives></attribute-directives>
    `,
    directives: [StructuralDirectivesComponent, AttributeDirectivesComponent]
})
export class AppComponent {

}