angular.module('meanSongs').controller('SongDisplayController',SongDisplayController);

function SongDisplayController($http,$routeParams,$scope){
	var vm =this;
	var id = $routeParams.id;
	
	console.log(id);
	
	$http.get('/api/songs/'+id).then(function(response){
		console.log(response.data);
		vm.song = response.data;
	});


$scope.convertToInt=function(value){
	
	var number = parseInt(value);
	
	return number;
	
};

$scope.openInNewTab = function(url) {
  var win = window.open(url, '_blank');
  win.focus();
};
}