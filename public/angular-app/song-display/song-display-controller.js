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


$scope.EditButtonClicked = function(){
	
		vm.EditClickedFlag='block';
	
	
};



$scope.SubmitLink = function(Link,Id){
	
		var body = {Id:Id,youtube_link:Link};

		
	$http.post('/api/songs/EditLink',body).then(function(response){
		console.log(response.data);
		vm.song = response.data;
	});
	
	
	window.location = "http://localhost:8800/#!/LoginValidating";
		
	
};


}