

var myApp = angular.module('myApp', ['ngDraggable']);

myApp.controller('myController', ['$scope', function ($scope) {
    $scope.people = [
        {
            firstname: "greg", lastname: "babcock", email: "greg@home.com", phone: "123456"
        },
        {
            firstname: "sian", lastname: "jones", email: "sian@home.com", phone: "3456789"
        }
    ];
    $scope.testData = [
        { id: 1, name: 'Acme Organization', parent: 0 },
        { id: 2, name: 'CEO Office', parent: 1 },
        { id: 3, name: 'Division 1', parent: 1 },
        { id: 4, name: 'Division 2', parent: 1 },
        { id: 6, name: 'Division 3', parent: 1 },
        { id: 7, name: 'Division 4', parent: 1 },
        { id: 8, name: 'Division 5', parent: 1 },
        { id: 5, name: 'Sub Division', parent: 4 },

    ];

    $scope.select = function (id) {
        $scope.current = id;
        $scope.firstname = $scope.people[id].firstname;
        $scope.lastname = $scope.people[id].lastname;
        $scope.email = $scope.people[id].email;
        $scope.phone = $scope.people[id].phone;
    }
    $scope.update = function () {
        var id = $scope.current;
        $scope.people[id].firstname = $scope.firstname;
        $scope.people[id].lastname = $scope.lastname;
        $scope.people[id].email = $scope.email;
        $scope.people[id].phone = $scope.phone;
    };
    $scope.orgChart = $('#orgChart').orgChart({
        data: $scope.testData,
        showControls: true,
        allowEdit: true,
        onAddNode: $scope.onAddNode,
        onDeleteNode: $scope.onDeleteNode,
        onClickNode: $scope.onClickNode
    });
    setTimeout(function () { $scope.$apply(); }, 0);
    $scope.onAddNode = function (node) {
        console.log('Created new node on node ' + node.data.id);
        $scope.orgChart.newNode(node.data.id);
    };
    $scope.onDeleteNode = function (node) {
        console.log('Deleted node ' + node.data.id);
        $scope.orgChart.deleteNode(node.data.id);
    };
    $scope.onClickNode = function (node) {
        console.log('Clicked node ' + node.data.id);
        $scope.orgChart.clickNode(node.data.id);
    };
} ]);