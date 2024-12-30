const { StatusCodes } = require('http-status-codes');
const {AirplaneService} = require('../service');
const {SuccessResponse, ErrorResponse} = require("../utils/common");

/**
 * POST : /airplanes
 * req.body {modelNumber : 'airbus320' capacity:200}
 */


async function createAirplane(req,res,next){
    try {
        const {modelNumber , capacity} = req.body;
        const airplane = await AirplaneService.createAirplane({modelNumber,capacity});
        
        SuccessResponse.message = 'Successfully created Airplane';
        SuccessResponse.data = airplane;

        return res.status(StatusCodes.OK).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
       return res.status(error.statusCode)
                  .json(ErrorResponse);
    }
}

async function getAllAirplanes(req,res){
    try {
        const airplanes = await AirplaneService.getAllAirplane();
        SuccessResponse.data = airplanes;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
       ErrorResponse.error = error;
       return res.status(error.statusCode).json(ErrorResponse); 
    }
}

async function getAirplane(req,res){
    try {
        const {id} = req.params;
        const airplane = await AirplaneService.getAirplane(id);
        SuccessResponse.data = airplane;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function deleteAirplane(req,res){
    try {
        const {id} = req.params;
        const airplane = await AirplaneService.deleteAirplane(id);
        console.log(airplane);
        
        SuccessResponse.data = airplane;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        console.log(error);
        
       ErrorResponse.error = error
       return res.status(error.statusCode).json(ErrorResponse); 
    }
}

module.exports = {
    createAirplane,
    getAllAirplanes,
    getAirplane,
    deleteAirplane
}