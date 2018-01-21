angular.module('meanSongs').controller('HomeController',HomeController);

function HomeController($http,$scope){
	$scope.artistData = [{"name":"Arjit Singh",
    "details1":"Arijit Singh is an Indian musician, singer, composer, music producer, recordist and a music programmer.",
    "details2":"He predominantly sings in Hindi and Bengali, but has also lent his voice to various other Indian languages."},
    {"name":"Sonu Nigam",
    "details1":"Sonu Nigam (born 30 July 1973) is an Indian musician, singer, composer, music producer, recordist, music programmer, live performer and actor.",
    "details2":"He prominently sings in Hindi and Kannada language films. He has also sung in Bengali, Gujarati, Tamil, Telugu, Marathi, Tulu, Assamese, Odia, Nepali, Maithili and various languages."},
    {"name":"Shreya Ghoshal",
    "details1":"Shreya Ghoshal (born 12 March 1984) is an Indian playback singer.",
    "details2":"She has received four National Film Awards, six Filmfare Awards including five for Best Female Playback Singer, nine Filmfare Awards South, three Kerala State Film Awards and two Tamil Nadu State Film Awards."},
    {"name":"Atif Aslam",
    "details1":"Atif Aslam (born 12 March 1983) is a Pakistani singer-songwriter and actor. His movie debut was the 2011 social drama Bol. He has recorded numerous chart-topping songs and is known for his vocal belting technique.",
    "details2":"He predominantly sings in Hindi, Urdu and Punjabi, but has also sung in other languages such as Bengali."}];
    
$scope.ArtistName=$scope.artistData[0].name;
$scope.ArtistDetails1 =$scope.artistData[0].details1 ;
$scope.ArtistDetails2 =$scope.artistData[0].details2;

    $scope.artistSelected = function (name){
$scope.ArtistName=name;
for(var i=0;i<$scope.artistData.length;i++){
if($scope.artistData[i].name==name){
$scope.ArtistDetails1 =$scope.artistData[i].details1 ;
$scope.ArtistDetails2 =$scope.artistData[i].details2;
}}}
};