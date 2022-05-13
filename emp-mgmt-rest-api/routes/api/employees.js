var express = require('express');
const { body } = require('express-validator');
const { getEmployees, createEmployee, getEmployeeById, updateEmployee } = require('../../controllers/employees.controller');
var router = express.Router();

/* GET employees listing. */
router.get('/', getEmployees);

/* POST - create employee */
router.post('/', 
  body('email').isEmail(), 
  body('phone').isLength({ min: 10 }),  
  createEmployee);

/* GET - to fetch employee details */
/* Let's handle URL Param - id is the URL param*/
router.get('/:id', getEmployeeById);

// PUT - to update employee */
// We have to get both url params and req body 
router.put('/:id', updateEmployee);

// TODO: DELETE - to delete employee 
// we have to get url param 

module.exports = router;
