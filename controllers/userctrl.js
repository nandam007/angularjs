var app = angular.module('firstModule');

app.controller('userProfile',function($scope,$http,userService){
     userService.get_users().then(function(res){
       $scope.userdata = res;	
     });
     

});
