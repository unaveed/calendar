var app = angular.module('calendarApp', []);

app.controller('CalendarController', function($scope){
  $scope.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  $scope.months = ['January','February', 'March', 'April', 'May', 'June', 'July', 'August',
                  'September', 'October', 'November', 'December'];
  $scope.today = new Date();
  $scope.month = $scope.today.getMonth();
  $scope.year = $scope.today.getFullYear();
  $scope.day = $scope.today.getDate();

  $scope.startDayOfMonth = function(m, d, y) {
    return new Date(y, m, d).getDate();
  };
  $scope.daysInMonth = function(m, y) {
    return new Date(y, (m+1), 0).getDate();
  };
  $scope.previousMonth = function() {
    if ($scope.month === 0) {
      $scope.month = 11;
      $scope.year = $scope.year - 1;
    }
    else {
      $scope.month = $scope.month - 1;
    }

  };
  $scope.nextMonth = function() {
    if ($scope.month === 11) {
      $scope.month = 0;
      $scope.year = $scope.year + 1;
    }
    else {
      $scope.month = $scope.month + 1;
    }
  };
});
app.directive('calendar', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/cal.html'
  };
});