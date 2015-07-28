

var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$scope', function ($scope) {
    $scope.people = [
        {
            firstname: "greg", lastname: "babcock", email: "greg@home.com", phone: "123456"
        },
        {
            firstname: "sian", lastname: "jones", email: "sian@home.com", phone: "3456789"
        }
    ];
    
    $scope.select = function (id) {
        $scope.current = id;
        $scope.firstname = $scope.people[id].firstname;
        $scope.lastname = $scope.people[id].lastname;
        $scope.email = $scope.people[id].email;
        $scope.phone = $scope.people[id].phone;
    }
    $scope.update = function () {
        alert("hello");
    };
} ]);