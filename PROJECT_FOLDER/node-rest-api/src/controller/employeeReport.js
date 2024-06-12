const EmployeeDataModel = require('../models/employeeReport')

const getEmployeeReport = async (req, res) => {
    try{
        const [data] = await EmployeeDataModel.getEmployeeReport();

        res.json({
            message: 'Employee Report Success',
            data: data
        });    
    } catch(error){
        res.status(500).json({
            serverMessage: error
        });
    }
}

const getEmployeeData = async (req, res) => {
    const {employeeId} = req.params
    try{
        const [data] = await EmployeeDataModel.getEmployeeData(employeeId);

        res.json({
            message: 'Get Employee Success',
            data: data
        });    
    } catch(error){
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        });
    }
}



module.exports = {
    getEmployeeReport,
    getEmployeeData
}