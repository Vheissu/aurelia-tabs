System.register(['aurelia-framework'], function (_export) {
    'use strict';

    var bindable, inject, customElement, TabSections;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            bindable = _aureliaFramework.bindable;
            inject = _aureliaFramework.inject;
            customElement = _aureliaFramework.customElement;
        }],
        execute: function () {
            TabSections = (function () {
                function TabSections(element) {
                    _classCallCheck(this, _TabSections);

                    this.element = element;
                }

                _createClass(TabSections, [{
                    key: 'attached',
                    value: function attached() {}
                }]);

                var _TabSections = TabSections;
                TabSections = inject(Element)(TabSections) || TabSections;
                TabSections = customElement('tab-sections')(TabSections) || TabSections;
                return TabSections;
            })();

            _export('TabSections', TabSections);
        }
    };
});