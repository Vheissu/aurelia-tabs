import {inject} from 'aurelia-dependency-injection';
import {bindable, customElement} from 'aurelia-templating';

@customElement('tab-sections')
@inject(Element)
export class TabSections {
    private element: Element;

    constructor(element) {
        this.element = element;
    }

    attached() {

    }
}
