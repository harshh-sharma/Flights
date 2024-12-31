const { StatusCodes } = require("http-status-codes");
const {ErrorResponse} = require("../utils/common");

function validateCreateRequest(req,res,next){
    if(!req.body?.name){
        ErrorResponse.message = 'Something went wrong' ;
        ErrorResponse.error = {
            explanation:'city name is not found in the incomimg request'
        }
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    next();
}

module.exports = {
    validateCreateRequest,
};