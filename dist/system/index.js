System.register([], function (_export) {
    'use strict';

    _export('configure', configure);

    function configure(aurelia) {
        aurelia.globalResources(['./tabs', './tab-sections', './tab-section']);
    }

    return {
        setters: [],
        execute: function () {}
    };
});