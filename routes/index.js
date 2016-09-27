var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    check: 'My Developer Site!', 
    title: 'What I Work With', 
    list: ['Javascript', 'Node', 'Express', 'React', 'Three.js', 'HTML5', 'CSS']
    });
});

module.exports = router;
