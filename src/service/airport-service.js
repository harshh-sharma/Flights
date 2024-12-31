const { StatusCodes } = require('http-status-codes');
const { AirportRepository } = require('../repositories');
const {AppError} = require("../utils/errors");

const airportRepository = new AirportRepository();

async function createAirport(data){
    try {
        const airport = await airportRepository.create(data);
        return airport;
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

async function getAirport(data){
  try {
      const airport = await airportRepository.get(data);
      return airport;
  } catch (error) {
    if(error.statusCode == StatusCodes.NOT_FOUND){
        throw new AppError('The airport you are requested is not present',error.statusCode);
    }
    throw error;
  }
}

async function getAllAirport(){
    try {
        const airports = await airportRepository.getAll();
        return airports;
    } catch (error) {
        throw error;
    }
}

async function deleteAirport(data){
    try {
        const response = await airportRepository.destroy(data);
        return response;
    } catch (error) {
        throw error;
    }
}

async function updateAirport(id,data){
    try {
        const response = await airportRepository.update(id,data);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The Airplane is found related to this id',error.statusCode);
        }
        throw  error;
    }
}

module.exports = {
    createAirport,
    getAirport,
    getAllAirport,
    deleteAirport,
    updateAirport
}