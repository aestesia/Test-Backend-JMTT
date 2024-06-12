const express = require('express');
const EmployeeProfileController = require('../controller/employeeProfile');
const router = express.Router();

//Read Employee Profile Data
router.get('/', EmployeeProfileController.getAllEmployeeProfile);
router.get('/:employeeProfileId', EmployeeProfileController.getEmployeeProfile);

//Create Employee Profile
router.post('/', EmployeeProfileController.createNewEmployeeProfile);

//Update Employee Profile
router.patch('/:employeeProfileId', EmployeeProfileController.updateEmployeeProfile);

//Delete Employee Profile
router.delete('/:employeeProfileId', EmployeeProfileController.deleteEmployeeProfile);

module.exports = router;
