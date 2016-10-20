(function() {
    angular
        .module('demoApp')
        .controller('SampleOneCtrl', SampleOneCtrl);

    function SampleOneCtrl() {
        var self = this;

        self.myText = "Sample One";
    }
})();
