const { StatusCodes } = require('http-status-codes');
const {AirplaneRepository} = require('../repositories');
const {AppError} = require("../utils/errors");

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
    try {
        const response = await airplaneRepository.create(data);
        return response;
    } catch (error) {
        if(error?.name == 'SequelizeValidationError'){
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message)
            })
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Cannot create a new Airplane object",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplane(data){
  try {
      const response = await airplaneRepository.get(data);
      return response;
  } catch (error) {
    throw error;
  }
}

async function getAllAirplane(){
    try {
        const response = await airplaneRepository.getAll();
        return response;
    } catch (error) {
        throw error;
    }
}

async function deleteAirplane(data){
    try {
        const response = await airplaneRepository.destroy(data);
        return response;
    } catch (error) {
        throw error;
    }
}

async function updateAirplane(id,data){
    try {
        const response = await airplaneRepository.update(id,data);
        return response;
    } catch (error) {
        throw  error;
    }
}

module.exports = {
    createAirplane,
    getAirplane,
    getAllAirplane,
    deleteAirplane,
    updateAirplane
}