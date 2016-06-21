var app = angular.module('firstModule');

app.service('userService', ['$q','$http','SITE_URL',function($q,$http,SITE_URL){

     
     this.get_users = function(){
       var def = $q.defer();
       let set_url = SITE_URL+"third-parties/userprofile.json";
       $http.get(set_url)
    	  .then(function(response) {
    	  	//console.log(response.data.employees);
            return def.resolve(response.data.employees);
            
        });

    	 return def.promise; 
     } 
     

}]);