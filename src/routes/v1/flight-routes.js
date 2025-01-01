const express = require("express");
const { FlightController } = require("../../controller");
const { FlightMiddlewares } = require("../../middlewares");

const flightRouter = express.Router();

flightRouter
  .route("/")
  .post(
    FlightMiddlewares.validateCreateRequest,
    FlightController.createFlight
  );

module.exports = flightRouter;
