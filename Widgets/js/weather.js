var myApp = angular.module('myApp', []);

myApp.controller('ctrl1', ['$scope','$http', function($scope,$http) {
	
    $http({
        method: 'GET',
        url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22saginaw%2Cmi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
    }).then(function sucessCallback(response) {
        console.log(response);
        $scope.api = response.data;
        $scope.yahoo = $scope.api.query.results.channel;
    });
    
    $scope.updateAPI = function(){
        $http({
            method: 'GET',
            url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + $scope.location + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
        }).then(function sucessCallback(response) {
            $scope.api = response.data;
            $scope.yahoo = $scope.api.query.results.channel;
        });
    };
    
}]);
//https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22saginaw%2Cmi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys