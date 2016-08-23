var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define("index", ["require", "exports"], function (require, exports) {
    "use strict";
    function configure(aurelia) {
        aurelia.globalResources([
            './tabs',
            './tab-sections',
            './tab-section'
        ]);
    }
    exports.configure = configure;
});
define("tab-section", ["require", "exports", 'aurelia-dependency-injection', 'aurelia-templating'], function (require, exports, aurelia_dependency_injection_1, aurelia_templating_1) {
    "use strict";
    var TabSection = (function () {
        function TabSection(element) {
            this.section = null;
            this.element = element;
        }
        TabSection.prototype.attached = function () {
            if (this.element.getAttribute('default-section')) {
                this.element.querySelector('.tab-sections__tab-section').classList.add('tab-sections__tab-section--active');
            }
        };
        __decorate([
            aurelia_templating_1.bindable, 
            __metadata('design:type', Object)
        ], TabSection.prototype, "section", void 0);
        __decorate([
            aurelia_templating_1.bindable, 
            __metadata('design:type', Object)
        ], TabSection.prototype, "viewModel", void 0);
        __decorate([
            aurelia_templating_1.bindable, 
            __metadata('design:type', Object)
        ], TabSection.prototype, "viewContent", void 0);
        TabSection = __decorate([
            aurelia_templating_1.customElement('tab-section'),
            aurelia_dependency_injection_1.inject(Element), 
            __metadata('design:paramtypes', [Object])
        ], TabSection);
        return TabSection;
    }());
    exports.TabSection = TabSection;
});
define("tab-sections", ["require", "exports", 'aurelia-dependency-injection', 'aurelia-templating'], function (require, exports, aurelia_dependency_injection_2, aurelia_templating_2) {
    "use strict";
    var TabSections = (function () {
        function TabSections(element) {
            this.element = element;
        }
        TabSections.prototype.attached = function () {
        };
        TabSections = __decorate([
            aurelia_templating_2.customElement('tab-sections'),
            aurelia_dependency_injection_2.inject(Element), 
            __metadata('design:paramtypes', [Object])
        ], TabSections);
        return TabSections;
    }());
    exports.TabSections = TabSections;
});
define("tabs", ["require", "exports", 'aurelia-dependency-injection', 'aurelia-templating', 'aurelia-event-aggregator'], function (require, exports, aurelia_dependency_injection_3, aurelia_templating_3, aurelia_event_aggregator_1) {
    "use strict";
    var Tabs = (function () {
        function Tabs(element, ea) {
            this.tabs = null;
            this.inmodal = false;
            this.element = element;
            this.ea = ea;
        }
        Tabs.prototype.attached = function () {
            var _this = this;
            var sections = document.getElementsByClassName('tab-sections__tab-section');
            if (this.inmodal) {
                this.element.classList.add('tabs--modal');
            }
            this.element.addEventListener('click', function (e) {
                if (e.target && e.target.tagName === 'A') {
                    var sectionId = e.target.getAttribute('href').replace('#', '');
                    var section = document.getElementById("_tabbed-section-" + sectionId);
                    if (section) {
                        _this.ea.publish("tab.change-" + sectionId, {});
                        var selectedTabs = document.getElementsByClassName('tabs__tab--selected');
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
        };
        __decorate([
            aurelia_templating_3.bindable, 
            __metadata('design:type', Object)
        ], Tabs.prototype, "tabs", void 0);
        __decorate([
            aurelia_templating_3.bindable, 
            __metadata('design:type', Object)
        ], Tabs.prototype, "inmodal", void 0);
        Tabs = __decorate([
            aurelia_templating_3.customElement('tabs'),
            aurelia_dependency_injection_3.inject(Element, aurelia_event_aggregator_1.EventAggregator), 
            __metadata('design:paramtypes', [Object, Object])
        ], Tabs);
        return Tabs;
    }());
    exports.Tabs = Tabs;
});
//# sourceMappingURL=index.js.map