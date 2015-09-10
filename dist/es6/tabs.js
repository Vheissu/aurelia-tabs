import {bindable, inject, customElement} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@customElement('tabs')
@inject(Element, EventAggregator)
export class Tabs {
    @bindable tabs = null;
    @bindable inmodal = false;

    constructor(element, ea) {
        this.element = element;
        this.ea = ea;
    }

    attached() {
        let sections = document.getElementsByClassName('tab-sections__tab-section');

        if (this.inmodal) {
            this.element.classList.add('tabs--modal');
        }

        this.element.addEventListener('click', e => {
            if (e.target && e.target.tagName === 'A') {
                let sectionId = e.target.getAttribute('href').replace('#', '');
                let section = document.getElementById(`_tabbed-section-${sectionId}`);

                if (section) {
                    this.ea.publish(`tab.change-${sectionId}`, {});
                    let selectedTabs = document.getElementsByClassName('tabs__tab--selected');

                    if (selectedTabs[0]) {
                        selectedTabs[0].classList.remove('tabs__tab--selected');
                    }

                    e.target.parentElement.classList.add('tabs__tab--selected');
                    document.getElementsByClassName('tab-sections__tab-section--active')[0].classList.remove('tab-sections__tab-section--active');
                    section.classList.add('tab-sections__tab-section--active');
                }
            }
            e.preventDefault();
        });
    }
}
