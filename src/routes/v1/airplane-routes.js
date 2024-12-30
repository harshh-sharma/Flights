const express = require("express");
const { AirplaneController } = require("../../controller");
const {AirplaneMiddlewares} = require("../../middlewares");

const airplaneRouter = express.Router();

airplaneRouter.route('/').post(
                    AirplaneMiddlewares.validateCreateRequest,
                    AirplaneController.createAirplane
);

module.exports = airplaneRouter;