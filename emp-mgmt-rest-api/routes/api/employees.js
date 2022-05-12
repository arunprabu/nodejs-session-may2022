var express = require('express');
var router = express.Router();

/* GET employees listing. */
router.get('/', (req, res, next) => {
  res.status(200);
  res.json([
    { id: 1, name: 'Steve', phone: 234234, email: 's@t.com'},
    { id: 2, name: 'John', phone: 4567456, email: 'j@k.com'},
    { id: 3, name: 'Williams', phone: 4564554, email: 'w@x.com'}
  ]);
});

/* POST - create employee */
router.post('/', (req, res, next) => {
  // receive the req body
  console.log(req.body);
  res.status(201);
  res.json({
    id: 4, ...req.body
  });
});

/* GET - to fetch employee details */
/* Let's handle URL Param - id is the URL param*/
router.get('/:id', (req, res, next) => {
  console.log(req.params); // find id propery from req.params obj
  res.status(200);
  res.json({ 
    id: req.params.id, 
    name: 'Steve', 
    phone: 234234, 
    email: 's@t.com'
  });
});

// PUT - to update employee */
// We have to get both url params and req body 
router.put('/:id', (req, res, next) => {
  console.log(req.params); // find id propery from req.params obj
  console.log(req.body);
  res.status(201);
  res.json({ 
    id: req.params.id ,
    ...req.body
  });
});

// TODO: DELETE - to delete employee 
// we have to get url param 

module.exports = router;
