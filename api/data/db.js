var mongoose = require('mongoose');
var dburl= 'mongodb://localhost:27017/songsDetails';


mongoose.connect(dburl);

mongoose.connection.on('connected', function(){
	console.log("Mongoose connected to "+dburl);
});
mongoose.connection.on('disconnected', function(){
	console.log("Mongoose disconnected");
});
mongoose.connection.on('erro', function(err){
	console.log("Mongoose connection error"+err);
});
process.on('SIGINT', function(){
	mongoose.connection.close(function(){
		console.log('mongoose disconnected through app termination (SIGINT).');
		procees.exit(0);
	});
});
process.on('SIGTERM', function(){
	mongoose.connection.close(function(){
		console.log('mongoose disconnected through app termination (SIGTERM).');
		procees.exit(0);
	});
});
process.once('SIGUSR2', function(){
	mongoose.connection.close(function(){
		console.log('mongoose disconnected through app termination (SIGUSR2).');
		procees.kill(procees.pid, 'SIGUSR2');
	});
});