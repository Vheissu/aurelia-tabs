System.register(['aurelia-framework', 'aurelia-event-aggregator'], function (_export) {
    'use strict';

    var bindable, inject, customElement, EventAggregator, Tabs;

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

    return {
        setters: [function (_aureliaFramework) {
            bindable = _aureliaFramework.bindable;
            inject = _aureliaFramework.inject;
            customElement = _aureliaFramework.customElement;
        }, function (_aureliaEventAggregator) {
            EventAggregator = _aureliaEventAggregator.EventAggregator;
        }],
        execute: function () {
            Tabs = (function () {
                var _instanceInitializers = {};
                var _instanceInitializers = {};

                _createDecoratedClass(Tabs, [{
                    key: 'tabs',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return null;
                    },
                    enumerable: true
                }, {
                    key: 'inmodal',
                    decorators: [bindable],
                    initializer: function initializer() {
                        return false;
                    },
                    enumerable: true
                }], null, _instanceInitializers);

                function Tabs(element, ea) {
                    _classCallCheck(this, _Tabs);

                    _defineDecoratedPropertyDescriptor(this, 'tabs', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'inmodal', _instanceInitializers);

                    this.element = element;
                    this.ea = ea;
                }

                _createDecoratedClass(Tabs, [{
                    key: 'attached',
                    value: function attached() {
                        var _this = this;

                        var sections = document.getElementsByClassName('tab-sections__tab-section');

                        if (this.inmodal) {
                            this.element.classList.add('tabs--modal');
                        }

                        this.element.addEventListener('click', function (e) {
                            if (e.target && e.target.tagName === 'A') {
                                var sectionId = e.target.getAttribute('href').replace('#', '');
                                var section = document.getElementById('_tabbed-section-' + sectionId);

                                if (section) {
                                    _this.ea.publish('tab.change-' + sectionId, {});
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
                    }
                }], null, _instanceInitializers);

                var _Tabs = Tabs;
                Tabs = inject(Element, EventAggregator)(Tabs) || Tabs;
                Tabs = customElement('tabs')(Tabs) || Tabs;
                return Tabs;
            })();

            _export('Tabs', Tabs);
        }
    };
});