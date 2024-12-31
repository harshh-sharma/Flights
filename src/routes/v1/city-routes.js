const express = require("express");
const { CityController } = require("../../controller");
const { CityMiddlewares } = require("../../middlewares");

const cityRouter = express.Router();

cityRouter
  .route("/")
  .post(
    CityMiddlewares.validateCreateRequest,
    CityController.createCity
  )
  .get(CityController.getAllCity);

  cityRouter.route("/:id").get(CityController.getCity)
                              .delete(CityController.deleteCity)
                              .patch(CityMiddlewares.validateCreateRequest,CityController.updateCity);

module.exports = cityRouter;
