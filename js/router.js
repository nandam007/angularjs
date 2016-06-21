var app = angular.module('firstModule');

app.config(function($routeProvider){
   $routeProvider
   .when('/home',{
   		controller:'userProfile',
   		templateUrl:'views/home.html'
   }).when('/user',{
      controller:'userProfile',
      templateUrl:'views/user.html'
   })
   .when('/company/:id',{
   		controller:'companyProfile',
   		templateUrl:'views/company.html'
   }).otherwise({redirectTo:'index.html'});
});
