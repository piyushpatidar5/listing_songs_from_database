angular.module('meanSongs').controller('SongsController',SongsController);



function SongsController($http,$scope,$routeParams){
var vm=this;


	vm.title = 'Collection of Songs from my Database';	

	
	$http.get('/api/songs').then(function(response){
		console.log(response.data);
		vm.songs = response.data;
  
	});
	
	
	
	vm.InsertSongDetails =function(){
		
		var body = {artwork_large:vm.track_img_link,artwork_web:vm.Icon,track_title:vm.albumTitle,youtube_id:vm.YoutubeId,language:vm.Language,duration:vm.Duration};
		
	$http.post('/api/songs/new',body).then(function(response){
		console.log(response.data);
		vm.song = response.data;
	});
		
	}
	
	
	
	
	
	}


