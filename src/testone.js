(function() {
    angular
        .module('demoApp')
        .controller('TestOne', TestOne);

    function TestOne() {
        var self = this;

        self.myText = "test one text";
    }
})();
