var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  // rendering the template
  res.render('index', { title: 'Employee Management App API!' });// template file, data
});

module.exports = router;
