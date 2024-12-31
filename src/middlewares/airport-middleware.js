const { StatusCodes } = require("http-status-codes");
const {ErrorResponse} = require("../utils/common");

function validateCreateRequest(req,res,next){
    const {name,code,cityId} = req.body;
    console.log(name,code,cityId);
    
    if(!name || !code || !cityId){
        ErrorResponse.message = 'Something went wrong' ;
        ErrorResponse.error = {
            explanation:'name,code and cityId is not found in the incomimg request'
        }
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }

    next();
}

module.exports = {
    validateCreateRequest,
};