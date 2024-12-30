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

  airplaneRouter.route("/:id").get(AirplaneController.getAirplane)
                              .delete(AirplaneController.deleteAirplane)
                              .patch(AirplaneController.updateAirplane);

module.exports = airplaneRouter;
