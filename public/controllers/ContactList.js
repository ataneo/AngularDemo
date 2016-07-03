var module = angular.module("myApp",[]);

module.controller('ContactList',function($scope,$http){
    
    $http.get('contact').success(function(res){
        console.log(res);
        $scope.contacts = res;
    });
     
});