var application = angular.module('myApp', []);

application.controller('IndexController', ['$scope', function($scope) {
  console.log('angular controller!');

  $scope.kris = {
    name: 'Kris',
    location: 'Bloomington',
    number: 4
  };

  $scope.antoinette = {
    name: 'Antoinette',
    location: 'St. Paul',
    number: 2
  };

  $scope.people = [$scope.kris, $scope.antoinette];

  $scope.addPerson = function() {
    $scope.people.push(
    {
      name: 'Connor',
      location: 'Mpls',
      number: 5
    });
  };

}]);
