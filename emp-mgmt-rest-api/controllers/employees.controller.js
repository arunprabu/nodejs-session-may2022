const { validationResult } = require('express-validator');
const Employee = require('../models/employee');

// List all employees 
exports.getEmployees = (req, res) => {
  console.log(req);
  Employee.find( {}, (err, data) => {
    if(!err){
      console.log(data);
      res.send(data);
    }else{
      console.log(err);
      res.send(err);
    }
  });
}

// Create 
exports.createEmployee = (req, res) => {
  console.log(req.body); // 1. read the req 
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  // 2. exec query 
  const employeeDao = new Employee(req.body);
  employeeDao.save( (err, data) => { // 3. get the data/status from db
    // 4. send the data/status back to rest api client 
    if(!err){
      console.log(data);
      res.send(data);
    }else{
      console.log(err);
      res.send(err);
    }
  });
}

// Fetch one employee 
exports.getEmployeeById = (req, res) => {
  console.log(req.params.id);

  Employee.findOne({_id: req.params.id}, (err, data) => {
    if(!err){
      console.log(data);
      // res.clearCookie('zip');  // to clear cookies
      // creating cookie
      res.cookie('zip', '600001', {maxAge: 360000}).send(data);
    }else{
      console.log(err);
      res.send(err);
    }
  });
}

// update employee 
exports.updateEmployee = (req, res) => {
  console.log(req.body);
  console.log(req.params.id);

  Employee.updateOne({_id: req.params.id}, req.body, (err, data) => {
    if(!err){
      console.log(data);
      if(data.acknowledged && data.modifiedCount == 1){
        res.send({status: 'Updated Successfully!' });
      }
    }else{
      console.log(err);
      res.send(err);
    }
  });
}

// TODO: delete 