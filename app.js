var app = angular.module('predictiveInput', []);
app.controller('predictive', function($scope) {
    console.log('predictive');
    $scope.words = ["bientôt", "ciao", "élucidation", "écoute", "écris", "eûmes", "bella", "ragazza", "meteo", "che", "chez", "ché", "gatto", "gattopardo"];
    
    $scope.select = function(word) {
        $scope.text = word + " ";
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
            });
            /*ngModel.$formatters.push(function(value){
                console.log('$formatters ', value);
            });*/
        }
    
    }
});