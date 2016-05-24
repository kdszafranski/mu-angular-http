var application = angular.module('myApp', []);

application.controller('IndexController', ['$scope', '$http', function($scope, $http) {
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

  $scope.getStuff = function() {
    $http({
      method: 'GET',
      url: '/stuff'
    }).then(function(res) {
      var data = res.data;
      console.log('async response: ', res);
    });
  };

  $scope.sendStuff = function(num) {
    $http({
      method: 'POST', // PUT, DELETE
      url: '/stuff/' + num,
      data: {number: num}
    }).then(function(response) {
      console.log('POST response: ', response);
      $http({
        method: 'GET',
        url: '/stuff'
      }).then(function(res) {
        var data = res.data;
        console.log('GET response: ', res);
        $scope.addPerson();
      });
    });
  }


}]);
