var express = require('express');
var router = express.Router();

/* GET employees listing. */
router.get('/', (req, res, next) => {
  res.json([
    { id: 1, name: 'Steve', phone: 234234, email: 's@t.com'},
    { id: 2, name: 'John', phone: 4567456, email: 'j@k.com'},
    { id: 3, name: 'Williams', phone: 4564554, email: 'w@x.com'}
  ]);
});

/* POST - create employee */
router.post('/', (req, res, next) => {
  res.json({
    id: 4, name: 'xyz', phone: 000000, email: 'x@y.com'
  });
});


module.exports = router;
