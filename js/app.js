(function () {
  'use strict';

  angular.module("LunchChecker", [])

  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.lunch = "";
    $scope.message = "";
    $scope.colorClass = "";

    $scope.lunchMessage = function () {
      $scope.itemNumber = checkLunch($scope.lunch);
      var lunchItems = checkLunch($scope.lunch);

      if (lunchItems === 0) {
        $scope.message = "Please enter data first";
        $scope.colorClass = "red";
      } else if ((lunchItems > 0) && (lunchItems <= 3)) {
        $scope.message = "Enjoy!";
        $scope.colorClass = "green";
      } else if (lunchItems > 3) {
        $scope.message = "Too much!";
        $scope.colorClass = "green";
      }

    }; // end lunchMessage function


    function checkLunch(string) {
      var items = 0, i;

      if (string !== "") {
        string = string.split(" ").toString().split(",");   // ---> DELETING BLANK SPACES
        for (i of string) {
          if (i !== "") {
            items++;
          }
        }
      }
      return items;
    } // end of checkLunch fuction
  }
})(); //end of IIFE
