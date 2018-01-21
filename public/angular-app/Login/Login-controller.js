angular.module('meanSongs').controller('LoginController',LoginController);


function LoginController($http,$scope){

var vm = this;

vm.login = function(){	
	var password=vm.Login_password;
var email = vm.Login_email;

var body = {password:password,email:email};
		

/*
firebase.auth().signInWithEmailAndPassword(email, password)
     .then(function(firebaseUser) {
     
	  vm.flag = true;   
	  
	$http.get('/api/songs').then(function(response){
		console.log(response.data);
		vm.songs = response.data;
		 window.location = "http://localhost:8800/#!/LoginValidating";
	});
   })
  .catch(function(error) {
      alert("Login Failed");
	  window.location = "http://localhost:8800/#!/Login";
  });
	*/

$http.post('/api/LoginAuthenticate',body).then(function(response){
		console.log(response.data);
		vm.login = response.data;
		if(vm.login!=null){
			alert("Welcome "+vm.login.userFirstName);
		window.location = "http://localhost:8800/#!/LoginValidating";
		}else
		{
			
			alert("Login Failed");
	  window.location = "http://localhost:8800/#!/Login";
  
			
		}
	});
	
	
};

vm.signUp = function(){
	var password=vm.password;
var email = vm.email;

/*
 firebase.auth().createUserWithEmailAndPassword(email, password).then(function(firebaseUser) {
     
	 alert("SignUp Successfull");
	  window.location = "http://localhost:8800/#!/Login";
 })
  .catch(function(error) {
      alert("Signup Failed");
	  window.location = "http://localhost:8800/#!/Login";
  });
	
	*/


var body = {userFirstName:vm.fname,userLastName:vm.lname,email:vm.email,password:vm.password,contactNo:vm.cnumber,DOB:vm.dob,address:vm.address};
		
	$http.post('/api/Signup',body).then(function(response){
		vm.login = response.data;
		if(vm.login!=null){
			alert("Successfully Signup");
		window.location = "http://localhost:8800/#!/Login";
		}else
		{
			
			alert("SignUp Failed");
	  window.location = "http://localhost:8800/#!/Login";
  
			
		}
	});
		


	
}
	
}