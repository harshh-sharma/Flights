const { StatusCodes } = require('http-status-codes');
const {CityRepository} = require('../repositories');
const {AppError} = require("../utils/errors");

const cityRepository = new CityRepository();

async function createCity(data){
    try {
        console.log(data);
        
        const response = await cityRepository.create(data);
        return response;
    } catch (error) {
        console.log(error);
        
        if(error?.name == 'SequelizeValidationError' || error?.name == 'SequelizeUniqueConstraintError'){
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message)
            })
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Cannot create a new city object",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getCity(data){
  try {
      const airplane = await cityRepository.get(data);
      return airplane;
  } catch (error) {
    if(error.statusCode == StatusCodes.NOT_FOUND){
        throw new AppError('The city you are requested is not present',error.statusCode);
    }
    throw error;
  }
}

async function getAllCity(){
    try {
        const cities = await cityRepository.getAll();
        return cities;
    } catch (error) {
        throw error;
    }
}

async function deleteCity(data){
    try {
        const response = await cityRepository.destroy(data);
        return response;
    } catch (error) {
        throw error;
    }
}

async function updateCity(id,data){
    try {
        const response = await cityRepository.update(id,data);
        console.log("updatedCity",response);
        
        return response;
    } catch (error) {
        console.log("errorService",error);
        
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The city is found related to this id',error.statusCode);
        }
        throw  error;
    }
}

module.exports = {
    createCity,
    getCity,
    getAllCity,
    deleteCity,
    updateCity
}