var app = angular.module('firstModule');

app.service('userService', ['$q','$http',function($q,$http){

     
     this.get_users = function(){
       var def = $q.defer();

       $http.get("http://localhost:8080/third-parties/userprofile.json")
    	  .then(function(response) {
    	  	//console.log(response.data.employees);
            return def.resolve(response.data.employees);
            
        });

    	 return def.promise; 
     } 
     

}]);