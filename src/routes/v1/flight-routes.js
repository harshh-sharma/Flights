const express = require("express");
const { FlightController } = require("../../controller");
const { FlightMiddlewares } = require("../../middlewares");

const flightRouter = express.Router();

flightRouter
  .route("/")
  .post(
    FlightMiddlewares.validateCreateRequest,
    FlightController.createFlight
  )
  .get(FlightController.getAllFlights);

flightRouter.route("/:id").get(FlightController.getFlight)
                          .patch(FlightMiddlewares.updateRequestValidate,FlightController.updateSeats);

module.exports = flightRouter;
