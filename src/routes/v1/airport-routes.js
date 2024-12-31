const express = require("express");
const { AirportController } = require("../../controller");
const { AirportMiddlewares } = require("../../middlewares");

const airportRouter = express.Router();

airportRouter
  .route("/")
  .post(
    AirportMiddlewares.validateCreateRequest,
    AirportController.createAirport
  )
  .get(AirportController.getAllAirport);

  airportRouter.route("/:id").get(AirportController.getAirport)
                              .delete(AirportController.deleteAirport)
                              .patch(AirportController.updateAirport);

module.exports = airportRouter;
