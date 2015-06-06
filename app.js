var app = angular.module('predictiveInput', []);
app.controller('predictive', function($scope) {
    console.log('predictive');
    $scope.words = ["bientôt", "ciao", "élucidation", "écoute", "écris", "eûmes", "bella", "ragazza", "meteo", "che", "chez", "ché", "gatto", "gattopardo", "fai", "oggi", "come", "ti", "chiami", "da", "dove", "vieni"];
    $scope.limit = 5;
    function getLastWord(string) {
        return string.slice(string.lastIndexOf(' ') + 1);
    }
    function removeLastWordFromString(string) {
        return string.slice(0, string.lastIndexOf(' ') + 1);
    }
    
    $scope.select = function(word) {
        $scope.typingWord = word;
        if(angular.isUndefined($scope.text)) {
            $scope.text = "";
        }
        var _str = removeLastWordFromString($scope.text).trim();
         $scope.text = _str + " " + word;
    }
    
});

app.directive('predictiveTyping', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        scope: {typingWord: '='},
        link: function(scope, element, attr, ngModel){
            
            ngModel.$parsers.push(function(text){
                var lastWord = text.slice(text.lastIndexOf(' ') + 1);
                if(text[text.length -1] == " ") {
                    scope.typingWord = undefined;    
                } else {
                    scope.typingWord = lastWord;
                }
                return text;
            });
            
        }
    
    }
});