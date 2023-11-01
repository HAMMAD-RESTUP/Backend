
const express = require('express');
const CourseController = require('../controllers/coursecontroller');
const route  = express.Router();




  
  route.get("/", CourseController.get ) 
  route.get("/:id" , CourseController.getbyid)
  


module.exports = route;