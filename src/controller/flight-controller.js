const { ErrorResponse, SuccessResponse } = require("../utils/common");
const {FlightService} = require("../service");
const { StatusCodes } = require("http-status-codes");

async function createFlight(req,res){
    try {
        const {flightNumber,airplaneId,departureAirportId,arrivalAirportId,arrivalTime,departureTime,price,boardingGate,totalSeats} = req.body;
        const flight = await FlightService.createFlight({flightNumber,airplaneId,departureAirportId,arrivalAirportId,arrivalTime,departureTime,price,boardingGate,totalSeats});
        SuccessResponse.message = 'Successfully created flight';
        SuccessResponse.data = flight
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getFlight(req,res){
    try {
        const {id} = req.params;
        const flight = await FlightService.getFlight(id);
        SuccessResponse.data = flight;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getAllFlights(req,res){
    try {
        const flights = await FlightService.getAllFlight();
        SuccessResponse.data = flights;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
       ErrorResponse.error = error;
       return res.status(error.statusCode).json(ErrorResponse); 
    }
}

async function updateSeats(req,res){
   try {
     const {id} = req.params;
     const {seats,dec} = req.body;
 
     const flight = await FlightService.updateSeats({id,seats,dec});
     
     SuccessResponse.data = flight;
     return res.status(StatusCodes.OK).json(SuccessResponse);
   } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
   }
}

module.exports = {
    createFlight,
    getFlight,
    getAllFlights,
    updateSeats
}