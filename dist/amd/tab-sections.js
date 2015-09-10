define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    var TabSections = (function () {
        function TabSections(element) {
            _classCallCheck(this, _TabSections);

            this.element = element;
        }

        _createClass(TabSections, [{
            key: 'attached',
            value: function attached() {}
        }]);

        var _TabSections = TabSections;
        TabSections = (0, _aureliaFramework.inject)(Element)(TabSections) || TabSections;
        TabSections = (0, _aureliaFramework.customElement)('tab-sections')(TabSections) || TabSections;
        return TabSections;
    })();

    exports.TabSections = TabSections;
});