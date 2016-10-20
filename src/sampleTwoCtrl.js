(function() {
    'use strict';

    angular
        .module('demoApp')
        .controller('SampleTwoCtrl', SampleTwoCtrl);

    function SampleTwoCtrl() {
        var self = this;

        self.model = {
            sandwiches: [
                [
                    'bread',
                    'pickle',
                    'mustard',
                    'meat',
                    'cheese',
                    'lettuce',
                    'bread'
                ],
                [
                    'bread',
                    'cheese',
                    'meat',
                    'bread'
                ],
                [
                    'bread',
                    'meat',
                    'pickle',
                    'cheese',
                    'bread'
                ],
                [
                    'bread',
                    'pickle',
                    'pickle',
                    'bread',
                    'mustard',
                    'bread'
                ]
            ]
        };
    }
})();
