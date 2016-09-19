(function (){
'use strict' // Do not let variables leak to the global scope

angular.module('lunchChecker', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$injector = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {

  $scope.menu = "";
  $scope.message = "";
  $scope.showMessage = function() {
    var msg = checkMenu($scope.menu);
    $scope.message = msg;
  }

  function checkMenu(menu) {
    var num = splitMenu(menu);
    if (num === 0) {
      return "Please enter data";
    }
    else if (num <= 3) {
      return "Enjoy!";
    }
    else {
      return "Too much!"
    }
  }

  function splitMenu(menu) {
    return menu.split(',').length;
  }
}


})();
