var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject } from 'aurelia-dependency-injection';
import { bindable, customElement } from 'aurelia-templating';
import { EventAggregator } from 'aurelia-event-aggregator';
export let Tabs = class Tabs {
    constructor(element, ea) {
        this.tabs = null;
        this.inmodal = false;
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
};
__decorate([
    bindable, 
    __metadata('design:type', Object)
], Tabs.prototype, "tabs", void 0);
__decorate([
    bindable, 
    __metadata('design:type', Object)
], Tabs.prototype, "inmodal", void 0);
Tabs = __decorate([
    customElement('tabs'),
    inject(Element, EventAggregator), 
    __metadata('design:paramtypes', [Object, Object])
], Tabs);
//# sourceMappingURL=tabs.js.map