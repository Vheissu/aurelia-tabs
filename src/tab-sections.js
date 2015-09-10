import {bindable, inject, customElement} from 'aurelia-framework';

@customElement('tab-sections')
@inject(Element)
export class TabSections {

    constructor(element) {
        this.element = element;
    }

    attached() {

    }
}
