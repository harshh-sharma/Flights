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

module.exports = {
    createFlight
}