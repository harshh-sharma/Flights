const express = require("express");
const { AirplaneController } = require("../../controller");
const { AirplaneMiddlewares } = require("../../middlewares");

const airplaneRouter = express.Router();

airplaneRouter
  .route("/")
  .post(
    AirplaneMiddlewares.validateCreateRequest,
    AirplaneController.createAirplane
  )
  .get(AirplaneController.getAllAirplanes);

  airplaneRouter.route("/:id").get(AirplaneMiddlewares.validateRequest,AirplaneController.getAirplane)
                              .delete(AirplaneMiddlewares.validateRequest,AirplaneController.deleteAirplane);

module.exports = airplaneRouter;
