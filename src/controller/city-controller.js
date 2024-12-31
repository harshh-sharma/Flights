const { StatusCodes } = require('http-status-codes');
const {CityService} = require('../service');
const {SuccessResponse, ErrorResponse} = require("../utils/common");

/**
 * POST : /cities
 * req.body {name : bangalore}
 */


async function createCity(req,res){
    try {
        const {name} = req.body;
        const city = await CityService.createCity({name});
        
        SuccessResponse.message = 'Successfully created city';
        SuccessResponse.data = city;

        return res.status(StatusCodes.OK).json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
       return res.status(error.statusCode)
                  .json(ErrorResponse);
    }
}

async function getAllCity(req,res){
    try {
        const cities = await CityService.getAllCity();
        SuccessResponse.data = cities;
        SuccessResponse.message = 'Successfully fetched all cities name'
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
       ErrorResponse.error = error;
       return res.status(error.statusCode).json(ErrorResponse); 
    }
}

async function getCity(req,res){
    try {
        const {id} = req.params;
        const city = await CityService.getCity(id);
        SuccessResponse.data = city;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function deleteCity(req,res){
    try {
        const {id} = req.params;
        const city = await CityService.deleteCity(id);
        SuccessResponse.data = city;
        SuccessResponse.message = "Successfully deleted city"
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        console.log(error);
        
       ErrorResponse.error = error
       return res.status(error.statusCode).json(ErrorResponse); 
    }
}

async function updateCity(req,res){
    try {
        const {name} = req.body;
        const {id} = req.params;
        const updatedCity = await CityService.updateCity(id,{name});
        SuccessResponse.data = updatedCity;
        SuccessResponse.message = "Successfully updated city name"
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
       return res.status(error.statusCode).json(ErrorResponse); 
    }
}

module.exports = {
    createCity,
    getAllCity,
    getCity,
    deleteCity,
    updateCity
}