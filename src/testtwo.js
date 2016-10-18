(function() {
    angular
        .module('demoApp')
        .controller('TestTwo', TestTwo);

    function TestTwo() {
        var self = this;

        self.myText = "test two text";
    }
})();
