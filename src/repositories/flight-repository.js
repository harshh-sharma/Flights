const {Sequelize} = require("sequelize");

const CrudRepository = require("./crud-repository");
const { Flight } = require("../models");

const db = require("../models");
const { addRowLock } = require("./queries");
 
class FlightRepository extends CrudRepository{
    constructor(){
        super(Flight);
    }

   async updateRemainingSeats(flightId,seats,dec = 1){
    await db.sequelize.query(addRowLock(flightId));
    const flight = await Flight.findByPk(flightId);
        if(parseInt(dec)){
            const response = await flight.decrement('totalSeats',{by:seats});
            return response;
        }else{
            const response = await flight.increment('totalSeats',{by:seats});
            return response;
        }
    }
}

module.exports = FlightRepository;