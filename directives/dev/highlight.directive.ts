import {Directive} from "angular2/core";
import {ElementRef} from "angular2/core";
import {Renderer} from "angular2/core";
import {Input} from "angular2/core";
//import {OnInit} from "angular2/core"; for first step

@Directive({
    selector: '[myHighlight]',
    // Host element refers to the DOM element which hosts our directive (here: <div>)
    // Alternative would be to manually attach events to _elRef; But could be done wrong (attaching, detaching) and also violates the idea of not directly messing with DOM
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
// implements OnInit for first step
export class HightlightDirective {
    // green = default color
    @Input('myHighlight') highlightColor: string;
    private _defaultColor = 'green';

    constructor (private _elRef: ElementRef, private _renderer: Renderer) {}


    // 1) First step of tutorial, then replaced
    //ngOnInit():any {
    //    // Don't use: this._elRef.nativeElement.style.backgroundColor = 'green'; => Chains us up to the DOM API and is also less SEO-friendly
    //    this._renderer.setElementStyle(this._elRef, 'background-color', 'green');
    //}

    // 2) Mousevents are 2nd step in tutorial
    onMouseEnter() {
        this.highlight(this.highlightColor || this._defaultColor);
    }

    onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this._renderer.setElementStyle(this._elRef.nativeElement, 'background-color', color);
    }
}