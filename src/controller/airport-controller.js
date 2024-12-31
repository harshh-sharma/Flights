const { StatusCodes } = require('http-status-codes');
const {AirportService} = require('../service');
const {SuccessResponse, ErrorResponse} = require("../utils/common");

/**
 * POST : /airplanes
 * req.body {modelNumber : 'airbus320' capacity:200}
 */


async function createAirport(req,res){
    try {
        const {name,code,address,cityId} = req.body;
        console.log("controller",name,code);
        
        const airport = await AirportService.createAirport({name,address,code,cityId});
        
        SuccessResponse.message = 'Successfully created Airport';
        SuccessResponse.data = airport;

        return res.status(StatusCodes.OK).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
       return res.status(error.statusCode)
                  .json(ErrorResponse);
    }
}

async function getAllAirport(req,res){
    try {
        const airports = await AirportService.getAllAirport();
        SuccessResponse.data = airports;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
       ErrorResponse.error = error;
       return res.status(error.statusCode).json(ErrorResponse); 
    }
}

async function getAirport(req,res){
    try {
        const {id} = req.params;
        const airport = await AirportService.getAirport(id);
        SuccessResponse.data = airport;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function deleteAirport(req,res){
    try {
        const {id} = req.params;
        const airport = await AirportService.deleteAirport(id);
        SuccessResponse.data = airport;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        console.log(error);
        
       ErrorResponse.error = error
       return res.status(error.statusCode).json(ErrorResponse); 
    }
}

async function updateAirport(req,res){
    try {
        const {name,code,cityId,address} = req.body;
        const {id} = req.params;
        const response = await AirportService.updateAirport(id,{name,code,address,cityId});
        SuccessResponse.data = response;
        SuccessResponse.message = 'Successfully updated Airport'
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
       return res.status(error.statusCode).json(ErrorResponse); 
    }
}

module.exports = {
    createAirport,
    getAllAirport,
    getAirport,
    deleteAirport,
    updateAirport
}