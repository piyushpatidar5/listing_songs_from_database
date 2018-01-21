var express = require('express');
var router = express.Router();
var controllers = require('../controllers/songs.controller.js');

router
.route('/songs')
.get(controllers.getAllSongsDetails)
.post(controllers.postAllSongsDetails);


router
.route('/songs/:songsId')
.get(controllers.getOneSongsDetails);

router
.route('/songs/new')
.post(controllers.setOneSongsDetails);

router
.route('/Signup')
.post(controllers.insertSignupDetails);

router
.route('/LoginAuthenticate')
.post(controllers.LoginAuthentication);


router
.route('/songs/EditLink')
.post(controllers.UpdateYoutubeLink);



module.exports = router;


