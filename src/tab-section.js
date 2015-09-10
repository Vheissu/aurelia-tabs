import {bindable, inject, customElement} from 'aurelia-framework';

@customElement('tab-section')
@inject(Element)
export class TabSection {
    @bindable section = null;
    @bindable viewModel;
    @bindable viewContent;

    constructor(element) {
        this.element = element;
    }

    attached() {
        if (this.element.getAttribute('default-section')) {
            this.element.querySelector('.tab-sections__tab-section').classList.add('tab-sections__tab-section--active');
        }
    }
}
