var app = angular.module('firstModule');

app.service('companyService', ['$q','$http','$routeParams',function($q,$http,$routeParams){

     
     this.get_company = function(){
       var def = $q.defer();



       $http.get("http://localhost:8080/third-parties/companylist.json")
    	  .then(function(response) {
    	  	console.log(response.data.companies[$routeParams.id]);
            return def.resolve(response.data.companies[$routeParams.id]);
            
        });

    	 return def.promise; 
     } 
     

}]);