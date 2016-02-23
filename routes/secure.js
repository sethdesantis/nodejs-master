var express = require('express');
var auth = require('./auth.js');
var path = require('path');
var router = express.Router();

router.use(function(req,res,next){
  console.log('check for token valid? ' +auth.hasValidSession(req) );

	next(); //Bypass for local development
/*
  if (auth.hasValidSession(req)) {
      next();
  } else {
    next(res.sendStatus(403).send('Forbidden'));
  }
  */
});

/* GET Secure resource */
router.get('/', function(req, res, next) {
  //console.log('Accessing the secure section ...'+path.join(__dirname + '/secure.html'))
  res.sendFile(path.join(__dirname + '/../public/secure.html'));
});


module.exports = router;
