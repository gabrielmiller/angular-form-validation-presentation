(function() {
    'use strict';

    angular
        .module('demoApp')
        .controller('ngSandwichCtrl', NgSandwichCtrl);

    function NgSandwichCtrl($q, $timeout) {
        var self = this;

        self.$onInit = $onInit;
        self.moveIngredient = moveIngredient;

        /**
         *  Per the angular docs
         *
         *  $require() is:
         *      Called when the view needs to be updated.
         *      It is expected that the user of the ng-model directive will implement this method.
         */
        function $onInit() {
            self.ngModelCtrl.$render = $render;
            self.ngModelCtrl.$validators.bread = breadValidator;
            //self.ngModelCtrl.$asyncValidators.bread = asyncBreadValidator;
        }

        function $render() {
            self.model = self.ngModelCtrl.$modelValue;
        }

        function asyncBreadValidator(modelValue, viewValue) {
            var defer = $q.defer();

            $timeout(function() {
                if (modelValue[0] === 'bread' && modelValue[modelValue.length - 1] === 'bread') {
                    defer.resolve();
                } else {
                    defer.reject();
                }
            }, 500);

            return defer.promise;
        }

        function breadValidator(modelValue, viewValue) {
            return (modelValue[0] === 'bread' && modelValue[modelValue.length - 1] === 'bread');
        }

        function moveIngredient(goingUp, index) {
            var bottom = self.model.length - 1;
            var top = 0;

            if (index === top  && goingUp) return;
            if (index === bottom && !goingUp) return;

            var toIndex = (goingUp ? index - 1 : index + 1);
            var ingredient = self.model[index];

            self.model.splice(index, 1);
            self.model.splice(toIndex, 0, ingredient);

            self.ngModelCtrl.$validate();
            /**
             * $validate() Runs each of the registered validators
             *      Synchronous validators are run first and asynchronous validators are run second
             *      Synchronous validators must return booleans
             *      Asynchronous validators must return promises
             */
        }
    }

})();
