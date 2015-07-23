var express = require('express');
var router = express.Router();
//var title = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: ['Is My Baby Still Breathing?'], value: 'Check'});
});

/* Mobile Safari Tries to redirect to /app? */
router.get('/app', function(req, res, next) {
  res.render('index', { title: ['Is My Baby Still Breathing?'], value: 'Check'});
});

/*I have no idea what I'm doing */
router.post('/', function(req, res, next) {
    
  var randomnumber=Math.floor(Math.random()*4);

  if (randomnumber==1) { res.render('index', { title: ['No, they\'re not.' ,  'Wait...',  'Yes, they are.'], value: 'Check again'}); }

  else {res.render('index', { title: ['Yes, they are.'] , value: 'Check again' });}
});

module.exports = router;
