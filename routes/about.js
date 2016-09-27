var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('about', { 
    check: 'About', 
    title: 'My About Page', 
    list: ['Eggs & Toast', 'Avocado', 'Wine', 'Steak', 'Eggplant Parm']
    });
});

module.exports = router;