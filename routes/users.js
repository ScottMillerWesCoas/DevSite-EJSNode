var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('users', { 
    check: 'People I know', 
    title: 'My intimidating social network', 
    list: ['McKenna', 'Dash', 'People I Work With', 'Others']
    });
});

module.exports = router;