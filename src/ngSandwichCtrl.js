(function() {
    'use strict';

    angular
        .module('demoApp')
        .controller('ngSandwichCtrl', NgSandwichCtrl);

    function NgSandwichCtrl() {
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
        }

        function $render() {
            self.model = self.ngModelCtrl.$modelValue;
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
        }
    }

})();
