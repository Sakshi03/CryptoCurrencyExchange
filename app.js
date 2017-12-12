angular.module('myApp', ["chart.js"])
    .controller("controllerOne", function ($scope, $http, $interval, $timeout) {

        $scope.labels = [""];
        $scope.data = [];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
        var getData = function () {
            $http({
                method: "GET",
                url: "https://api.coinmarketcap.com/v1/ticker/?limit=10"
            }).then(function mySuccess(response) {
                // $scope.currencydata = [];
                $scope.labels = [];
                $scope.data[0] = [];
                for (let i = 0; i < response.data.length; i++) {
                    const element = response.data[i];
                    $scope.labels.push(element.name);
                    $scope.data[0].push(parseFloat(element.price_usd));
                };
                console.log($scope.data[0]);
            });
        };
        getData();
        $interval(function () {
            getData();
        }, 5000);

    });