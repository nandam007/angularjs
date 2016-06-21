var app = angular.module('firstModule');

app.service('companyService', ['$q','$http','$routeParams','SITE_URL',function($q,$http,$routeParams,SITE_URL){

     
     this.get_company = function(){
       var def = $q.defer();


       let get_url = SITE_URL+"third-parties/companylist.json";
       $http.get(get_url)
    	  .then(function(response) {
    	  	console.log(response.data.companies[$routeParams.id]);
            return def.resolve(response.data.companies[$routeParams.id]);
            
        });

    	 return def.promise; 
     } 
     

}]);