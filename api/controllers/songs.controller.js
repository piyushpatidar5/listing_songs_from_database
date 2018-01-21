var dbconn =  require("../data/dbConnection.js");
var songs_data = require('../data/songs-data.json');
var ObjectId = require('mongodb').ObjectID;

var youtubeStream = require('youtube-audio-stream');



module.exports.getAllSongsDetails = function(req,res){
	
	var db = dbconn.get();
	var collection = db.collection('songsList');
	//var docs = collection.find();
	
	
	//console.log(db);
	
	console.log("listing details of all the songs through GET method");
	//console.log(req.query);
	
	var offset = 0;
	var count = songs_data.length;
	
	if(req.query && req.query.offset){
		offset = parseInt(req.query.offset);
	}

	if(req.query && req.query.count){
		count = parseInt(req.query.count);
	}	
	
	collection
	.find()
	.skip(offset)
	.limit(count)
	.toArray(function(err, docs){
		
		//console.log("found Songs", docs);
		res
		.status(200)
		.json(docs);
		
	});
	
};

module.exports.postAllSongsDetails = function(req,res){
	
	console.log("listing details of all the songs through POST method");
	res
	.status(200)
	.json({"Data":"SongsList in Json Format POST"});
	
};



	
module.exports.getOneSongsDetails = function(req,res){
	var songsId = req.params.songsId;
	var db = dbconn.get();
	var collection = db.collection('songsList');
	
	
	
	collection
	.findOne({
		_id : ObjectId(songsId)
	},function(err, docs){
		
		var getAudio = function (req, res) {
  var requestUrl = 'http://youtube.com/watch?v=' + docs.youtube_id;
  try {
    youtubeStream(requestUrl).pipe(res);
	console.log(res);
  } catch (exception) {
    res.status(500).send(exception)
  }
}
		
		
		
	res
		.status(200)
		.json(docs);
		
	
	});
	
	//console.log("listing details of a single song through GET method");
	
};


module.exports.postOneSongsDetails = function(req,res){
	var songsId = req.params.songsId;
	var thisSong = songs_data[songsId];
	
	console.log("listing details of a single song through POST method");
	res
	.status(200)
	.json(thisSong);
	
};



module.exports.setOneSongsDetails = function(req,res){
	var db = dbconn.get();
	var collection = db.collection("songsList");
	
	console.log("POST new song");
	
	
	collection.insertOne(req.body,function(err,response){
		
	console.log(response.ops);
	
		
		res
		.status(200)
		.json(response);
	});
	
};



module.exports.insertSignupDetails = function(req,res){
	var db = dbconn.get();
	var collection = db.collection("UserLoginDetails");
	
	collection.insertOne(req.body,function(err,response){
		
		if(err){
			//alert("Singup failed");
		}else{		
		//alert("Singup Successfull");
		res
		.status(200)
		.json(response);
		}
	});
	
	
	
};




module.exports.LoginAuthentication = function(req,res){
	var db = dbconn.get();
	var collection = db.collection('UserLoginDetails');
	
	collection
	.findOne({
		email : req.body.email,
		password: req.body.password
	},function(err, docs){
	res
		.status(200)
		.json(docs);
		
	
	});
	
	//console.log("listing details of a single song through GET method");
	
};



