const {AirplaneRepository} = require('../repositories');

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
    try {
        const response = await airplaneRepository.create(data);
        return response;
    } catch (error) {
        throw error;
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