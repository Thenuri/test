var express = require('express');
var router = express.Router();

// hopefuly there will be a merge conflict

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
