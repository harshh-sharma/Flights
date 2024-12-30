const { StatusCodes } = require('http-status-codes');
const {AirplaneService} = require('../service');
const {SuccessResponse} = require("../utils/common");

/**
 * POST : /airplanes
 * req.body {modelNumber : 'airbus320' capacity:200}
 */


async function createAirplane(req,res,next){
    try {
        const {modelNumber , capacity} = req.body;
        const airplane = await AirplaneService.createAirplane({modelNumber,capacity});
        
        SuccessResponse.message = 'Successfully created Airplane';
        SuccessResponse.data = airplane;

        return res.status(StatusCodes.OK).json(SuccessResponse)
    } catch (error) {
       return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                  .json({
                    success:false,
                    message:"Something went wrong !!",
                    data:{},
                    error : error
                  })
    }
}

module.exports = {
    createAirplane
}