var app = angular.module('firstModule');

app.controller('companyProfile',function($scope,companyService){

	companyService.get_company().then(function(res){
       $scope.com_details = res;	
     });

    
});