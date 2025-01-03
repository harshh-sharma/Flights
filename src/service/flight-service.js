const { StatusCodes } = require('http-status-codes');
const { FlightRepository } = require('../repositories');
const {AppError} = require("../utils/errors");
const { ErrorResponse } = require('../utils/common');

const flightRepository = new FlightRepository();

async function createFlight(data){
    try {
        const flight = await flightRepository.create(data);
        return flight;
    } catch (error) {
        console.log(error);
        
        if(error?.name == 'SequelizeValidationError' || error?.name == 'SequelizeUniqueConstraintError'){
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message)
            })
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Cannot create a new airport object",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllFlight(){
    try {
        const flights = await flightRepository.getAll();
        return flights;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The airplane you are requested is not present',error.statusCode);
        }
    }
}

async function getFlight(id){
    try {
        const flight = await flightRepository.get(id);
        return flight;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The flight you are requested is not present',error.statusCode);
        }
    }
}

async function updateSeats(data){
    try {
        const flight = await flightRepository.updateRemainingSeats(data.id,data.seats,data.dec);
        return flight;
    } catch (error) {
        console.log(error);
        
        throw new AppError('cannot update data of the flight',StatusCodes.BAD_REQUEST)
    }
}


module.exports = {
    createFlight,
    getFlight,
    getAllFlight,
    updateSeats
}