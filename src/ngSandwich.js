(function() {
    'use strict';

    angular
        .module('demoApp')
        .component('ngSandwich', {
            controller: 'ngSandwichCtrl',
            controllerAs: 'sandwich',
            require: {
                ngModelCtrl: 'ngModel'
            },
            templateUrl: 'ngSandwich.html'
        });

})();
