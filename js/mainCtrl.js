angular.module('quoteBook').controller('mainCtrl', function ($scope, dataService) {
  $scope.test = 'hi';
  $scope.quotes = dataService.getQuotes();

  $scope.deleteQuote = function(obj) {
   dataService.removeData(obj);
  }
  $scope.addQuote = function () {
    var newQuote = {
      text: $scope.addText,
      author: $scope.addAuthor
    };
    if(dataService.addData(newQuote)) {
      $scope.addText = '';
      $scope.addAuthor = '';
    };
  }


});
