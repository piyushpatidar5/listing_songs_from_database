var app=angular.module('meanSongs',['ngRoute']);

app.config(function($routeProvider){
	//console.log("called");
	$routeProvider
	.when('/songs/:id',{
		templateUrl : 'angular-app/song-display/song-display.html',
		controller : SongDisplayController,
		controllerAs : 'vm'
	});
	$routeProvider
	.when('/Login',{
		templateUrl : 'angular-app/Login/Login.html',
		controller : LoginController,
		controllerAs : 'vm'
	});
	$routeProvider
	.when('/Home',{
		redirectTo:'/index'
		
	});
	$routeProvider
	.when('/',{
		templateUrl : 'angular-app/Home/Home.html',
		controller : HomeController,
		controllerAs : 'vm'
	});
	$routeProvider
	.when('/LoginValidating',{
		templateUrl : 'angular-app/song-list/songs-list.html',
		controller : SongsController,
		controllerAs : 'vm'
	});
	
});